import * as yup from "yup";

export const expenseSchema = yup.object({
    titre: yup
        .string()
        .required("Le titre est obligatoire"),

    description: yup
        .string()
        .nullable(),

    montant: yup
        .number()
        .typeError("Le montant doit être un nombre")
        .positive("Le montant doit être positif")
        .required("Le montant est obligatoire"),

    categorie: yup
        .string()
        .oneOf([
            "ALIMENTATION",
            "TRANSPORT",
            "LOGEMENT",
            "LOISIRS",
            "SANTE",
            "AUTRE"
        ])
        .required("La catégorie est obligatoire"),

    dateDepense: yup
        .string()
        .required("La date est obligatoire"),

    modePaiement: yup
        .string()
        .oneOf([
            "CASH",
            "CARD",
            "TRANSFER"
        ])
        .required("Le mode de paiement est obligatoire")
});