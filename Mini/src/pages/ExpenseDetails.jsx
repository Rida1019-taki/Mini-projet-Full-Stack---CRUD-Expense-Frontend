import { Link } from "react-router-dom";

function ExpenseDetails() {
    return (
        <div className="page">
            <div className="page-header">
                <div>
                    <h1>Expense Details</h1>
                </div>

                <Link to="/expenses" className="btn btn-secondary">
                    ← Retour aux dépenses
                </Link>
            </div>
        </div>
    );
}

export default ExpenseDetails;
