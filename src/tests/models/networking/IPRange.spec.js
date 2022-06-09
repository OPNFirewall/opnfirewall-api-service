import assert from 'assert';
import Errors from '../../../globals/Errors.js';
import IPRange from '../../../models/networking/IPRange';

describe('IPRange', () => {
    describe('constructor', () => {
        it('Basic functionality: Should be created successfully', () => {
            const range = new IPRange('192.168.0.20', '192.168.0.40');

            assert.equal(range.from, '192.168.0.20');
            assert.equal(range.to, '192.168.0.40');
        });
    });

    describe('validate()', () => {
        it('Returns no error when the IPRange contains two valid IP-Adresses', () => {
            assert.equal(new IPRange('192.168.0.20', '192.168.0.40').validate(), true);
        });

        it('Returns error when the IPRange contains one or more invalid IP-Adresses', () => {
            assert.equal(new IPRange('foobar', '192.168.178.123').validate().errorcode, Errors.invalidIPAddress.errorcode);
            assert.equal(new IPRange('192.168.178.123', 'foobar').validate().errorcode, Errors.invalidIPAddress.errorcode);
            assert.equal(new IPRange('41.foobar.31.21', 'foobar').validate().errorcode, Errors.invalidIPAddress.errorcode);
        });
    });
});