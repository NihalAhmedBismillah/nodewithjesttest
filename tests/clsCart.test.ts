'use strict';

import { ClsCart } from "./../lib/clsCart"

describe('Test for cart class', () => {

    beforeAll(async (done) => {

        done();
    });

    test('Scenario sending invalid body object ====>\n', async (done) => {

        let body: any = {
            id: undefined,
            productList: [{ name: 'adfasd' }, { name: 'adfae33' }]
        };

        ClsCart.addCart(body).then((data) => {
            expect(data.error.message).toBe('invalid para');
            done();
        });
    });

    test('Scenario sending valid body object ====>\n', async (done) => {

        let body: any = {
            id: 'adfat33',
            productList: [{ name: 'adfasd' }, { name: 'adfae33' }]
        };

        ClsCart.addCart(body).then((data) => {
           expect(data.id).toBe(body.id);
            done();
        }).catch((error)=>{
         
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