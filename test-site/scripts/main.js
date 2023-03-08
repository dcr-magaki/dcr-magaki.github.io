const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/windows.png') {
    myImage.setAttribute('src', 'images/linux.png');
  } else {
    myImage.setAttribute('src', 'images/windows.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = () => {
  setUserName();
}

function setUserName() {
  const myName = prompt(`あなたの名前を入力してください。`);
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `こんにちは、${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `こんにちは、${storedName}`;
}

