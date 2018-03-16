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
  console.log(text);
  el.innerHTML = (`
    ${text.text},
    ${text.person}
    ${Array.from({ length: text.excitement })
      .map(() => '!').join('')}
  `);
  return el;
}

document.body.appendChild(Greeting());
