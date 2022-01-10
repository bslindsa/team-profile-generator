const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    // Test engineer object is created
    describe('engineer', () => {
        it('should create an engineer object', () => {
            const engineer = new Engineer('Brad', 1, 'bslindsa@gmail.com', 'bslindsa');
            const name = engineer.name;
            const id = engineer.id;
            const email = engineer.email;
            const github = engineer.github;

            expect(name).toEqual('Brad');
            expect(id).toEqual(1);
            expect(email).toEqual('bslindsa@gmail.com');
            expect(github).toEqual('bslindsa');
        });
    });
    // Test getGithub
    describe('getGithub', () => {
        const engineer = new Engineer('Brad', 1, 'bslindsa@gmail.com', 'bslindsa');
        const github = engineer.getGithub();

        expect(github).toEqual('bslindsa');
    });
    // Test getRole()
    describe('getRole', () => {
        it('should get engineer role', () => {
            const engineer = new Engineer('Brad', 1, 'bslindsa@gmail.com');
            const role = engineer.getRole();
    
            expect(role).toEqual('Engineer');
        });
    });
});