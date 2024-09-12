import { html, render } from 'lit-html';
import logo from './logo2.svg';

class App {
  result = '';

  constructor() {
    this.#render();
  }

  #calculate = (operation) => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      this.result = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case '+':
          this.result = num1 + num2;
          break;
        case '-':
          this.result = num1 - num2;
          break;
        case '*':
          this.result = num1 * num2;
          break;
        case '/':
          this.result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
          break;
        default:
          this.result = 'Unknown operation';
      }
    }
    this.#render();
  };

  #render() {
    let body = html`
      <main>
        <img src="${logo}" alt="Logo" />
        <br /><br />
        <form id="calc-form" action="javascript:void(0);" class="container">
        <div>
          <label for="num1">Enter a Number: &nbsp;</label>
          <input id="num1" type="text" />
          </div>
          <br /><br />
          <div>
          <label for="num2">Enter another Number: &nbsp;</label>
          <input id="num2" type="text" />
          </div>
          <br /><br />
          <div>
          <button type="button" @click=${() => this.#calculate('+')}>+</button>
          <button type="button" @click=${() => this.#calculate('-')}>-</button>
          <button type="button" @click=${() => this.#calculate('*')}>*</button>
          <button type="button" @click=${() => this.#calculate('/')}>/</button>
          </div>
        </form>
        <section id="result">Result: ${this.result}</section>
      </main>
    `;
    render(body, document.getElementById('root'));
  }
}

export default App;
