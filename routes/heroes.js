const sql = require("mssql/msnodesqlv8");
const dbConnect = require("../dbConnect");
const prefix = "/heroes/";

const heroesRoutes = (app, fs) => {
  app.get(`${prefix}`, (req, res) => {
    console.log("Get all Heroes");
    let id = parseInt(req.params.id);
    let request = new sql.Request(dbConnect);
    request.query(`SELECT * FROM [Heroes]`, (err, result) => {
      if (err) console.log(err);
      else if (result.recordset.length > 0) res.send(result.recordset);
      // .recordset est pour afficher que la partie recordset
      else res.send({ error: "Pas d'élèment avec cet identifiant" });
    });
  });

  app.get(`${prefix}:id`, (req, res) => {
    let id = parseInt(req.params.id);
    let request = new sql.Request(dbConnect);
    request.query(
      `SELECT * FROM [Heroes] WHERE [HeroeID] = ${id}`,
      (err, result) => {
        console.log("Query launched");
        if (err) console.log(err);
        else if (result.recordset.length > 0) res.send(result.recordset[0]);
        // .recordset est pour afficher que la partie recordset
        else res.send({ error: "Pas d'élèment avec cet identifiant" });
      }
    );
  });

  app.get(`${prefix}user/:acc`, (req, res) => {
    let acc = parseInt(req.params.acc);
    let request = new sql.Request(dbConnect);
    request.query(
      `SELECT * FROM [Heroes] WHERE [UserAccount] = ${acc}`,
      (err, result) => {
        console.log("Query launched");
        if (err) console.log(err);
        else if (result.recordset.length > 0) res.send(result.recordset);
        else res.send({ error: "Pas d'élèment avec cet identifiant" });
      }
    );
  });

  app.post(`${prefix}`, (req, res) => {
    let body = req.body;
    let request = new sql.Request(dbConnect);
    request.query(
      `INSERT INTO Heroes
        (UserAccount,
        [Name],
        FirstName,
        Gender,
        Race,
        Experience,
        [Level],
        Health,
        Strength,
        Dexterity,
        Constitution,
        Intelligence,
        Wisdom,
        Charisma)

        VALUES (
        '${body.UserAccount}',
        '${body.Name}',
        '${body.FirstName}',
        '${body.Gender}',
        '${body.Race}',
        '${body.Experience}',
        '${body.Level}',
        '${body.Health}',
        '${body.Strength}',
        '${body.Dexterity}',
        '${body.Constitution}',
        '${body.Intelligence}',
        '${body.Wisdom}',
        '${body.Charisma}'
        )`,
      (err, result) => {
        if (err) console.log(err);
        else res.send(result.rowsAffected);
      }
    );
  });

  app.delete(`${prefix}:id`,
  (req, res) => {
    let id = parseInt(req.params.id);
    let request = new sql.Request(dbConnect);
    request.query(`DELETE FROM Heroes WHERE HeroeID = ${id}`,
    ( err,result)=>{
      if (err) console.log(err);
      else res.send(result.rowsAffected);
    }
    )
  })
  app.put(`${prefix}:id`,
  (req, res) => {
    let id = parseInt(req.params.id);
    let request = new sql.Request(dbConnect);
    request.query(`UPDATE Heroes SET
        [Name]= '${body.UserAccount}'
        FirstName= '${body.Name}',
        Gender= '${body.Gender}',
        Race= '${body.Race}',
        Experience= '${body.Experience}',
        [Level]= '${body.Level}',
        Health= '${body.Health}',
        Strength= '${body.Strength}',
        Dexterity= '${body.Dexterity}',
        Constitution= '${body.Constitution}',
        Intelligence= '${body.Intelligence}',
        Wisdom= '${body.Wisdom}',
        Charisma= '${body.Charisma}'
    
    WHERE HeroeID = ${id}`,
    ( err,result)=>{
      if (err) console.log(err);
      else res.send(result.rowsAffected);
    }
    )
  })
};
module.exports = heroesRoutes;
