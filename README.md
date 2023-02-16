# basics-starting-code

<!-- 
- Can put script tags at the end of the html code so that the browser renders the html page before executing script. 

- Order in which you execute scripts matters
 -->

 # Variables & Constants

Variables are a data container/data storage.
Created by using the "let" keyword, name, = , and the value. 
Variables and Constants should be declared before you use them. Typically at the top of the file. Otherwise you might run into errors. 

> let userName = "max";

Constants are also a data container but it is created with the "const" keyword. The value cannot be changed. 

> const totalUsers = 15;

use constants as often as possible (whenever you actually get data that never changes) to be clear about your intentions in your code. 

JS is CASE-SENSITIVE

In JS you do NOT have to initialize a variable with a value. 

## Operators

Mathematical characters that allow us to manipulate values ( +, -, *, /, % = remainder, ** = exponentation, '=')

* `+`
* `-`
* `/`
* `*`
* `%` -> modulus returns the remainder
* `**` -> exponentation ( 2 ** 3 = 8)
* `+=`, `-=`, `/=`, `*=` -> performs calculation and re-assign result to variable.
* `++`, `--` -> Increment/decrement -> used to add one or subtract one and reasign to variable.

## Data Types

- Numbers => 2, -3, 22.956
- String (text) => "Hi", 'Hello World!', `Hello` 
- Float => numbers with decimal points
- Boolean => true or false statements
- Objects => `{name: 'Max', age: 31}` => Important for grouped/related data, helps you organize data in key:value pairs. 
- Arrays (typeof Object) => `[1, 3, 4]` => list for unknown amounts of data.
- Null (typeof Object) => Never assumed by default. You can assign this to a value if you want to "reset"/"clear" a variable. 
- Undefined => Default value of uninitialized variables 
> Should NEVER assign undefined as a value manually.
- NaN (typeof Number) => "Not a Number" Technically, it's of type number and can therefore be used in calculations. It yields a new NaN and it's the result of a invalid calculation (e.g. 3 * "hi"). 

HTML code is executed from top to bottom. If the script tag is placed in the middle of the page, the JS code is then parsed, compiled, and then executed top to bottom. 

### Template Literal

``${expression} or ${variable}``

Allows you to include dynamic values within a string. `` also allows you to use multi-line quotes.

### Functions

When the browser loads the script, it read/parses it from top to bottom. Takes the functions and pulls them from the top. So you can call a function before it is written in code. 

> You can access any variable defined outside the function (Global Variables). 

1. Define Function

`function greetUser(name) {
    alert('Hi ' + name);
}`

You can (but don't have to) use parameters (name) and you can return values (return). 

2. Call Function

`greetUser('Max');`

### Custom Functions

Variables created within the function body are only available within that function. They cease to exist outside of the function body. 

Indirect vs. Direct Function Execution:
* Direct Function Execution is when you call the function and it executes immediately 

    `add();`
* Indirect Function Execution is when you tell the program to call the function later on in the code, usually when the user does something (i.e. event listener).

    `addBtn.addEventListener("click", add);`

### Built-in Functions

* `alert();`
* `addEventListener();`
* `parseInt();` -> parse a string and will convert to a whole number.
* `parseFloat();` -> parse a string and will convert to a number with decimal places. 
* `toString();` -> converts a number to a string.

### Global & Local/Block Scope

Global -> Variables declared outside any function have global scope. Global variables can be accessed from anywhere in a JS Program. 
Local/Block Scope -> Any variable declared within a function or code block (if, for, etc). 

> Shadowing Variables occurs when a variable is declared in a certain scope and has the same name as a variable in an outer scope. The outer variable is said to be shadowed by the inner variable. 

### Arrays

`arrayName.push(data)` -> adds the data to the array.
`arrayName[0]` -> retrieves the value at the first index.

### Objects

```
const objectName = { 
    Key: 'Value',  
}
```

Values are separated from Keys by `:` and every key/value pair is separated from another key/value pair by `,`. 
Uses dot notation to access properties from the object. 

#### External Scripts
> Defer Attribute => is a boolean value used to indicate that script is executed after the document has been parsed. (Only used if you have an external script)

`<script src="assets/scripts/app.js" defer></script>`

> Async Attribute => a boolean value used to specify the script will be executed asynchronously as soon as it is available. (Only used if you have an external script)

`<script src="assets/scripts/vendor.js" async></script>`

# Conditional Code Execution

### Boolean Operators

Boolean operators are used to compare two data types to each other. Returns true or false. 

* `==` -> check for value equality 
* `!=` -> Check for value inequality
* `===` -> Check for value and type equality
* `!==` -> Check for value and type inequality
* `> & <` -> Check for value being greater/smaller 
* `>= & <=` -> Check for value being greater or equal/smaller or equal
* `!` -> Check if NOT true

JavaScript compares strings based on standard lexicographical ordering, using Unicode values. ( b > a == true ). JS always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters. 

> 'ab' > 'aa' // true

> 'a' > 'B' // true

> 'a' > 'b' // false

### AND vs. OR

* `AND or &&` -> conditions are evaluated together and only yields true if both conditions are true.
* `OR or ||` -> conditions are evaluated separately yields true if ONE of the conditions are true. 

`conditionsA AND conditionB || conditionC` -> if condition A and C are true then the expression yields true even if condition b is false. 

### Operator Precedence

Operator Precedence determines the way in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence. 

PEMDAS -> order of operation. 

> MDN doc
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


#### Comparing Objects and Arrays: 

`{ name: 'Max' } === or == { name: 'Max' }` 

This returns FALSE because JavaScript doesn't compare the values, it compares the object in memory. 

### Falsy Truthy Values

JS tries to coerce values to a Boolean value if a Boolean is required. Any value is truthy unless they are defined as falsy. 

Falsy Values:

* `0` == Falsy
* `""` == Falsy
* `Null`
* `Undefined`
* `NaN`

Truthy Values:

* ANY number > 0
* ANY non-empty string
* {}
* []
* Objects
* Arrays

### Coercion vs. Conversion

Type Coercion is the automatic or implicit conversion of values from one datatype to another. Whereas Type Conversion is the explicit conversion of value from one datatype to another. 

```
var x = 10 + '20'
console.log(x);
```

Output: 1020 => 10 is automatically converted to a string and then concatenated. 

```
var w = 10 - '5';
console.log(w);
```

Output: 5 -> '5' is automatically converted to a number. 

```
var x = true + 2;
var y = false + 2;
console.log(x);
console.log(y);
```

Output: 3 (True is converted to one and then added to 2) and 2 (false is converted to 0 and then added to two). 






