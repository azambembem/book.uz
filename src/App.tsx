import { Toaster } from "@/components/ui/sonner";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/profile/footer";
import { route } from "./utils/route";

function App() {
	const isAuthenticated = useIsAuthenticated();

	return (
		<div>
			<Toaster />
			<Navbar />

			<Routes>
				{route.map(
					({
						id,
						isPrivate = false,
						hasChild = false,
						children,
						...configs
					}) => (
						<Route
							key={id}
							{...configs}
							element={
								isPrivate ? (
									<RequireAuth fallbackPath="/">{configs.element}</RequireAuth>
								) : (
									configs.element
								)
							}
						>
							{hasChild &&
								children?.map(
									// eslint-disable-next-line @typescript-eslint/no-unused-vars
									({ id, isPrivate, hasChild, children, ...child_config }) => (
										<Route
											key={id}
											{...child_config}
											element={
												isPrivate ? (
													<RequireAuth fallbackPath="/">
														{child_config.element}
													</RequireAuth>
												) : (
													child_config.element
												)
											}
										/>
									),
								)}
						</Route>
					),
				)}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
