// TODO: write your code here
import Validator from './basic';

const val1 = Validator.valdateUserPhone('8 (927) 000-00-00');
const val2 = Validator.valdateUserPhone('+7 960 000 00 00');
const val3 = Validator.valdateUserPhone('+86 000 000 0000 ');

console.log(`${val1} первый`);
console.log(`${val2} второй`);
console.log(`${val3} третий`);
