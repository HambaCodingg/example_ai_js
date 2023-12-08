function getResponse() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  // Aturan-aturan sederhana berdasarkan input pengguna
  if (input.toLowerCase().indexOf("hai") !== -1) {
    output.innerHTML = "Halo! Apa kabar?";
  } else if (input.toLowerCase().indexOf("siapa nama kamu") !== -1) {
    output.innerHTML = "Nama saya Danish Athaya NataSurendra.";
  } else if (input.toLowerCase().indexOf("apa yang bisa kamu lakukan") !== -1) {
    output.innerHTML =
      "Saya adalah Program Kecerdasan Buatan Sederhana dan Bisa Memberikan Respon Berdasarkan Input Anda.";
  } else if ( input.toLowerCase().indexOf("apakah kamu memiliki kelemahan?") !== -1) {
    output.innerHTML = "Saya Memiliki Kelemahan yakni tidak bisa menganalisa data.";
  } else if (input.toLowerCase().indexOf("sampai jumpa") !== -1) {
    output.innerHTML = "Sampai jumpa! Semoga Harimu Menyenangkan.";
  } else {
    output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
  }
}
