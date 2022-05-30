import { Request, Response, NextFunction } from "express";

const jwt = require('jsonwebtoken');
const knex = require("../database/index");
const { promisify } = require('util');
const SECRET = process.env.JSON_WEBTOKEN_SECRET;

module.exports = async (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log('No token provided!');
        return res.status(401).send({ error: 'No token provided!' });
    }

    const [scheme, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, SECRET);
        req.userId = decoded.id;
        
        const user = await knex('user')
            .where({ id: req.userId })

        if(user.length >0){
            return next();
        }else {
            return res.status(400).send({ error: 'Tipo de usuário inválido' });        
        }

    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: 'Token inválido' });
    }
}