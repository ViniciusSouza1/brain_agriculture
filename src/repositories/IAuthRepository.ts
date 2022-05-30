import { User } from "../entities/User";

export interface IAuthRepository {
    hasWhiteSpace(username: string): boolean
    comparePassword(user: User, password: string): Promise<User>
    generateToken(id: string): Promise<string>
    decode(token: string): Promise<string>
    decodeTokenReturnAuthId(req: string): Promise<string>
    encryptedPassword(password: string): Promise<string>
    findByusername(username: string): Promise<User>
}