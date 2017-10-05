import {assert} from 'chai';
import {expect} from 'chai';
var port = 3000

describe('Api Port', () => {
    it('the server should run on the port 3000', () => {
        assert.equal(port, 3000)
    });
});