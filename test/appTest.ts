import {assert} from 'chai';

const port = 3000

describe('Api Port', () => {
    it('the server should run on the port 3000', () => {
        assert.equal(port, 3000)
    });
});