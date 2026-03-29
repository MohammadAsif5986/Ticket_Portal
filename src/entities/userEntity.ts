import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { CreateDateColumn } from "typeorm/browser";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false

    })
    name!: string

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: true
        })
    email!: string

    @Column(
        {
        type: 'int',
        // length: 100,
        nullable: false,
        unique: true
        }
    )
    empId!: number

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt!: Date
    
    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt!: Date
}