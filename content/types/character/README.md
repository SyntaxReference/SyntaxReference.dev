# Character

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
char variable_name = 'a'; // Single Quotes for characters
char variable_name = '\n';

const char MY_CONSTANT = '\n';
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
char variable_name = 'a'; // Single Quotes for characters
char variable_name = '\n';

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be declared as const.
*/
const char MY_CONSTANT = '\n';

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be declared as constexpr.
*/
constexpr char MY_CONSTANT = '\n'; // C++11
```

```Cpp
// Differents mode of initialization

// Copy
char variable_name = 'a';

// Direct
char variable_name( 'a' );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
char variable_name{ 'a' };
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
let variableName: string = 'a';
let variableName: string = "a";
let variableName: string = "\n";
var variableName: string = "\n"; // Avoid 'var'
const variableName: string = "a";
const MY_CONSTANT: string = "a";
```

[Back to top](#top)

## Typescript

```Typescript
let variableName: string = 'a';
let variableName: string = "a";
let variableName: string = "\n";
const variableName: string = "a";
const MY_CONSTANT: string = "a";
```

[Back to top](#top)

## Python

```Python
# You can use either single quotes or double
variable_name = "a"
MY_CONSTANT = 'a'

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: str = 'a'
variable_name: any = 'a'
MY_CONSTANT: str = 'a'
```

> More Info: https://docs.python.org/3/library/typing.html

[Back to top](#top)
