# Attributes, Annotations & Decorators

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

This section is focused on specific examples (like the Deprecated/Obsolete) and how to create your own Attributes, Annotations or Decorators.

For Class Specific Annotations/Decorators like "Override", "Staticmethod" and so on, check the Class Section.

## C

```C
// TODO
```
> More Info:
> - http://unixwiz.net/techtips/gnu-c-attributes.html

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// Deprecated Attribute (since C++14)
// ------------------------------------

// Options:
// [[deprecated]]
// [[deprecated( string message )]]

// Function example
[[deprecated]]
void my_function(void)
{
	// ...
}

// Class example
class [[deprecated("Use another class. This one will be removed next version")]] Myclass
{
	// ...
};
```

```Cpp
// ------------------------------------
// Custom Attributes
// ------------------------------------

// Standard C++ Doesnt Support Custom Attributes yet
```

> More Info:
> - https://en.cppreference.com/w/cpp/language/attributes

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Obsolete Attribute
// ------------------------------------

//[Obsolete]
[Obsolete]
public void MyFunction()
{
	// ...
}

//[Obsolete(string message)]
[Obsolete("Use another class. This one will be removed next version")]
public class MyClass
{
	//...
}

//[Obsolete(string message, bool error)] (error == true means compilation error instead of warning)
[Obsolete("Use another class. This one wont compile", true)]
public class MyClass
{
	//...
}
```

```Cs
// TODO: Others Standard Attributes Examples
```

```Cs
// ------------------------------------
// Custom Attributes
// ------------------------------------

// TODO: Custom Attribute Creation Example
```

[Back to top](#top)

## Java

```Java
// ------------------------------------
// @Deprecated Annotation
// ------------------------------------

// The deprecated message can be documented in the Javadoc @deprecated tag.

/*
* @deprecated Use another method
*/
@Deprecated
public void MyMethod()
{
	// ...
}
```

```Java
// TODO: Others Standard Annotations Examples
```

```Java
// ------------------------------------
// Custom Annotation
// ------------------------------------

// TODO: Custom Annotation Creation Example
```

> More Info:
> - https://www.codejava.net/java-core/the-java-language/deprecated-annotation-examples
> - https://docs.oracle.com/javase/7/docs/technotes/guides/javadoc/deprecation/deprecation.html
> - https://en.wikipedia.org/wiki/Java_annotation

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
// Decorators are still an experimental feature

// There is a workaround package: https://www.npmjs.com/package/depd
```

[Back to top](#top)

## Typescript

```Typescript
// Decorators are still an experimental feature

// There is a workaround package: https://www.npmjs.com/package/depd
```

[Back to top](#top)

## Python

```Python
# ------------------------------------
# Deprecated Decorator
# ------------------------------------

# from the lib https://pypi.org/project/Deprecated/

from deprecated import deprecated

@deprecated(version='1.2.1', reason="You should use another function")
def some_old_function(x, y):
	return x + y


class SomeClass(object):
	@deprecated(version='1.3.0', reason="This method is deprecated")
	def some_old_method(self, x, y):
		return x + y
```

```Python
# ------------------------------------
# Custom Decorator
# ------------------------------------

# TODO: Custom Decorator Creation Example
```

[Back to top](#top)
