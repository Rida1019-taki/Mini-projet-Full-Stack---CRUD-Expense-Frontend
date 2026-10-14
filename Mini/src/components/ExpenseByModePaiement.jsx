import { useState, useEffect } from "react";
import {findByModePaiment} from "../services/expenseService"

function ExpenseByModePaiement(){
    const [modePaiement , setModePaiement] = useState("");
    const [expense, setExpense] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if(!modePaiement){
            setExpense([]);
            return;
        }

        const fetchExpense = async () => {
            try{
                setLoading(true);
                setError("");

                const response = await findByModePaiment(modePaiement);
                setExpense(response.data);
            }catch(err){
                setError("Erreur lors du chargement des dépenses.")
            }finally{
                setLoading(false);
            }
        }

        fetchExpense()
    },[modePaiement]);


    return(
        <div>
            <h2>Filter par Mode de Paiement</h2>

            <select value={modePaiement}
                    onChange={(e) => setModePaiement(e.target.value)}
            >
                <option value="CASH">Cash</option>
                <option value="CARD">Card</option>
                <option value="TANSFER">Transfer</option>
            </select>

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
            ) : (modePaiement && !loading && <p>Aucune dépense trouvée.</p>
            )}
        </div>
    );
}

export default ExpenseByModePaiement;