let RSVP = require('rsvp');
import { logs } from '../lib/logger';
export class CartController {


    public static init(app) {

        return new RSVP.Promise((res, rej) => {

            app.post('/api/v1/cart', (req, res) => {

                console.log('I am in post :');
                res.send('post');
            });
            app.get('/api/v1/cart/:id', (req, res) => {
                console.log('I am in post :');
                res.send('get');
            });
            app.put('/api/v1/cart/:id', (req, res) => {
                console.log('I am in post :');
                res.send('put');
            });
            app.delete('/api/v1/cart/:id', (req, res) => {
                console.log('I am in post :');
                res.send('delete');
            });

            app.get('/', (req, res) => {
             
                res.send('server started on post 3001');
            });
            res();
        })
    }
}
