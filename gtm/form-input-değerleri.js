//------------- Örnek Custom JavaScript değişkeni.
function () {
  try {
    var name = document.querySelector('input[name="your-name"]').value
      , company = document.querySelector('input[name="your-company"]').value
      , email = document.querySelector('input[name="your-email"]').value
      , phone = document.querySelector('input[name="your-phone"]').value
      , contactButtons = document.querySelectorAll('input[name="iletisim-tercihi"]')
      , contactPreference = 'Phone';
    Array.prototype.forEach.call(contactButtons, function(button) {
      if (button.getAttribute('checked') === 'checked') {
        contactPreference = button.getAttribute('value');
      }
    })
    return [
      ['name=', name],
      ['company=', company],
      ['email=', email],
      ['phone=', phone],
      ['cpref=', contactPreference]
    ]
      .map(function(param) {return param.join('')})
      .join('&');
  } catch (e) {
    return false;
  }
}
