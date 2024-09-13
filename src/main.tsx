import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { Provider } from "react-redux";
import store from "./redux/index.ts";

const auth_store = createStore({
	authName: "_auth",
	authType: "cookie",
	cookieDomain: window.location.hostname,
	cookieSecure: window.location.protocol === "https:",
});

createRoot(
	document.getElementById("root") ?? document.createElement("div"),
).render(
	<AuthProvider store={auth_store}>
		<Provider store={store}>
			<App />
		</Provider>
	</AuthProvider>,
);
