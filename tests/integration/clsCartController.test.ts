'use strict';
const request = require('request');
import { Application } from './../../application'
const baseUrl = "http://localhost:3001";

describe('Test for cart class', () => {

    beforeAll(async (done) => {
        Application.run().then(() => {
            done();
        }).catch((error) => {

            console.log('Error :', JSON.stringify(error));
            process.exit(1);
        })
    });
    test('Scenario check server started or not ====>\n', async (done) => {
        request(baseUrl, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('Scenario post request ====>\n', async (done) => {

        let cart: any = {
            id: '3s3s3Dswe',
            items: [{ "name": "keyboard", "quantity": "1", "price": "20" },
            { "name": "mouse", "quantity": "1", "price": "20" }
            ],
            total: 35
        };
        let option: any = {
            json: JSON.stringify(cart),
            method: "POST",
            url: `${baseUrl}/api/v1/cart`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        request(option, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });

    });

    test('Scenario put request ====>\n', async (done) => {

        let cart: any = {
            id: '3s3s3Dswe',
            items: [{ "name": "keyboard", "quantity": "1", "price": "20" },
            { "name": "mouse", "quantity": "1", "price": "20" }
            ],
            total: 35
        };
        let option: any = {
            json: JSON.stringify(cart),
            method: "PUT",
            url: `${baseUrl}/api/v1/cart/${cart.id}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        request(option, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });

    });

    test('Scenario get request ====>\n', async (done) => {

        let option: any = {
            method: "GET",
            url: `${baseUrl}/api/v1/cart/233XAsw`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        request(option, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });

    });

    test('Scenario Delete request ====>\n', async (done) => {
        const id: string = '233XAsw';
        let option: any = {
            method: "DELETE",
            url: `${baseUrl}/api/v1/cart/${id}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        request(option, (error, response, body) => {
            console.log(body);
            body  = JSON.parse(body);
            expect(response.statusCode).toBe(200);
            expect(body.id).toBe(id);
            done();
        });

    });
});