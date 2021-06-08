//----------Ready Data-----------------//
var id, fnameV, mnameV, lnameV, addressV, phoneV, emailV, passV, cpassV;
function ready() {
  id = "id" + Math.random().toString(16).slice(2);
  fnameV = document.getElementById('fname').value;
  mnameV = document.getElementById('mname').value;
  lnameV = document.getElementById('lname').value;
  addressV = document.getElementById('address').value;
  phoneV = document.getElementById('cphone').value;
  emailV = document.getElementById('cemail').value;
  passV = document.getElementById('pass').value;
  cpassV = document.getElementById('cpass').value;
  console.log('values stored');
}
//--------Insert Data--------//
document.getElementById('insert').onclick = function () {
  ready();
  const data = {
    registrationId: id,
    firstName: fnameV,
    middleName: mnameV,
    lastName: lnameV,
    address: addressV,
    customerPhone: phoneV,
    customerEmail: emailV,
    customerPassword: cpassV
  }
  firebase.database().ref('cutomer/' + id).set(data, function (error) {
    if (error) {
      alert("Data could not be saved." + error);
    } else {
      alert("Data saved successfully.");
    }
  });
  console.log('values inserted');
}
//---------Confirm Password--------//
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
function validatePassword() {
  if (pass.value != cpass.value) {
    alert("Passwords Don't Match");
  } else {
    //alert('Passwords Matched ... !!')
  }
}
//pass.onchange = validatePassword;
cpass.onchange = validatePassword;
//---------Select Data----------//
document.getElementById('select').onclick = function () {
  ready();
  firebase.database().ref('cutomer/' + id).on('value', function (snapshot) {
    document.getElementById('fname').value = snapshot.val().firstName;
    document.getElementById('mname').value = snapshot.val().middleName;
    document.getElementById('lname').value = snapshot.val().lastName;
    document.getElementById('address').value = snapshot.val().address;
    document.getElementById('cphone').value = snapshot.val().customerPhone;
    document.getElementById('cemail').value = snapshot.val().customerEmail;
    document.getElementById('cpass').value = snapshot.val().customerPassword;
  });
  console.log('values fetched');
}
//--------Update Data--------//
document.getElementById('update').onclick = function () {
  ready();
  firebase.database().ref('customer/' + id).update({
    firstName: fnameV,
    middleName: mnameV,
    lastName: lnameV,
    address: addressV,
    customerPhone: phoneV,
    customerEmail: emailV,
    customerPassword: passV
  });
  console.log('values updated');
}
//--------Delete Data--------//
document.getElementById('delete').onclick = function () {
  ready();
  firebase.database().ref('customer/' + id).remove();
  console.log('values deleted');
}