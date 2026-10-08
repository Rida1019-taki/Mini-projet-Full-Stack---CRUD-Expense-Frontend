import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { getExpenses } from "../services/expenseService";

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadExpenses = async () => {
            try {
                const response = await getExpenses();
                setExpenses(response.data);
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Impossible de charger le dashboard."
                );
            } finally {
                setLoading(false);
            }
        };

        loadExpenses();
    }, []);

    if (loading) {
        return (
            <div className="page">
                <Loading />
            </div>
        );
    }

    const total = expenses.reduce(
        (sum, expense) =>
            sum + Number(expense.montant || 0),
        0
    );

    const average =
        expenses.length > 0
            ? total / expenses.length
            : 0;

    const lastExpense = expenses.length > 0
        ? expenses[expenses.length - 1]
        : null;

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Résumé de vos dépenses.</p>
                </div>

                <Link
                    to="/expenses/new"
                    className="btn btn-primary"
                >
                    + Nouvelle dépense
                </Link>
            </div>

            <ErrorMessage message={error} />

            <div className="stats-grid">
                <div className="stat-card">
                    <span>Total dépenses</span>
                    <strong>
                        {total.toFixed(2)} MAD
                    </strong>
                </div>

                <div className="stat-card">
                    <span>Nombre de dépenses</span>
                    <strong>{expenses.length}</strong>
                </div>

                <div className="stat-card">
                    <span>Moyenne</span>
                    <strong>
                        {average.toFixed(2)} MAD
                    </strong>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Dernière dépense</h2>

                {lastExpense ? (
                    <div className="last-expense">
                        <div>
                            <h3>{lastExpense.titre}</h3>

                            <p>
                                {lastExpense.categorie} ·{" "}
                                {lastExpense.dateDepense}
                            </p>
                        </div>

                        <strong>
                            {Number(lastExpense.montant).toFixed(2)} MAD
                        </strong>
                    </div>
                ) : (
                    <p>
                        Aucune dépense enregistrée.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;