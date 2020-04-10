# Integer

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
#include <stdint.h> // Since C99
/*
To help with cross-platform portability, C99 defined a
set of fixed-width integers (in the stdint.h header)
that are guaranteed to have the same size on any architecture.
*/

int8_t variable_name_Signed = 10;		// Range: -128 to 127
uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
int32_t variable_name_Signed = 10;		// Range: -2,147,483,648 to 2,147,483,647
uint32_t variable_name_Unsigned = 10;	// Range: 0 to 4,294,967,295
int64_t variable_name_Signed = 10;		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
uint64_t variable_name_Unsigned = 10;	// Range: 0 to 18,446,744,073,709,551,615

const int16_t MY_CONSTANT = 30;
```

```C
// Old Way
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;
```

> More Info:
> - https://en.wikipedia.org/wiki/C_data_types
> - https://pubs.opengroup.org/onlinepubs/009695399/basedefs/stdint.h.html

[Back to top](#top)

## C++ (Cpp)

```Cpp
#include <cstdint> // Since C++11

std::int8_t variable_name_Signed = 10;		// Range: -128 to 127
std::uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
std::int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
std::uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
std::int32_t variable_name_Signed = 10;		// Range: -2,147,483,648 to 2,147,483,647
std::uint32_t variable_name_Unsigned = 10;	// Range: 0 to 4,294,967,295
std::int64_t variable_name_Signed = 10;		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
std::uint64_t variable_name_Unsigned = 10;	// Range: 0 to 18,446,744,073,709,551,615

/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const std::int16_t MY_CONSTANT = 30;

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr std::int16_t MY_CONSTANT = 30; // C++11
```

```Cpp
// Old way of declaring integers
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;
```

```Cpp
// Differents mode of initialization

#include <cstdint> // Since C++11

// Copy
std::int32_t variable_name = 5;

// Direct
std::int32_t variable_name( 5 );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
std::int32_t variable_name{ 5 };
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://en.cppreference.com/w/cpp/types/integer
> - https://www.learncpp.com/cpp-tutorial/fixed-width-integers-and-size-t/
> - http://www.cplusplus.com/reference/cstdint/
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
let variableName = 10;
const variableName = 10;
const MY_CONSTANT = 10;
var variableName = 10; // Avoid "var"

// A BigInt is created by appending n to the end of an integer
// or by calling the constructor.
let variableName = 10n;
/* The BigInt type is a numeric primitive in JavaScript
 that can represent integers with arbitrary precision.
 With BigInts, you can safely store and operate on large
 integers even beyond the safe integer limit for Numbers.
*/
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

[Back to top](#top)

## Typescript

```Typescript
let variableName: number = 10;
let variableName: any = 10;
const variableName: number = 10;
const MY_CONSTANT: number = 10;

/* The BigInt type is a numeric primitive in JavaScript
 that can represent integers with arbitrary precision.
 With BigInts, you can safely store and operate on large
 integers even beyond the safe integer limit for Numbers.
*/
let variableName: bigint = 10n;
let variableName: BigInt(10);
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#number
> - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint

[Back to top](#top)

## Python

```Python
variable_name = 10
MY_CONSTANT = 10

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: int = 10
variable_name: any = 10
MY_CONSTANT: int = 10
```

> More Info: https://docs.python.org/3/library/typing.html

[Back to top](#top)
