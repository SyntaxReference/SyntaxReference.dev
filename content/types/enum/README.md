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
enum flag {const1, const2, ..., constN}; // By default, const1 is 0, const2 is 1 and so on.

// You can change default values of enum elements during declaration (if necessary).
enum ERROR_CODES {
	NO_FILE = 314,
	NO_MOUSE = 675,
	NO_PC = 999
};

// Creating Variables
enum flag my_variable = enum_constant;
int any_variable = enum_constant; // direct access

// ATTENTION
// In C, enum constants are NOT scoped to the flag. Use unique names.

enum day {DAY_SUNDAY, DAY_MONDAY, DAY_TUESDAY, DAY_WEDNESDAY, DAY_THURSDAY, DAY_FRIDAY, DAY_SATURDAY};
enum day d = DAY_THURSDAY;
```

> More Info:
> - https://www.geeksforgeeks.org/enumeration-enum-c/
> - https://www.programiz.com/c-programming/c-enumeration

[Back to top](#top)

## C++ (Cpp)

```Cpp
// enum class (also called a scoped enumeration). Since C++11

enum class Flag {const1, const2, ..., constN}; // By default, const1 is 0, const2 is 1 and so on.

// You can change default values of enum elements during declaration (if necessary).
enum class ERROR_CODES {
	NO_FILE = 314,
	NO_MOUSE = 675,
	NO_PC = 999
};


// Creating Variables
Flag variable = Flag::const1;
Flag variable{Flag::const1}; // Uniform Initialization (Also known as Brace Initialization or List Initialization) (since C++11)

enum class Day {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY};
Day day{Day::THURSDAY};
```

```Cpp
//Legacy Enum

enum flag {const1, const2, ..., constN}; // By default, const1 is 0, const2 is 1 and so on.

// You can change default values of enum elements during declaration (if necessary).
enum ERROR_CODES {
	NO_FILE = 314,
	NO_MOUSE = 675,
	NO_PC = 999
};

// Creating Variables
enum flag my_variable = enum_constant;
int any_variable = enum_constant; // direct access

// ATTENTION
// Enum constants created this way are NOT scoped to the flag. Use Modern Enum Class.

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
