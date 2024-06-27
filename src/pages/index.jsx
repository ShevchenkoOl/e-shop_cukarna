import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HomePage } from './components/HomePage';

const response = await fetch("http://localhost:4000/api/dorty");
const json = await response.json();
const dorty = json.data;


document.querySelector('#root').innerHTML = render(
  <>
   <HomePage dorty={dorty}/>
  </>
);

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    window.location.href = `detail.html?id=${id}`;
  });
});

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    window.location.href = `index.html`;
  });
});