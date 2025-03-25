import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable
} from "typeorm";
import { Ad } from "./Ad";

@Entity()
export class Tag extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: string; //Not null

@Column()
description: string; //Not null

@ManyToMany(() => Ad)
@JoinTable()
ads: Ad[];
}

