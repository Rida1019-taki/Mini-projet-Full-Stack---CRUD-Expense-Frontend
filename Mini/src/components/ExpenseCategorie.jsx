import { useState , useEffect } from "react";
import {findByCategorie} from "../services/expenseService"


function ExpenseByCategorie(){
    const [categorie, setCategorie] = useState("");
    const [expense, setExpense] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState("");

    useEffect(() => {
        if(!categorie){
            setExpense([]);
            return;
        }
    
        const fetchExpense = async () => {
            try{
                setLoading(true);
                seterror("");

                const response = await findByCategorie(categorie);
                setExpense(response.data);
            }catch (err){
                seterror("Erreur lors du chargement des dépenses.");
            }finally{
                setLoading(false);
            }
        }
    
        fetchExpense();
    
    },[categorie]);

    return(
        <div>
            <h2>Filtrer par Categorie</h2>
            <select 
                value={categorie} 
                onChange={(e) => setCategorie(e.target.value)}>

                    <option value="">Choisir une Categorie</option>
                    <option value="ALIMENTATION">ALIMENTATION</option>
                    <option value="TRANSPORT">TRANSPORT</option>
                    <option value="LOGEMENT">LOGEMENT</option>
                    <option value="LOISIRS">LOISIRS</option>
                    <option value="SANTE">SANTE</option>
                    <option value="AUTRE">AUTRE</option>
                </select>

                {loading && <p>Chargement...</p>}

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
                ) : (categorie && !loading && <p>Aucune dépense trouvée.</p>
                )}
        </div>

        
    )
}
export default ExpenseByCategorie;