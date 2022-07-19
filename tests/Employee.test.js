const Manager = require("../lib/Employee")

describe('Manager', () => {
    describe('Manager Properties', () => {
        it('should return an object with name, id, and email', () => {
            const obj = new Manager('Paul', 104, 'paul@aol.com');

            expect(obj.name).toEqual('Paul');
            expect(obj.id).toEqual(104);
            expect(obj.email).toEqual('paul@aol.com')
        });
    });

    it("should thorw an error if a an empty string or 0 is the user input", () => {
        const cb = () => new Manager(" ", 0, " ");
        const err = new Error("Expected parameters of name and email should not be empty");

        expect(cb).toThrowError(err);
    });
});