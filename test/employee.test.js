const Employee = require('../lib/employee');

describe('Employee', () => {
    // Test employee object is created
    describe('employee', () => {
        it('should create an employee object', () => {
            const employee = new Employee('Brad', 1, 'bslindsa@gmail.com');
            const name = employee.name;
            const id = employee.id;
            const email = employee.email;
    
            expect(name).toEqual('Brad');
            expect(id).toEqual(1);
            expect(email).toEqual('bslindsa@gmail.com');
        });
    });
    
    // Test getName()
    describe('getName', () => {
        it('should get employee name', () => {
            const employee = new Employee('Brad', 1, 'bslindsa@gmail.com');
            const name = employee.getName();
    
            expect(name).toEqual('Brad');
        });
    });
    
    // Test getID()
    describe('getID', () => {
        it('should get employee ID', () => {
            const employee = new Employee('Brad', 1, 'bslindsa@gmail.com');
            const id = employee.getID();
    
            expect(id).toEqual(1);
        });
    });
    
    // Test getEmail()
    describe('getEmail', () => {
        it('should get employee email', () => {
            const employee = new Employee('Brad', 1, 'bslindsa@gmail.com');
            const email = employee.getEmail();
    
            expect(email).toEqual('bslindsa@gmail.com');
        });
    });
    
    // Test getRole()
    describe('getRole', () => {
        it('should get employee role', () => {
            const employee = new Employee('Brad', 1, 'bslindsa@gmail.com');
            const role = employee.getRole();
    
            expect(role).toEqual('Employee');
        });
    });
});