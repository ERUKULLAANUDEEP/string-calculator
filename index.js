const add = (inputString) => {
  if(inputString === '') {
    return 0;
  }
  const arr = inputString.split(',');
  const numberedArr = arr.map((num) => {
    return parseInt(num);
  });
  return numberedArr.reduce((acc, cur) => acc + cur, 0);
   
}
module.exports = add;