import "./index.css";
import Layout from "../pages/Layout";
import { Routes, Route } from "react-router";
import RecentAds from "./components/RecentAds";
import About from "../pages/About";
import AdDetails from "../pages/AdDetails";
import NewAddForm from "../pages/NewAddForm";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<RecentAds />} />
				<Route path="about" element={<About />} />
				<Route path="ad/:id" element={<AdDetails />} />
				<Route path="ad/new" element={<NewAddForm />} />
			</Route>
		</Routes>
	);
}

export default App;
