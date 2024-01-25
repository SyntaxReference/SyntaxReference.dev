# Conditional

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
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```C
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```C
// ------------------------------------
// Switch Case Statement
// ------------------------------------

switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	// ...
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e741
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```Cpp
// ------------------------------------
// If-Else init-statement syntax
// ------------------------------------
// Since C++ 17

// Before:
my_init_statement

if (condition)
{
	// ...
}
else
{
   // ...
}

// Now Its possible to:
if (my_init_statement; condition)
{
	// ...
}
else
{
   // ...
}

// Simple Example
if (auto age = getAge(); age >= 21)
{
	// ...
}
else
{
   // ...
}
```

```Cpp
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```Cpp
// ------------------------------------
// Switch Case Statement
// ------------------------------------
switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	// ...
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

```Cpp
// ------------------------------------
// Switch Case init-statement syntax
// ------------------------------------
// Since C++ 17

// Before:
my_init_statement

switch ( expression )
{
	case value1:
	{
		// ...
		break;
	}
	// ...
	default:
	{
		// ...
		break;
	}
}

// Now Its possible to:
switch ( my_init_statement; expression )
​{
	case value1:
	{
		// ...
		break;
	}
	// ...
	default:
	{
		// ...
		break;
	}
}

// Simple Example
switch ( auto race = getRandomRace(); race )
{
	case Races::HUMAN:
	{
		// ...
		break;
	}
	// ...
	default:
	{
		// ...
		break;
	}
}
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e7
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```Cs
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```Cs
// ------------------------------------
// Switch Case Statement
// ------------------------------------

switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	case value5 when value5.something == "Hello World": // when clause (Since C# 7.0)
	{
		// ...
	}
	case "Hi": // Pattern matching (Since C# 7.0)
	{
		// ...
		break;
	}
	case null: // Type Pattern (Since C# 7.0)
	// ...
	case Array myArray: // Type Pattern - [case type varname:]
	case object myObject:
	case IList myLista:
	{
		// ...
		break;
	}
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

```Cs
// ------------------------------------
// Switch Case "Expression"
// ------------------------------------
// Since C# 8.0

// Switch Classic Example:
int result;

switch(expression)
{
	case value1:
	{
		result = 1;
		break;
	}
	case value2 when value2.something == "Hello World": // when clause (Since C# 7)
	{
		result = 2;
	}
	// ...
	default:
	{
		result = 0;
		break;
	}
}


// Switch Expression Example 1
var result = expression switch
{
	value1 => 1,
	value2 when value2.something == "Hello Word" => 2,
	_ => 0 // Default

}; // Dont forget ; (semicolon) here


// Switch Expression Example 2 - Property patterns
// Enables you to match on properties of the object examined
return location switch
{
	{ State: "WA" } => salePrice * 0.06M, // location.State =="WA"
	{ State: "MN" } => salePrice * 0.075M,
	{ State: "MI" } => salePrice * 0.05M,
	// ...
	_ => 0M
};


// Switch Expression Example 3 - Tuple patterns
// Tuple patterns allow you to switch based on multiple values expressed as a tuple.
return (first, second) switch
{
	("rock", "paper") => "rock is covered by paper. Paper wins.",
	("rock", "scissors") => "rock breaks scissors. Rock wins.",
	// ...
	(_, _) => "tie"
};


// Todo more Examples
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/switch
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308
> - https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#switch-expressions
> - https://alexatnet.com/cs8-switch-statement/
> - https://dotnetcoretutorials.com/2019/06/25/switch-expressions-in-c-8/

[Back to top](#top)

## Java

```Java
// ------------------------------------
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```Java
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```Java
// ------------------------------------
// Switch Case Statement
// ------------------------------------

switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	// ...
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## Rust

```Rust
// TODO
```

```Rust
// Todo :Ternary
```

```Rust
// TODO: Switch
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## Go

```Go
// TODO
```

```Go
// Todo: Ternary
```

```Go
// TODO: Switch
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## Javascript

```Javascript
// ------------------------------------
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```Javascript
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```Javascript
// ------------------------------------
// Switch Case Statement
// ------------------------------------

switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	// ...
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// If-Else
// ------------------------------------
if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ )
{
	// ...
}
else if ( /* condition */ && /* condition */) // "and" operator
{
	// ...
}
else if ( /* condition */ || /* condition */) // "or" operator
{
	// ...
}
else if ( !/* condition */) // "not" operator
{
	// ...
}
else
{
	// ...
}
```

```Typescript
// ------------------------------------
// Ternary
// ------------------------------------

condition ? response_if_true : response_if_false;
```

```Typescript
// ------------------------------------
// Switch Case Statement
// ------------------------------------

switch ( expression )
{
	case value1:
		// ...
		break; // Optional - If we do not use break, all statements after the matching label are executed.

	case value2: // { } are optional but should be used
	{
		/* A case block is not a new scope by itself, "cases" are labels, just like
		"goto" labels.
		Any variable you declare within one is visible for the rest of the switch
		statement. (But in the other case blocks, it's uninitialized.)
		By adding the braces, you create a new scope so the other blocks can't see it.
		*/

		// ...
		break;
	}
	case value3:
		//  no break here - It will "Fall-Through" the next case
	case value4:
	{
		// ... - Both "value3" and "value4" will be handled here
		break;
	}
	// ...
	default: // Optional. Default code if nothing matches the cases/conditions above
	{
		// ...
		break;
	}
}
```

> More Info:
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)

## Python

```Python
# ------------------------------------
# If-Else
# ------------------------------------

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed

# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.

if ( my_condition ): # The colon (:) at the end of the line is required.
	# ...
elif my_condition: # ( ) Parentheses are optional
	# ...
elif ( my_condition and my_condition):
	# ...
elif ( (my_condition) or (my_condition) ):
	# ...
elif ( not my_condition):
	# ...
else: # The colon (:) at the end of the line is required.
	# ...


# Good developers strive to write code that is clear and correct.
# ( ) Parentheses in conditionals, even if they are not strictly required, help with both.
```

```Python
# ------------------------------------
# Ternary
# ------------------------------------

response_if_true if condition else response_if_false
```

```Python
# ------------------------------------
# Switch Case Statement
# ------------------------------------

# Python does Not have Switch Cases
```
> More Info:
> - https://softwareengineering.stackexchange.com/questions/201175/should-i-use-parentheses-in-logical-statements-even-where-not-necessary
> - https://medium.com/@bartobri/5-secrets-of-the-switch-statement-633953b2e
> - https://stackoverflow.com/questions/7374486/break-statement-when-using-curly-braces-in-switch-case/7903308

[Back to top](#top)
