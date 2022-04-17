const { Router } = require("express");
const router = Router();
const connection = require("../db/database");

router.get("/vehiculo", (req, res) => {
  connection.query("SELECT * FROM vehiculo;", (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});


router.post("/vehiculo", (req, res) =>{
  try{
    const {id_placa, id_linea, modelo, fecha_vencimiento_seguro, fecha_vencimiento_tecnomecanica} = req.body;
    connection.query(`
    INSERT INTO vehiculo (id_placa, id_linea, modelo, fecha_vencimiento_seguro, fecha_vencimiento_tecnomecanica)
    VALUES ('${id_placa}', ${id_linea}, ${modelo}, '${fecha_vencimiento_seguro}', '${fecha_vencimiento_tecnomecanica}');
   `)
    return res.status(200).json('Datos enviados');
  }catch{
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    }
  
});


router.patch("/vehiculo", (req, res) => {
   try{
     const {id_linea, id_placa} = req.body;
     connection.query(`UPDATE vehiculo SET id_linea="${id_linea}" WHERE id_placa="${id_placa}"`)
     return res.status(200).json('Datos enviados');
   }catch{
    console.log(err); 
    res.status(500).json({ error: "Internal server error" });
    }
})


router.delete("/vehiculo", (req, res) =>{
  try{
    const {id_placa} = req.body;
     connection.query(`DELETE FROM vehiculo WHERE id_placa="${id_placa}"`)
     return res.status(200).json('Datos enviados');
  }catch{
    console.log(err); 
    res.status(500).json({ error: "Internal server error" });
    }
}) 
 

router.get("/marca", (req, res) => {
  connection.query("SELECT * FROM marca;", (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  }); 
}); 

router.post("/marca", (req, res) =>{
  try{
    const {nombre, descripcion, estado} = req.body;
    connection.query(`
    INSERT INTO marca (nombre, descripcion, estado)
    VALUES ('${nombre}', '${descripcion}', '${estado}');
   `)
    return res.status(200).json('Datos enviados');
  }catch{
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    }
   
});  
 

router.get("/linea", (req, res) => {
  connection.query("SELECT * FROM linea;", (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  }); 
}); 

router.post("/linea", (req, res) =>{
  try{
    const {id_marca, nombre, descripcion, estado} = req.body;
    connection.query(`
    INSERT INTO linea (id_marca, nombre, descripcion, estado)
    VALUES ('${id_marca}', '${nombre}', '${descripcion}', '${estado}');
   `)
    return res.status(200).json('Datos enviados');
  }catch{
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
    }
   
});  
 

router.get("/vehiculo/modelo", (req, res) => {
  connection.query("SELECT MIN(modelo), MAX(modelo) FROM vehiculo;", (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});


router.get("/vehiculo/fecha_vencimiento_seguro", (req, res) => {
  const {fecha1, fecha2} = req.body
  connection.query(`SELECT * FROM vehiculo WHERE fecha_vencimiento_seguro >= '${fecha1}' AND fecha_vencimiento_seguro <='${fecha2}';`, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});


router.get("/modelo1", (req, res) => {
  const {año1, año2} = req.body
  connection.query(`SELECT * FROM vehiculo WHERE modelo <= '${año1}' AND modelo >='${año2}';`, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});


router.get("/modelo2", (req, res) => {
  connection.query(`SELECT SUM(modelo) FROM vehiculo`, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});


router.get("/modelo3", (req, res) => {
  connection.query(`SELECT AVG(modelo) FROM vehiculo`, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});




router.get("/linea/estado", (req, res) => {
  const {estado} = req.body
  connection.query(`SELECT * FROM linea WHERE estado = '${estado}'  `, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
});
 



module.exports = router;         
