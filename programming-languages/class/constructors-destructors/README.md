# Constructors & Destructors
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
// Not Available
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
	// Simplified Example

	// ------------------------------------
	// Constructor
	// ------------------------------------

	// The constructor has the same name as the class
	// Can be omitted if you have no code to put here.
	MyClass();

	// You can have more than one
	MyClass(int value);
	MyClass(int value, float otherValue);
	MyClass(char letter);
	//and so on

	// You can add the "explicit" keyword to avoid implicit conversion
	explicit MyClass(int value);
	explicit MyClass(int value, float otherValue);
	explicit MyClass(char letter);

	// You can also "delete" a specific constructor to remove its use
	MyClass() = delete; // this constructor wont be available
};
```

```Cpp
// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
	// Simplified Example

	// ------------------------------------
	// Member Initializer / Member Initializer Lists
	// ------------------------------------
};
```

```Cpp
// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
	// Simplified Example

	// ------------------------------------
	// Copy Constructor
	// ------------------------------------
};
```

```Cpp
// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
	// Simplified Example

	// ------------------------------------
	// Move Constructor
	// ------------------------------------
};
```

```Cpp
// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
	// Simplified Example

	// ------------------------------------
	// Desconstructor
	// ------------------------------------
};
```

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
