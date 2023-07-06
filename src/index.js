import { InputDate } from './weekday';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleForm() {
  event.preventDefault();
  const date = new Date(document.querySelector("input").value);
  if (date.toString() === 'Invalid Date') {
    document.querySelector("p").setAttribute('class', 'error');
    document.querySelector("p").innerText = 'Invalid date.';
  }
  else {

    const dayOfWeek = date.getDay();
    const inputDate = new InputDate(date, dayOfWeek);
    document.querySelector("p").removeAttribute('class');
    document.querySelector("p").innerText = inputDate.getDayName();
  }
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});