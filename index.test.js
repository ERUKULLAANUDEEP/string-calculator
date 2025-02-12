const add = require('./index');
describe('string-calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    })
});