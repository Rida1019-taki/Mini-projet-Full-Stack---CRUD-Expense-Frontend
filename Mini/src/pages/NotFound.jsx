import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page not-found">
            <div className="not-found-card">
                <span className="not-found-code">404</span>
                <h1>Page introuvable</h1>
                <p>
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        ← Retour au Dashboard
                    </Link>
                    <Link to="/expenses" className="btn btn-secondary">
                        Voir les dépenses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
