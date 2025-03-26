import { Link } from "react-router";

export type AdCardProps = {
	id?: number;
	title: string;
	description?: string;
	img: string;
	price: number;
	link: string;
	owner?: string;
	date?: number;
	city?: string;
};

function Adcard({
	title,
	img,
	price,
	link,
	description,
	owner,
	date,
	city,
}: AdCardProps) {
	return (
		<div className="ad-card-container">
			<Link to={link} className="ad-card-link">
				<img className="ad-card-image" src={img} alt={title} />
				<div className="ad-card-text">
					<div className="ad-card-title">{title}</div>
					<div className="ad-card-description">{description}</div>
					<div className="ad-card-owner">{owner}</div>
					<div className="ad-card-date">{date}</div>
					<div className="ad-card-city">{city}</div>
					<div className="ad-card-price">{price} Є</div>
				</div>
			</Link>
		</div>
	);
}

export default Adcard;
