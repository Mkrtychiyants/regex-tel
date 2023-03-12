// import './css/style.css';

// import './js/app';

// TODO: write your code in app.js

class Validator {
  static valdateUserPhone(oldPhone) {
    const re1 = /\d/g;
    const re2 = /\D(?= )?/g;
    const res1 = oldPhone.match(re1);
    const res2 = oldPhone.match(re2);
    let newPhone = '';
    if (res2[0] === ' ') {
      res1.shift();
      res1.unshift('+7');
      newPhone = res1.join('');
    }
    if (res2[0] === '+') {
      res1.unshift('+');
      newPhone = res1.join('');
    }
    return newPhone;
  }
}

const val1 = Validator.valdateUserPhone('8 (927) 000-00-00');
const val2 = Validator.valdateUserPhone('+7 960 000 00 00');
const val3 = Validator.valdateUserPhone('+86 000 000 0000 ');
console.log(`${val1} первый`);
console.log(`${val2} второй`);
console.log(`${val3} третий`);
