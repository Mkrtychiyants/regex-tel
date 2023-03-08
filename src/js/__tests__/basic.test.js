import Validator from '../basic';

test('name validator', () => {
  const val1 = Validator.valdateUsername('UnbeatableBoss');
  expect(val1).toMatch('UnbeatableBoss');
  expect(() => { Validator.valdateUsername('0UnbeatableBoss'); }).toThrow(Error);
});
