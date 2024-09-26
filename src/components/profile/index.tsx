import Sections from "./customs/sections";
import Sidebar from "./customs/sidebar";

const Profile = () => {
	return (
		<div className="w-[90%] m-auto flex gap-5 mt-6">
			<Sidebar />
			<Sections />
		</div>
	);
};

export default Profile;
