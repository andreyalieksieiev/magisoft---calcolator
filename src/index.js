import Parser from './script/parser/Parser';
import { add } from './script/core';
import { substract } from './script/substract';
import { multiply } from './script/multiply';
import { divide } from './script/divide';

import '../src/styles/style.scss';

const p = new Parser();

const input_text = document.querySelector('.item input');
const container = document.querySelector('.container');

const evaluateAsFloat = (code) => {
    const evaluate = (obj) => {
        switch (obj.type) {
          // case "number":  return parseInt(obj.value);
          case "number":  return Number(obj.value);
          case "+":  return add(evaluate(obj.left), evaluate(obj.right));
          case "-":  return substract(evaluate(obj.left), evaluate(obj.right));
          case "*":  return multiply(evaluate(obj.left), evaluate(obj.right));
          case "/":  return divide(evaluate(obj.left), evaluate(obj.right));
        // todo: добавить остальные операции, написать на них тесты 
          default: obj;
          console.log('obj: ', obj);
          return obj;
        }
        
    }
    return evaluate(p.parse(code));
}

const handler = (e) => {
  const value = e.target.innerText;
  if (value === '=') {
    handlerValue(input_text.value);
    return;
  } else if (value === 'C') {
    clean();
    return;
  } else if (value === '>') {
    minus()
  }
  if (value !== '>') {
    input_text.value = input_text.value + e.target.innerText;
  }
}

const minus = () => input_text.value = input_text.value.slice(0, -1);

const clean = () => {
  input_text.value = '';
}

const handlerValue = (value) => {
  clean();
  if (value) {
      p.resetPosition();
      input_text.value = evaluateAsFloat(value);
    } 
     
}

container.addEventListener('click', handler);
