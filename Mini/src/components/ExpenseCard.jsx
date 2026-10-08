import { Link } from "react-router-dom";

function ExpenseCard({ expense, onDelete }) {
    return (
        <div className="expense-card">
            <div className="expense-card-header">
                <h3>{expense.titre}</h3>

                <strong>
                    {Number(expense.montant).toFixed(2)} MAD
                </strong>
            </div>

            <p className="description">
                {expense.description || "Aucune description"}
            </p>

            <div className="expense-info">
                <span>
                    <strong>Catégorie :</strong>{" "}
                    {expense.categorie}
                </span>

                <span>
                    <strong>Date :</strong>{" "}
                    {expense.dateDepense}
                </span>

                <span>
                    <strong>Paiement :</strong>{" "}
                    {expense.modePaiement}
                </span>
            </div>

            <div className="actions">
                <Link
                    to={`/expenses/${expense.id}`}
                    className="btn btn-secondary"
                >
                    Voir
                </Link>

                <Link
                    to={`/expenses/${expense.id}/edit`}
                    className="btn btn-warning"
                >
                    Modifier
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(expense.id)}
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default ExpenseCard;