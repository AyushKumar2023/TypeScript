var UserNamespace;
(function (UserNamespace) {
    class Auth {
        login() {
            console.log("User logged in");
        }
    }
    UserNamespace.Auth = Auth;
    function getList() {
        console.log("Getting list");
    }
    UserNamespace.getList = getList;
})(UserNamespace || (UserNamespace = {}));
var AdminNamespace;
(function (AdminNamespace) {
    class Auth {
        login() {
            console.log("Admin logged in");
        }
    }
    AdminNamespace.Auth = Auth;
    function getList() {
        console.log("Getting list");
    }
    AdminNamespace.getList = getList;
})(AdminNamespace || (AdminNamespace = {}));
var user8 = new UserNamespace.Auth();
user8.login();
UserNamespace.getList();
export {};
