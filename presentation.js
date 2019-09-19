function Presentation() {

  this.business = new BusinessLayer();

  this.displayHtml = () => {
    var body = $("body");

    var containerDiv = $("<div>").addClass("container");
    body.prepend(containerDiv);

    var registerDiv = $("<div>").addClass("box-50");
    var loginDiv = $("<div>").addClass("box-50");

    var registerUsername = $("<input type = 'email'>").attr("placeholder", "Username");
    var registerPassword = $("<input type='password'>").attr("placeholder", "Password");
    var registerBtn = $("<button>").text("Register");

    var loginUsername = $("<input type = 'email'>").attr("placeholder", "Enter your Username");
    var loginPassword = $("<input type='password'>").attr("placeholder", "Enter your Password");
    var loginBtn = $("<button>").text("Sign IN");

    loginDiv.append(loginUsername);
    loginDiv.append(loginPassword);
    loginDiv.append(loginBtn);
    registerDiv.append(registerUsername);
    registerDiv.append(registerPassword);
    registerDiv.append(registerBtn);

    containerDiv.append(registerDiv);
    containerDiv.append(loginDiv);


    body.prepend($("<hr>"));
    var header = $("<header>");
    body.prepend(header);

    var title = $("<h1>").text("Bonds manager");
    header.append(title);


    registerBtn.on("click", () => {
      registerUser();
    })

    loginBtn.on("click", () => {
      // if(localStorage.getItem(loginUsername.val()) === loginPassword.val()){
      //   //var body = $("body").html("");
      //   window.open("index2.html", "_blank");
      // }else{
      //     document.write("Wrong password");
      // }
      loginUser();
    })

    var registerUser = () => {
      var userName = registerUsername.val();
      var password = registerPassword.val();
      var userObject = {
        userName: userName,
        password: password
      };
      var users = JSON.parse(localStorage.getItem("users"));
      //console.log(users);
      if (users === null) {
        var niza = [];
        niza.push(userObject);
        localStorage.setItem("users", JSON.stringify(niza));
      } else {
        for (var i = 0; i < users.length; i++) {
          if (users[i].userName === userObject.userName) {
            alert("ISTI USERNAME");
          }
        }
        users.push(userObject);
        localStorage.setItem("users", JSON.stringify(users));
      }
    }

    var loginUser = () => {
      var loginUserName = loginUsername.val();
      var loginPassWord = loginPassword.val();
      var users = JSON.parse(localStorage.getItem("users"));
      for (var i = 0; i < users.length; i++) {
        if (
          users[i].userName === loginUserName &&
          users[i].password === loginPassWord
        ) {
          //alert(`Welcome ${users[i].userName}`);
          window.open("index2.html", "_blank");
          //this.displayHtmlData();
          break;
        }
      }
    };
  }
};

