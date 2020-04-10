# String

- [Basic](#basic)
	- [C](#c)
	- [C++ (Cpp)](#c-cpp)
	- [C# (Csharp)](#c-csharp)
	- [Java](#java)
	- [Rust](#rust)
	- [Go](#go)
	- [Javascript](#javascript)
	- [Typescript](#typescript)
	- [Python](#python)
- [String Operations](#string-operations)
- [Formatted](#formatted)
- [String Interpolation](#string-interpolation)
	- [C](#c-1)
	- [C++ (Cpp)](#c-cpp-1)
	- [C# (Csharp)](#c-csharp-1)
	- [Java](#java-1)
	- [Rust](#rust-1)
	- [Go](#go-1)
	- [Javascript](#javascript-1)
	- [Typescript](#typescript-1)
	- [Python](#python-1)

## Basic

### C

```C
#include <stdio.h>

// Main structure omitted

printf("Hello World\n"); // '\n' is the new line character
printf("Printing Integer: %d\n", 10);
printf("Printing Float: %f\n", 10.5);
printf("Printing Double: %lf\n", 20.5);
printf("Printing Character: %c\n", 'a'); // Single quote
printf("Printing String: %s\n", "my string");
printf("Printing Memory Address: %p\n", &variable_name);
printf("Printing Memory Address: %p\n", pointer_to_variable);
printf("Printing Octal: %o\n", 2567);
printf("Printing Hexadecimal (Letter in small letters): %x\n", 2567);
printf("Printing Hexadecimal (Letter in capital letters): %X\n", 2567);
printf("%s: %d %f", "More Printing", 30, 50.2);
```

### C++ (Cpp)

```Cpp
#include <iostream>
// Main structure omitted

std::cout << "Hello world!\n"; // '\n' is the new line character
std::cout << "Hello world!" << std::endl; // std::endl prints a newline character
std::cout << 10 << std::endl;
std::cout << "Printing Integer: " << 10 << '\n';
std::cout << "Printing Any Number: " << 20.5 << '\n';

std::cout << "Printing An Address: " << &variable_name << '\n';
std::cout << "Printing An Address: " << pointer_to_variable << '\n';
std::cout << "Printing Octal: "<< std::oct << 2567 << '\n';
std::cout << "Printing Hexadecimal (Letter in small letters): "<< std::hex << 2567 << '\n';
std::cout << "Printing Hexadecimal (Letter in capital letters): "<< std::hex << std::uppercase << 2567 << '\n';

std::cout << std::nouppercase << std::dec; // Resetting to default

std::cout << "More Printing " << 30 << ", " << 50.2 << '\n';

// Prefer '\n' over std::endl when outputting text to the console.
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/
> - http://www.cplusplus.com/forum/windows/51591/


```Cpp
#include <iostream>

// Main structure omitted

using namespace std;

cout << "Hello world\n";
cout << "Hello world" << endl;
cout << 10 << std::endl;
cout << "Printing Integer: " << 10 << '\n';
cout << "Printing Any Number: " << 20.5 << '\n';

cout << "Printing An Address: " << &variable_name << '\n';
cout << "Printing An Address: " << pointer_to_variable << '\n';
cout << "Printing Octal: "<< oct << 2567 << '\n';
cout << "Printing Hexadecimal (Letter in small letters): "<< hex << 2567 << '\n';
cout << "Printing Hexadecimal (Letter in capital letters): "<< hex << uppercase << 2567 << '\n';

cout << nouppercase << dec; // Resetting to default

cout << "More Printing " << 30 << ", " << 50.2 << '\n';

// Prefer '\n' over std::endl when outputting text to the console.
```

> \* https://www.geeksforgeeks.org/using-namespace-std-considered-bad-practice/

### C# (Csharp)

```Cs
using System;

// Main structure omitted

Console.Write("Hello World\n"); // '\n' is the new line character
Console.WriteLine("Hello World");
Console.WriteLine(10);
Console.WriteLine("Printing Integer: " + 10);
Console.WriteLine("Printing Any Number: " + 20.5);
Console.WriteLine("More Printing " + 20.5 + ", " + "50.2");
```

### Java

```Java
// Main structure omitted

System.out.print("Hello world\n"); // '\n' is the new line character
System.out.println("Hello world");
System.out.println("Printing Integer: " + 10);
System.out.println("Printing Any Number: " + 20.5);
System.out.println("More Printing " + 20.5 + ", " + "50.2");

```

### Rust

```Rust
// Todo
```

### Go

```Go
// Todo
```

### Javascript

```Javascript
console.log('Hello World\n'); // '\n' is the new line character
console.log("Hello World\n");
console.log(10);
console.log("Printing Integer: " + 10);
console.log("Printing Integer: ", 10);
console.log("Printing Integer: %d\n", 10);
console.log("Printing Float: %f\n", 20.5);
console.log("Printing Any Number: " + 20.5);
console.log("Printing Any Number: ", 20.5);
console.log("More Printing " + 20.5 + ", " + "50.2\n");
console.log("More Printing ", 20.5, ", ", "50.2\n");
console.log([1, 2, 3, 4]); // array
console.log({a:1, b:2, c:3}); // object
console.log("Printing a Object: %o\n", {a:1, b:2, c:3});
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/API/console
> - https://www.geeksforgeeks.org/console-in-javascript/

### Typescript

```Typescript
console.log('Hello World\n'); // '\n' is the new line character
console.log("Hello World\n");
console.log(10);
console.log("Printing Integer: " + 10);
console.log("Printing Integer: ", 10);
console.log("Printing Integer: %d\n", 10);
console.log("Printing Float: %f\n", 20.5);
console.log("Printing Any Number: " + 20.5);
console.log("Printing Any Number: ", 20.5);
console.log("More Printing " + 20.5 + ", " + "50.2\n");
console.log("More Printing ", 20.5, ", ", "50.2\n");
console.log([1, 2, 3, 4]); // array
console.log({a:1, b:2, c:3}); // object
console.log("Printing a Object: %o\n", {a:1, b:2, c:3});
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/API/console
> - https://www.geeksforgeeks.org/console-in-javascript/

### Python

```Python
print('Hello World')
print("Hello World\n", end='') # By default the print has '\n' appended after the last value, you can change it if you want.
print(10)
print("Printing Integer:", 10) # the ',' adds a space between the text and the value
print("Printing Float:", 20.5)
print("Printing Any Number:", 20.5)
print("More Printing", 20.5, ",", "50.2")
print([1, 2, 3, 4]) # array
print({"a":1, "b":2, "c":3}); # object
print({'a':1, 'b':2, 'c':3}); # object
print("Printing a Object: ", {"a":1, "b":2, "c":3})
```

## String Operations

TODO

## Formatted

TODO

## String Interpolation

### C

```C
// Not Available
```

### C++ (Cpp)

```Cpp
// Not Available
```

### C# (Csharp)

```Cs
// Example 1
string name = "Mark";
var date = DateTime.Now;
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");

// Example 2
string name = "Horace";
int age = 34;
Console.WriteLine($"{name} is {age} year{(age == 1 ? "" : "s")} old.");
```

> More Info: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated

### Java

```Java
// Todo
```

### Rust

```Rust
// Todo
```

### Go

```Go
// Todo
```

### Javascript

Also known as Template literals (ES specification) or Template strings (old name)

```Javascript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
`string text ${variable_name} string text ${variable_name} string text`
```

```Javascript
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

### Typescript

Also known as Template literals (ES specification) or Template strings (old name)

```Typescript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
`string text ${variable_name} string text ${variable_name} string text`
```

```Typescript
const a: number  = 5;
const b: number = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

### Python

Also known as f-Strings (3.6+)

```Python
# Example 1
name = "Eric"
age = 74
print(f"Hello, {name}. You are {age}.")

# Example 2
# TODO + Formating examples
```
