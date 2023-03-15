const { Router } = require('express');
const router = Router();

const {  getVarieties , getVarietyById, getCoffees, getCoffeeById, getPublications, getPublicationById , getPublicationImage , getCoffeeImage} = require('../controllers/index.controller');
//Variedades


/**
 * @swagger
 * /variety:
 *  get:
 *    description: Obtiene la informacion de todas las variedades disponibles 
 *    tags:
 *      - Variedad
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/variety',getVarieties);

/**
 * @swagger
 * /variety/{id}:
 *  get:
 *    description: Obtiene la informacion de una variedad en especifica
 *    tags:
 *     - Variedad
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Es la id de la variedad
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: Id ingresada invalida 
 *      '404':
 *        description: No se encontro la variedad solicitada 
 *      default:
 *        description: Error inesperado
 */
router.get('/variety/:id',getVarietyById);

//Coffees

/**
 * @swagger
 * /coffee:
 *  get:
 *    description: Obtiene la informacion de todos los cafe disponibles 
 *    tags:
 *      - Coffee
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/coffee',getCoffees);
/**
 * @swagger
 * /coffee/{id}:
 *  get:
 *    description: Obtiene la informacion de un cafe en especifico
 *    tags:
 *     - Coffee
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Es la id del coffee
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: Id ingresada invalida 
 *      '404':
 *        description: No se encontro el cafe solicitado
 *      default:
 *        description: Error inesperado
 */
router.get('/coffee/:id',getCoffeeById);
/**
 * @swagger
 * /coffee/{id}/imagen:
 *  get:
 *    description: Obtiene la imagen de un cafe en especifico
 *    tags:
 *      - Coffee
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Es la id  del Cafe
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '404':
 *        description: No se encontro la imagen solicitada
 *      '400':
 *        description: Id invalida
 *      default:
 *        description: Error inesperado
 */
router.get('/coffee/:id/imagen',getCoffeeImage);

//Publications

/**
 * @swagger
 * /publication:
 *  get:
 *    description: Obtiene la informacion de todas las publicaciones disponibles 
 *    tags:
 *      - Publication
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      default:
 *        description: Error inesperado
 */
router.get('/publication',getPublications);
/**
 * @swagger
 * /publication/{id}:
 *  get:
 *    description: Obtiene la informacion de una publicacion en especifica 
 *    tags:
 *     - Publication
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Es la id de la publicacion 
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Respuesta exitosa
 *      '400':
 *        description: Id ingresada invalida 
 *      '404':
 *        description: No se encontro la publicacion solicitada 
 *      default:
 *        description: Error inesperado
 */
router.get('/publication/:id',getPublicationById);
/**
 * @swagger
 * /publication/{id}/image:
 *  get:
 *    description: Obtiene la imagen de una publicacion en especifica 
 *    tags:
 *      - Publication
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Es la id  de la Publicacion 
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '404':
 *        description: No se encontro la imagen solicitada
 *      '400':
 *        description: Id invalida
 *      default:
 *        description: Error inesperado
 */
router.get('/publication/:id/image',getPublicationImage);

module.exports = router;