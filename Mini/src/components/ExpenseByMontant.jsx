import { useState, useEffect } from "react";
import {findBymontantGreaterThan} from "../services/expenseService";

function ExpenseByMontant(){
    const [montant , setMontant] = useState("");
    const [expense, setExpense] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        if(!montant){
            setExpense([]);
            return;
        }

        const fetchExpense = async () => {
            try{
                setLoading(true);
                setError("");

                const response = await findBymontantGreaterThan(montant);
                setExpense(response.data);
            }catch(err){
                setError("Erreur lors du chargement des dépenses.")
            }finally{
                setLoading(false);
            }
        }

        fetchExpense()
    },[montant]);


    return(
        <div>
            <h2>Filter par Montant Greather Than</h2>

            <input type="number"
                min="0"
                step="0.01"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
            />

            {loading && <p>chargement....</p>}

            {error && <p>{error}</p>}

            {expense.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Montant</th>
                            <th>Categorie</th>
                            <th>Date</th>
                            <th>Mode Paiement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((item) => (
                            <tr key={item.id}>
                                <td>{item.titre}</td>
                                    <td>{item.montant}</td>
                                    <td>{item.categorie}</td>
                                    <td>{item.dateDepense}</td>
                                    <td>{item.modePaiement}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (montant && !loading && <p>Aucune dépense trouvée.</p>
            )}
        </div>
    );
}

export default ExpenseByMontant;