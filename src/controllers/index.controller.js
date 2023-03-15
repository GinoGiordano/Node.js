
const { Pool } = require('pg')
const connectionString = 'postgres://vqiocmvchvwtwu:f847faa7d7c940674d68e069f7998d8f66fae9bb058f020fc66abf302cff815d@ec2-54-224-120-186.compute-1.amazonaws.com:5432/d96g3klqsgnr99';

const pool = new Pool({
    connectionString,
    ssl:{
        rejectUnauthorized: false
    }
});




const getVarieties = async (req, res)=> {
    const response = await pool.query('SELECT * FROM varieties');
    res.status(200).json(response.rows);
}

const getVarietyById = async (req, res)=> {
    if(req.params.id % 1 == 0){
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM varieties WHERE id = $1',[id]);
        if(response.rows.length == 0){
           res.status(404).json(); 
        }else{
        res.status(200).json(response.rows);
        }
    }else{
        res.status(400).json()
    }   
}

const getCoffees = async (req, res)=> {
    const response = await pool.query('SELECT * FROM coffees');
    for (let i = 0; i <  response.rows.length; i++) {
        if(response.rows[i].image){
        response.rows[i].image = 'https://ginogiordano-servicio-web.herokuapp.com/coffee/'+ response.rows[i].id+'/imagen';
        }   
    }
    res.status(200).json(response.rows);
}

const getCoffeeImage = async (req, res) => {
    if(req.params.id % 1 == 0){
        const response = await pool.query("SELECT image FROM coffees where id = $1", [req.params.id]);
        if(response.rows.length > 0 && response.rows[0].image){
            var toReturn = Buffer.from(response.rows[0].image, 'base64');
            res.writeHead(200,{
                'Content-Type':'image/jpeg',
                'Content-Length':toReturn.length
            });
            res.end(toReturn)
        }else{
            res.status(404).send("Error 404");
        }
    }else{
        res.status(400).send("Error 400");
    } 
}

const getCoffeeById = async (req, res)=> {
    if(req.params.id % 1 == 0){
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM coffees WHERE id = $1',[id]);
        
        if(response.rows.length == 0){
            res.status(404).json(); 
         }else{
         response.rows[0].image = 'https://ginogiordano-servicio-web.herokuapp.com/coffee/'+id+'/imagen';
         res.status(200).json(response.rows);
         }
    }else{
        res.status(400).json()
    }
    
}

const getPublications = async (req, res)=> {
    const response = await pool.query('SELECT * FROM publications');
    for (let i = 0; i <  response.rows.length; i++) {
        if(response.rows[i].image){
        response.rows[i].image = 'https://ginogiordano-servicio-web.herokuapp.com/publication/'+ response.rows[i].id+'/image';
        }   
    }
    res.status(200).json(response.rows);
}
const getPublicationImage = async (req, res) => {
    if(req.params.id % 1 == 0){
        const response = await pool.query("SELECT image FROM publications where id = $1", [req.params.id]);
        if(response.rows.length > 0 && response.rows[0].image){
            var toReturn = Buffer.from(response.rows[0].image, 'base64');
            res.writeHead(200,{
                'Content-Type':'image/jpeg',
                'Content-Length':toReturn.length
            });
            res.end(toReturn)
        }else{
            res.status(404).send("Error 404");
        }
    }else{
        res.status(400).send("Error 400");
    } 
}
const getPublicationById = async (req, res)=> {
    if(req.params.id % 1 == 0){
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM publications WHERE id = $1',[id]);
        if(response.rows.length == 0){
            res.status(404).json(); 
         }else{
         response.rows[0].image = 'https://ginogiordano-servicio-web.herokuapp.com/publication/'+id+'/image';
         res.status(200).json(response.rows);
         }
    }else{
        res.status(400).json()
    }
    
}
module.exports = {
    getVarieties,
    getCoffees,
    getPublicationById,
    getCoffeeImage,
    getPublicationImage,
    getCoffeeById,
    getVarietyById,
    getPublications
}