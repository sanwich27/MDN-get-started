const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/02_fix.jpg') {
    myImage.setAttribute('src','images/混帳，你的油都沾到我身上了.jpg');
  } else {
    myImage.setAttribute('src','images/02_fix.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `${myName}, May I help you?`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `${storedName}, May I help you?`;
}

myButton.onclick = () => {
  setUserName();
}