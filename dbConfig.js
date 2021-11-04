var dbConfig = {
    server: 'localhost',
    // port: 1433,
    // Authentication: {
    //     type: 'default',
    //     option: {
    //         userName:'',
    //         password:test
    //     }
    // },
    database: 'BuilderHeroes',
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
}
    module.exports = dbConfig