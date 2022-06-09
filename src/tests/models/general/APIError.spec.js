import assert from 'assert';
import APIError from '../../../models/general/APIError';

describe('APIError', () => {
    describe('constructor', () => {
        it('Basic functionality: Should be created successfully', () => {
            const apiError = new APIError(42, 'FooBar');

            assert.equal(apiError.errorcode, 42);
            assert.equal(apiError.description, 'FooBar');
        });
    });
});