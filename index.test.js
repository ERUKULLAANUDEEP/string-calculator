const add = require('./index');
describe('string-calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
    it('should return the same number for a single number string', () =>{
        expect(add('9')).toBe(9);
    });
    it('should return NAN for invalid string with a single number', () => {
        expect(add('a')).toBe(NaN);
    });
    it('should return sum of comma separated numbers', () => {
        expect(add('3,4')).toBe(7);
    });
    it('should handle new lines and comma between numbered string', () => {
        expect(add('2\n2,3')).toBe(7);
    })
});