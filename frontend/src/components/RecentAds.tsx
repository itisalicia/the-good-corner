import Adcard from "./AdCard";
import type { AdCardProps } from "./AdCard";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentAds() {
	const [total, setTotal] = useState(0);
	const [ads, setAds] = useState<AdCardProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get("http://localhost:3000/ads");
			setAds(result.data);
		};
		fetchData();
	}, []);

	return (
		<>
			<h2>Annonces récentes</h2>
			<h3>Total : {total}</h3>
			<section className="recent-ads">
				{ads.map((ad) => (
					<div key={ad.id}>
						<Adcard
							img={ad.img}
							link={ad.link}
							title={ad.title}
							price={ad.price}
							// description={ad.description}
							// owner={ad.owner}
							// date={ad.date}
							// city={ad.city}
						/>
						<button
							type="button"
							className="button"
							onClick={() => setTotal(total + ad.price)}
						>
							Ajouter au prix total
						</button>
					</div>
				))}
			</section>
		</>
	);
}

export default RecentAds;
