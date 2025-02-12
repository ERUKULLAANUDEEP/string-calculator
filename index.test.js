const add = require('./index');
describe('string-calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
    it('should return the same number for a single number string', () => {
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
    it('should handle custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    })
    it("should return the sum of numbers with custom delimiter of any length", () => {
        expect(add("//[###]\n4###5###6")).toBe(15);
    });
    it("should return the sum of numbers with multiple custom delimiters", () => {
        expect(add("//[;][#]\n4;5#6")).toBe(15);
    });
    it("should return the sum of numbers with multiple custom delimiters of any length", () => {
        expect(add("//[;;][##]\n4;;5##6")).toBe(15);
    });
    it("should throw an error if a single number is passed with delimiter", () => {
        expect(() => add("1\n")).toThrow(
            "Invalid input: single number with delimiter",
        );
    });
    it("should throw an error when negative numbers are passed", () => {
        expect(() => add("//;\n1;-2;3;-4")).toThrow(
            "negatives not allowed: -2, -4",
        );
    });
});