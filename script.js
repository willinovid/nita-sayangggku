const quotes = [
  "Kamu luar biasa, jangan lupa itu!",
  "Aku percaya kamu bisa lewatin semuanya.",
  "Jangan terlalu keras sama diri sendiri ya.",
  "Kalo capek, peluk aku lewat pikiran.",
  "Semangat terus, aku bangga sama kamu!",
  "Aku selalu ada buat kamu, kapan pun itu."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
