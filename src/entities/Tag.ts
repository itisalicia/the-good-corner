import {
    BaseEntity,
    Column, Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Tag extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
title: string; //Not null

@Column()
description: string; //Not null
}

