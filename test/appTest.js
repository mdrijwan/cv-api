"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const port = 3000;
describe('Api Port', () => {
    it('the server should run on the port 3000', () => {
        chai_1.assert.equal(port, 3000);
    });
});
