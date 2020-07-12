# Basic Template

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
// Header File (MyClass.h or MyClass.hpp) (Only declaration. No Implementation)

// You could also use the "pragma"
#ifndef MY_CLASS_H
#define MY_CLASS_H

class MyClass
{
	float some_random_variable; // private by default (if not inside a access specifiers)

private: // Private access specifiers
	// ------------------------------------
	// Private Properties / Fields
	// ------------------------------------
	float my_private_property;

	// ------------------------------------
	// Private Methods
	// ------------------------------------

	// Since its a private method, It can only be called inside this class
	void myPrivateMethod (float someVariable);

protected: // Protected access specifiers
// In this example I wont use "protected"
// If not in use, you can ommit an access specifiers

public: // Public access specifiers
	// ------------------------------------
	// Public Properties / Fields
	// ------------------------------------
	float my_public_property;

	// ------------------------------------
	// Constructor
	// ------------------------------------

	// The constructor has the same name as the class
	// Can be omited if you have no code to put here.
	MyClass();

	// ------------------------------------
	// Accessors (getter/setter)
	// ------------------------------------

	// Calling "getMyPrivateProperty" Ex.: myClassInstance.getMyPrivateProperty();
	float getMyPrivateProperty();

	// Calling "setMyPrivateProperty" Ex.: myClassInstance.setMyPrivateProperty(10.2);
	void setMyPrivateProperty(float value);

	// ------------------------------------
	// Public Methods
	// ------------------------------------

	// Calling "myPublicMethod" Ex.: myClassInstance.myPublicMethod(20.0);
	void myPublicMethod (float someVariable);

};	// Dont forgete the ; (semicolon) here

#endif // MY_CLASS_H
```

```Cpp
// Code file (MyClass.cpp)

#include "MyClass.h"

// We dont need to wrap all methods inside class {} for the Implementation
// But we need to prefix them with the class name and ::

// ------------------------------------
// Constructor
// ------------------------------------
MyClass::MyClass()
{
	// ...
}

// ------------------------------------
// Private Methods
// ------------------------------------
void MyClass::myPrivateMethod (float someVariable)
{
	//...
}

// ------------------------------------
// Accessors (getter/setter)
// ------------------------------------

// Calling "getMyPrivateProperty" Ex.: myClassInstance.getMyPrivateProperty();
float MyClass::getMyPrivateProperty()
{
	return this->my_private_property; // "this->" instead of "this."
}

// Calling "setMyPrivateProperty" Ex.: myClassInstance.setMyPrivateProperty(10.2);
void MyClass::setMyPrivateProperty(float value)
{
	this->my_private_property = value; // "this->" instead of "this."
}

// ------------------------------------
// Public Methods
// ------------------------------------

// Calling "myPublicMethod" Ex.: myClassInstance.myPublicMethod(20.0);
void MyClass::myPublicMethod (float someVariable)
{
	//...
}
```

```Cpp
// In some cases, like building a library, you might have everything inside the header file

// Everything Inside a Header File (MyClass.h or MyClass.hpp)

#pragma once // When using pragma, no need to use anything at the end (like #endif)

class MyClass
{
private:
	float my_private_property;

	void myPrivateMethod (float someVariable);

public:
	float my_public_property;

	MyClass();

	float getMyPrivateProperty();
	void setMyPrivateProperty(float value);

	void myPublicMethod (float someVariable);

};	// Dont forgete the ; (semicolon) here


// We dont need to wrap all methods inside class {} for the Implementation
// But we need to prefix them with the class name and ::
MyClass::MyClass()
{
	// ...
}

void MyClass::myPrivateMethod (float someVariable)
{
	//...
}

float MyClass::getMyPrivateProperty()
{
	return this->my_private_property;
}

void MyClass::setMyPrivateProperty(float value)
{
	this->my_private_property = value;
}

void MyClass::myPublicMethod (float someVariable)
{
	//...
}
```

```Cpp
// ------------------------------------
// Instantiating the class
// ------------------------------------

// Option 1 - No need to free the memory
MyClass myClassInstanceName;
MyClass myClassInstanceName{};
// OBS: Members will be accessible via "." operator
// Ex.: myClassInstanceName.MyMethod();


// Option 2 - Smart Pointer - No need to free the memory
#include <memory>

// OBS: Using Smart Pointers, Members will be accessible via "->" operator
// Ex.: myClassInstanceName->MyMethod();

// Smart Pointer - std::unique_ptr
// Dynamically allocated object that is not shared by multiple objects
std::unique_ptr<MyClass> myClassInstanceName {std::make_unique<MyClass>()}; // Since C++ 14 (std::make_unique)

auto myClassInstanceName {std::make_unique<MyClass>()};
auto myClassInstanceName = std::make_unique<MyClass>(); // Same as Above

std::unique_ptr<MyClass> myClassInstanceName {}; // Start as nullptr
std::unique_ptr<MyClass> myClassInstanceName; // Start as nullptr
myClassInstanceName = std::make_unique<MyClass>();

// Before C++ 14
std::unique_ptr<MyClass> myClassInstanceName (new MyClass());
std::unique_ptr<MyClass> myClassInstanceName {new MyClass{}}; // Using { }


// Smart Pointer - std::shared_ptr
// Dynamically allocated object that is shared by multiple objects
std::shared_ptr<MyClass> myClassInstanceName {std::make_shared<MyClass>()}; // Since C++ 14 (std::make_unique)

auto myClassInstanceName {std::make_shared<MyClass>()};
auto myClassInstanceName = std::make_shared<MyClass>(); // Same as Above

std::shared_ptr<MyClass> myClassInstanceName {}; // Start as nullptr
std::shared_ptr<MyClass> myClassInstanceName; // Start as nullptr
myClassInstanceName = std::make_shared<MyClass>();

// More about Pointers in the "Pointer & Reference" Section


// Option 3 - Legacy (Avoid)
MyClass* myClassInstanceName = new MyClass();
// ...
delete(myClassInstanceName); // You have to delete (free the memory) after you're done
```

> More Info:
> - https://stackoverflow.com/questions/8020113/c-include-guards/8020211#8020211
> - https://www.learncpp.com/cpp-tutorial/82-classes-and-class-members/
> - https://www.learncpp.com/cpp-tutorial/89-class-code-and-header-files/
> - https://www.learncpp.com/cpp-tutorial/8-8-the-hidden-this-pointer/
> - https://docs.microsoft.com/en-us/cpp/cpp/header-files-cpp?view=vs-2019
> - http://www.cplusplus.com/doc/tutorial/classes/
> - https://www.learncpp.com/cpp-tutorial/69-dynamic-memory-allocation-with-new-and-delete/
> - https://stackoverflow.com/questions/10836591/class-members-and-explicit-stack-heap-allocation
> - https://en.cppreference.com/w/cpp/memory/unique_ptr
> - https://en.cppreference.com/w/cpp/memory/shared_ptr

[Back to top](#top)

## C# (Csharp)

```Cs
public class MyClass
{
	// ------------------------------------
	// Fields
	// ------------------------------------
	public int myPublicField; // public field (Generally not recommended.)
	protected int myProtectedField; // Fields should be protected or private for internal use
	private int myPrivateField; // Fields should be camelCase

	// ------------------------------------
	// Properties (Fields with Accessors)
	// ------------------------------------
	public int MyPublicProperty { get; set; } // Properties should be PascalCase
	protected int MyProtectedProperty { set; }
	private int MyPrivateProperty { get; }

	// Calling get "MyPublicProperty" Ex.: myClassInstance.MyPublicProperty;
	// Calling set "MyPublicProperty" Ex.: myClassInstance.MyPublicProperty = 10;

	// ------------------------------------
	// Constructor
	// ------------------------------------

	// The constructor has the same name as the class
	// Can be omited if you have no code to put here.
	public MyClass()
	{
		// ...
	}

	// ------------------------------------
	// Accessors (getter/setter)
	// ------------------------------------

	// You dont need a dedicated getter/setter if
	// you declared either/both { get; set; }

	// But you can add custom rules to your get/sets

	// Example
	private string name; // field definition
	public string Name   // property definition
	{
		// You dont need both get and set
		get
		{
			return name;
		}
		set // set has implicit "value" parameter
		{
			if (value.Trim().Length < 3 )
			{
				throw new MyCustomException($"{nameof(value)} must have more than 3 characters.");
			}

			name = value;
		}
	}
	// Calling get "Name" Ex.: myClassInstance.Name;
	// Calling set "Name" Ex.: myClassInstance.Name = "hello";

	// ------------------------------------
	// Methods
	// ------------------------------------

	// Calling "myMethod" Ex.: myClassInstance.myMethod(20);
	public void myMethod (int someVariable)
	{
		//...
	}
}
```

```Cs
// ------------------------------------
// Instantiating the class
// ------------------------------------

MyClass myClassInstanceName = new MyClass();
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/using-properties

[Back to top](#top)

## Java

```Java
public class MyClass
{
	// ------------------------------------
	// Properties / Fields
	// ------------------------------------
	public int myPublicProperty; // Public by default
	private int myPrivateProperty;
	protected int myProtectedProperty;

	// ------------------------------------
	// Constructor
	// ------------------------------------

	// The constructor has the same name as the class
	// Can be omited if you have no code to put here.
	public MyClass() // Public by default
	{
		// ...
	}

	// ------------------------------------
	// Accessors (getter/setter)
	// ------------------------------------

	// Calling "getMyProperty" Ex.: myClassInstance.getMyProperty();
	public int getMyProperty()
	{
		return this.myPrivateProperty;
	}

	// Calling "setMyProperty" Ex.: myClassInstance.setMyProperty(10);
	public void setMyProperty(int value)
	{
		this.myPrivateProperty = value;
	}

	// ------------------------------------
	// Methods
	// ------------------------------------

	// Calling "myMethod" Ex.: myClassInstance.myMethod(20);
	public void myMethod (int someVariable)
	{
		//...
	}
}
```

```Java
// ------------------------------------
// Instantiating the class
// ------------------------------------

MyClass myClassInstanceName = new MyClass();
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
class MyClass {
	// ------------------------------------
	// Properties / Fields
	// ------------------------------------

	myPublicField = 0;
	#myPrivateField = 10;
	#mySecondPrivateField;

	// Public and Private declaration Syntax are new in Javascript
	/* Since:
		Babel 7.0+
		Node 12
		Public fields are enabled by default in Chrome 72 / V8 7.2
		Private fields are enabled by default in Chrome 74 / V8 7.4
		Public instance fields are enabled by default in Firefox 69
		Public static fields are enabled in Firefox Nightly 75 as of February 22, 2020
		Public instance fields are shipped behind a flag in Safari Technology Preview 101
		TypeScript 3.8
	*/

	// In older code, you will find public "declaration" inside the constructor or a function
	// The field would start to "exist" after its first declarion

	// ------------------------------------
	// Constructor
	// ------------------------------------
	constructor()
	{
		// As stated above, public and Private declaration Syntax are new in Javascript
		// In older code, you will find public "declaration" inside the constructor or a function.
		// The field would start to "exist" after its first declarion

		this.myAnotherPublicField = "Hello";
	}

	// ------------------------------------
	// Accessors (getter/setter)
	// ------------------------------------

	// Calling get "mySecondPrivateField" Ex.: myClassInstance.mySecondPrivateField;
	get mySecondPrivateField()  {
		return this.#mySecondPrivateField;
	}

	// Calling set "mySecondPrivateField" Ex.: myClassInstance.mySecondPrivateField = "hi";
	set mySecondPrivateField(value) {
		this.#mySecondPrivateField = value;
	}

	// ------------------------------------
	// Methods
	// ------------------------------------

	// Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	myMethod(someVariable)
	{
		//...
	}
	// IF you can, avoid arrow functions as methods. They won't
	// be in the prototype and can't be called with super().
	// There are some workarounds, Check More Info if you need them.
}
```

```Javascript
// ------------------------------------
// Instantiating the class
// ------------------------------------

let myClassInstanceName = new MyClass();
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
> - https://github.com/tc39/proposal-class-fields
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
> - https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
> - https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
> - https://stackoverflow.com/questions/31362292/how-to-use-arrow-functions-public-class-fields-as-class-methods

[Back to top](#top)

## Typescript

```Typescript
class MyClass {
	// ------------------------------------
	// Properties / Fields
	// ------------------------------------
	public myPublicProperty: string; // Public by default
	private myPrivateProperty: string;
	protected myProtectedProperty: string;

	// Javascript private Syntax also available
	#mySecondPrivateProperty: string; // Since Typescript 3.8

	// ------------------------------------
	// Constructor
	// ------------------------------------
	public constructor() // Public by default
	{
		// ...
	}

	// ------------------------------------
	// Accessors (getter/setter)
	// ------------------------------------

	// Calling get "myProperty" Ex.: myClassInstance.myProperty;
	get myProperty() : string {
		return this.myPrivateProperty;
	}

	// Calling set "myProperty" Ex.: myClassInstance.myProperty = "hi";
	set myProperty(value: string) {
		this.myPrivateProperty = value;
	}

	/*
		There are 2 commom patterns for Field & Accessors in Typescript

		- First Pattern: (camelCase Field and PascalCase get/set)

		private myProperty;
		get MyProperty() { ... }
		set MyProperty(value) { ... }

		- Second Pattern: (Underscore in Field name and both in camelCase)
		private _myProperty;
		get myProperty() { ... }
		set myProperty(value) { ... }
	*/

	// ------------------------------------
	// Methods
	// ------------------------------------

	// Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	public myMethod (someVariable: String)
	{
		//...
	}

	/*
	*TypeScript accessors (getter/setter) require to set the compiler to output
	  ECMAScript 5 or higher.
	*Accessor with a get and no set property are automatically assumed to be read-only no
	  need for manual work. This is helpful when we are generating a .d.ts file from our
	  code.
	*/
}
```

```Typescript
// ------------------------------------
// Instantiating the class
// ------------------------------------

let myClassInstanceName: MyClass = new MyClass();
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/classes.html

[Back to top](#top)

## Python

```Python
# Example 1: Direct Access (More Commom)
class MyClass:
	# ------------------------------------
	# Constructor
	# ------------------------------------
	def __init__(self, some_other_param): # All methods starts with "self" param (There are exceptions)
		# You will find "declaration" inside the constructor or a function.
		# The field would start to "exist" after its first declarion

		# Calling Ex.: myClassInstance.my_field
		self.my_field = "Hello" # "Self." is mandatory
		self.my_second_field = some_other_param # "Self." is mandatory

	# ------------------------------------
	# Methods
	# ------------------------------------

	# Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	def myMethod (self, someVariable):
		#...
```

```Python
# Example 2: Accessors Convention (Direct Access Still possible)
class MyClass:
	# ------------------------------------
	# Constructor
	# ------------------------------------
	def __init__(self, some_other_param): # All methods starts with "self" param (There are exceptions)
		# You will find "declaration" inside the constructor or a function.
		# The field would start to "exist" after its first declarion

		self._my_field = "Hello" # "Self." is mandatory
		self._my_second_field = some_other_param # "Self." is mandatory
		# Underscore at the beggining indicates to be protected or private (convention). Direct Access Still possible
		# _ 1 underscore = protected
		# __ 2 underscore = private

	# ------------------------------------
	# Accessors (getter/setter)
	# ------------------------------------

	# Calling "get_my_field" Ex.: myClassInstance.get_my_field();
	def get_my_field(self):
		return self._my_field # "Self." is mandatory


	# Calling "set_my_field" Ex.: myClassInstance.set_my_field("hi");
	def set_my_field(self, value):
		self._my_field = value; # "Self." is mandatory


	# ------------------------------------
	# Methods
	# ------------------------------------

	# Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	def myMethod (self, someVariable):
		#...
```

```Python
# Example 3: Property Registration
class MyClass:
	# ------------------------------------
	# Constructor
	# ------------------------------------
	def __init__(self, some_other_param): # All methods starts with "self" param (There are exceptions)
		# You will find "declaration" inside the constructor or a function.
		# The field would start to "exist" after its first declarion

		self._my_field = "Hello" # "Self." is mandatory
		self._my_second_field = some_other_param # "Self." is mandatory
		# Underscore at the beggining indicates to be protected or private (convention). Direct Access Still possible
		# _ 1 underscore = protected
		# __ 2 underscore = private

	# ------------------------------------
	# Accessors (getter/setter)
	# ------------------------------------

	def get_my_field(self):
		return self._my_field # "Self." is mandatory

	def set_my_field(self, value):
		self._my_field = value; # "Self." is mandatory

	# Property Registration
	myField = property(get_my_field, set_my_field)
	# Calling get "get_my_field" Ex.: myClassInstance.myField;
	# Calling set "set_my_field" Ex.: myClassInstance.myField = "hi";

	# ------------------------------------
	# Methods
	# ------------------------------------

	# Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	def myMethod (self, someVariable):
		#...
```

```Python
# Example 4: Accessors using decorators
class MyClass:
	# ------------------------------------
	# Constructor
	# ------------------------------------
	def __init__(self, some_other_param): # All methods starts with "self" param (There are exceptions)
		# You will find "declaration" inside the constructor or a function.
		# The field would start to "exist" after its first declarion

		self._my_field = "Hello" # "Self." is mandatory
		self._my_second_field = some_other_param # "Self." is mandatory
		# Underscore at the beggining indicates to be protected or private (convention). Direct Access Still possible
		# _ 1 underscore = protected
		# __ 2 underscore = private

	# ------------------------------------
	# Accessors (getter/setter)
	# ------------------------------------

	# getter
	@property
	def my_field(self):
		return self._my_field # "Self." is mandatory

	# setter
	@my_field.setter
	def my_field(self, value):
		self._my_field = value; # "Self." is mandatory

	# Calling get "my_field" Ex.: myClassInstance.myField;
	# Calling set "my_field" Ex.: myClassInstance.myField = "hi";

	# ------------------------------------
	# Methods
	# ------------------------------------

	# Calling "myMethod" Ex.: myClassInstance.myMethod("hello");
	def myMethod (self, someVariable):
		#...
```

```Python
# Example 5: A more complete "basic" example
class MyClass:
	# ------------------------------------
	# Properties / Fields
	# ------------------------------------
	__privateProperty: int = 0 # Type Annotations (PEP 484 / Python 3.6+)
	_protectedProperty: int = 10

	# ------------------------------------
	# Constructor
	# ------------------------------------
	def __init__(self) -> None:
		pass
		# Just an example.
		# If you have nothing to add inside the constructor, you can omit it
		# Or you can use the "pass" keyword inside.
		# Since there are no { } in python, "pass" is the only way to "make it empty"

	# ------------------------------------
	# Accessors (getter/setter)
	# ------------------------------------

	# getter
	@property
	def my_private(self) -> int:
		return self.__privateProperty

	# setter
	@my_private.setter
	def my_private(self, value: int):
		self.__privateProperty = value;


	# Property Registration
	def get_my_protected(self) -> int:
		return self._protectedProperty

	def set_my_protected(self, value: int):
		self._protectedProperty = value;

	myProtected = property(get_my_protected, set_my_protected)

	# ------------------------------------
	# Methods
	# ------------------------------------

	def myMethod (self, someVariable) -> None:
		#...
```

```Python
# ------------------------------------
# Instantiating the class
# ------------------------------------

myClassInstanceName = MyClass()
```

> More Info:
> - https://www.geeksforgeeks.org/getter-and-setter-in-python/
> - https://www.programiz.com/python-programming/property
> - https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
> - https://docs.python.org/3/library/typing.html
> - https://realpython.com/python-type-checking/
> - https://stackoverflow.com/questions/39817081/typing-any-vs-object

[Back to top](#top)
