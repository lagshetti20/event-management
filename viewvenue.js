function addItems(cost, image) {
  var p = document.getElementById('vcost');

  var c = document.createElement('label');

  c.innerHTML = cost;
  p.appendChild(c);
}

function fetchData() {
  firebase.database().ref('venu/Balaji Sarovar').once('value', function (snapshot) {
    let cost = snapshot.val().price;
    document.getElementById('venuImg').src = snapshot.val().imageUrl;

    addItems(cost);
  });
}
window.onload = fetchData;