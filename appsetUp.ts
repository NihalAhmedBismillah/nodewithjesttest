let RSVP = require('rsvp');
let express = require('express');
import { CartController } from './apps/cartController';
let async = require('async'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    methodOverride = require('method-override');

class middleWare {

    public static init(app) {

        return new RSVP.Promise((res, rej) => {

            app.use(logger('dev'));
            app.set('view engine', 'ejs');
            app.use(logger('dev'));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(methodOverride('_method'));
            res();
        })
    }

}



export class AppSetUp {

    public static init() {

        return new RSVP.Promise((res, rej) => {
            let app = express();
            middleWare.init(app).then(() => {
                return CartController.init(app);
            }).
                then(() => {
                    const PORT = 3001;
                    app.listen(PORT);
                    res(true);
                }).
                catch((error) => {
                    rej(error);
                });
        });
    }
}
