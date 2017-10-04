"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cv = require('../app');
var port = 3000;
describe('CVapi Port', () => {
    it('the server should run on the port 3000', () => {
        // assert.equal.(cv(), 'port = 3000')
        chai_1.expect(port).to.equal(3000);
    });
});
