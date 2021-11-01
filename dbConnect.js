var sql = require("mssql/msnodesqlv8")
var dbConfig = require("./dbConfig")

var dbConnect = new sql.connect(dbConfig,
function(err)
{
    if(err){
    console.log("Nop c'est un fail: " + err)
    }else{
    console.log("GG c'est OK: " + dbConfig.server)
    }
}
)
module.exports = dbConnect