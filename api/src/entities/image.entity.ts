import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 500 })
  image_url!: string;

  @Column({ length: 300, nullable: true })
  image_caption!: string;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
}
