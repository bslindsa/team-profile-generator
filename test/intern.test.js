const Intern = require('../lib/intern');

describe('Intern', () => {
    // Test intern object is created
    describe('intern', () => {
        it('should create an intern object', () => {
            const intern = new Intern('Brad', 1, 'bslindsa@gmail.com', 'Arizona State University');
            const name = intern.name;
            const id = intern.id;
            const email = intern.email;
            const school = intern.school;

            expect(name).toEqual('Brad');
            expect(id).toEqual(1);
            expect(email).toEqual('bslindsa@gmail.com');
            expect(school).toEqual('Arizona State University');
        });
    });
    // Test getSchool
    describe('getSchool', () => {
        const intern = new Intern('Brad', 1, 'bslindsa@gmail.com', 'Arizona State University');
        const school = intern.getSchool();

        expect(school).toEqual('Arizona State University');
    });
    // Test getRole()
    describe('getRole', () => {
        it('should get intern role', () => {
            const intern = new Intern('Brad', 1, 'bslindsa@gmail.com', 'Arizona State University');
            const role = intern.getRole();
    
            expect(role).toEqual('Intern');
        });
    });
});