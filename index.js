function extracteDelimiter(delimiterPart) {
    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
        const extractedDelimiter = delimiterPart.match(/\[([^\]]+)\]/g).map((d) => d.slice(1, -1));
        return new RegExp(
            extractedDelimiter.map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"))

    } else {
        return new RegExp(delimiterPart.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    }
}

const checkSingleNumberWithDelimiter = (inputString) => {
    const regex = /^\d+[\n,;*#]$/; //This regex checks for a single number with a delimiter
     if (regex.test(inputString)) {
        throw new Error("Invalid input: single number with delimiter");
    }
}

const add = (inputString) => {
  if(inputString === '') {
    return 0;
  }
  checkSingleNumberWithDelimiter(inputString);
  let delimiter = /[,\n]/;
  const hasCustomDelimiter = inputString.startsWith("//");
  if (hasCustomDelimiter) {
      const parts = inputString.split("\n");
      const delimiterPart = parts[0].slice(2);
      delimiter = extracteDelimiter(delimiterPart);
      inputString = parts[1];
  }

  const arr = inputString.split(delimiter);
  const numberedArr = arr.map((num) => {
    return parseInt(num);
  });
  return numberedArr.reduce((acc, cur) => acc + cur, 0);
   
}
module.exports = add;