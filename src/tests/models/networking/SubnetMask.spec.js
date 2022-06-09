import SubnetMask from '../../../models/networking/SubnetMask.js';
import assert from 'assert';
import Errors from '../../../globals/Errors.js';

describe('SubnetMask', () => {
  describe('Constructor', () => {
    it('Basic functionality: Should be created successfully', () => {
      assert.equal(new SubnetMask(24).cidr, 24);
    });
  });

	describe('get netmask()', () => {
		it('Returns the correct netmask', () => {
			assert.equal(new SubnetMask(24).netmask, '255.255.255.0');
			assert.equal(new SubnetMask(25).netmask, '255.255.255.128');
		});
	});

	describe('validate()', () => {
		it('Returns no error when the SubnetMask is correct', () => {
			const subnetMask = new SubnetMask(24);
			const validationValue = subnetMask.validate();

			assert.equal(validationValue, true);
		});

		it('Returns error when the SubnetMask is incorrect', () => {
			const subnetMask = new SubnetMask(42);
			const validationValue = subnetMask.validate();

			assert.equal(validationValue.errorcode, Errors.subnetNotInRange.errorcode);
		});
	});
});
