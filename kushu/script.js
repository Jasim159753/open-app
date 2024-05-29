const soundEffects = [
  "res/fart1.mp3",
  "res/fart2.mp3",
  "res/fart3.mp3",
  "res/fart4.mp3",
];

document
  .getElementById("playSoundButton")
  .addEventListener("click", function () {
    const audio = new Audio(); // Create a new Audio object
    const randomSound =
      soundEffects[Math.floor(Math.random() * soundEffects.length)]; // Select a random sound
    audio.src = randomSound;
    audio
      .play()
      .catch((error) => console.error("Error trying to play audio:", error));
  });

function selectRandomLoader() {
  return "res/giphy.gif";
}

function hideLoaderAndShowContent() {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000);
}
document.getElementById("loaderImage").src = selectRandomLoader();
window.onload = function () {
  hideLoaderAndShowContent();
};
