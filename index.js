const password = document.querySelector("#password");
const button = document.querySelector("#generate");
//const passwordLength = document.querySelector("#count");
const passwordLength = document.querySelector("#count");
const checkInput = document.querySelector("#yes");

const charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const newcharset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

function generatePassword(length) {
  //console.log(length);
  length = Number(passwordLength.value);
  if (!length) length = 20;
  let result = [];
  for (let i = 0; i < length; i++) {
    if (checkInput.checked === true) {
      result += charset.charAt(Math.random() * charset.length);
    } else if (checkInput.checked === false) {
      result += newcharset.charAt(Math.random() * newcharset.length);
    }
  }
  return result;
}

button.addEventListener("click", function () {
  const result = generatePassword();
  password.value = result;
});

window.addEventListener("load", function () {
  const result = generatePassword();
  password.value = result;
});
