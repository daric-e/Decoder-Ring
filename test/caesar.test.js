// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe('ceasar()',() => {
    it("should return false if shift is 0, less than -25, or greater than 25", () => {
        const actual = caesar("abcd", 30, true)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it('should leave spaces and symbols as is', () => {
        const input = 'happy birthday!';
        const shift = 2
        const expected = 'jcrra dktvjfca!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('should ignore capital letters',() => {
        const input = 'happy birthday!';
        const shift = 2
        const expected = 'jcrra dktvjfca!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('should wrap around to the front of the alphabet',() => {
        const input = 'zebra magazine';
        const shift = 3
        const expected = 'cheud pdjdclqh';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

})