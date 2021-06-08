var userId, password, id, pass;
//----------Read Data---------//
function ready() {
  userId = document.getElementById('inputEmail1').value;
  password = document.getElementById('inputPassword1').value;
}
document.getElementById('loginbtn').onclick = function () {
  ready();
  firebase.database().ref('cutomer/' + userId).on('value', function (snapshot) {
    id = snapshot.val().registrationId;
    pass = snapshot.val().customerPassword;

    if (userId == id) {
      if (password == pass) {
        window.open("customerDashboard.html");
      }
      console.log('login Success');
    }
    else {
      console.log('login failed');
      alert('Incorrect userId or Password..!!!');
    }
  });
}