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

This section is focused on isolated examples (like the Deprecated) and how to create your own Attributes, Annotations or Decorators.

For Class Specific Attributes, Annotations or Decorators like "Override", "Staticmethod" and so on, check each respective Class Section.

## C

```C
// TODO
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Deprecated/Obsolete (since C++14)
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
class [[deprecated("Use another class. This one will be removed next version")]] my_class {
	// ...
};
```

```Cpp
// Standard C++ Doesnt Support Custom Attributes yet
```

> More Info:
> - https://en.cppreference.com/w/cpp/language/attributes

[Back to top](#top)

## C# (Csharp)

```Cs
// Deprecated/Obsolete
// Options:
//[Obsolete]
//[Obsolete(string message)]
//[Obsolete(string message, bool error)] (error == true means compilation error instead of warning)

[Obsolete]
public void MyFunction()
{
	// ...
}

[Obsolete("Use another class. This one will be removed next version")]
public class MyClass
{
    //...
}

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
// TODO: Custom Attribute Creation Example
```

[Back to top](#top)

## Java

```Java
// @Deprecated
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

> More Info:
> - https://www.codejava.net/java-core/the-java-language/deprecated-annotation-examples
> - https://docs.oracle.com/javase/7/docs/technotes/guides/javadoc/deprecation/deprecation.html

```Java
// @Override
// The @Override annotation indicates that the child class method is over-writing its base class method.
// It shows a warning from the compiler if the annotated method doesn't actually override anything.
// In case of a typo, and the @Override annotation was absent, a new method would be created instead of a override.

public class Animal
{
    public void speak()
	{
    }

    public String getType()
	{
        return "Generic animal";
    }
}

public class Cat extends Animal
{
    @Override
    public void speak()
	{ // This is a good override.
        System.out.println("Meow.");
    }

    @Override
    public String gettype()
	{ // Compile-time error due to typo: should be getType() not gettype().
        return "Cat";
    }
}
```

For more basic Class Annotations like `@Override` check Java Class Section.

> More Info:
> - https://en.wikipedia.org/wiki/Java_annotation

```Java
// TODO: Others Standard Annotations Examples
```

```Java
// TODO: Custom Annotation Creation Example
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
// Decorators are still an experimental feature
```

[Back to top](#top)

## Typescript

```Typescript
// Decorators are still an experimental feature
```

[Back to top](#top)

## Python

```Python
# Deprecated
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
#  @staticmethod
# Decorator that defines a static method

class Calculator:
    @staticmethod
    def add(x, y):
        return x + y

print('Product:', Calculator.add(15, 110))
```

For more basic Class Decorators like `@staticmethod` check Python Class Section.

```Python
# TODO: Custom Decorator Creation Example
```

[Back to top](#top)
