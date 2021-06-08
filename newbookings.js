function selectAllData() {
  firebase.database().ref('bookings/').once('value',
  function (allsnapshot) {
    allsnapshot.forEach(
      function(element){
        let bookingid = element.val().bookingId;
        let eventtype = element.val().bookingType;
        let eventplace = element.val().bookingPlace;
        let noofguest = element.val().bookingGuest;
        let eventdate = element.val().bookingDate;
        let eventequipment = element.val().bookingEquipment;
        let eventfoodtype = element.val().bookingFoodType;
        let eventdecoration = element.val().bookingDecoration;
        let bapprove = element.val().approve;
        if(bapprove==1){
          approvedItemstoList(bookingid, eventtype, eventplace, noofguest, eventdate, eventequipment, eventfoodtype, eventdecoration);
        } else {
          rejectedItemstoList(bookingid, eventtype, eventplace, noofguest, eventdate, eventequipment, eventfoodtype, eventdecoration);
        }
      }
    );
  });
}
window.onload = selectAllData;

function approvedItemstoList(bookingid, eventtype, eventplace, noofguest, eventdate, eventequipment, eventfoodtype, eventdecoration) {
  var tbody = document.getElementById('tbody1');

  var trow = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  
  td1.innerHTML = bookingid;
  td2.innerHTML = eventtype;
  td3.innerHTML = eventplace;
  td4.innerHTML = noofguest;
  td5.innerHTML = eventdate;
  td6.innerHTML = eventequipment;
  td7.innerHTML = eventfoodtype;
  td8.innerHTML = eventdecoration;
  
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);

  tbody.appendChild(trow);
}

function rejectedItemstoList(bookingid, eventtype, eventplace, noofguest, eventdate,eventequipment, eventfoodtype, eventdecoration) {
  var tbody = document.getElementById('tbody2');

  var trow = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Approve';
  button.id = 'approve';
  button.className = 'btn-styled';
  button.addEventListener('click', approve_status);

  var button1 = document.createElement('button');
  button1.type = 'button';
  button1.innerHTML = 'Reject';
  button1.id = 'reject';
  button1.className = 'btn-styled';
  button1.addEventListener('click', reject_status);
  
  td1.innerHTML = bookingid;
  td2.innerHTML = eventtype;
  td3.innerHTML = eventplace;
  td4.innerHTML = noofguest;
  td5.innerHTML = eventdate;
  td6.innerHTML = eventequipment;
  td7.innerHTML = eventfoodtype;
  td8.innerHTML = eventdecoration;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(button);
  trow.appendChild(button1);

  tbody.appendChild(trow);
}

function approve_status() {
  firebase.database().ref('bookings/').once('value',
  function (allsnapshot) {
    allsnapshot.forEach(
      function(element){
        let bookingid = element.val().bookingId;

        firebase.database().ref('bookings/' + bookingid).update({approve : 1, reject : 0}, function (error) {
          if (error) {
            alert("Data could not be saved." + error);
          } else {
            alert("Booking updated successfully.");
          }
        });

      }
    );
  });
}

function reject_status() {
  firebase.database().ref('bookings/').once('value',
  function (allsnapshot) {
    allsnapshot.forEach(
      function(element){
        let bookingid = element.val().bookingId;

        firebase.database().ref('bookings/' + bookingid).update({reject : 1, approve : 0}, function (error) {
          if (error) {
            alert("Data could not be saved." + error);
          } else {
            alert("Booking updated successfully.");
          }
        });
      }
    );
  });
}