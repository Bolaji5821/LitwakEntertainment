const { sequelize } = require('./models');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection has been established successfully.');

        // Test query
        const [results] = await sequelize.query('SELECT NOW()');
        console.log('✅ Database time:', results[0].now);

        // List all tables
        const tables = await sequelize.query(
            "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
        );
        console.log('📋 Available tables:', tables[0].map(t => t.table_name));

    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

testConnection();