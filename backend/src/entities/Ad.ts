import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	ManyToMany,
	JoinTable,
} from "typeorm";

import { Category } from "./Category";
import { Tag } from "./Tag";

@Entity()
export class Ad extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string; //Not null

	@Column()
	description: string; //Not null

	@Column()
	owner: string; //Not null

	@Column()
	price: number; //Not null

	@Column()
	date: Date; //Not null

	@Column()
	img: string;

	@Column()
	city: string; //Not null

	@ManyToOne(
		() => Category,
		(category) => category.ads,
	)
	category: Category;

	@ManyToMany(
		() => Tag, {eager: true})
		@JoinTable()
	tags: Tag[];
}
