"use strict";

const captchaDiv = document.getElementById("captcha-text");
var captchaText = "";

function generateRandom(min = 0, max = 100) {
	let difference = max - min;
	let rand = Math.random();
	rand = Math.floor(rand * difference);
	rand = rand + min;

	return rand;
}

function changeOrientation() {
	// Set direction for text orientation
	const rand = Math.floor(Math.random() * 100);
	const sign = rand % 2 == 0 ? "-" : "";

	// Set random degree for text orientation
	captchaDiv.style.transform = `rotate(${sign}${generateRandom(0, 40)}deg)`;
}

function generateCaptcha() {
	const n = 4;
	const allowedCharacters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Resetting the captchaText to generate a new one
	captchaText = "";
	for (let i = 0; i < n; i++) {
		captchaText += allowedCharacters.charAt(
			Math.random() * allowedCharacters.length
		);
	}

	changeOrientation();
	captchaDiv.innerText = captchaText;
}

generateCaptcha();
