const num = process.env.NUM || 32;

const randomChar = () => {
  //UTF-8 printable char range: 33 - 126
  let num = Math.round(Math.random() * 93 + 33);
  switch(num) {
    case 39: // single quote '
    case 34: // double quote "
    case 96: // backtick `
    case 47: // forward slash /
    case 64: // at sign @
      return randomChar();
      break;
    default:
      return String.fromCharCode(num);
      break;
  }
}

const generatePassword = (n) => {
  let pw = '';
  while(n--) {
    pw += randomChar();
  }
  return pw;
}

console.log('password: ',generatePassword(num));
