export default class Validator {
  static valdateUsername(oldName) {
    const re1 = /([^\w-]+)/;
    const re2 = /^[\d-_]+|[\d-_]$|(\d{3,})/;
    if ((!re1.test(oldName) && (!re2.test(oldName)))) {
      return oldName;
    } throw new Error('Invalid name');
  }
}
