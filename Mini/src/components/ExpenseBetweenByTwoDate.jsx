import { useState , useEffect } from "react"
import { findDepenseBetweenTwoDate } from "../services/expenseService"

function ExpenseBetweenByTwoDate(){
    const [dateDebut, setDateDebut] = useState("");
    const [dateFin, setDateFin] = useState("");
    const [expense, setExpense] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!dateDebut || !dateFin){
            setExpense([]);
            setError("");
            return;
        }

        if(dateDebut > dateFin){
            setExpense([]);
            setError("La date de début doit être avant la date de fin.");
            return;
        }

        const fetchExpense = async () => {
            try{
                setLoading(true);
                setError("");

                const response = await findDepenseBetweenTwoDate(dateDebut, dateFin);
                setExpense(response.data)
            }catch (err){
                setError("Erreur lors du chargement des dépenses.")
            }finally {
                setLoading(false);
            }
        }

        fetchExpense()
    },[dateDebut, dateFin]);
    return(
        <div>
            <h2>Filtrer les dépenses entre deux dates</h2>

            <div>
                <label>Date de début :</label>
                <input
                    type="date"
                    value={dateDebut}
                    onChange={(e) => setDateDebut(e.target.value)}
                />
            </div>
            <div>
                <label>Date de fin :</label>
                <input
                    type="date"
                    value={dateFin}
                    onChange={(e) => setDateFin(e.target.value)}
                />
            </div>

            {loading && <p>Chargemenet...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && dateDebut && dateFin && expense.length === 0 && (<p>Aucune dépense trouvée entre ces deux dates.</p>)}

            {expense.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Montant</th>
                            <th>Catégorie</th>
                            <th>Date</th>
                            <th>Mode de paiement</th>
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
            )}
        </div>
    );
}

export default ExpenseBetweenByTwoDate;