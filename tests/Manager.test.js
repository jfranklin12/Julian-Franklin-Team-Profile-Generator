const Manager = require("../lib/Manager")
// test employee properties
describe('Manager', () => {
    describe('Manager Properties', () => {
        it('should return an object with name, id, email, and office number', () => {
            const obj = new Manager('Nick', 85, 'nick@aol.com', 1);

            expect(obj.name).toEqual('Nick');
            expect(obj.id).toEqual(85);
            expect(obj.email).toEqual('nick@aol.com');
            expect(obj.officeNumber).toEqual(1)
        });

    });
// test employee getters
    describe('Manager Get Information', () => {
        it('should return an object with name, id, email, office number, and role', () => {
            const man = new Manager('Jim', 45, 'jim@aol.com', 2, 'Manager');

            expect(man.getName()).toEqual('Jim');
            expect(man.getId()).toEqual(45);
            expect(man.getEmail()).toEqual('jim@aol.com');
            expect(man.getOfficeNumber()).toEqual(2);
            expect(man.getRole()).toEqual('Manager');
        })
    })
});