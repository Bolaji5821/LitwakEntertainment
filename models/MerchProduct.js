import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const MerchProduct = sequelize.define('MerchProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        salePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gallery: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        sizes: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        colors: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        isFeatured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isPublished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return MerchProduct;
};