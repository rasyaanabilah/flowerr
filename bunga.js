onload = () => {
  // Sembunyikan halaman bunga, tampilkan gift screen
  document.getElementById("flower-container").style.display = "none";
  document.getElementById("gift-screen").style.display = "flex";

  // Tombol buka hadiah
  const btn = document.getElementById("open-gift");
  const audio = document.getElementById("bg-music");
  const flower = document.getElementById("flower-container");
  const giftScreen = document.getElementById("gift-screen");

  if (btn && audio && flower && giftScreen) {
    btn.onclick = () => {
      giftScreen.style.display = "none";
      flower.style.display = "block";
      setTimeout(() => {
        document.body.classList.remove("not-loaded");
        audio.play();
      }, 500);
    };
  }
};
