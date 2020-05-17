# Namespaces

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
// You can work around with structs
// Check More Info
```

> More Info:
> - https://stackoverflow.com/questions/4396140/why-doesnt-ansi-c-have-namespaces
> - https://ejrh.wordpress.com/2012/01/24/namespaces-in-c/

[Back to top](#top)

## C++ (Cpp)

```Cpp
namespace myNamespace
{
	float myFunction()
	{
		// ...
	}

	class MyClass
	{
		// ...
	};

	// ...
}

// Calling from namespace Ex.:
// We use :: as a separator

myNamespace::myFunction();
myNamespace::MyClass();
```


```Cpp
// Nested namespaces

// Example 1 - Since C++17
namespace myFirstNamespace::mySecondNamespace
{
	float myFunction()
	{
		// ...
	}

	class MyClass
	{
		// ...
	};

	// ...
}

// Example 2 - Prior to C++17
namespace myFirstNamespace
{
	namespace mySecondNamespace
	{
		float myFunction()
		{
			// ...
		}

		class MyClass
		{
			// ...
		};
	}
	// ...
}


// Calling from namespace Ex.:
// We use :: as a separator

myFirstNamespace::mySecondNamespace::myFunction();
myFirstNamespace::mySecondNamespace::MyClass();
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/user-defined-namespaces/
> - https://www.learncpp.com/cpp-tutorial/unnamed-and-inline-namespaces/


[Back to top](#top)

## C# (Csharp)

```Cs
namespace MyNamespace
{
	class MyClass
	{
		// ...
	};

	// ...
}

// Calling from namespace Ex.:
// We use . as a separator

MyNamespace.MyClass();
```

```Cs
// Nested namespaces

// Example 1
namespace MyFirstNamespace.MySecondNamespace
{
	class MyClass
	{
		// ...
	}

	// ...
}

// Example 2
namespace MyFirstNamespace
{
	namespace MySecondNamespace
	{
		class MyClass
		{
			// ...
		}

		// ...
	}

	// ...
}

// Calling from namespace Ex.:
// We use . as a separator

MyFirstNamespace.MySecondNamespace.MyClass();
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/
> - https://www.programiz.com/csharp-programming/namespaces

[Back to top](#top)

## Java

```Java
// Also Known as "Packages" and MUST reflect directory architecture

// Name of the package must be same as the directory
// under which this file is saved

package myPackage;

public class MyClass
{
	// ...
}
// ...

// Calling from package Ex.:
// We use . as a separator

myPackage.MyClass();

// Its also posible to import the specific member
import myPackage.MyClass;

MyClass(); // With the import, you dont need the full identifier
```

```Java
// Also Known as "Packages" and MUST reflect directory architecture

// Nested Packages
// package cannot be "nested".
// But you can have a sub package architecture

package myPackage.mySubPackage;

public class MyClass
{
	// ...
}
// ...

// Calling from package Ex.:
// We use . as a separator

myPackage.mySubPackage.MyClass();

// Its also posible to import the specific member
import myPackage.mySubPackage.MyClass;

MyClass(); // With the import, you dont need the full identifier
```

> More Info:
> - https://www.geeksforgeeks.org/packages-in-java/
> - https://beginnersbook.com/2013/03/packages-in-java/

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
// JavaScript does not provide namespace by default.
// But there some workarounds

// TODO Examples
```

> More Info:
> - https://www.geeksforgeeks.org/javascript-namespace/
> - https://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript
> - https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/

[Back to top](#top)

## Typescript

```Typescript
namespace MyNamespace
{
	// Add "export" to be visible outside the namespace
	// Defaults to not be visible outside the namespace.
	export class MyClass
	{
		// ...
	}

	// ...
}

// Calling from namespace Ex.:
// We use . as a separator

MyNamespace.MyClass();
```

```Typescript
// Nested namespaces

namespace MyFirstNamespace
{
	export namespace MySecondNamespace // The nested namespace need to be exported (if you want it public)
	{
		export class MyClass
		{
			// ...
		}

		// ...
	}

	// ...
}

// Calling from namespace Ex.:
// We use . as a separator

MyFirstNamespace.MySecondNamespace.MyClass();
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/namespaces.html
> - https://www.tutorialsteacher.com/typescript/typescript-namespace

[Back to top](#top)

## Python

```Python
# TODO
```

> More Info:
> - https://code.tutsplus.com/tutorials/what-are-python-namespaces-and-why-are-they-needed--cms-28598
> - https://www.programiz.com/python-programming/namespace

[Back to top](#top)
