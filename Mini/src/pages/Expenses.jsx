import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ExpenseTable from "../components/ExpenseTable";
import ExpenseCard from "../components/ExpenseCard";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import ErrorMessage from "../components/ErrorMessage";

import {
    getExpenses,
    deleteExpense
} from "../services/expenseService";

function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadExpenses = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await getExpenses();

            setExpenses(response.data);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Impossible de charger les dépenses."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadExpenses();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Voulez-vous vraiment supprimer cette dépense ?"
        );

        if (!confirmed) return;

        try {
            setError("");
            setSuccess("");

            await deleteExpense(id);

            setExpenses((current) =>
                current.filter((expense) => expense.id !== id)
            );

            setSuccess("Dépense supprimée avec succès.");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Impossible de supprimer la dépense."
            );
        }
    };

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Dépenses</h1>
                    <p>Gérez toutes vos dépenses.</p>
                </div>

                <Link
                    to="/expenses/new"
                    className="btn btn-primary"
                >
                    + Ajouter une dépense
                </Link>
            </div>

            {success && (
                <div className="success-message">
                    {success}
                </div>
            )}

            <ErrorMessage message={error} />

            {loading ? (
                <Loading />
            ) : expenses.length === 0 ? (
                <EmptyState />
            ) : (
                <>
                    <div className="desktop-table">
                        <ExpenseTable
                            expenses={expenses}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="mobile-cards">
                        {expenses.map((expense) => (
                            <ExpenseCard
                                key={expense.id}
                                expense={expense}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Expenses;