import { Sequelize } from 'sequelize';
import pg from 'pg';

// Database configuration
const dbConfig = {
    development: {
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'neondb',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
        dialectOptions: {
            ssl: false
        }
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};

// Get the appropriate configuration based on environment
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

// Initialize Sequelize with database connection
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
        host: config.host,
        dialect: config.dialect,
        dialectModule: config.dialectModule,
        logging: config.logging,
        dialectOptions: config.dialectOptions,
        pool: config.pool
    }
);

// Only test connection if not in build environment
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';
if (!isBuildTime) {
    sequelize.authenticate()
        .then(() => console.log('Database connection established successfully.'))
        .catch(err => console.error('Unable to connect to the database:', err));
}

// Import models
import User from './User.js';
import Blog from './Blog.js';
import Mixtape from './Mixtape.js';
import Song from './Song.js';
import TeamMember from './TeamMember.js';
import Event from './Event.js';
import Photo from './Photo.js';
import Video from './Video.js';
import MerchProduct from './MerchProduct.js';
import Tour from './Tour.js';

// Initialize models
const models = {
    User: User(sequelize),
    Blog: Blog(sequelize),
    Mixtape: Mixtape(sequelize),
    Song: Song(sequelize),
    TeamMember: TeamMember(sequelize),
    Event: Event(sequelize),
    Photo: Photo(sequelize),
    Video: Video(sequelize),
    MerchProduct: MerchProduct(sequelize),
    Tour: Tour(sequelize)
};

// Define associations
models.User.hasMany(models.Blog, { foreignKey: 'userId' });
models.Blog.belongsTo(models.User, { foreignKey: 'userId' });

models.User.hasMany(models.Mixtape, { foreignKey: 'userId' });
models.Mixtape.belongsTo(models.User, { foreignKey: 'userId' });

models.User.hasMany(models.Song, { foreignKey: 'userId' });
models.Song.belongsTo(models.User, { foreignKey: 'userId' });

models.User.hasMany(models.Event, { foreignKey: 'userId' });
models.Event.belongsTo(models.User, { foreignKey: 'userId' });

models.Mixtape.hasMany(models.Song, { foreignKey: 'mixtapeId' });
models.Song.belongsTo(models.Mixtape, { foreignKey: 'mixtapeId' });

export { sequelize };
export default models;