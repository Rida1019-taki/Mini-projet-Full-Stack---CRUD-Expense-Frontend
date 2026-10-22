
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getExpenseById } from "../services/expenseService";
import Loading from "../components/Loading";

function ExpenseDetails() {
    const { id } = useParams();

    const [expense, setExpense] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchExpense = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getExpenseById(id);
                setExpense(response.data);
            } catch (err) {
                setError("Impossible de charger les détails de la dépense.");
            } finally {
                setLoading(false);
            }
        };

        fetchExpense();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="page">
                <p>{error}</p>
                <Link to="/expenses" className="btn btn-secondary">
                    ← Retour aux dépenses
                </Link>
            </div>
        );
    }

    if (!expense) {
        return (
            <div className="page">
                <p>Dépense introuvable.</p>
                <Link to="/expenses" className="btn btn-secondary">
                    ← Retour aux dépenses
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Détails de la dépense</h1>
                    <p>Informations complètes sur la dépense.</p>
                </div>

                <Link to="/expenses" className="btn btn-secondary">
                    ← Retour aux dépenses
                </Link>
            </div>

            <div className="expense-details">
                <h2>{expense.titre}</h2>

                <p>
                    <strong>ID :</strong> {expense.id}
                </p>

                <p>
                    <strong>Description :</strong>{" "}
                    {expense.description || "Aucune description"}
                </p>

                <p>
                    <strong>Montant :</strong>{" "}
                    {Number(expense.montant || 0).toFixed(2)} MAD
                </p>

                <p>
                    <strong>Catégorie :</strong> {expense.categorie}
                </p>

                <p>
                    <strong>Date de dépense :</strong> {expense.dateDepense}
                </p>

                <p>
                    <strong>Mode de paiement :</strong>{" "}
                    {expense.modePaiement}
                </p>
            </div>
        </div>
    );
}

export default ExpenseDetails;
