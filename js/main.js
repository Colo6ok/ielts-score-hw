"use strict";

let isEnter = confirm("Enter your IELTS scores below.")
let isReading = +prompt("♦Reading♦");
let isWriting = +prompt("♦Writing♦");
let isSpeaking = +prompt("♦Speaking♦");
let isListening = +prompt("♦Listening♦");

let totalMark = isReading + isWriting + isSpeaking + isListening;

console.log(Math.round(totalMark / 4));
// document.write(Math.round(totalMark / 4));