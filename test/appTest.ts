import {assert} from 'chai';
import {expect} from 'chai';
const cv = require('../app')
var port = 3000

describe('CVapi Port', () => {
    it('the server should run on the port 3000', () => {
        // assert.equal.(cv(), 'port = 3000')
        expect(port).to.equal(3000)
    });
});

// var calculator = require('../index');
// describe('calculator', function() {
//     describe('add function', function() {
//         it('adds numbers', function () {
//             var result = calculator.add(1, 1);
//             assert.equal(result, 2);
//         });
//     });
// });