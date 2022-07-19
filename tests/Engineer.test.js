const Engineer = require("../lib/Engineer")

describe('Engineer', () => {
    describe('Engineer Properties', () => {
        it('should return an object with name, id, email, and github', () => {
            const obj = new Engineer('Sandy', 99, 'sandy@yahoo.com', 'sandy234');

            expect(obj.name).toEqual('Sandy');
            expect(obj.id).toEqual(99);
            expect(obj.email).toEqual('sandy@yahoo.com');
            expect(obj.github).toEqual('sandy234');
        });

    });

    describe('Engineer Get Information', () => {
        it('should return an object with name, id, email, github and role', () => {
            const eng = new Engineer('Chris', 421, 'chris@gmail.com', 'chris568', 'Engineer');

            expect(eng.getName()).toEqual('Chris');
            expect(eng.getId()).toEqual(421);
            expect(eng.getEmail()).toEqual('chris@gmail.com');
            expect(eng.getGithub()).toEqual('chris568');
            expect(eng.getRole()).toEqual('Engineer');
        });
    });
});