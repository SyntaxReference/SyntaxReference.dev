# Type Conversion & Casting

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

For most languages you should avoid implicit convertion or using only the simple type casting.

## C

```C
// ------------------------------------
// String to Number
// ------------------------------------

// AVOID atoi() and its counterparts (Check More Info)

// Prefer strtol()
// TODO example

```

```C
// ------------------------------------
// Floating number to Integer
// ------------------------------------

#include <math.h> // For floor(), ceil(), round()

// It returns a floating type, so you need a cast.
int convertedValue = (int) floor(5.5); // Must include <math.h>
int convertedValue = (int) ceil(5.5); // Must include <math.h>
int convertedValue = (int) round(5.5); // Must include <math.h>
```

```C
// ------------------------------------
// Number to String
// ------------------------------------

// Example creating a function using snprintf()
#include <stdio.h> // For snprintf()
#include <stdlib.h> // For malloc(), free()

char* IntToString(int value)
{
	int length = snprintf( NULL, 0, "%d", value );

	char* converted = malloc( length + 1 ); // one character more for null-terminator
	snprintf( converted, length + 1, "%d", value );

	return converted;
}

// Another simple example
char* FloatToString(float value)
{
	float length = snprintf( NULL, 0, "%f", value );

	char* converted = malloc( length + 1 ); // one character more for null-terminator
	snprintf( converted, length + 1, "%f", value );

	return converted;
}

char* convertedValue = IntToString(100);
// ...
free(convertedValue); // You need to free the memory allocated by malloc()
```

> More Info:
> - https://stackoverflow.com/questions/7021725/how-to-convert-a-string-to-integer-in-c
> - https://ramblings.implicit.net/c/2014/04/27/c-functions-that-should-be-avoided.html
> - https://en.cppreference.com/w/c/string/byte/strtol
> - https://stackoverflow.com/questions/8257714/how-to-convert-an-int-to-string-in-c

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// String to Number
// ------------------------------------

// Prefer
// std::stoi() - Since C++ 11
#include <string> // For std::stoi()
#include <cstdint> // For std::int32_t  (Since C++11)

std::int32_t convertedValue = std::stoi("45"); // 45
std::int32_t convertedValue = std::stoi("3.14159"); // 3
std::int32_t convertedValue = std::stoi("31337 with words"); // 31337

// Exceptions
// std::invalid_argument if no conversion could be performed
// std::out_of_range if the converted value would fall out of the range of the
// result type or if the underlying function (std::strtol or std::strtoll) sets errno to ERANGE.

// Exception Example
try
{
	// ...
}
catch(std::invalid_argument const &error)
{
	std::cout << "Conversion could be performed: " << error.what() << std::endl;
}
catch(std::out_of_range const &error)
{
	std::cout << "Integer overflow:: " << error.what() << std::endl;
}
```

```Cpp
// ------------------------------------
// Floating number to Integer
// ------------------------------------

// Prefer
#include <cstdint> // For std::int32_t  (Since C++11)

std::int32_t convertedValue = static_cast<std::int32_t>(100.3); // 100


// C Type Casting (Avoid)
#include <cstdint> // For std::int32_t  (Since C++11)

float myFloat = 100.3f;
std::int32_t convertedValue = (int32_t) myFloat;
```

```Cpp
// ------------------------------------
// Number to String
// ------------------------------------
#include <string> // std::string, std::to_string

std::string convertedValue = std::to_string(anyTypeNumber);
auto convertedValue{std::to_string(anyTypeNumber)}; // Same as Above
```

> More Info:
> - https://en.cppreference.com/w/cpp/string/basic_string/stol
> - https://en.cppreference.com/w/cpp/string/byte/strtol
> - https://stackoverflow.com/questions/194465/how-to-parse-a-string-to-an-int-in-c/6154614#6154614
> - https://stackoverflow.com/questions/7663709/how-can-i-convert-a-stdstring-to-int

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// String to Number
// ------------------------------------

// Prefer
// TryParse - returns a bool and the value converted by reference
Int16 convertedValueByReference;
Int16.TryParse("100", out convertedValueByReference);

Int32 convertedValueByReference;
Int32.TryParse("100", out convertedValueByReference);

Int64 convertedValueByReference;
Int64.TryParse("100", out convertedValueByReference);

float convertedValueByReference;
float.TryParse("100", out convertedValueByReference);

double convertedValueByReference;
double.TryParse("100", out convertedValueByReference);

decimal convertedValueByReference;
decimal.TryParse("100", out convertedValueByReference);

// Parse - returns the value or throws an exception on error
Int16 convertedValue = Int16.Parse("100");
Int32 convertedValue = Int32.Parse("100");
Int64 convertedValue = Int64.Parse("100");
float convertedValue = float.Parse("100");
double convertedValue = double.Parse("100");
decimal convertedValue = decimal.Parse("100");
```

```Cs
// ------------------------------------
// Floating number to Integer
// ------------------------------------

// Avoid using only the Convert class (Check More Info)
// Prefer "Math.Floor", "Math.Ceiling" or "Math.Round"
// It returns a floating type, so you need a cast.

Int32 convertedValue = (Int32) Math.Floor(5.5); // Casting + Math Example
Int32 convertedValue = Convert.ToInt32(Math.Ceiling(5.5)); // Convert + Math Example
Int32 convertedValue = (Int32) Math.Round(5.5);
```

```Cs
// ------------------------------------
// Number to String
// ------------------------------------

// ToString - Returns the string
string convertedValue = anyTypeNumber.ToString();
```

> More Info:
> - https://web.archive.org/web/20161026160911/http://www.dev102.com/2008/03/19/converttoint32-vs-cast/


[Back to top](#top)

## Java

```Java
// ------------------------------------
// String to Number
// ------------------------------------

// returns the value or throws an exception on error
int convertedValue = Integer.parseInt("10");
float convertedValue = Float.parseFloat("10f");
double convertedValue = Double.parseDouble("10");
```

```Java
// ------------------------------------
// Floating number to Integer
// ------------------------------------

int convertedValue = (int) Math.floor(5.5);
int convertedValue = (int) Math.ceil(5.5);
int convertedValue = Math.round(5.5); // Doesnt need Type Casting
```

```Java
// ------------------------------------
// Number to String
// ------------------------------------

// Option 1
String convertedValue = Integer.toString(10);
String convertedValue = Float.toString(10);
String convertedValue = Double.toString(10);

// Option 2
String convertedValue = String.valueOf(10);
```

[Back to top](#top)

## Rust

```Rust
// TODO
```

[Back to top](#top)

## Go

```Go
// TODO
```

[Back to top](#top)

## Javascript

```Javascript
// ------------------------------------
// String to Number
// ------------------------------------

let convertedValue = parseInt("123", 10); // 10 is the radix (base number)
let convertedValue = parseFloat("123");
let convertedValue = Number("123");
```

```Javascript
// ------------------------------------
// Floating number to Integer
// ------------------------------------

// Keep in mind, In Javascript, all numbers are floating point values.
let convertedValue = Math.floor(5.5);
let convertedValue = Math.ceil(5.5);
let convertedValue = Math.round(5.5);
```

```Javascript
// ------------------------------------
// Number to String
// ------------------------------------

numberVariable.toString(10); // 10 is the radix (base number)
numberVariable.toString(); // 10 by default
```

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// String to Number
// ------------------------------------

let convertedValue : number = parseInt("123", 10); // 10 is the radix (base number)
let convertedValue : number = parseFloat("123");
let convertedValue : number = Number("123");
```

```Typescript
// ------------------------------------
// Floating number to Integer
// ------------------------------------

// Keep in mind, In Javascript (And so in Typescript), all numbers are floating point values.
let convertedValue : number = Math.floor(5.5);
let convertedValue : number = Math.ceil(5.5);
let convertedValue : number = Math.round(5.5);
```

```Typescript
// ------------------------------------
// Number to String
// ------------------------------------

numberVariable.toString(10); // 10 is the radix (base number)
numberVariable.toString(); // 10 by default
```

[Back to top](#top)

## Python

```Python
# ------------------------------------
# String to Number
# ------------------------------------

converted_value = int("10")
converted_value = float("10")
```

```Python
# ------------------------------------
# Floating number to Integer
# ------------------------------------

import math

converted_value = math.floor(5.5)
converted_value = math.ceil(5.5)
converted_value = round(5.5) # Doesnt need math library
```

```Python
# ------------------------------------
# Number to String
# ------------------------------------

converted_value = str(10)
```

> More Info
> - https://stackoverflow.com/questions/379906/how-do-i-parse-a-string-to-a-float-or-int
> - https://appdividend.com/2019/02/03/how-to-convert-python-string-to-int-and-int-to-string/

[Back to top](#top)
