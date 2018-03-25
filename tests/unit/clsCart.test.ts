'use strict';

import { ClsCart } from "./../../lib/clsCart"

describe('Test for cart class', () => {

    beforeAll(async (done) => {

        done();
    });

    test('Scenario sending invalid body object ====>\n', async (done) => {

        let cart: any = {
            id: undefined,
            items: [{ "name": "keyboard", "quantity": "1", "price": "20" },
            { "name": "mouse", "quantity": "1", "price": "20" }
            ],
            total: 35
        }
        let body: any = {
            cart: cart
        };

        ClsCart.addCart(body).then((data) => {
            expect(data.error.message).toBe('invalid para');
            done();
        });
    });

    test('Scenario sending valid body object ====>\n', async (done) => {
        let cart: any = {
            id: '3s3s3Dswe',
            items: [{ "name": "keyboard", "quantity": "1", "price": "20" },
            { "name": "mouse", "quantity": "1", "price": "20" }
            ],
            total: 35
        }
        let body: any = {
            cart: cart
        };

        ClsCart.addCart(body).then((data) => {
            expect(data.id).toBe(body.id);
            done();
        }).catch((error) => {

            done();
        })
    });
});

describe('Test for cart class for get cart ', () => {

    test('Scenario sending invalid query  object ====>\n', async (done) => {

        let cartId;
        ClsCart.getCart(cartId).then((data) => {
        }).catch((error) => {
            expect(error).toBe('invalid para');
            done();
        })
    });

    test('Scenario sending valid body object ====>\n', async (done) => {
        let cartId = 'ddwer3333';
        ClsCart.getCart(cartId).then((data) => {
            expect(data.id).toBe(cartId);
            done();
        });
    });
});