var id, eid, etype, eplace, imgsrc, eguest, edate, eequipment, efood, edecoration;
function ready() {
  id = "id" + Math.random().toString(16).slice(2);
  eid = document.getElementById('bid').innerHTML = id;
  etype = document.getElementById('type').value;
  eplace = document.getElementById('venu').value;
  eguest = document.getElementById('bguest').value;
  edate = document.getElementById('bdate').value;
  eequipment = document.getElementById('bequipment').value;
  efood = document.getElementById('bfood').value;
  edecoration =document.getElementById('bdecoration').value;

  console.log('values stored');
}
ready();
document.getElementById('bsearch').addEventListener('click', bookanevent);

function bookanevent() {
  ready();
  const data = {
    bookingId : eid,
    bookingType : etype,
    bookingPlace : eplace,
    bookingGuest : eguest,
    bookingDate : edate,
    bookingEquipment : eequipment,
    bookingFoodType : efood,
    bookingDecoration : edecoration,
    approve:0,
    reject:0,
  }
  // email sending 
  Email.send({
    Host: "smtp.gmail.com",
    Username : "namilagshetti18@gmail.com",
    Password : "vinoda@12345",
    To : 'namilagshetti18@gmail.com',
    From : "namilagshetti18@gmail.com",
    Subject : "Booking Details",
  })
  .then(function(message){
    alert("Mail sent successfully")
  });
  // inseting data in firebase
  firebase.database().ref('bookings/' + id).set(data, function (error) {
    if (error) {
      alert("Data could not be saved." + error);
    } else {
      alert("Booking completed successfully.");
      //window.open("paymentpage.html");
    }
  });
  console.log('values inserted');
}