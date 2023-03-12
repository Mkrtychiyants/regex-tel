export default class Validator {
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
