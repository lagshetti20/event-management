//----------Ready Data-----------------//
var nameV, addressV, contactV, capacityV, typeV, priceV, imgV, imgUrl;
var files = [];
var reader;
function ready() {
  nameV = document.getElementById('vname').value;
  addressV = document.getElementById('address').value;
  contactV = document.getElementById('contact').value;
  capacityV = document.getElementById('capacity').value;
  typeV = document.getElementById('type').value;
  priceV = document.getElementById('price').value;
  console.log('values stored');
}
//--------------------Upload Image-----------------//
document.getElementById('selectImg').onclick = function (e) {
  var input = document.createElement('input');
  input.type = 'file';
  input.click();
  input.onchange = e => {
    files = e.target.files;
    reader = new FileReader();
    reader.onload = function () {
      document.getElementById('venuImg').src = reader.result;
    }
    reader.readAsDataURL(files[0]);
  }
}

//--------Insert Data--------//
document.getElementById('addVenu').onclick = function () {
  ready();
  imgV = document.getElementById('vname').value;
  var uploadTask = firebase.storage().ref('Images/' + imgV + ".jpeg").put(files[0]);

  uploadTask.on('state_changed', function (snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.getElementById('upProgress').innerHTML = 'Upload' + progress + '%';
  },
    function (error) {
      alert('error in saving the image');
    },
    function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
        imgUrl = url;
        firebase.database().ref('venu/' + nameV).set({
          venuName: nameV,
          venuAddress: addressV,
          phoneNo: contactV,
          capacity: capacityV,
          preferedFor: typeV,
          price: priceV,
          imageName: imgV,
          imageUrl: imgUrl
        });
        alert('image added successfully');
      }
      );
    });
  console.log('values inserted');
}