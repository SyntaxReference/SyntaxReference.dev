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

For more information about strings, check the [String Section](../../string/README.md)

## C

```C
// No native string type

// In C, strings are an array of characters
// This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[21]; // 20 + 1 from the '\0' character.

// No need to include '\0' here. The compiler inserts it at the end of the array for us.
char variable_name[] = "Some string";
char *variable_name = "Some string";

const char MY_CONSTANT[] = "Something";
const char *MY_CONSTANT = "Something";
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
#include <string> // For string type

std::string variable_name = "Another String";

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const std::string variable_name = "Another String";

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr std::string MY_CONSTANT = "Another String"; // C++11
```

```Cpp
#include <wstring> // For wide string type

std::wstring variable_name = "Another String";

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const std::wstring variable_name = "Another String";

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr std::wstring MY_CONSTANT = "Another String"; // C++11
```
> More Info:
> - https://stackoverflow.com/a/402918/13227260
> - https://utf8everywhere.org/

```Cpp
// Like C (Avoid this way in c++)

// This is a string with lenght = 20. Dont forget to account for the '\0' character
char variable_name[21]; // 20 + 1 from the '\0' character.

// No need to include '\0' here. The compiler inserts it at the end of the array for us.
char variable_name[] = "Some string";
char *variable_name = "Some string";
```

```Cpp
// Differents mode of initialization

#include <string> // For string type

// Copy
std::string variable_name = "Another String";

// Direct
std::string variable_name( "Another String" );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
std::string variable_name{ "Another String" };
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

[Back to top](#top)

## C# (Csharp)

```Cs
// Todo
```

[Back to top](#top)

## Java

```Java
// Todo
```

[Back to top](#top)

## Rust

```Rust
// Todo
```

[Back to top](#top)

## Go

```Go
// Todo
```

[Back to top](#top)

## Javascript

```Javascript
let variableName: string = 'Some string';
let variableName: string = "Some string";
var variableName: string = "Some string"; // Avoid 'var'
const variableName: string = "Some string";
const MY_CONSTANT: string = "Some string";
```

[Back to top](#top)

## Typescript

```Typescript
let variableName: string = 'Some string';
let variableName: string = "Some string";
const variableName: string = "Some string";
const MY_CONSTANT: string = "Some string";
```

[Back to top](#top)

## Python

```Python
variable_name = "Some string"
MY_CONSTANT = 'Some string'

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: str = 'Some string'
variable_name: any = 'Some string'
MY_CONSTANT: str = 'Some string'
```

> More Info: https://docs.python.org/3/library/typing.html

[Back to top](#top)
