import Validator from '../basic';

test('tel validator', () => {
  const val1 = Validator.valdateUserPhone('8 (927) 000-00-00');
  const val2 = Validator.valdateUserPhone('+7 960 000 00 00');
  const val3 = Validator.valdateUserPhone('+86 000 000 0000 ');
  expect(val1).toMatch('+79270000000');
  expect(val2).toMatch('+79600000000');
  expect(val3).toMatch('+860000000000');
});
