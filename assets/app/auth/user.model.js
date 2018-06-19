var User = /** @class */ (function () {
    function User(email, password, firstName, lastName, 
        // public phonenumber?: string,
        // public address?: string,
        location) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    return User;
}());
export { User };
