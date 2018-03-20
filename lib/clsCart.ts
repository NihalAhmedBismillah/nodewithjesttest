
let RSVP = require('rsvp');
import { logs } from './logger';

export class ClsCart {

    // i am playing with dummy data only
    public static addCart(cart: any) {

        return new RSVP.Promise((res, rej) => {

            if (cart && cart.id) {
                // TODO : call data base function to save card
               logs.info('hello  ');
                res(cart);
            } else {
                res({ error: { message: 'invalid para' } });
            }
        });

    }

    public static getCart(cartId: string) {

        return new RSVP.Promise((res, rej) => {

            if (cartId) {
                // TODO : call data base function to save card
                res({ id: cartId });
            } else {
                rej('invalid para');
            }
        });

    }


}
