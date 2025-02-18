/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

//membuat variabel loginformElement untuk tampilan form
const loginFormElement = document.querySelector('#loginForm');
// membuat variabel inputEmailElement untuk tampilan input email
const inputEmailElement = document.querySelector('#inputEmail');
// membuat variabel inputPasswordElement untuk tampilan input password
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  // membuat variebel email untuk menyimpan nilai email yang didapatkan saat button ditekan
  const email = inputEmailElement.value;
  // membuat variebel password untuk menyimpan nilai password yang didapatkan saat button ditekan
  const password = inputPasswordElement.value;
  // memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan.
  if (email == expectedEmail && password == expectedPassword) {
    // jika sesuai maka tampilkan halaman home.
    goToHome();
  } else {
    showPopUp();
  }
});
