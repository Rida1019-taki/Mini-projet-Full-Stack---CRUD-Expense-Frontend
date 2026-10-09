import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import {
    createExpense,
    getExpenseById,
    updateExpense
} from "../services/expenseService";

function ExpenseFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const isEdit = Boolean(id);

    const [expense, setExpense] = useState(null);
    const [loading, setLoading] = useState(isEdit);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!isEdit) return;

        const loadExpense = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getExpenseById(id);

                setExpense(response.data);
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Dépense introuvable."
                );
            } finally {
                setLoading(false);
            }
        };

        loadExpense();
    }, [id, isEdit]);

    const handleSubmit = async (data) => {
        try {
            setSaving(true);
            setError("");

            if (isEdit) {
                await updateExpense(id, data);
            } else {
                await createExpense(data);
            }

            navigate("/expenses");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Une erreur est survenue lors de l'enregistrement."
            );
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="page">
                <Loading />
            </div>
        );
    }

    if (isEdit && !expense) {
        return (
            <div className="page">
                <ErrorMessage message={error} />

                <Link
                    to="/expenses"
                    className="btn btn-secondary"
                >
                    Retour aux dépenses
                </Link>
            </div>
        );
    }

    const defaultValues = isEdit
        ? {
            titre: expense.titre || "",
            description: expense.description || "",
            montant: expense.montant || "",
            categorie: expense.categorie || "",
            dateDepense: expense.dateDepense || "",
            modePaiement: expense.modePaiement || ""
        }
        : {
            titre: "",
            description: "",
            montant: "",
            categorie: "",
            dateDepense: "",
            modePaiement: ""
        };

    return (
        <div className="page form-page">
            <div className="page-header">
                <div>
                    <h1>
                        {isEdit
                            ? "Modifier la dépense"
                            : "Ajouter une dépense"}
                    </h1>

                    <p>
                        {isEdit
                            ? "Modifiez les informations de la dépense."
                            : "Enregistrez une nouvelle dépense."}
                    </p>
                </div>

                <Link
                    to="/expenses"
                    className="btn btn-secondary"
                >
                    ← Retour aux dépenses
                </Link>
            </div>

            <ErrorMessage message={error} />

            <ExpenseForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                loading={saving}
                submitLabel={
                    isEdit
                        ? "Modifier la dépense"
                        : "Ajouter la dépense"
                }
            />
        </div>
    );
}

export default ExpenseFormPage;