import { AppSetUp } from "./appsetUp";
let RSVP = require('rsvp');

export class Application {

  public  static run() {

        return new RSVP.Promise((res, rej) => {

            AppSetUp.init().then(()=>{
               res();
            }).catch((error)=>{
                rej(error);
            })
        });
    }
}

Application.run().then(()=>{

    console.log('server started : post no : 3001');
}).catch((error)=>{
     
    console.log('Error :',JSON.stringify(error));
})