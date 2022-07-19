const Intern = require("../lib/Intern")

describe('Intern', () => {
    describe('Intern Properties', () => {
        it('should return an object with name, id, email, and school', () => {
            const obj = new Intern('Cindy', 372, 'cindy@hotmail.com', 'Georgia Tech');

            expect(obj.name).toEqual('Cindy');
            expect(obj.id).toEqual(372);
            expect(obj.email).toEqual('cindy@hotmail.com');
            expect(obj.school).toEqual('Georgia Tech');
        });

    });

    describe('Intern Get Information', () => {
        it('should return an object with name, id, email, school and role', () => {
            const int = new Intern('Jason', 842, 'jason@aol.com', 'Georgia State', 'Intern');

            expect(int.getName()).toEqual('Jason');
            expect(int.getId()).toEqual(842);
            expect(int.getEmail()).toEqual('jason@aol.com');
            expect(int.getSchool()).toEqual('Georgia State');
            expect(int.getRole()).toEqual('Intern');
        })
    })
});