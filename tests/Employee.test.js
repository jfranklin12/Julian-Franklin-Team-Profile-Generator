const Employee = require("../lib/Employee")
// test employee properties
describe('Employee', () => {
    describe('Employee Properties', () => {
        it('should return an object with name, id, and email', () => {
            const obj = new Employee('Paul', 104, 'paul@aol.com');

            expect(obj.name).toEqual('Paul');
            expect(obj.id).toEqual(104);
            expect(obj.email).toEqual('paul@aol.com');
        });

    });
// test employee getters
    describe('Employee Get Information', () => {
        it('should return an object with name, id, email and role', () => {
            const emp = new Employee('Sam', 23, 'sam@aol.com', 'Employee');

            expect(emp.getName()).toEqual('Sam');
            expect(emp.getId()).toEqual(23);
            expect(emp.getEmail()).toEqual('sam@aol.com');
            expect(emp.getRole()).toEqual('Employee');
        })
    })
});