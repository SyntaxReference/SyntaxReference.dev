# Interface

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
// C++ has no native interfaces.
// You can implement it using abstract classes
// Check "Abstract Class" Section for more Information
```

[Back to top](#top)

## C# (Csharp)

```Cs
// Classic Example
public interface IMyInterface // In C#, Its a convention to start the name with an I
{
	// "Properties" can be declared but not initialized
	string MyProperty { get; set; }

	// Methods without body Must be overridden in the implemented class
	string MyMethod();  // public by default
	void MySecondMethod();
}
```

```Cs
// Since C# 8.0
// Default Implementation
// Access modifiers (private, protected, internal, public and virtual, abstract, sealed)
// Static members (static methods, static fields, and static constructors)
public interface IMyInterface // In C#, Its a convention to start the name with an I
{
	// public "Properties" can be declared but not initialized
	public string MyProperty { get; set; }
	// Private "property" not allowed

	private static string MyStaticField = "Allowed"; // Doesnt need to be initialized

	// Methods without body Must be overridden in the implemented class
	public abstract string MyMethod();  // "public" and "abstract" by default

	public virtual void MySecondMethod()
	{
		// Just add an implementation to make it a 'Default Method'
		// Not mandatory to override
		// By default, the default interface methods are virtual unless the sealed or private modifier is used
	}

	private void MyThirdMethod() // Private Members Must Have Default Implementation
	{
		// ...
	}

	// Static can be used directly Ex.: IMyInterface.myStaticMethod();
	public static void myStaticMethod() // Static Members Must Have Default Implementation
	{
		// ...
	}

	private static void mySecondStaticMethod() // Static Members Must Have Default Implementation
	{
		// ...
	}

	// After C# 8.0, you should keep "public" in the declaration when public
}
```

```Cs
// Implementation Class Example

class ImplementationClass : IMyInterface
{
	// ...
}
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/interface-properties
> - https://jeremybytes.blogspot.com/2019/09/a-closer-look-at-c-8-interfaces.html
> - https://www.infoq.com/articles/default-interface-methods-cs8/
> - https://www.youtube.com/watch?v=2lUZ58Zyu3w

[Back to top](#top)

## Java

```Java
// Classic Example
public interface MyInterface
{
	// You can declare constants
	String MY_CONSTANT = "Something"; // static and constant (final) by default

	// Methods without body Must be overridden in the implemented class
	public abstract String myMethod(); // "public" and "abstract" by default
	void mySecondMethod(); // "public" and "abstract"

	// After Java 8 and Java 9 changes, you should keep "public"
	// and "abstract" in the declaration when public and/or abstract
}
```

```Java
// Since Java 8
// Static and defaults methods
public interface MyInterface
{
	// You can declare constants
	String MY_CONSTANT = "Something"; // static and constant (final) by default

	public abstract String myMethod(); // No Body

	// You dont need to override default methods
	public default void mySecondMethod()
	{
		System.out.println("default method");
	}

	// Static can be used directly Ex.: MyInterface.myThirdMethod();
	public static void myThirdMethod()
	{
		System.out.println("static method");
	}
}
```

```Java
// Since Java 9
// Private methods
public interface MyInterface
{
	// ...
	// You can do all of the above examples plus:

	// private methods can only be used inside the interface
	// private static method can be used inside other static and non-static interface methods.
	// private non-static methods cannot be used inside private static methods.
	// "private abstract" not allowed
	// "private default" not allowed

	private void mySecondMethod() // private non-static method
	{
		System.out.println("private non-static method");
	}

	private static void myThirdMethod() // private static
	{
		System.out.println("private static method");
	}
}
```

```Java
// Implementation Class Example

class ImplementationClass implements MyInterface
{
	// ...
}
```

> More Info:
> - https://howtodoinjava.com/java9/java9-private-interface-methods/
> - https://blog.joda.org/2016/09/private-methods-in-interfaces-in-java-9.html
> - https://www.deadcoderising.com/java-9-cleaning-up-your-default-methods-using-private-interface-methods/

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
// Not Available

// JavaScript inheritance is based on objects, not classes.
// JavaScript uses what's called duck typing.

// Duck typing is an application of the duck test: "If it walks like a duck and it quacks
// like a duck, then it must be a duck".
//
// To determine if an object can be used for a particular purpose. With normal typing,
// suitability is determined by an object's type.
//
// In duck typing, an object's suitability is determined by the presence of certain methods
// and properties, rather than the type of the object itself.

// But there is a workaround for Abstract Class that could be useful. Check that
// section for more information.
```

> More Info:
> - https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface
> - https://en.wikipedia.org/wiki/Duck_typing

[Back to top](#top)

## Typescript

```Typescript
interface MyInterface
{
	// "Properties" can be declared but not initialized
	myProperty: string; // Must be defined in the implemented class/object

	mySecondProperty?: string; // "Optional Property" - Not mandatory do define in the implemented class/object

	readonly myThirdProperty: number; // After its first assignement, it cannot be changed

	// Methods without body Must be overridden in the implemented class/object
	MyMethod(): string;
	MySecondMethod(someParameter: number); // names of the parameters do not need to match

	// "private" access modifier not possible in Typescript Intarfaces
}
```

```Typescript
// Implementation Class Example

class ImplementationClass implements MyInterface
{
	// ...
}
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/interfaces.html
> - https://www.tutorialsteacher.com/typescript/typescript-interface

[Back to top](#top)

## Python

```Python
# Python doesnt have native Interface
# Python uses what's called duck typing.

# Duck typing is an application of the duck test: "If it walks like a duck and it quacks
# like a duck, then it must be a duck".
#
# To determine if an object can be used for a particular purpose. With normal typing,
# suitability is determined by an object's type.
#
# In duck typing, an object's suitability is determined by the presence of certain methods
# and properties, rather than the type of the object itself.

# Python also allow multiple inheritance

# But still, Python has some libraries that helps defining an Interface
```

```Python
# "python-interface" Example

from interface import Interface

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed

class MyInterface(Interface):

	@property
	def my_property(self):
		pass

	def my_method(self):
		pass

	def my_second_method(self, some_value):
		pass

	@interface.default # Not mandatory to override
	def my_default_method(self):
		print("Default Implementation")
```

```Python
# Implementation Class Example

# "python-interface" Example

from interface import implements


class MyClass(implements(MyInterface)):
	# ...


 # Multiple interface allowed
class MyClass(implements(MyInterface, MySecondInterface)):
	# ...
```

> More Info:
> - https://interface.readthedocs.io/en/latest/
> - https://en.wikipedia.org/wiki/Duck_typing

[Back to top](#top)
