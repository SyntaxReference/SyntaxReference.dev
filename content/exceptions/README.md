# Exceptions

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
// Not Available Natively
```

> More Info:
> - https://stackoverflow.com/questions/2891766/how-to-throw-an-exception-in-c

[Back to top](#top)

## C++ (Cpp)

```Cpp
// C++ Has no "Finally()"

try
{
	// ...
}
catch(your_specific_exception& error) // Needs to be a Reference ( & ) so you dont break the Polymorphism
{
	std::cout << "Specific excetion happened: " << error.what() << std::endl;
}
catch(exception& error)
{
	std::cout << "An Excetion happened: " << error.what() << std::endl;
}
catch (...) // catch-all handler (Yes, ellipses)
{
	// Often, the catch-all handler block is left empty
	std::cout << "We caught an exception of an undetermined type\n";
}
```

```Cpp
// TODO: Create Custom Exception
```
> More Info:
> - https://www.learncpp.com/cpp-tutorial/144-uncaught-exceptions-catch-all-handlers-and-exception-specifiers/

[Back to top](#top)

## C# (Csharp)

```Cs
try
{
	// ...
}
catch(your_specific_exception error)
{
	Console.WriteLine($"Specific excetion happened: {error}";
}
catch(your_specific_exception error) when (error.ParamName == "something") // Exception filter
{
	Console.WriteLine($"Specific excetion happened: {error}";
}
catch(Exception error)
{
	std::cout << "An Excetion happened: " << error.what() << std::endl;
}
finally // Optional
{
	// This block will run for success or catch
	// Ex.: need to close connection to a server
}
```

```Cs
// TODO: Create Custom Exception
```

> More Info:
> - https://stackify.com/csharp-exception-handling-best-practices/
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch

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
// Javascript can only have 1 catch, so you need to use conditional inside

try {
	// ...
}
catch(error) {
	if (error instanceof TypeError) {
		// statements to handle TypeError exceptions
	}
	else if (error instanceof RangeError) {
		// statements to handle RangeError exceptions
	}
	else if (error instanceof EvalError) {
		// statements to handle EvalError exceptions
	}
	else {
		// ...
	}
}
finally {
	// Block of code to be executed regardless of the try / catch result
}
```

```Javascript
// TODO: Create Custom Exception
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

[Back to top](#top)

## Typescript

```Typescript
// Typescipt does NOT allow type annotation on catch.
// https://github.com/Microsoft/TypeScript/issues/20024

// You can probably do the same as Javascript

try {
	// ...
}
catch(error) {
	if (error instanceof TypeError) {
		// statements to handle TypeError exceptions
	}
	else if (error instanceof RangeError) {
		// statements to handle RangeError exceptions
	}
	else if (error instanceof EvalError) {
		// statements to handle EvalError exceptions
	}
	else {
		// ...
	}
}
finally {
	// Block of code to be executed regardless of the try / catch result
}
```

```Typescript
// TODO: Create Custom Exception
```
> More Info:
> - https://github.com/Microsoft/TypeScript/issues/20024

[Back to top](#top)

## Python

```Python
try:
    # ...
except YourSpecificError:
    # ...
except YourSecondSpecificError as error:
    print(f'YourSecondSpecificError: {error}')
except (RuntimeError, TypeError, NameError): # Multiple exceptions as a parenthesized tuple
	pass # you can pass (do nothing)
except:
    # The last except clause may omit the exception name(s), to serve as a wildcard.
	# Use this with extreme caution, since it is easy to mask a real programming error in this way!
else: # Optional
    # ...
finally: # Optional
    # Executed under all circumstances.
```

```Python
# Example from the documentation
def divide(x, y):
	try:
		result = x / y # Variable Hoisted (See below)
	except ZeroDivisionError:
		print("division by zero!")
	else:
		print("result is", result)
	finally:
		print("executing finally clause")

# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.
```

```Python
# TODO: Create Custom Exception
```

> More Info:
> - https://docs.python.org/3/tutorial/errors.html

[Back to top](#top)
