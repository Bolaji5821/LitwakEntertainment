const { Sequelize } = require('sequelize');

// Initialize Sequelize with database connection
const sequelize = new Sequelize(
  process.env.DB_NAME || 'litwak_entertainment',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

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