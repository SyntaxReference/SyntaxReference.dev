# Static

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
// Static Variable Inside Functions
// ------------------------------------

// When the variable is scoped and marked as static,
// their value will be preserved in memory even after
// they are out of their scope.

void myFunction()
{
	static int myVariable = 0; // myVariable will keep its value for every call
	// ...
}


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// Not Available
// C has no Class


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// When the variable is declared in the global scope (outside any function),
// their access will be restricted to the file itself.
// Wihtout "static", all global variables are globally accessible by default
// The purpose is to limit scope of a global variable to a file.

static int myVariable = 0;


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// In C, static functions are restricted to the file where they are declared.
// Wihtout "static", all functions are globally accessible by default
// The purpose is to limit scope of a function to a file.

static void myFunction() // This functions is scoped only accessible internally
{
	// ...
}

// ------------------------------------
// Static Class Objects
// ------------------------------------

// Not Available
// C has no Class
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// When the variable is scoped and marked as static,
// their value will be preserved in memory even after
// they are out of their scope.

void myFunction()
{
	static int myVariable = 0; // myVariable will keep its value for every call
	// ...
}


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// Static member variables are shared by all the objects of a class
// They must be initialized explicitly. (Not initialied using constructor)

class MyClass
{
public:
	static int myVariable = 0;
	// ...
};

// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// When the variable is declared in the global scope (outside any function),
// their access will be restricted to the file itself.
// Wihtout "static", all global variables are globally accessible by default
// The purpose is to limit scope of a global variable to a file.

static int myVariable = 0;


// ------------------------------------
// Static Functions & Methods
// ------------------------------------


// Static methods (member functions) are shared by all the objects of a class
class MyClass
{
public:
	static int myFunction();
	// ...
};


// ------------------------------------
// Static Class Objects
// ------------------------------------

// The scope of static object is through out the life time of program.
static MyClass myObject;
```

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO

// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO

// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Java

```Java
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Rust

```Rust
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Go

```Go
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Javascript

```Javascript
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// Static Variable Inside Functions
// ------------------------------------

// TODO


// ------------------------------------
// Static Member Variable Inside Class
// ------------------------------------

// TODO


// ------------------------------------
// Static Global Variable in a File
// ------------------------------------

// TODO


// ------------------------------------
// Static Functions & Methods
// ------------------------------------

// TODO


// ------------------------------------
// Static Class Objects
// ------------------------------------

// TODO

```

[Back to top](#top)

## Python

```Python
# ------------------------------------
# Static Variable Inside Functions
# ------------------------------------

# TODO


# ------------------------------------
# Static Member Variable Inside Class
# ------------------------------------

# TODO


# ------------------------------------
# Static Global Variable in a File
# ------------------------------------

# TODO


# ------------------------------------
# Static Functions & Methods
# ------------------------------------

# Decorator that defines a static method

class Calculator:
    @staticmethod
    def add(x, y):
        return x + y

# Calling Ex.:
print('Product:', Calculator.add(15, 110))

# ------------------------------------
# Static Class Objects
# ------------------------------------

# TODO

```

> More Info:
> - https://realpython.com/instance-class-and-static-methods-demystified/

[Back to top](#top)
