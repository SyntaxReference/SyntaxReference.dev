# Struct

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
struct Struct_name {
   some_type variable_name;
   some_type variable_name;
   ...
   some_type variable_name;
} struct_alias;

struct Person {
	char name[50];
	int age;
};

// Main structure omitted

struct Person some_person;

strcpy(some_person.name, "my name"); // strcpy() from <string.h>
some_person.age = 30;

// You can also return a struct from a function
struct Person getSomeone(void)
{
	// ...
}
```

> More Info:
> - https://en.wikipedia.org/wiki/Struct_(C_programming_language)
> - https://www.tutorialspoint.com/cprogramming/c_structures.htm
> - https://www.geeksforgeeks.org/structures-c/

[Back to top](#top)

## C++ (Cpp)

```Cpp
struct Struct_name {
   some_type variable_name;
   some_type variable_name;
   ...
   some_type variable_name;
} struct_alias;

struct Person {
	std::string name;
	std::uint8_t age;
};

// Main structure omitted

Person some_person;
some_person.name = "my name";
some_person.age = 30;

// Since C++11 you can also do this way
Person some_person{"my name", 30};

// You can also return a struct from a function
Person getSomeone()
{
	return {"Someone", 35}
}
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/47-structs/

[Back to top](#top)

## C# (Csharp)

```Cs
// TODO
```

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
// Javascript doesnt have Structs, but you can use "Object Literal" notation
// Remember that in Javascript, objets are reference values

const object_name = {
   key_name: value_name,
   key_name: value_name,
   ...
   key_name: value_name,
};

// You can start without any value
const some_person = {
	name,
	age,
};

some_person.name = "my name";
some_person.age = 30;

// you can also use a bracket notation
some_person["name"] = "my name";
some_person["age"] = 30;


// You can also return a object from a function
// Arrow Function Style
const getSomeone = () => {
	return {
		name: "Someone",
		age: 35,
	}
}


// Old function style
function getSomeone() {
	return {
		name: "Someone",
		age: 35,
	}
}
```

[Back to top](#top)

## Typescript

```Typescript
// TODO
```

[Back to top](#top)

## Python

```Python
# TODO

# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.
```

[Back to top](#top)
