# Float & Double

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
float variable_name = 10.5;
float variable_name = 10.5f;
float variable_name = 10.5F;
const float MY_CONSTANT = 12.2;
const float MY_CONSTANT = 12.2f;

double variable_name = 10.5;
const double MY_CONSTANT = 12.2;
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
float variable_name = 10.5;
float variable_name = 10.5f;
float variable_name = 10.5F;
double variable_name = 10.5;

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const double MY_CONSTANT = 12.2;

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr float MY_CONSTANT = 12.2; // C++11
```

```Cpp
// Differents mode of initialization

// Copy
float variable_name = 5.2;

// Direct
float variable_name( 5.2 );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
float variable_name{ 5.2 };
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
// all numbers are floating point values.
let variableName = 10.2;
const variableName = 10.2;
const MY_CONSTANT = 10.2;
var variableName = 10.2; // Avoid "var"
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

[Back to top](#top)

## Typescript

```Typescript
// all numbers are floating point values.
let variableName: number = 10.2;
const variableName: number = 10.2;
const MY_CONSTANT: number = 10.2;
```

> More Info: https://www.typescriptlang.org/docs/handbook/basic-types.html#number

[Back to top](#top)

## Python

```Python
variable_name = 10.2
MY_CONSTANT = 10.2

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: float = 10.2
variable_name: any = 10.2
MY_CONSTANT: float = 10.2
```

> More Info: https://docs.python.org/3/library/typing.html

[Back to top](#top)
