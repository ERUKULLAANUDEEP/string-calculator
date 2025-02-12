const add = (inputString) => {
  if(inputString === '') {
    return 0;
  } else {
    return parseInt(inputString); // This will also handle invalid input string
  }
}
module.exports = add;