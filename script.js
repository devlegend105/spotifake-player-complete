// JS resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript
// DOM resource: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

let songs = [];
let currentSong = 0;
const colors = [
  "Aqua",
  "Aquamarine",
  "Blue",
  "BlueViolet",
  "Chartreuse",
  "Coral",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkMagenta",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DeepPink",
  "FireBrick",
  "Fuchsia",
  "GreenYellow",
  "Lime"
];

const title = document.querySelector("h1");
const input = document.querySelector("input");
const label = document.querySelector("label");
const play = document.querySelector("#play");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const player = document.querySelector("audio");
player.volume = 0.4;

input.onchange = getSongs;
next.onclick = nextSong;
prev.onclick = prevSong;

function getSongs(event) {
  songs = event.target.files; // save all the files to the songs arr
  playSong(); // play the first song
  label.innerText = songs[currentSong].name.slice(0, -4);
  title.innerText = "Spotifake Player 🤘";
}

function playSong() {
  let song = URL.createObjectURL(songs[currentSong]); // create temp url for a song to set the src of <audio>
  label.innerText = songs[currentSong].name.slice(0, -4); // show the song name
  // label.style.color = colors[Math.floor(Math.random()*colors.length)] // optional
  // label.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]   // optional
  // document.querySelector("body").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]   // optional
  player.setAttribute("src", song); // add the src of the <audio>
  play.innerText = "⏸"; // change the button from play to pause
  player.play(); // start playing the song
  play.onclick = pause; // set the button to pause next time it is clicked
}

function pause() {
  play.innerText = "▶"; // change symbol from pause to play
  player.pause(); // pause song
  play.onclick = playCurrent; // set the button to play next time it is clicked
}

function playCurrent() {
  play.innerText = "⏸"; // change symbol from play to pause
  player.play(); // play song
  play.onclick = pause; // set the button to pause next time it is clicked
}

function nextSong() {
  if (currentSong + 1 <= songs.length - 1) {
    // optional
    currentSong++;
    playSong();
  }
}

function prevSong() {
  if (currentSong - 1 >= 0) {
    // optional
    currentSong--;
    playSong();
  }
}
