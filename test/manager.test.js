const Manager = require('../lib/manager');

describe('Manager', () => {
    // Test manager object is created
    describe('manager', () => {
        it('should create an manager object', () => {
            const manager = new Manager('Brad', 1, 'bslindsa@gmail.com', 1);
            const name = manager.name;
            const id = manager.id;
            const email = manager.email;
            const officeNumber = manager.officeNumber;

            expect(name).toEqual('Brad');
            expect(id).toEqual(1);
            expect(email).toEqual('bslindsa@gmail.com');
            expect(officeNumber).toEqual(1);
        });
    });
    // Test getOffice()
    describe('getOffice', () => {
        const manager = new Manager('Brad', 1, 'bslindsa@gmail.com', 1);
        const officeNumber = manager.getOffice();

        expect(officeNumber).toEqual(1);
    });
    // Test getRole()
    describe('getRole', () => {
        it('should get managerrole', () => {
            const manager = new Manager('Brad', 1, 'bslindsa@gmail.com', 1);
            const role = manager.getRole();
    
            expect(role).toEqual('Manager');
        });
    });
});