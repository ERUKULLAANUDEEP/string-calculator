function extracteDelimiter(delimiterPart) {
    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
        /*
        This uses a regular expression to find all substrings inside the square brackets [...]. The pattern \[[^\]]+\] matches anything inside square brackets. The g flag is used to find all matches, not just the first one. slice remove the square brackets from the matched strings.
         */
        const extractedDelimiter = delimiterPart.match(/\[([^\]]+)\]/g).map((d) => d.slice(1, -1));
        /*
            The replace function adds backslashes (\) before special characters, so they are interpreted as literal characters when constructing the regular expression. The join function concatenates all the delimiters with the | operator, which acts as an OR operator in regular expressions. The final regular expression looks like this: /delimiter1|delimiter2|delimiter3/.
         */
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
    if (inputString === '') {
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
    const negativeNumbers = []
    const numberedArr = arr.map((num) => {
        if (num < 0) {
            negativeNumbers.push(num);
        }
        return parseInt(num);
    });
    if (negativeNumbers.length > 0) {
        throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
    return numberedArr.reduce((acc, cur) => acc + cur, 0);

}
module.exports = add;