const add = require('./index');
describe('string-calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    })
    it('should return the same number for a single number string', () =>{
        expect(add('9')).toBe(9);
    })
});