
import { useState, useEffect } from "react";
import { CalculerMontantTotal } from "../services/expenseService";

function ExpenseMontantTotal() {
    const [montantTotal, setMontantTotal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMontantTotal = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await CalculerMontantTotal();

                console.log("Réponse API :", response.data);

                setMontantTotal(response.data);
            } catch (err) {
                console.error(err);
                setError("Erreur lors du chargement du montant total.");
            } finally {
                setLoading(false);
            }
        };

        fetchMontantTotal();
    }, []);

    return (
        <div>
            <h2>Montant Total des Dépenses</h2>

            {loading && <p>Chargement...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && montantTotal !== null && (
                <p>
                    Montant total : {montantTotal} DH
                </p>
            )}
        </div>
    );
}

export default ExpenseMontantTotal;
