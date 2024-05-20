import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class PricingRule extends Model {
    public id!: number;
    public city!: string;
    public startHour!: number;
    public endHour!: number;
    public price!: number;
}

PricingRule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startHour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endHour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'pricing_rules'
    }
);

export default PricingRule;
