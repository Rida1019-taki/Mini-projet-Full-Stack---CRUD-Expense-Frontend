import { Link } from "react-router-dom";

function ExpenseTable({ expenses, onDelete }) {
    return (
        <div className="table-container">
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Montant</th>
                        <th>Catégorie</th>
                        <th>Date</th>
                        <th>Paiement</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.titre}</td>

                            <td>
                                <strong>
                                    {Number(expense.montant).toFixed(2)} MAD
                                </strong>
                            </td>

                            <td>{expense.categorie}</td>

                            <td>{expense.dateDepense}</td>

                            <td>{expense.modePaiement}</td>

                            <td>
                                <div className="table-actions">
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
                                        onClick={() =>
                                            onDelete(expense.id)
                                        }
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;