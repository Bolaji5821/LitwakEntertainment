const { Sequelize } = require('sequelize');

// Database configuration
const dbConfig = {
    development: {
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'neondb',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
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
        logging: config.logging,
        dialectOptions: config.dialectOptions,
        pool: config.pool
    }
);

// Test the connection only if not in build environment
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL_ENV !== 'production') {
    sequelize.authenticate()
        .then(() => console.log('Database connection established successfully.'))
        .catch(err => console.error('Unable to connect to the database:', err));
}

// Import models
const User = require('./User')(sequelize);
const Blog = require('./Blog')(sequelize);
const Mixtape = require('./Mixtape')(sequelize);
const Song = require('./Song')(sequelize);
const TeamMember = require('./TeamMember')(sequelize);
const Event = require('./Event')(sequelize);
const Photo = require('./Photo')(sequelize);
const Video = require('./Video')(sequelize);
const MerchProduct = require('./MerchProduct')(sequelize);
const Tour = require('./Tour')(sequelize);

// Define associations

// User associations
User.hasMany(Blog, { foreignKey: 'userId' });
Blog.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Mixtape, { foreignKey: 'userId' });
Mixtape.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Song, { foreignKey: 'userId' });
Song.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Event, { foreignKey: 'userId' });
Event.belongsTo(User, { foreignKey: 'userId' });

// Other associations
Mixtape.hasMany(Song, { foreignKey: 'mixtapeId' });
Song.belongsTo(Mixtape, { foreignKey: 'mixtapeId' });

// Export models and sequelize instance
module.exports = {
    sequelize,
    User,
    Blog,
    Mixtape,
    Song,
    TeamMember,
    Event,
    Photo,
    Video,
    MerchProduct,
    Tour,
};

export { User }

export { Blog }