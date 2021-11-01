const sql = require("mssql/msnodesqlv8");
const dbConnect = require("../dbConnect");
const acc = "/users/";

const accountRoutes = (app, fs) => {
  app.get(`${acc}`, (req, res) => {
    let id = parseInt(req.params.id);
    let request = new sql.Request(dbConnect);
    request.query(`SELECT * FROM [UserAccount]`, (err, result) => {
      if (err) console.log(err);
      else if (result.recordset.length > 0) res.send(result.recordset);
      // .recordset est pour afficher que la partie recordset
      else res.send({ error: "Pas d'élèment avec cet identifiant" });
    });
  });
  //             ('${input.LastName}','${input.FirstName}','${input.Mail}',HASHBYTES('SHA2_256','${input.Password}'),'${input.Login}')
  app.post(`${acc}check`, (req, res) => {
    let input = req.body;
    console.log(input);
    let request = new sql.Request(dbConnect);
    request.query(
      `SELECT UserID, LastName, FirstName, Mail,'******' Password, Login FROM UserAccounts WHERE Login = '${input.Login}' AND Password = ('${input.Password}')`,
      (err, result) => {
        if (err) console.log(err);
        else console.log(result);
      }
    );
  });
  app.post(`${acc}register`, (req, res) => {
    let body = req.body;
    let request = new sql.Request(dbConnect);
    request.query(
      `INSERT INTO UserAccounts
        (Mail,
        LastName,
        FirstName,
        Login,
        Password)
        VALUES (
        '${body.Mail}',
        '${body.LastName}',
        '${body.FirstName}',
        '${body.Login}',
        '${body.Password}'
        )`,
      (err, result) => {
        if (err) console.log(err);
        else res.send(result.rowsAffected);
      }
    );
  });
  // app.post(
  //   `${acc}check`,
  //   (req, res) => {
  //     let input = req.body;
  //     console.log(input);
  //     let request = new sql.Request(dbConnect);
  //     request.query(`SELECT UserID, LastName, FirstName, Mail,'******' Password, Login FROM UserAccounts WHERE Login = '${input.Login}' AND Password = HASHBYTES('SHA2_256', '${input.Password}')`,
  //       (err, result) => {
  //         if (err) console.log(err);
  //         else console.log(result);
  //       }
  //     );
  //   }
  // );
};
module.exports = accountRoutes;
