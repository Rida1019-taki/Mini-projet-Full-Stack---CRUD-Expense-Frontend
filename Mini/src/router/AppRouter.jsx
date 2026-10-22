import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import ExpenseFormPage from "../pages/ExpenseFormPage";
import ExpenseDetails from "../pages/ExpenseDetails";
import NotFound from "../pages/NotFound";
import ExpenseByCategorie from "../components/ExpenseCategorie";
import ExpenseByModePaiement from "../components/ExpenseByModePaiement";
import ExpenseByMontant from "../components/ExpenseByMontant";
import ExpenseByDateDepense from "../components/ExpenseByDateDepense";
import ExpenseBetweenByTwoDate from "../components/ExpenseBetweenByTwoDate";
import ExpenseMontantTotal from "../components/ExpenseMontantTotal";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="/expenses" element={<Expenses />} />

                <Route
                    path="/expenses/new"
                    element={<ExpenseFormPage />}
                />

                <Route
                    path="/expenses/categorie"
                    element={<ExpenseByCategorie />}
                />


                <Route
                    path="/expenses/modePaiement"
                    element={<ExpenseByModePaiement />}
                />

                <Route
                    path="/expenses/montantGratherThan"
                    element={<ExpenseByMontant />}
                />

                <Route
                    path="/expenses/calculerMontantTotal"
                    element={<ExpenseMontantTotal />}
                />

                <Route
                    path="/expenses/dateDepense"
                    element={<ExpenseByDateDepense />}
                />

                <Route
                    path="/expenses/:id"
                    element={<ExpenseDetails />}
                />

                <Route
                    path="/expenses/depenseBetweenTwoDate"
                    element={<ExpenseBetweenByTwoDate />}
                />

                <Route
                    path="/expenses/:id/edit"
                    element={<ExpenseFormPage />}
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;