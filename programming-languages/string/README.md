# String

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

## C

```C
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// No native string type
// In C, strings are an array of characters
// This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[21]; // 20 + 1 from the '\0' character.
char variable_name[81] = "Hi"; // Doesnt need to fill it all at once
char variable_name[81] = {'H','i'};


// No need to include '\0' here. The compiler inserts it at the end of the array for us.
char variable_name[] = "Some string";
char *variable_name = "Some string";

// Const Declaration
const char MY_CONSTANT[] = "Something";
const char *MY_CONSTANT = "Something";


// ------------------------------------
// Direct Access (Array-Like)
// ------------------------------------
char myString[] = "Hi";
myString[1] = 'o';

// ------------------------------------
// Size / Length
// ------------------------------------
#include<string.h> // For strlen(), strnlen_s(), strnlen()

int length = strlen(myString); // Not safe. Undefined Behavior if "myString" is missing null-terminated byte

// strnlen_s() - Since C11
// strnlen_s takes a parameter for the maximum number of characters to scan.
// This way, it won't overflow the buffer you provide it if there's no trailing null byte

int length = strnlen_s(myString, sizeof myString); // Yet, Might not work in every compiler

// strnlen()
int length = strnlen(myString, sizeof myString);


// ------------------------------------
// Trim
// ------------------------------------
// TODO

// ------------------------------------
// Transform
// ------------------------------------
// TODO

// ------------------------------------
// Compare
// ------------------------------------
#include<string.h> // For strcmp(), strncmp()

int result = strcmp(string1, string2); // Beware, Undefined Behavior if any string is missing null-terminated byte
// result == 0, indicates string1 is equal to string2.
// result < 0, indicates string1 is less than string2.
// result > 0, indicates string2 is less than string1.

int result = strncmp(string1, string2, count); // count = maximum number of characters to compare.

// From StackOverflow:
// Using strncmp you can limit the search, so that it doesn't reach non-accessible memory.
// But, from that it should not be concluded that strcmp is insecure to use. Both the
// functions works well in the way they are intended to work.
//
// strncmp does not have "advantages over strcmp"; rather they solve different problems.
// strcmp is for determining if two strings are equal (and if not, possibly how to
// order/sort them with respect to each other). strncmp is (mainly) for determining
// whether a string begins with a particular prefix. For example:
if (strncmp(str, "--option=", 9)==0) { /**/ }


// ------------------------------------
// Copy / Clone
// ------------------------------------
#include<string.h> // For strcpy(), strncpy(), strncpy_s()

char* originalSring = "Hi";
char* copyString[10];

strcpy(copyString, originalSring); // Not safe. Does not specify the size of the destination array, so buffer overrun is often a risk

strncpy(copyString, originalSring, count);  // Not safe. "strncpy()" does not guarantee that the destination string will be NULL terminated.
// count = maximum number of characters to copy. count Could also be "sizeof copyString"

// strncpy_s - Since C11
strncpy_s(copyString, sizeof copyString, originalSring, (sizeof copyString)-1); // strncpy_s unlike strncpy is a null terminated string function



// ------------------------------------
// Concatenation
// ------------------------------------
#include<string.h> // For strcat(), strcat_s(), strncat_s()

strcat(mainString, addString); // Not Safe
// The behavior is undefined if the destination array is not large enough for the contents
// of both src and dest and the terminating null character.
// The behavior is undefined if the strings overlap.
// The behavior is undefined if either dest or src is not a pointer to a null-terminated
// byte string.


// strcat_s - Since C11
// TODO


//strncat_s - Since C11
// TODO


// ------------------------------------
// String Interpolation
// ------------------------------------
// Not Available


// ------------------------------------
// Print / Output
// ------------------------------------
#include <stdio.h> // For printf

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


// ------------------------------------
// Advanced Format
// ------------------------------------

// Floating point precision
// TODO


// Width
// TODO


// Left-justifying
// TODO


// Integer zero-fill
// TODO

```

> More Info:
> - https://en.cppreference.com/w/c/string/byte/strlen
> - https://en.cppreference.com/w/c/string/byte/strncpy
> - https://stackoverflow.com/questions/30190460/advantages-of-strncmp-over-strcmp
> - https://en.cppreference.com/w/c/string/byte/strcat
> - https://en.cppreference.com/w/c/string/byte/strncat

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

#include <string> // For std::string
#include <wstring> // For std::wstring (Alternative) (wide string type)

// Differents mode of initialization

// Copy
std::string variable_name = "Another String";

// Direct
std::string variable_name( "Another String" );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
std::string variable_name{ "Another String" };


// Const Declaration

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const std::string variable_name = "Another String";
std::string const variable_name = "Another String";

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr std::string MY_CONSTANT = "Another String"; // C++11


// ------------------------------------
// String Interpolation
// ------------------------------------
// Not Yet Available



// ------------------------------------
// Print / Output
// ------------------------------------
#include <iostream> // For std::cout

// Main structure omitted

std::cout << "Hello world!\n"; // '\n' is the new line character
std::cout << "Hello world!" << std::endl; // std::endl prints a newline character AND flushes the output buffer
std::cout << "Hello world!" << '\n' << std::flush; // same as std::endl
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



// TODO: Advanced format



// Legacy (Like C) (Avoid)
// Check the C section above if you want to know
```

> More Info:
> - https://stackoverflow.com/a/402918/13227260
> - https://utf8everywhere.org/
> - https://stackoverflow.com/questions/213907/c-stdendl-vs-n
> - http://demin.ws/blog/english/2012/04/25/endl-vs-new-line/
> - https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/
> - http://www.cplusplus.com/forum/windows/51591/
> - https://www.geeksforgeeks.org/using-namespace-std-considered-bad-practice/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO



// Const Declaration
// TODO


// ------------------------------------
// String Interpolation
// ------------------------------------

// Example 1
string name = "Mark";
var date = DateTime.Now;
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");

// Example 2
string name = "Horace";
int age = 34;
Console.WriteLine($"{name} is {age} year{(age == 1 ? "" : "s")} old.");


// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------
using System; // For Console.Write and Console.WriteLine

// Main structure omitted
Console.Write("Hello World\n"); // '\n' is the new line character
Console.WriteLine("Hello World");
Console.WriteLine(10);
Console.WriteLine("Printing Integer: " + 10);
Console.WriteLine("Printing Any Number: " + 20.5);
Console.WriteLine("More Printing " + 20.5 + ", " + "50.2");
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated

[Back to top](#top)

## Java

```Java
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO



// Const Declaration
// TODO


// ------------------------------------
// String Interpolation
// ------------------------------------



// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------

// Main structure omitted
System.out.print("Hello world\n"); // '\n' is the new line character
System.out.println("Hello world");
System.out.println("Printing Integer: " + 10);
System.out.println("Printing Any Number: " + 20.5);
System.out.println("More Printing " + 20.5 + ", " + "50.2");
```

[Back to top](#top)

## Rust

```Rust
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO



// Const Declaration
// TODO

// ------------------------------------
// String Interpolation
// ------------------------------------



// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------
```

[Back to top](#top)

## Go

```Go
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO



// Const Declaration
// TODO

// ------------------------------------
// String Interpolation
// ------------------------------------



// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------
```

[Back to top](#top)

## Javascript

```Javascript
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

let variableName = 'Some string';
let variableName = "Some string";
var variableName = "Some string"; // Avoid 'var'

// Const Declaration
const variableName = "Some string";
const MY_CONSTANT = "Some string";

// ------------------------------------
// String Interpolation (Prefer)
// ------------------------------------
// Also known as Template literals (ES specification) or Template strings (old name)

console.log(`string text`);

console.log(`string text line 1
			string text line 2`);

console.log(`string text ${expression} string text`);
console.log(`string text ${variable_name} string text ${variable_name} string text`);

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------
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
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

let variableName: string = 'Some string';

// Const Declaration
const variableName: string = "Some string";
const MY_CONSTANT: string = "Some string";

// ------------------------------------
// String Interpolation (Prefer)
// ------------------------------------
// Also known as Template literals (ES specification) or Template strings (old name)

console.log(`string text`);

console.log(`string text line 1
			string text line 2`);

console.log(`string text ${expression} string text`);
console.log(`string text ${variable_name} string text ${variable_name} string text`);

const a: number  = 5;
const b: number = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);




// ------------------------------------
// Print / Output (Old Format)
// ------------------------------------
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
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

[Back to top](#top)

## Python

```Python
# ------------------------------------
# Declaration & Initialization
# ------------------------------------

variable_name = "Some string"
variable_name: str = 'Some string' # Type Annotations (PEP 484 / Python 3.6+)
variable_name: any = 'Some string' # Type Annotations (PEP 484 / Python 3.6+)


# Const Declaration
MY_CONSTANT = 'Some string'
MY_CONSTANT: str = 'Some string' # Type Annotations (PEP 484 / Python 3.6+)

# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.


# ------------------------------------
# String Interpolation (3.6+) (Prefer)
# ------------------------------------
# Also known as f-Strings (3.6+)

# Example 1
name = "Eric"
age = 74
print(f"Hello, {name}. You are {age}.")

# Example 2
# TODO + Formating examples


# ------------------------------------
# Print / Output (Old Format)
# ------------------------------------
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

> More Info: https://docs.python.org/3/library/typing.html

[Back to top](#top)
