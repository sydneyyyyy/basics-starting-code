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

## Data Types

- Numbers => 2, -3, 22.956
- String (text) => "Hi", 'Hello World!', `Hello` 


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

### Built-in Functions

* alert();
* addEventListener();

### Global & Local/Block Scope

Global -> Variables declared outside any function have global scope. Global variables can be accessed from anywhere in a JS Program. 
Local/Block Scope -> Any variable declared within a function or code block (if, for, etc). 

> Shadowing Variables occurs when a variable is declared in a certain scope and has the same name as a variable in an outer scope. The outer variable is said to be shadowed by the inner variable. 











