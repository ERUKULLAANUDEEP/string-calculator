# string-calculator
This is a string calculator which supports delimiter and custom delimiter and provides the sum of numbers

Custom delimiter will start with "//" : "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.

Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".

To find how the input and output looks like, please go through index.test.js

