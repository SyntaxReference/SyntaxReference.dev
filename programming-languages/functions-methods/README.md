# Functions & Methods

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

> A function parameter is a variable used in a function. Function parameters
> work almost identically to variables defined inside the function, but with one
> difference: they are always initialized with a value provided by the caller of
> the function.

> An argument is a value that is passed from the caller to the function when a
> function call is made.

Source: https://www.learncpp.com/cpp-tutorial/introduction-to-function-parameters-and-arguments/

## C

```C
// ------------------------------------
// Definition
// ------------------------------------
[return_type] functionName( [parameters] )
{
	// ...
}

// I C, functions must be declared before its use.
// It is also possible to use a declaration statement called a
// "Function prototype"
[return_type] functionName( [parameters] ); // ; (Semicolon) here and without Body
// And later, the proper declaration

// ------------------------------------
// Declaration Example
// ------------------------------------

void myFunction(float x)
{
	// ...
}

float myFunction()
{
	// ...
}

myStruct myFunction( float x, float y)
{
	// ...
}


myClass myFunction( float x, float y)
{
	// ...
}

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// No Native Support. There are Workarounds


// ------------------------------------
// Optional Parameters
// ------------------------------------

// No Native Support. There are Workarounds


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// No Native Support. There are Workarounds


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------
#include <stdarg.h> // For va_list, va_start(), va_args()

// "count" - how many variables
// "..." - the variables
int add_all_int(int count, ...) // "..." (ellipsis) can only occur at the end
{
	va_list arguments;
	va_start(arguments, count); // Dynamic allocate "arguments" with "count" size

	int result = 0;

	for(int i = 0; i < count; i++)
	{
		// var_args(va_list_variable, count_type)
		result += va_arg(arguments, int);
	}

	va_end(arguments); // Free the memory
	return result;
}

// add 2 ints: (2+4)
add_all_int(2 ,2,4);

// add 3 ints: (2+4+7)
add_all_int(3 ,2,4,7);
```

```C
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```C
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// Definition
// ------------------------------------
[return type] functionName( [parameters] )
{
	// ...
}

// I C++, functions must be declared before its use.
// It is also possible to use a declaration statement called a
// "Function prototype"
[return type] functionName( [parameters] ); // ; (Semicolon) here and without Body
// And later, the proper declaration

// ------------------------------------
// Declaration Example
// ------------------------------------

void myFunction(float x)
{
	// ...
}

float myFunction()
{
	// ...
}

myStruct myFunction( float x, float y)
{
	// ...
}


myClass myFunction( float x, float y)
{
	// ...
}

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// No Native Support Yet.


// ------------------------------------
// Optional Parameters
// ------------------------------------

// All Parameters with default values are optional
// All Optional Parameters must be at the end.


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------
void myFunction(float x, float y=10) // 10 is the default argument. Y is now an Optional Parameter
{
	// ...
}

myFunction(20);
myFunction(20, 30);

// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// Fold Expressions (Since C++ 17)
template<typename ...Args>
auto add_all(Args ...args)
{
	return (args + ...);
}
// add 2 ints: (2+4)
add_all({2,4});

// add 3 ints: (2+4+7)
add_all({2,4,7});


// Variadic Templates (Since C++ 11)
#include <initializer_list>

template <typename T>
T add_all( std::initializer_list<T> list )
{
	T result = 0.0;
	for( auto element : list )
	{
		result += element;
	}

	return result;
}
// add 2 ints: (2+4)
add_all({2,4});

// add 3 ints: (2+4+7)
add_all({2.1,4.2,7.3});


// Old Way
#include <cstdarg> // For va_list, va_start(), va_args()

// "count" - how many variables
// "..." - the variables
int add_all_int(const int count, ...) // "..." (ellipsis) can only occur at the end
{
	va_list arguments;
	va_start(arguments, count); // Dynamic allocate "arguments" with "count" size

	int result = 0;

	for(int i = 0; i < count; i++)
	{
		// var_args(va_list_variable, count_type)
		result += va_arg(arguments, int);
	}

	va_end(arguments); // Free the memory
	return result;
}
// add 2 ints: (2+4)
add_all_int(2 ,2,4);

// add 3 ints: (2+4+7)
add_all_int(3 ,2,4,7);
```

```Cpp
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Cpp
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Cs
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Cs
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```


[Back to top](#top)

## Java

```Java
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Java
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Java
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```

[Back to top](#top)

## Rust

```Rust
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Rust
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Rust
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```


[Back to top](#top)

## Go

```Go
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Go
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Go
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```


[Back to top](#top)

## Javascript

```Javascript
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO
// Self Invoking Function
(function main() {
	// Code Here
})();

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Javascript
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Javascript
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```

> More Info:
> - https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
> - https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
> - https://stackoverflow.com/questions/31362292/how-to-use-arrow-functions-public-class-fields-as-class-methods

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// Definition
// ------------------------------------

// TODO

// ------------------------------------
// Declaration Example
// ------------------------------------

// TODO

// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// TODO
```

```Typescript
// ------------------------------------
// Generic/Template
// ------------------------------------

// TODO
```

```Typescript
// ------------------------------------
// Static
// ------------------------------------

// Check Static Section
```


[Back to top](#top)

## Python

```Python
# ------------------------------------
# Definition
# ------------------------------------

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed

# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.

def function_name ( [parameters] ):
	# ...

def function_name ( [parameters] ) -> [return_type]: # Optional Type Annotations (PEP 484 / Python 3.6+)
	# ...


# Python Methods might have the first Parameter as
# "self" or "cls".

# "self" points to an instance (object) of the class when the method is called.
# Through the self parameter, instance methods can freely access attributes and
# other methods on the same object.
def method_name(self):
	# ...

# "cls" points to the class (not the object instance) when the method is called.
@classmethod
def method_name(cls):
	# ...


# ------------------------------------
# Declaration Example
# ------------------------------------

def my_function ():
	# ...

def my_function ( x: str ) -> str: # Type Annotations (PEP 484 / Python 3.6+)
	# ...

def my_function ( x: int, y: int ) -> None:
	# ...

# ------------------------------------
# Named Parameters (Keyword Arguments)
# ------------------------------------

def my_function (parameter1, parameter2, parameter3):
	# ...

# Using Keyword Arguments, order doesnt matter
# The passed keyword name should match with the actual keyword name.
my_function(parameter3 = '!', parameter1 = 'Hello', parameter2 = 'World')

# ------------------------------------
# Optional Parameters
# ------------------------------------

# All Parameters with default values are optional
# All Optional Parameters must be at the end.


# ------------------------------------
# Default Argument for Parameters
# ------------------------------------

def my_function (parameter1, parameter2, parameter3='Default String'):
	# ...


my_function('Hello', 'World', '!')
my_function('Hello', 'World')
my_function(parameter3 = '!', parameter1 = 'Hello', parameter2 = 'World')
my_function(parameter1 = 'Hello', parameter2 = 'World')

# ------------------------------------
# Variable Number of Arguments to a Function Parameters
# ------------------------------------

# *args allows you to pass a varying number of positional arguments.
def add_all(*args): # Unpacking Operator (*)
	result = 0

	for element in args:
		result += element

	return result

print(add_all(1, 2, 3))


# **kwargs works just like *args, but instead of accepting positional arguments
# it accepts keyword (or named) arguments.
# Example 1
def add_all(**kwargs):
	result = 0

	for key, value in kwargs.items():
		print ("%s: %s" %(key, value))
		result += value

	return result

print(add_all(energy_bill = 1, car_bill = 2, school_bill = 3))

# Example 2
def concatenate(**kwargs):
	result = ''

	for element in kwargs.values():
	 	result += element

	return result

print(concatenate(first = 'Hello ', second = 'World', third = '!'))


# Everything Together
def my_function(parameter1, parameter2, *args, **kwargs):
	# ...
```

```Python
# ------------------------------------
# Generic/Template
# ------------------------------------

# TODO
```

```Python
# ------------------------------------
# Static
# ------------------------------------

# Check Static Section
```

> More Info:
> - https://realpython.com/instance-class-and-static-methods-demystified/
> - https://docs.python.org/3/library/typing.html
> - https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
> - https://realpython.com/python-type-checking/

[Back to top](#top)
