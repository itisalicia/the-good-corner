import { Link } from "react-router";

export type AdCardProps = {
	id?: number;
	title: string;
	imgUrl: string;
	price: number;
	link: string;
};

function Adcard({ title, imgUrl, price, link }: AdCardProps) {
	return (
		<div className="ad-card-container">
			<Link to={link} className="ad-card-link">
				<img className="ad-card-image" src={imgUrl} alt={title} />
				<div className="ad-card-text">
					<div className="ad-card-title">{title}</div>
					<div className="ad-card-price">{price} Є</div>
				</div>
			</Link>
		</div>
	);
}

export default Adcard;
