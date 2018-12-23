//------------- Örnek script.
function () {
	try {
		var name = document.querySelector('input[name="your-name"]').value;
		var company = document.querySelector('input[name="your-company"]').value;
		var email = document.querySelector('input[name="your-email"]').value;
		var phone = document.querySelector('input[name="your-phone"]').value;
		var contactButtons = document.querySelectorAll('input[name="iletisim-tercihi"]');
		var contactPreference = 'Phone';
		[].forEach.call(contactButtons, function(button) {
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
