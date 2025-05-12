import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Song = sequelize.define('Song', {
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
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coverUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fileUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lyrics: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        mixtapeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Mixtapes',
                key: 'id',
            },
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

    return Song;
};