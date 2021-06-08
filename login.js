var userId, password, id, pass;

//----------Read Data---------//
function ready() {
  userId = document.getElementById('inputEmail1').value;
  password = document.getElementById('inputPassword1').value;
  console.log(userId, password);
}
document.getElementById('loginbtn').onclick = function () {
  ready();
  firebase.database().ref('admin/').on('value', function (snapshot) {
    id = snapshot.val().userName;
    pass = snapshot.val().adminPassword;

    if (userId == id && password == pass) {
      console.log('login Success');
      window.open("adminDashboard.html");
    }
    else {
      alert('Incorrect userId or Password..!!!');
    }
  });
}