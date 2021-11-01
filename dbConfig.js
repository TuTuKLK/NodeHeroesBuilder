var dbConfig = {
    server: 'localhost',
    // port: 1433,
    database: 'BuilderHeroes',
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
}
    module.exports = dbConfig