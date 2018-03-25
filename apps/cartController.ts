let RSVP = require('rsvp');
import { logs } from '../lib/logger';
export class CartController {


    public static init(app) {

        return new RSVP.Promise((res, rej) => {

            app.post('/api/v1/cart', (req, res) => {

                let bodyData = req.body;
                //TODO: Save data in database.
                res.send(bodyData);
            });
            app.get('/api/v1/cart/:id', (req, res) => {
                //TODO:Get data from database
                let cart: any = {
                    id: '3s3s3Dswe',
                    items: [{ "name": "keyboard", "quantity": "1", "price": "20" },
                    { "name": "mouse", "quantity": "1", "price": "20" }
                    ],
                    total: 35
                };
                res.json(cart);
            });
            app.put('/api/v1/cart/:id', (req, res) => {
                let bodyData: any = req.body;
                let id: string = req.params.id;
                //TODO: Save data in database.
                res.send(bodyData);
            });
            app.delete('/api/v1/cart/:id', (req, res) => {
                //TODO:Delete data from database
                let id: string = req.params.id;
                res.json({ id: id, message: 'record deleted' });
            });

            app.get('/', (req, res) => {

                res.send('server started on post 3001');
            });
            res();
        })
    }
}
