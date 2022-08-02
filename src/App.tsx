import { Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/Home/Home";
import Layout from "components/layout/Layout";
import ProtectedRoute from "components/protectedRoute";
import { useSelector } from "react-redux";
import { AuthState } from "redux/slices/authSlice";
import NotFound from "pages/404";
import SignIn from "pages/SignIn";
import FoodItem from "pages/FoodItem/FoodItem";

function App() {
  const location = useLocation();
  // use the location to determine if the user is logged in
  const authStore = useSelector((state: AppState) => state.auth as AuthState);

  return (
    <Layout>
      <Routes location={location}>
        {/* Accessible to all */}
        <Route path="/" element={<Home />} />
        <Route path="/:foodItemName" element={<FoodItem />} />

        {/* Accessible to NOT logged in users */}
        <Route
          path="/signIn"
          element={
            <ProtectedRoute isAllowed={!authStore.accessToken}>
              <SignIn />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
