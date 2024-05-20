import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

class Parking extends Model {
    public id!: number;
    public userId!: number;
    public city!: string;
    public area!: string;
    public startTime!: Date;
    public endTime?: Date;
    public price!: number;
}

Parking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'parkings'
    }
);

Parking.belongsTo(User, { foreignKey: 'userId' });

export default Parking;
