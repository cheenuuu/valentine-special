function sayYes() {
  const firstPage = document.getElementById("firstPage");
  const secondPage = document.getElementById("secondPage");
  const img = document.getElementById("loveImg");
  const song = document.getElementById("loveSong");

  // Start music
  song.play();

  // Hide first page
  firstPage.style.display = "none";

  // Show second page
  secondPage.style.display = "block";

  // Animate image
  setTimeout(() => {
    img.classList.add("show");
  }, 500);
}
