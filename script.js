//DOM Elements variables----------------------------------------->
const inputTextElement = document.getElementById("textoParaEncriptar");
const encryptButtonElement = document.getElementById("encriptarBtn");
const decryptButtonElement = document.getElementById("desencriptarBtn");
const resultTextElement = document.getElementById("textoEncriptado");
const copyButtonElement = document.getElementById("copiarBtn");
const noResultContainer = document.getElementById("noResult");
const resultTextContainer = document.getElementById("resultText");

// Constants -------------------------------------------------->
const PLACEHOLDER_TEXT = "Ingrese el texto aqui";

//Event Listeners-------------------------------------------------->

// Clear placeholder
inputTextElement.addEventListener("focus", () => {
  inputTextElement.placeholder = "";
  if (inputTextElement.value === "") {
    showNoMessageFound(true);
  }
});

// Reset placeholder
inputTextElement.addEventListener("blur", () => {
  inputTextElement.placeholder = PLACEHOLDER_TEXT;
});

// Copy text
copyButtonElement.addEventListener("click", copyText);

// Encrypt text
encryptButtonElement.addEventListener("click", () => {
  const text = inputTextElement.value;
  if (text === "") {
    noTextFound();
    return;
  }
  const encryptedText = encrypt(text);
  resultTextElement.value = encryptedText;
  showNoMessageFound(false);
});

// Decrypt text
decryptButtonElement.addEventListener("click", () => {
  const text = inputTextElement.value;
  if (text === "") {
    noTextFound();
    return;
  }
  const decryptedText = decrypt(text);
  resultTextElement.value = decryptedText;
  showNoMessageFound(false);
});

//Functions -------------------------------------------------->

// Encrypt text function
function encrypt(text) {
  const encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

// Decrypt text function
function decrypt(text) {
  const decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

// Copy text function
function copyText() {
  const text = resultTextElement.value;
  try {
    navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles");
  } catch (error) {
    alert("Error al copiar el texto");
  }
}

// Show message function
function showNoMessageFound(bool) {
  noResultContainer.style.display = bool ? "flex" : "none";
  resultTextContainer.style.display = bool ? "none" : "flex";
}

// No text found alert function
function noTextFound() {
  showNoMessageFound(true);
  noResultContainer.style.backgroundColor = "yellow";
  setTimeout(() => {
    noResultContainer.style.backgroundColor = "white";
  }, 500);
}
