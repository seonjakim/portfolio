// let test = document.createElement('div');
let test = document.querySelector('body');

import './styles/style.css'

test.innerHTML = `
<div style="display:flex;">
  <textarea id="inputHtml" rows="20" cols="50"></textarea>
  <div id="result" style="border:1px solid black; width: 50vw; height: 30vh;"></div>
</div>
`;

let test2 = document.body.querySelector("#result");
let test1 = document.body.querySelector("#inputHtml");
let text = null;
test1.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  let test3;
  if (text === null) {
    text = e.target.value;
    test3 = document.createElement('h1');
    test3.innerText = e.target.value;
    test2.appendChild(test3);
  } else {
    text = e.target.value;
    document.querySelector('h1').remove();
    test3 = document.createElement('h1');
    // test3 = document.createElement('h1');
    test3.innerText = e.target.value;
    test2.appendChild(test3);
  }
})
