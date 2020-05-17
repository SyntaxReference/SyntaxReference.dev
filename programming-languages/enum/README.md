# ENUM

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
// Definition
// ------------------------------------
enum myEnum {const1, const2, ..., constN};
// By default, const1 is 0, const2 is 1 and so on.

// Example
// You can change default values of enum elements during definition (if necessary).
enum ERROR_CODES {
	NO_FILE = 314,
	NO_MOUSE = 675,
	NO_PC = 999
}; // Dont forget the ; (semicolon)

// ------------------------------------
// Assignment
// ------------------------------------

enum myEnum my_variable = ENUM_CONSTANT; // Either use "enum myEnum" or a type alias
int any_variable = ENUM_CONSTANT; // direct access

// ATTENTION
// In C, enum constants are NOT scoped to the flag (enum name). Use unique names.

// Example
enum day {DAY_SUNDAY, DAY_MONDAY, DAY_TUESDAY, DAY_WEDNESDAY, DAY_THURSDAY, DAY_FRIDAY, DAY_SATURDAY};

enum day d = DAY_THURSDAY;
```

> More Info:
> - https://www.geeksforgeeks.org/enumeration-enum-c/
> - https://www.programiz.com/c-programming/c-enumeration

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Prefer
// enum class (also called a scoped enumeration).
// Since C++11

// ------------------------------------
// Definition
// ------------------------------------
enum class MyEnum {const1, const2, ..., constN};
// By default, const1 is 0, const2 is 1 and so on.

// You can change default values of enum elements during definition (if necessary).
enum class ERROR_CODES {
	NO_FILE = 314,
	NO_MOUSE = 675,
	NO_PC = 999
}; // Dont forget the ; (semicolon)

// ------------------------------------
// Assignment
// ------------------------------------

MyEnum variable = MyEnum::const1;
MyEnum variable {MyEnum::const1}; // Uniform Initialization (Also known as Brace Initialization or List Initialization) (since C++11)

// Other Example
enum class Day {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};

Day day{Day::THURSDAY};
```

```Cpp
//Legacy Enum

// ------------------------------------
// Definition
// ------------------------------------
enum myEnum {const1, const2, ..., constN}; // Without class keyword

// ------------------------------------
// Assignment
// ------------------------------------

enum myEnum my_variable = ENUM_CONSTANT;
int any_variable = ENUM_CONSTANT; // direct access

// ATTENTION
// Enum constants created this way are NOT scoped to the flag (enum name). Use Modern Enum Class.

// Example
enum day {DAY_SUNDAY, DAY_MONDAY, DAY_TUESDAY, DAY_WEDNESDAY, DAY_THURSDAY, DAY_FRIDAY, DAY_SATURDAY};

enum day d = DAY_THURSDAY;
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/4-5a-enum-classes/
> - https://www.learncpp.com/cpp-tutorial/45-enumerated-types/

[Back to top](#top)

## C# (Csharp)

```Cs
// TODO
```

[Back to top](#top)

## Java

```Java
// TODO
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
// TODO
```

[Back to top](#top)

## Typescript

```Typescript
// TODO
```

[Back to top](#top)

## Python

```Python
# TODO
```

[Back to top](#top)
