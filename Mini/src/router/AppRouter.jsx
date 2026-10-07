import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import ExpenseFormPage from "../pages/ExpenseFormPage";
import ExpenseDetails from "../pages/ExpenseDetails";
import NotFound from "../pages/NotFound";

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
                    path="/expenses/:id"
                    element={<ExpenseDetails />}
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