const express = require('express');
const router = express.Router();
// const fs = require('fs')
const pool = require('../dbConn')


// const libros_arch=fs.readFileSync('libros.json', 'utf-8')
// const libros = JSON.parse(libros_arch)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', async function(req, res, next) {
  const [result_libros] = await pool.query('SELECT * FROM libros')
  res.render("books", {result_libros})
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

router.post('/add', async function(req, res, next) {
  const { title, autor, imagen, descrip } = req.body

  if(!title || !autor || !imagen || !descrip){
    res.status(400).send("No te dejes nada vacío")
  }else{
    await pool.query("INSERT INTO libros SET ?", {
      title,
      autor,
      imagen,
      descrip
    })
    res.redirect("/add")
  }
  
});

router.get('/delete/:id', async function(req, res, next) {
  console.log(req.params.id)

  await pool.query("DELETE FROM libros where id = ?", req.params.id)

  res.redirect("/books")
});
module.exports = router;
