//----------- Örnek Custom JavaScript değişkeni.
function() {
  var imageURL = 'https://script.google.com/macros/s/AKfycbzZOWVITxWHjnjcTl3jX-JL_-DwnMA1oHmbidvxaxaxasAS/exec?'
    + {{Form Bilgileri}}
    + '&clid='
    + {{ClientId Değerleri}};
  return decodeURIComponent(imageURL);
}
