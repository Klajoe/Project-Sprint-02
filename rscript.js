document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Formun varsayılan davranışını engelle
  
      // Giriş alanlarını kontrol et
      var fullName = document.getElementById('fullName').value;
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var birthdate = document.getElementById('birthdate').value;
  
      var errorElement = document.querySelector('.error');
      if (errorElement) {
        errorElement.remove(); // Hata mesajını temizle
      }
  
      if (!fullName || !username || !email || !birthdate) {
        var error = document.createElement('p');
        error.className = 'error';
        error.textContent = 'Lütfen tüm alanları doldurun.';
        registrationForm.insertBefore(error, registrationForm.lastElementChild);
        return;
      }
  
      if (!email.endsWith('@gmail.com')) {
        var error = document.createElement('p');
        error.className = 'error';
        error.textContent = 'Geçerli bir Gmail adresi girin.';
        registrationForm.insertBefore(error, registrationForm.lastElementChild);
        return;
      }
  
      // Kayıt işlemini burada gerçekleştir
      // Örneğin, formu başka bir şekilde işleme alma veya sunucuya gönderme
  
      alert('Kayıt işlemi başarılı!');
    });
  });
  