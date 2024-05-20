import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    public id!: number;
    public email!: string;
    public address!: string;
    public fullName!: string;
    public carPlateNumber!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carPlateNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'users'
    }
);

export default User;
