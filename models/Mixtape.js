import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Mixtape = sequelize.define('Mixtape', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
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
        coverUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tracksCount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        fileUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        isPublished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return Mixtape;
};