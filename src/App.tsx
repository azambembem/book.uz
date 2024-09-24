import { Toaster } from "@/components/ui/sonner";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
// import MeningBuyurtmalarim from "./pages/mening-buyurtmalarim";
// import Profile from "./pages/profile";
import { route } from "./utils/route";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        {route.map(({ id, isPrivate = false, ...configs }) =>
          isPrivate ? (
            <Route
              key={id}
              {...configs}
              element={isAuthenticated ? configs.element : <Navigate to="/" />}
            />
          ) : (
            <Route key={id} {...configs} />
          )
        )}
        {/* <Route path="profile" element={<Profile />}>
          {route.map(({ path }) => (
            <Route path={path} element={<MeningBuyurtmalarim />} />
          ))}
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
