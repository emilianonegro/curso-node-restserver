const { response, request } = require('express')

const usersGet = (req = request, res = response) =>  {  
    
    const { q, nombre = 'no name', apikey} = req.query;
    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    })
  }


  const usersPut = (req, res = response) =>  {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    })
  }

  const usersPost =(req, res = response) =>  {

    // const body = req.body;
    // Podemos destructurarlo 
    const { nombre, edad} = req.body


    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
  }


  const usersDelete = (req, res = response) =>  {
    res.json({
        msg: 'delete API - controlador'
    })
  }

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}