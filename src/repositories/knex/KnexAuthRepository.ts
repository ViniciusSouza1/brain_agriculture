require('dotenv').config();

import { IAuthRepository } from "../IAuthRepository";
import Crypto from "../../util/crypto";
import { errors } from "celebrate";
import jwt from 'jsonwebtoken';
import { Farm } from "../../entities/Farm";
import { User } from "../../entities/User";

const { promisify } = require('util');

const SECRET = process.env.JSON_WEBTOKEN_SECRET;
const EXPIRES_IN = Number(process.env.JSON_WEBTOKEN_EXPIRES_IN);

const knex = require("../../database/index");
const crypt = new Crypto();

class KnexAuthRepository implements IAuthRepository {

    async encryptedPassword(password: string): Promise<string> {
        const password_encrypted = await crypt.encrypt(password);

        return password_encrypted;
    }

    hasWhiteSpace(username: string) {
        return (username.indexOf(' ') >= 0);
    }

    async findByusername(username: string): Promise<User> {

        let user = await knex('user')
            .where({ username })
            .first()

        if (!user) {
            const farm_producer = await knex('farm_producer')
                .where('cpf_cnpj', '=', username)
                .first()

            return farm_producer;
        } else {
            return user;
        }

    }

    async comparePassword(user: any, password: string) {
        const returned = await crypt.compare(password, user.password).then((result) => {
            return result ? user : undefined;
        });

        return returned;
    }

    async generateToken(id: string): Promise<string> {
        return jwt.sign({ id }, SECRET, { expiresIn: EXPIRES_IN });
    }

    async decode(token: string) {
        const decoded = await promisify(jwt.verify)(token, SECRET);
        return decoded;
    }

    async decodeTokenReturnAuthId(req: string) {
        const authHeader = req;

        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return errors({ statusCode: 401 })

        const verify = <any>jwt.verify(token, SECRET)

        if (!verify) return errors({ statusCode: 401 })

        return verify.id;
    }

    async confirmTypeUserForUser(token: string): Promise<boolean> {

        const id = await this.decodeTokenReturnAuthId(token)

        const user = await knex('user')
            .where({ id })

        if (user.length === 0) {
            return false;
        } else {
            return true;
        }
    }

}



export { KnexAuthRepository }