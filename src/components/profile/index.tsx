import Sections from "./customs/sections";
import Sidebar from "./customs/sidebar";
// import Footer from "./footer";

const Profile = () => {
	return (
		<div className="w-[90%] m-auto flex gap-5 mt-6">
			<Sidebar />
			<Sections />
			{/* <Footer /> */}
		</div>
	);
};

export default Profile;
