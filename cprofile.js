function addItemstoList(loginId, first_Name, middle_Name, last_Name, phoneNo, emailId, password_, address_) {
  var ul = document.getElementById('list');
  //var header = document.createElement('h2');
  var registration_Id = document.createElement('li');
  var first_name = document.createElement('li');
  var middle_name = document.createElement('li');
  var last_name = document.createElement('li');
  var contact_no = document.createElement('li');
  var email_id = document.createElement('li');
  var _password = document.createElement('li');
  var _address = document.createElement('li');

  registration_Id.innerHTML = 'Login Id : ' + loginId;
  first_name.innerHTML = 'First Name : ' + first_Name;
  middle_name.innerHTML = 'Middle Name : ' + middle_Name;
  last_name.innerHTML = 'Last Name : ' + last_Name;
  contact_no.innerHTML = 'Contact No : ' + phoneNo;
  email_id.innerHTML = 'Email Id : ' + emailId;
  _password.innerHTML = 'Password : ' + password_;
  _address.innerHTML = 'Address : ' + address_;

  ul.appendChild(registration_Id);
  ul.appendChild(first_name);
  ul.appendChild(middle_name);
  ul.appendChild(last_name);
  ul.appendChild(contact_no);
  ul.appendChild(email_id);
  ul.appendChild(_password);
  ul.appendChild(_address);
}
function fetchedAllData() {
  firebase.database().ref('cutomer/idf75c7f736086c').once('value', function (snapshot) {
    let loginId = snapshot.val().registrationId;
    let first_Name = snapshot.val().firstName;
    let middle_Name = snapshot.val().middleName;
    let last_Name = snapshot.val().lastName;
    let phoneNo = snapshot.val().customerPhone;
    let emailId = snapshot.val().customerEmail;
    let password_ = snapshot.val().customerPassword;
    let address_ = snapshot.val().address;
    addItemstoList(loginId, first_Name, middle_Name, last_Name, phoneNo, emailId, password_, address_);
  });
}
window.onload = fetchedAllData;
