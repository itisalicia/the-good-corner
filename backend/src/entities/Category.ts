import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Ad } from "./Ad";

@Entity()
export class Category extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string; //Not null

	@OneToMany(
		() => Ad,
		(ad) => ad.category,
	)
	ads: Ad[];
}
