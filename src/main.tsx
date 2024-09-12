import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:"
});

createRoot(
  document.getElementById("root") ?? document.createElement("div")
).render(
  <AuthProvider store={store}>
    <App />
  </AuthProvider>
);
