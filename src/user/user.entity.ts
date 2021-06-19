import { Table, Model, Column, PrimaryKey, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING)
    first_name: string;

    @Column(DataType.STRING)
    last_name: string;

    @Column({ unique: true, type: DataType.STRING })
    user_name: string;

    @Column({ unique: true, type: DataType.STRING })
    email: string;

    @Column(DataType.STRING)
    password: string;
}