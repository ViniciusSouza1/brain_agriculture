import { app } from "../../../app";
import request from "supertest";


// describe("Delete admin Controller", () => {
//     let userLogged
//     let id_admin;

//     beforeAll(async () => {
//         userLogged = await request(app)
//             .post('/login')
//             .send({
//                 username: "admin",
//                 password: "admin"
//             })

//         const response2 = await request(app)
//             .post("/company")
//             .send({
//                 cnpj: "27671571000104"
//             })

//         const response = await request(app)
//             .post('/admin')
//             .send({
//                 id_company: response2.body.id,
//                 username: "admin2",
//                 password: "admin2",
//                 name: "admin2",
//                 last_name: "Last_name2",
//                 email: "admin2@test.com"
//             })
//             id_admin = response.body.id;
        
//         expect(response.status).toBe(201)

//     })

//     it("Should be able to delete a admin", async () => {

//         const response = await request(app)
//             .delete("/admin")
//             .auth(userLogged._body.token, { type: 'bearer' })
//             .query({ id: id_admin })

//         expect(response.status).toEqual(200);
//     })

// })