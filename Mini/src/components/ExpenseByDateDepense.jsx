import { useState, useEffect } from "react";
import {findBydateDepenseAfter} from "../services/expenseService"

function ExpenseByDateDepense(){
    const [dateDepense , setDateDepense] = useState("");
    const [expense, setExpense] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if(!dateDepense){
            setExpense([]);
            return;
        }

        const fetchExpense = async () => {
            try{
                setLoading(true);
                setError("");

                const response = await findBydateDepenseAfter(dateDepense);
                setExpense(response.data);
            }catch(err){
                setError("Erreur lors du chargement des dépenses.")
            }finally{
                setLoading(false);
            }
        }

        fetchExpense()
    },[dateDepense]);


    return(
        <div>
            <h2>Filter par Date Depense</h2>

            <input 
                type="date"
                value={dateDepense}
                onChange={(e) => setDateDepense(e.target.value)}
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
            ) : (dateDepense && !loading && <p>Aucune dépense trouvée.</p>
            )}
        </div>
    );
}

export default ExpenseByDateDepense;