function selectAllData(){
  firebase.database().ref('admin/').once('value',
  function(allRecords){
    var username = allRecords.val().userName;
    var password = allRecords.val().adminPassword;
    addItemstoTable(username,password);
  });
}
window.onload = selectAllData;
function addItemstoTable(username, password){
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  td1.innerHTML = username;
  td2.innerHTML = password;
  trow.appendChild(td1);
  trow.appendChild(td2);
  tbody.appendChild(trow);
}