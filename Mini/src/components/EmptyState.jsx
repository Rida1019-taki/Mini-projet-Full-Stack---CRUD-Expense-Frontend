import { Link } from "react-router-dom";

function EmptyState() {
    return (
        <div className="empty-state">
            <h3>Aucune dépense trouvée</h3>

            <p>
                Vous n'avez pas encore enregistré de dépense.
            </p>

            <Link to="/expenses/new" className="btn btn-primary">
                Ajouter une dépense
            </Link>
        </div>
    );
}

export default EmptyState;