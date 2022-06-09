import assert from 'assert';
import DHCPDHost from '../../../../models/networking/dhcpd/DHCPDHost';

describe('DHCPDHost', () => {
    describe("constructor", () => {
        it('Basic functionality: Should be created successfully', () => {
            const host = new DHCPDHost("CE-64-A7-79-C1-F0", "192.168.0.123", "FooBar");

            assert.equal(host.macAdress, "CE-64-A7-79-C1-F0");
            assert.equal(host.ip, "192.168.0.123");
            assert.equal(host.description, "FooBar");
        });
    });
});