# Abstract Class

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
// C does not have Classes
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// An abstract class cannot be instantiated.
// Any class with one or more "pure virtual" functions becomes an abstract class

// Header File (MyClass.h or MyClass.hpp)
#pragma once

class MyClass
{
protected:
	float protectedVariable;

public:
	// "Pure Virtual" (Abstract) Method (To create a pure virtual function, we simply assign the function the value 0)
	virtual float MyMethod() = 0;  // You must override "Pure Virtual" (Abstract) methods in the derived class.

	// Virtual Method (Any class can have virtual methods)
	// Virtual means it can be override
	virtual float MySecondMethod() // You can override virtual methods but its not mandatory
	{
		// Some default implementation.
		// If you dont override it,
		// default implementation will be used
	}
}
```

```Cpp
// Derived Class Example
// Header File (MyChildClass.h or MyChildClass.hpp)

#pragma once

class MyChildClass : public MyClass
{
public:
	// Both "virtual" and "override" identifiers are optional (But should be used)
	virtual float MyMethod() override; // Implementation should be in the .cpp file
	/*
	override identifier was added in C++11 and it helps to check if:
	- There is a method with the same name in the parent class.
	- The method in the parent class is declared as "virtual"
	- The method in the parent class has the same signature.
	*/
	/*
	If a function is marked as virtual, all matching overrides are also considered virtual,
	even if they are not explicitly marked as such. However, having the keyword virtual on
	the derived functions does not hurt, and it serves as a useful reminder that the function
	is a virtual function rather than a normal one. Consequently, it’s generally a good idea
	to use the virtual keyword for virtualized functions in derived classes even though it’s
	not strictly necessary.
	*/
};
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/122-virtual-functions/
> - https://www.learncpp.com/cpp-tutorial/12-2a-the-override-and-final-specifiers-and-covariant-return-types/
> - https://www.learncpp.com/cpp-tutorial/126-pure-virtual-functions-abstract-base-classes-and-interface-classes/
> - https://www.geeksforgeeks.org/override-keyword-c/

[Back to top](#top)

## C# (Csharp)

```Cs
// An abstract class cannot be instantiated.
public abstract class MyClass
{
	protected int protectedVariable;
	public abstract int ProtectedVariable { get; set; }  // Abstract Property also possible

	// Abstract Method (You can only declare abstract methods inside abstract classes)
	public abstract int MyMethod();  // You must override abstract methods in the derived class.

	// Virtual Method (Any class can have virtual methods)
	// Virtual means it can be override
	public virtual int MySecondMethod() // You can override virtual methods but its not mandatory
	{
		// Some default implementation.
		// If you dont override it,
		// default implementation will be used
	}
}
```

```Cs
// Derived Class Example
public class MyChildClass : MyClass
{
	public override int ProtectedVariable // We need the "override" keyword
	{
		get
		{
			return protectedVariable;
		}
		set
		{
			protectedVariable = value;
		}
	}

	public override int MyMethod() // We need the "override" keyword
	{
		// Implementation
	}

	// Even if not overriding "MySecondMethod", I can still call it as from the derived class
	// And it will work with the default implementation
}
```

```Cs
// Special Example - abstract override

// If a virtual method is declared abstract, it is still virtual to any class inheriting from the abstract class.
// A class inheriting an abstract method cannot access the original implementation of the method.
// In this example, "DoSomething" on class "AnotherDerivedClass" cannot call "DoSomething" on class "BaseClass".
// In this way, an abstract class can force derived classes to provide new method implementations for virtual methods.

public class BaseClass
{
	public virtual void DoSomething(int value)
	{
		// Original implementation.
	}
}

public abstract class AbstractClass : BaseClass
{
	public abstract override void DoSomething(int value);
}

public class AnotherDerivedClass : AbstractClass
{
	public override void DoSomething(int value)
	{
		// New implementation.
	}
}

// Example use case: (By ghord - stackoverflow link in More Info)

// Ensuring proper ToString() implementation in derived classes. Let's say you have abstract base class,
// and you really want all derived classes to define meanigful ToString() implementation because you are
// actively using it. You can do it very elegantly with abstract override:

public abstract class Base
{
	public abstract override string ToString();
}
// It is a clear signal to implementers that ToString() will be used in base class in some way
// (like writing output to user). Normally, they would not think about defining this override.
```

> More Info:
> - https://www.geeksforgeeks.org/c-sharp-abstract-classes/
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract
> - https://www.interviewsansar.com/can-abstract-class-have-constructor-in-csharp-if-yes-what-for/
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/abstract-and-sealed-classes-and-class-members
> - https://stackoverflow.com/questions/8905432/what-is-the-use-of-abstract-override-in-c/17771436#17771436

[Back to top](#top)

## Java

```Java
// An abstract class cannot be instantiated.
public abstract class MyClass
{
	protected int protectedVariable;

	// Abstract Method (You can only declare abstract methods inside abstract classes)
	public abstract int MyMethod();  // You must override abstract methods in the derived class.

	public int MySecondMethod() // You can override normal methods but its not mandatory
	{
		// Some default implementation.
		// If you dont override it,
		// default implementation will be used
	}
}
```

```Java
// Derived Class Example
public class MyChildClass extends MyClass
{
	public int MyMethod() // We dont need any special keyword to override abstract methods
	{
		// Implementation
	}

	// Even if not overriding "MySecondMethod", I can still call it as from the derived class
	// And it will work with the default implementation
	// But when you choose to override normal methods, its best to use the @Overide annotation

	// @Override annotation
	// Indicates that the child class method is over-writing its base class method.
	// It helps to check if:
	/*
	- There is a method with the same name in the parent class.
	- The method in the parent class has the same signature.
	- It shows a warning from the compiler if the annotated method doesn't actually override anything.
	- In case of a typo, and the @Override annotation was absent, a new method would be created instead of a override.
	*/
	@Override
	public int MySecondMethod()
	{
		// new implementation.
	}
}
```

> More Info:
> - https://www.w3schools.com/java/java_abstract.asp
> - https://stackoverflow.com/questions/94361/when-do-you-use-javas-override-annotation-and-why
> - https://beginnersbook.com/2014/07/override-annotation-in-java/

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
# Python on its own doesn't provide abstract classes. Yet, Python comes with a module
# which provides the infrastructure for defining Abstract Base Classes (ABCs). This module
# is called, for obvious reasons, abc.
from abc import ABC, abstractmethod

# An abstract class cannot be instantiated.
class MyClass(ABC):

	_someRandomProtectedProperty = 10 # It will be visible from the derived class

	@property # Abstract Property also possible
	@abstractmethod  # You need this annotation
	def my_protected_property(self):
		pass

	@my_protected_property.setter # Abstract Property also possible
	@abstractmethod  # You need this annotation
	def my_protected_property(self, value):
		pass

	@abstractmethod # You need this annotation for abstract method
	def MyMethod(self): # You must override abstract methods in the derived class.
		pass # Keyword so python can "skip" this implementation

	def MySecondMethod(self): # Concrete Method. Not Abstract. Not mandatory to override
		print('Some default implementation.')
		print('If you dont override it,')
		print('default implementation will be used.')
```

```Python
# Derived Class Example
class MyChildClass(MyClass):

	@property
	def my_protected_property(self):
		return self._my_property

	@my_protected_property.setter
	def my_protected_property(self, value):
		self._my_property = value

	def MyMethod(self):
		print('new Implementation')

	# (Optional) Property Registration for "_someRandomProtectedProperty"
	def get_my_random_protected(self):
		return self._someRandomProtectedProperty

	def set_my_random_protected(self, value):
		self._someRandomProtectedProperty = value;

	my_random_protected = property(get_my_random_protected, set_my_random_protected)

	# Even if not overriding "MySecondMethod", I can still call it as from the derived class
	# And it will work with the default implementation
```

> More Info:
> - https://www.python-course.eu/python3_abstract_classes.php
> - https://www.geeksforgeeks.org/abstract-classes-in-python/
> - https://docs.python.org/3/library/abc.html

[Back to top](#top)
