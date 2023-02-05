const express = require('express');
const router = express.Router();
// const fs = require('fs')
const pool = require('../config/dbConn')


// const libros_arch=fs.readFileSync('libros.json', 'utf-8')
// const libros = JSON.parse(libros_arch)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', async function(req, res, next) {
  const [libros] = await pool.query('SELECT * FROM libros')
  console.log(libros)

});


// router.get('/books', function(req, res, next) {
//   res.render('books', { libros
//     // titulo: libros.title,
//     // autor: libros.autor,
//     // imagen: libros.imagen,
//     // descripcion: libros.descrip,
// });
// });

router.get('/add', function(req, res, next) {
  res.render('create', { title: 'Añadir libro' });
});

router.post('/books', function(req, res, next) {
  const { title, autor, imagen, descrip } = req.body

  if(!title || !autor || !imagen || !descrip){
    res.status(400).send("No te dejes nada vacío")
  }else{
    let nuevoLibro={
      title:title, autor:autor, imagen:imagen, descrip:descrip
    }
    libros.push(nuevoLibro)
    console.log(libros)
    const libros_arch=JSON.stringify(libros)
  
    fs.writeFileSync('libros.json',libros_arch, 'utf-8')
    res.redirect("/books")
  }
  
});
module.exports = router;
