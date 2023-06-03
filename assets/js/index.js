const generateCaptchaButton = document.getElementById("generateCaptchaButton");

generateCaptchaButton.addEventListener("click", generateCaptcha);

const recaptchaForm = document.getElementById("recaptcha-form");
recaptchaForm.addEventListener("submit", checkCAPTCHA);

function checkCAPTCHA(e) {
	e.preventDefault();
	const userInput = document.getElementById("captcha-input").value;

	const output = document.getElementById("output");
	if (userInput != captchaText) {
		output.innerHTML = `
        <div class="danger my-p-3">
        Invalid
        </div>
        `;
	} else {
		output.innerHTML = `
        <div class="my-success my-p-3">
        Success
        </div>
        `;
	}
}
