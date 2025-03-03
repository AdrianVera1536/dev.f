document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const copyBtn = document.getElementById("copyBtn");
    const generateBtn = document.getElementById("generateBtn");
    const lengthSlider = document.getElementById("length");
    const lengthValue = document.getElementById("lengthValue");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeLowercase = document.getElementById("includeLowercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

    lengthSlider.addEventListener("input", () => {
        lengthValue.textContent = lengthSlider.value;
    });

    function generatePassword() {
        let charset = "";
        let password = "";
        const length = parseInt(lengthSlider.value);

        if (includeUppercase.checked) charset += uppercaseChars;
        if (includeLowercase.checked) charset += lowercaseChars;
        if (includeNumbers.checked) charset += numberChars;
        if (includeSymbols.checked) charset += symbolChars;

        if (charset.length === 0) {
            alert("Selecciona al menos un tipo de carácter.");
            return;
        }

        for (let i = 0; i < length; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }

        passwordField.value = password;
    }

    generateBtn.addEventListener("click", generatePassword);

    copyBtn.addEventListener("click", () => {
        passwordField.select();
        document.execCommand("copy");
        alert("¡Contraseña copiada al portapapeles!");
    });

    generatePassword();
});
