'use strict';
const request = require('request');
import { app } from './../../appsetUp';

request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });