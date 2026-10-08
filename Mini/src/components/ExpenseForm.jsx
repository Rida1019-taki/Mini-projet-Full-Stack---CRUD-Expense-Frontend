import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { expenseSchema } from "../validations/expenseSchema";

function ExpenseForm({
    defaultValues,
    onSubmit,
    loading = false,
    submitLabel = "Enregistrer"
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(expenseSchema),
        defaultValues
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    return (
        <form
            className="expense-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-group">
                <label htmlFor="titre">
                    Titre *
                </label>

                <input
                    id="titre"
                    type="text"
                    {...register("titre")}
                />

                {errors.titre && (
                    <span className="field-error">
                        {errors.titre.message}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="description">
                    Description
                </label>

                <textarea
                    id="description"
                    rows="4"
                    {...register("description")}
                />

                {errors.description && (
                    <span className="field-error">
                        {errors.description.message}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="montant">
                    Montant *
                </label>

                <input
                    id="montant"
                    type="number"
                    step="0.01"
                    {...register("montant")}
                />

                {errors.montant && (
                    <span className="field-error">
                        {errors.montant.message}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="categorie">
                    Catégorie *
                </label>

                <select
                    id="categorie"
                    {...register("categorie")}
                >
                    <option value="">
                        Sélectionner une catégorie
                    </option>

                    <option value="ALIMENTATION">
                        ALIMENTATION
                    </option>

                    <option value="TRANSPORT">
                        TRANSPORT
                    </option>

                    <option value="LOGEMENT">
                        LOGEMENT
                    </option>

                    <option value="LOISIRS">
                        LOISIRS
                    </option>

                    <option value="SANTE">
                        SANTE
                    </option>

                    <option value="AUTRE">
                        AUTRE
                    </option>
                </select>

                {errors.categorie && (
                    <span className="field-error">
                        {errors.categorie.message}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="dateDepense">
                    Date de dépense *
                </label>

                <input
                    id="dateDepense"
                    type="date"
                    {...register("dateDepense")}
                />

                {errors.dateDepense && (
                    <span className="field-error">
                        {errors.dateDepense.message}
                    </span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="modePaiement">
                    Mode de paiement *
                </label>

                <select
                    id="modePaiement"
                    {...register("modePaiement")}
                >
                    <option value="">
                        Sélectionner un mode
                    </option>

                    <option value="CASH">
                        CASH
                    </option>

                    <option value="CARD">
                        CARD
                    </option>

                    <option value="TRANSFER">
                        TRANSFER
                    </option>
                </select>

                {errors.modePaiement && (
                    <span className="field-error">
                        {errors.modePaiement.message}
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading}
            >
                {loading ? "Enregistrement..." : submitLabel}
            </button>
        </form>
    );
}

export default ExpenseForm;