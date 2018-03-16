import './idb';
import './styles/index.css';
const App = document.getElementById('app');

const Greeting = () => {
  const formula = {
    text: 'Greetings',
    excitement: 3
  }

  const text = {
    ...formula,
    person: 'stranger'
  }
  const el = document.createElement('div');
  el.innerHTML = (`
    ${text.text},
    ${text.person}
    ${Array.from({ length: text.excitement })
      .map(() => '!').join('')}
  `);
  return el;
}

App.appendChild(Greeting());
