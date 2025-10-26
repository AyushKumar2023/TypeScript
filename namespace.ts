namespace UserNamespace {
  export class Auth {
    login() {
      console.log("User logged in");
    }
  }

  export function getList() {
    console.log("Getting list");
  }
}

namespace AdminNamespace {
  export class Auth {
    login() {
      console.log("Admin logged in");
    }
  }

  export function getList() {
    console.log("Getting list");
  }
}


var user8=new UserNamespace.Auth();
user8.login();
UserNamespace.getList();