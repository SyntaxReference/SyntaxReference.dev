# Programming Languages Syntax Reference

___

:construction: This project is a working in progress :construction:

## Table of Content

- [Table of Content](#table-of-content)
- [Introduction](#introduction)
- [Licence](#licence)
- [Content](#content)
	- [Comments](#comments)
	- [Modules, Package &amp; Headers](#modules-package-amp-headers)
		- [Imports](#imports)
		- [Exports](#exports)
		- [Manager](#manager)
	- [Main (Entry Point)](#main-entry-point)
	- [Basic Types](#basic-types)
		- [Integer](#integer)
		- [Float &amp; Double](#float-amp-double)
		- [Character](#character)
		- [String](#string)
		- [Boolean](#boolean)
		- [Array, List, Vectors &amp; Tuples](#array-list-vectors-amp-tuples)
	- [Compound Types](#compound-types)
		- [ENUM](#enum)
		- [Struct](#struct)
		- [Object, Set &amp; Dictionary](#object-set-amp-dictionary)
	- [Type Aliases](#type-aliases)
	- [Type Conversion (Casting)](#type-conversion-casting)
	- [Arithmetic Operators](#arithmetic-operators)
	- [Output](#output)
		- [Basic](#basic)
		- [Formatted](#formatted)
		- [String Interpolation (Better Output)](#string-interpolation-better-output)
	- [Input](#input)
	- [String Operations](#string-operations)
	- [Array, List, Vectors &amp; Tuples Operations](#array-list-vectors-amp-tuples-operations)
		- [Add Item](#add-item)
		- [Update Item](#update-item)
		- [Remove Item](#remove-item)
		- [Copy](#copy)
		- [Extra](#extra)
	- [Pointer &amp; Reference](#pointer-amp-reference)
	- [Control Flow](#control-flow)
		- [Conditional](#conditional)
		- [Loop](#loop)
	- [Function](#function)
	- [Exceptions](#exceptions)
	- [Files](#files)
	- [Object Oriented](#object-oriented)
		- [Class](#class)
		- [Properties](#properties)
		- [Methods](#methods)
		- [Constructor &amp; Destructors](#constructor-amp-destructors)
		- [Interface](#interface)
		- [Inheritance, Composition &amp; Aggregation](#inheritance-composition-amp-aggregation)
		- [Overloading](#overloading)
		- [Polymorphism](#polymorphism)

## Introduction

___

We often need to maintain or develop projects in specific languages. It is easy to get the syntax mixed or not remember something specific.

This reference guide is focused on simplicity rather than deep explaining. This is not a language tutorial. It is expected from the reader experience in at least one language.

If you wanna help, see [Contributing](CONSTIBUTING.md).

## Licence

___

[CC0 - Creative Commons Zero v1.0 Universal](https://choosealicense.com/licenses/cc0-1.0/)

## Content

___

### Comments

---

**C**

```C
// line comment

/*
Multi-line comment
*/
```

**C++ (Cpp)**

```Cpp
// line comment

/*
Multi-line comment
*/
```

**C\# (Csharp)**

```Cs
// line comment

/*
Multi-line comment
*/
```

**Java**

```Java
// line comment

/*
Multi-line comment
*/
```

**Rust**

```Rust
// line comment

/// Documentation comments
/// Support markdown notation
```

**Go**

```Go
// line comment

/*
Multi-line comment
*/
```

**Javascript**

```Javascript
// line comment

/*
Multi-line comment
*/
```

**Typescript**

```Typescript
// line comment

/*
Multi-line comment
*/
```

**Python**

```Python
# line comment

"""
Multi-line comment
Support markdown notation
"""
```

### Modules, Package & Headers

---

#### Imports

---

**C**

```C
#include <stdio.h> // input/output to console
#include <stdlib.h>
#include <string.h>
// File names between <angle brackets> are headers from the C standard library.
// For your own headers, use double quotes instead (Convention)
#include "my_module.h"
#include "path/to/my_module.h"
#include "../path/to/my_module.h"
```

> More Info: https://learnxinyminutes.com/docs/c/

**C++ (Cpp)**

```Cpp
// C standard headers are available in C++.
// C headers end in .h, while
// C++ headers are prefixed with "c" and have no ".h" suffix.
#include <iostream> // input/output to console
#include <cstdio>
#include <string>
// File names between <angle brackets> are headers from the C++ (Cpp) standard library.
// For your own headers, use double quotes instead (Convention)
#include "my_module.h"
#include "path/to/my_module.h"
#include "../path/to/my_module.h"
```

> More Info: https://learnxinyminutes.com/docs/c++/

**C\# (Csharp)**

```Cs
using System; // input/output to console
using Alias = System.Console;
```

> More Info: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/using-namespaces

**Java**

```Java
// No need for output library for the console
import java.util.Scanner; // Input
import java.util.ArrayList;
import java.util.*;
```

**Rust**

```Rust
// No need for input/output library for the console
use std::env
```

**Go**

```Go
package main // input/output to console
import "fmt" // import keyword is used to import packages in your program and fmt package is used to implement formatted Input/Output with functions.
```

**Javascript**

ECMAScript format

```Javascript
// No need for output library for the console
import defaultExport from 'module-name';
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

Browser Specific

```Javascript
// Need to set the type to "module"
<script type="module">
	// "Bare" import specifiers aren't currently supported
	// You also need the file extension

	// Supported:
	import defaultExport from 'https://website/module_name.js';
	import defaultExport from '/folder/module_name.js';
	import defaultExport from './module_name.js';
	import defaultExport from '../module_name.js';

	// Not supported:
	import defaultExport from 'module_name.js';
	import defaultExport from 'folder/module_name.js';

	// Code Here
</script>
```

Node.js Specific

Since version 13, node has experimental support (Similar to the Browser)

If you want to use a ECMAScript format now, you can try a loader like https://www.npmjs.com/package/esm

```Javascript
// "Bare" import specifiers aren't currently supported
// You also need the file extension

// Supported:
import defaultExport from 'https://website/module_name.js';
import defaultExport from '/folder/module_name.js';
import defaultExport from './module_name.js';
import defaultExport from '../module_name.js';

// Not supported:
import defaultExport from 'module_name.js';
import defaultExport from 'folder/module_name.js';

// Code Here
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

Legacy CommonJS format

```Javascript
// No need for output library for the console
const package = require('module-name');
const { PI } = Math;
```

**Typescript**

```Typescript
// No need for input/output library for the console
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

> More Info: https://www.typescriptlang.org/docs/handbook/modules.html

**Python**

```Python
# No need for input/output library for the console
import module_name
from module_name import function1 , function2
from module_name import *
import module_name as alias
from module_name import function as alias
import module_name1, module_name2
import folder.subfolder.subfolder.module_folder # "The __init__.py" files are required to make Python treat directories containing the file as packages.
from folder.subfolder.subfolder import module_folder
from folder.subfolder.subfolder import *
from . import relative_module_name
from .. import relative_module_name
from ..module_name import relative_module_name
```

> More Info: https://docs.python.org/3/tutorial/modules.html

#### Exports

---

**C**

```C
#ifndef MY_HEADER_FILE_NAME_H // Header Guards. This notation is just a convention, not the actual file name
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here

// This is a header file (.h) the actual code will be inside a source file (.c)

#endif
```

```C
#pragma once // Same purpose as header guards. However, is not an official part of the C/C++ language, and not all compilers support it (although most modern compilers do).

// Code Declarations Here

// This is a header file (.h) the actual code will be inside a source file (.c)
```

> More Info: https://www.learncpp.com/cpp-tutorial/header-guards/

**C++ (Cpp)**

```Cpp
#ifndef MY_HEADER_FILE_NAME_H // Header Guards. This notation is just a convention, not the actual file name
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here

// This is a header file (.h) the actual code will be inside a source file (.cpp)

#endif
```

```Cpp
#pragma once // Same purpose as header guards. However, is not an official part of the C/C++ language, and not all compilers support it (although most modern compilers do).


// Code Declarations Here

// This is a header file (.h) the actual code will be inside a source file (.cpp)
```

> More Info: https://www.learncpp.com/cpp-tutorial/header-guards/

**C\# (Csharp)**

```Cs
// Just create a class
public class Calculator
{
	public int Sum(int a, int b)
	{
		return a + b;
	}
}
```

```Cs
// You can also have a namespace
namespace Microsoft.Calculator
{
	public class Calculator
	{
		public int Sum(int a, int b)
		{
			return a + b;
		}
	}
}
```

> More Info: https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces

**Java**

```Java
// TODO
```

**Rust**

```Rust
// TODO
```

**Go**

```Go
// TODO
```

**Javascript**

ECMAScript format

There are two types of exports:

- Named Exports (Zero or more exports per module)
- Default Exports (One per module)

```Javascript
// Exporting individual features
export let name1, name2, nameN; // also var, const
export let name1 = name2 = nameN; // also var, const
export function functionName() {}
export class ClassName {}

// Export list
export { name1, name2, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default class ClassName {}
export default function () {} // also class, function*
export default function name1() {} // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from 'module';
export { name1, name2, …, nameN } from 'module';
export { import1 as name1, import2 as name2, nameN } from 'module';
export { default } from  'module';
```

Legacy CommonJS format

```Javascript
// TODO
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

**Typescript**

There are two types of exports:

- Named Exports (Zero or more exports per module)
- Default Exports (One per module)

```Typescript
// Exporting individual features
export let name1, name2, nameN; // also var, const
export let name1 = name2 = nameN; // also var, const
export function functionName() {}
export class ClassName {}

// Export list
export { name1, name2, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default class ClassName {}
export default function () {} // also class, function*
export default function name1() {} // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from 'module';
export { name1, name2, …, nameN } from 'module';
export { import1 as name1, import2 as name2, nameN } from 'module';
export { default } from  'module';
```

> More Info: https://www.typescriptlang.org/docs/handbook/modules.html

**Python**

```Python
# No extra code is needed
# Just type your code and import
```

```Python
# But you can use the following convention

# Lets say you have the following folder/files
MyModule/
MyModule/__init__.py
MyModule/MyClass.py
MyModule/MyUtil.py

# Import them inside __init__.py
from MyClass import MyClass
from MyUtil import MyUtil

# You can now import them directly from your Module.
from MyModule import MyClass
```

#### Manager

---

**C**

No Official Support

Unofficial Managers:

- [conan](https://conan.io/)
- [spack](https://spack.io)
- [buckaroo](http://buckaroo.pm)
- [hunter](https://github.com/cpp-pm/hunter)
- [vcpkg](https://github.com/Microsoft/vcpkg)

Build:

- [build2](https://build2.org/)
- [GENie](https://github.com/bkaradzic/genie)
- [Premake](https://premake.github.io/)
- [CMake](https://cmake.org/)

Example: TODO

> More Info: https://medium.com/@julienjorge/an-overview-of-build-systems-mostly-for-c-projects-ac9931494444

**C++ (Cpp)**

No Official Support

Unofficial Managers:

- [conan](https://conan.io/)
- [spack](https://spack.io)
- [buckaroo](http://buckaroo.pm)
- [hunter](https://github.com/cpp-pm/hunter)
- [vcpkg](https://github.com/Microsoft/vcpkg)

Build:

- [build2](https://build2.org/)
- [GENie](https://github.com/bkaradzic/genie)
- [Premake](https://premake.github.io/)
- [CMake](https://cmake.org/)

Example: TODO

> More Info: https://medium.com/@julienjorge/an-overview-of-build-systems-mostly-for-c-projects-ac9931494444

**C\# (Csharp)**

[NuGet](https://www.nuget.org/)

Example: TODO

**Java**

TODO

**Rust**

[Crates.io](https://crates.io/)

Example: TODO

**Go**

Modules are an experimental opt-in feature in Go 1.11

- [Dep](https://golang.github.io/dep/)
- [Go pkg](https://golang.org/pkg/)
- [Package Management Tools](https://github.com/golang/go/wiki/packagemanagementtools)
- [Download and install packages and dependencies](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies)

Example: TODO

> More Info:
> - https://medium.com/@adiach3nko/package-management-with-go-modules-the-pragmatic-guide-c831b4eaaf31
> - https://github.com/golang/go/wiki/Modules

**Javascript**

[NPM](https://www.npmjs.com)

Example: TODO

**Typescript**

[NPM](https://www.npmjs.com)

Example: TODO

**Python**

[pip / Pypi](https://pypi.org/)

Example: TODO

### Main (Entry Point)

---

**C**

```C
int main(int argc, const char **argv)
{
	// Code Here

	return 0; // 0 (zero) means successful end of program
}
```

```C
int main(int argc, const char *argv[])
{
	// Code Here

	return 0;
}
```

```C
int main(void)
{
	// Code Here

	return 0;
}
```

> More Info: https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/

**C++ (Cpp)**

```Cpp
int main(int argc, const char **argv)
{
	// Code Here

	return 0; // 0 (zero) means successful end of program
}
```

```Cpp
int main(int argc, const char *argv[])
{
	// Code Here

	return 0;
}
```

```Cpp
int main(void)
{
	// Code Here

	return 0;
}
```

> More Info: https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/

**C\# (Csharp)**

```Cs
namespace MyNamespaceName // Namespaces are created to group and/or distinguish named entities from other ones. This prevents name conflicts.
{
    public class MyClassName
    {
        public static void Main(string[] args)
        {
			// Code Here
        }
    }
}
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/main-and-command-args/
> - https://www.geeksforgeeks.org/main-method-in-c-sharp/

**Java**

```Java
public class MyClassName
{
	public static void main(String[] args)
	{
		// Code Here
	}
}
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
// You dont need a main function. The Code runs top to bottom
// But, if you want to be organized:

function main() {
	// Code Here
}

main();
```

```Javascript
class Main {
	static Run() {
	// Code Here
	}
}

Main.Run();
```

```Javascript
// TODO Args Example
```

**Typescript**

```Typescript
// You dont need a main function. The Code runs top to bottom
// But, if you want to be organized:

function main(): void {
	// Code Here
}

main();
```

```Typescript
class Main {
	public static Run(): void {
		// Code Here
	}
}

Main.Run();
```

```Typescript
// TODO Args Example
```

**Python**

```Python
# You dont need a main function. The Code runs top to bottom
# But, if you want to be organized:

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed
def main():
	# Code Here

main()
```

```Python
def main():
	# Code Here

# Conditional to check If you are running the source file as the main program entry point
if (__name__ == "__main__"):
	main()
```

```Python
class Main:
	@staticmethod
	def run():
		# Code Here

if (__name__ == "__main__"):
	Main.run()
```

```Python
# TODO Args Example
```

### Basic Types

---

#### Integer

---

**C**

```C
#include <stdint.h> // Since C99
/*
To help with cross-platform portability, C99 defined a set of fixed-width integers (in the stdint.h header) that are guaranteed to have the same size on any architecture.
*/

int8_t variable_name_Signed = 10;		// Range: -128 to 127
uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
int32_t variable_name_Signed = 10;		// Range: -2,147,483,648 to 2,147,483,647
uint32_t variable_name_Unsigned = 10;	// Range: 0 to 4,294,967,295
int64_t variable_name_Signed = 10;		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
uint64_t variable_name_Unsigned = 10;	// Range: 0 to 18,446,744,073,709,551,615

const int16_t MY_CONSTANT = 30;

// Old Way
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;
```

> More Info:
> - https://en.wikipedia.org/wiki/C_data_types
> - https://pubs.opengroup.org/onlinepubs/009695399/basedefs/stdint.h.html

**C++ (Cpp)**

```Cpp
#include <cstdint> // Since C++11

std::int8_t variable_name_Signed = 10;		// Range: -128 to 127
std::uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
std::int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
std::uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
std::int32_t variable_name_Signed = 10;		// Range: -2,147,483,648 to 2,147,483,647
std::uint32_t variable_name_Unsigned = 10;	// Range: 0 to 4,294,967,295
std::int64_t variable_name_Signed = 10;		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
std::uint64_t variable_name_Unsigned = 10;	// Range: 0 to 18,446,744,073,709,551,615

const int16_t MY_CONSTANT = 30;
constexpr int16_t MY_CONSTANT = 30; // C++11
/*
Any variable that should not be modifiable after initialization and whose initializer is known at compile-time should be declared as constexpr.

Any variable that should not be modifiable after initialization and whose initializer is not known at compile-time should be declared as const.
*/

// Old way of declaring integers
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;

// Differents mode of initialization

// Copy
std::int32_t variable_name = 5; // copy initialization of value 5 into variable

// Direct
std::int32_t variable_name( 5 ); // direct initialization of value 5 into variable

// Uniform initialization (Also known as brace initialization)
std::int32_t variable_name{ 5 }; // brace initialization (since C++11) of value 5 into variable (Also known as uniform initialization or list initialization)
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://en.cppreference.com/w/cpp/types/integer
> - https://www.learncpp.com/cpp-tutorial/fixed-width-integers-and-size-t/
> - http://www.cplusplus.com/reference/cstdint/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

**C\# (Csharp)**

```Cs
// Todo
```

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
let variableName = 10;
const variableName = 10;
const MY_CONSTANT = 10;
var variableName = 10; // Avoid "var"

// A BigInt is created by appending n to the end of an integer or by calling the constructor.
let variableName = 10n;
/* The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
*/
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

**Typescript**

```Typescript
let variableName: number = 10;
let variableName: any = 10;
const variableName: number = 10;
const MY_CONSTANT: number = 10;

/* The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
*/
let variableName: bigint = 10n;
let variableName: BigInt(10);
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#number
> - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint

**Python**

```Python
variable_name = 10
variable_name: int = 10 # Type Annotations (PEP 484 / Python 3.6+)
variable_name: any = 10
MY_CONSTANT = 10
MY_CONSTANT: int = 10
```

> More Info: https://docs.python.org/3/library/typing.html

#### Float & Double

---

**C**

```C
float variable_name = 10.5;
float variable_name = 10.5f;
float variable_name = 10.5F;
const float MY_CONSTANT = 12.2;
const float MY_CONSTANT = 12.2f;

double variable_name = 10.5;
const double MY_CONSTANT = 12.2;
```

**C++ (Cpp)**

```Cpp
float variable_name = 10.5;
float variable_name = 10.5f;
float variable_name = 10.5F;
const float MY_CONSTANT = 12.2;
const float MY_CONSTANT = 12.2f;

double variable_name = 10.5;
const double MY_CONSTANT = 12.2;

constexpr float MY_CONSTANT = 12.2f; // C++11
/*
Any variable that should not be modifiable after initialization and whose initializer is known at compile-time should be declared as constexpr.

Any variable that should not be modifiable after initialization and whose initializer is not known at compile-time should be declared as const.
*/

// Differents mode of initialization

// Copy
std::int32_t variable_name = 5; // copy initialization of value 5 into variable

// Direct
std::int32_t variable_name( 5 ); // direct initialization of value 5 into variable

// Uniform initialization (Also known as brace initialization)
std::int32_t variable_name{ 5 }; // brace initialization (since C++11) of value 5 into variable (Also known as uniform initialization or list initialization)
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

**C\# (Csharp)**

```Cs
// Todo
```

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
// all numbers are floating point values.
let variableName = 10.2;
const variableName = 10.2;
const MY_CONSTANT = 10.2;
var variableName = 10.2; // Avoid "var"
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

**Typescript**

```Typescript
// all numbers are floating point values.
let variableName: number = 10.2;
const variableName: number = 10.2;
const MY_CONSTANT: number = 10.2;
```

> More Info: https://www.typescriptlang.org/docs/handbook/basic-types.html#number

**Python**

```Python
variable_name = 10.2
variable_name: float = 10.2 # Type Annotations (PEP 484 / Python 3.6+)
variable_name: any = 10.2
MY_CONSTANT = 10.2
MY_CONSTANT: float = 10.2
```

> More Info: https://docs.python.org/3/library/typing.html

#### Character

---

**C**

```C
char variable_name = 'a'; // Single Quotes for characters
char variable_name = '\n';

const char MY_CONSTANT = '\n';
```

**C++ (Cpp)**

```Cpp
char variable_name = 'a'; // Single Quotes for characters
char variable_name = '\n';

const char MY_CONSTANT = '\n';
constexpr char MY_CONSTANT = '\n'; // C++11
/*
Any variable that should not be modifiable after initialization and whose initializer is known at compile-time should be declared as constexpr.

Any variable that should not be modifiable after initialization and whose initializer is not known at compile-time should be declared as const.
*/

// Differents mode of initialization

// Copy
std::int32_t variable_name = 5; // copy initialization of value 5 into variable

// Direct
std::int32_t variable_name( 5 ); // direct initialization of value 5 into variable

// Uniform initialization (Also known as brace initialization)
std::int32_t variable_name{ 5 }; // brace initialization (since C++11) of value 5 into variable (Also known as uniform initialization or list initialization)
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

**C\# (Csharp)**

```Cs
// Todo
```

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
let variableName: string = 'a';
let variableName: string = "a";
let variableName: string = "\n"; // Avoid 'var'
var variableName: string = "\n"; // Avoid 'var'
const variableName: string = "a";
const MY_CONSTANT: string = "a";
```

**Typescript**

```Typescript
let variableName: string = 'a';
let variableName: string = "a";
let variableName: string = "\n";
const variableName: string = "a";
const MY_CONSTANT: string = "a";
```

**Python**

```Python
variable_name = "a"
variable_name: str = 'a' # Type Annotations (PEP 484 / Python 3.6+)
variable_name: any = 'a'
MY_CONSTANT = 'a'
MY_CONSTANT: str = 'a'
```

> More Info: https://docs.python.org/3/library/typing.html

#### String

---

**C**

```C
// No native string type

// In C, strings are an array of characters
char variable_name[21]; // This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[] = "Some string"; // No need to include '\0' here. The compiler inserts it at the end of the array for us.
char *variable_name = "Some string"; // No need to include '\0' here. The compiler inserts it at the end of the array for us.

const char MY_CONSTANT[] = "Something";
const char *MY_CONSTANT = "Something";
```

**C++ (Cpp)**

```Cpp
#include <string> // For string type

char variable_name[21]; // This is a string with lenght = 20. Dont forget to account for the '\0' character
char variable_name[] = "Some string"; // No need to include '\0' here. The compiler inserts it at the end of the array for us.
char *variable_name = "Some string"; // No need to include '\0' here. The compiler inserts it at the end of the array for us.

const char MY_CONSTANT[] = "Something";
const char *MY_CONSTANT= "Something";

// string library
std::string variable_name = "Another String";
const std::string variable_name = "Another String";
constexpr std::string MY_CONSTANT = "Another String"; // C++11
/*
Any variable that should not be modifiable after initialization and whose initializer is known at compile-time should be declared as constexpr.

Any variable that should not be modifiable after initialization and whose initializer is not known at compile-time should be declared as const.
*/


// Differents mode of initialization

// Copy
std::int32_t variable_name = 5; // copy initialization of value 5 into variable

// Direct
std::int32_t variable_name( 5 ); // direct initialization of value 5 into variable

// Uniform initialization (Also known as brace initialization)
std::int32_t variable_name{ 5 }; // brace initialization (since C++11) of value 5 into variable (Also known as uniform initialization or list initialization)
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

**C\# (Csharp)**

```Cs
// Todo
```

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
let variableName: string = 'Some string';
let variableName: string = "Some string";
var variableName: string = "Some string"; // Avoid 'var'
const variableName: string = "Some string";
const MY_CONSTANT: string = "Some string";
```

**Typescript**

```Typescript
let variableName: string = 'Some string';
let variableName: string = "Some string";
const variableName: string = "Some string";
const MY_CONSTANT: string = "Some string";
```

**Python**

```Python
variable_name = "Some string"
variable_name: str = 'Some string' # Type Annotations (PEP 484 / Python 3.6+)
variable_name: any = 'Some string'
MY_CONSTANT = 'Some string'
MY_CONSTANT: str = 'Some string'
```

> More Info: https://docs.python.org/3/library/typing.html

#### Boolean

---

TODO

#### Array, List, Vectors & Tuples

---

**C**

```C
#include <stdint.h> // Since C99

// Arrays
int32_t integer_array_name[20]; // Arrays must be initialized with a concrete size.
int32_t integer_array_name[] = {0, 1, 2, 3, 4}; // You can skip the size declaration if you initialize the array on the same line.
char char_array[] = {'a', 'b', 'c'};

// Multi Dimensional Array
int32_t multi_dimensional_array[20][30];

// In C, strings are an array of characters
char variable_name[21]; // This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[] = "Some string"; // No need to include '\0' here. The compiler inserts it at the end of the array for us.

// No Native List
// No Native Vectors
// No Native Tuples
```

**C++ (Cpp)**

```Cpp

// Arrays Classic
std::int32_t integer_array_name[20]; // Arrays must be initialized with a concrete size.
std::int32_t integer_array_name[] = {0, 1, 2, 3, 4}; // You can skip the size declaration if you initialize the array on the same line.
char char_array[] = {'a', 'b', 'c'};

// Arrays C++11
#include <array>

std::array<std::int32_t, 3> myArray; // declare an integer array with length 3
std::array<std::int32_t, 5> myArray = { 9, 7, 5, 3, 1 }; // initializer list
std::array<std::int32_t, 5> myArray { 9, 7, 5, 3, 1 }; // uniform initialization

// Multi Dimensional Array
std::int32_t multi_dimensional_array[20][30];

// List
#include <list>
// TODO

// Vectors C++03
#include <vector>
// no need to specify length at initialization
std::vector<std::int32_t> myVector;
std::vector<std::int32_t> myVector = { 9, 7, 5, 3, 1 }; // use initializer list to initialize array
std::vector<std::int32_t> myVector { 9, 7, 5, 3, 1 }; // use uniform initialization to initialize array (C++11 onward)

// Tuples
#include <tuple>
// TODO
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/6-15-an-introduction-to-stdarray/

**C\# (Csharp)**

```Cs
// Todo
```

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
// Array / Lists
let variableName = [];
let variableName = [1, 2, 3];
let variableName = new Array(3); // Size
const variableName = [1, 2, 3];
// *Arrays are reference types in JavaScript.

// No Native Tuple
// But you can workaround with arrays. See More Info bellow
```

> More Info:
> - https://medium.com/@ntgard/tuples-in-javascript-cd33321e5277
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> - https://www.dyn-web.com/javascript/arrays/value-vs-reference.php

**Typescript**

```Typescript
// Array / Lists
let variableName: number[] = [];
let variableName: number[] = [1, 2, 3];
let variableName: Array<number> = [1, 2, 3];
const variableName: number[] = [1, 2, 3];
const variableName: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10];
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#array
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple

**Python**

```Python
# Array / List
variable_name = []
variable_name = [1, 2, 3]
variable_name = [1, "Hello", 3.4] # list with mixed datatypes
variable_name = ["mouse", [8, 4, 6], ['a']] # nested list
MY_CONSTANT = [1, 2, 3]

# Tuples
variable_name = (1, 2, 3) # A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.
```

> More Info:
> - https://realpython.com/python-lists-tuples
> - https://www.programiz.com/python-programming/tuple

### Compound Types

---

#### ENUM

---

TODO

#### Struct

---

TODO

#### Object, Set & Dictionary

---

TODO

### Type Aliases

---
TODO

### Type Conversion (Casting)

---

TODO

### Arithmetic Operators

---

TODO

### Output

---

#### Basic

---

**C**

```C
#include <stdio.h>

// Main structure omitted

printf("Hello World\n"); // '\n' is the new line character
printf("Printing Integer: %d\n", 10);
printf("Printing Float: %f\n", 10.5);
printf("Printing Double: %lf\n", 20.5);
printf("Printing Character: %c\n", 'a'); // Single quote
printf("Printing String: %s\n", "my string");
printf("Printing Memory Address: %p\n", &variable_name);
printf("Printing Memory Address: %p\n", pointer_to_variable);
printf("Printing Octal: %o\n", 2567);
printf("Printing Hexadecimal (Letter in small letters): %x\n", 2567);
printf("Printing Hexadecimal (Letter in capital letters): %X\n", 2567);
printf("%s: %d %f", "More Printing", 30, 50.2);
```

**C++ (Cpp)**

```Cpp
#include <iostream>
// Main structure omitted

std::cout << "Hello world!\n"; // '\n' is the new line character
std::cout << "Hello world!" << std::endl; // std::endl prints a newline character
std::cout << 10 << std::endl;
std::cout << "Printing Integer: " << 10 << '\n';
std::cout << "Printing Any Number: " << 20.5 << '\n';

std::cout << "Printing An Address: " << &variable_name << '\n';
std::cout << "Printing An Address: " << pointer_to_variable << '\n';
std::cout << "Printing Octal: "<< std::oct << 2567 << '\n';
std::cout << "Printing Hexadecimal (Letter in small letters): "<< std::hex << 2567 << '\n';
std::cout << "Printing Hexadecimal (Letter in capital letters): "<< std::hex << std::uppercase << 2567 << '\n';

std::cout << std::nouppercase << std::dec; // Resetting to default

std::cout << "More Printing " << 30 << ", " << 50.2 << '\n';

// Prefer '\n' over std::endl when outputting text to the console.
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/
> - http://www.cplusplus.com/forum/windows/51591/

using namespace*

```Cpp
#include <iostream>

// Main structure omitted

using namespace std;

cout << "Hello world\n";
cout << "Hello world" << endl;
cout << 10 << std::endl;
cout << "Printing Integer: " << 10 << '\n';
cout << "Printing Any Number: " << 20.5 << '\n';

cout << "Printing An Address: " << &variable_name << '\n';
cout << "Printing An Address: " << pointer_to_variable << '\n';
cout << "Printing Octal: "<< oct << 2567 << '\n';
cout << "Printing Hexadecimal (Letter in small letters): "<< hex << 2567 << '\n';
cout << "Printing Hexadecimal (Letter in capital letters): "<< hex << uppercase << 2567 << '\n';

cout << nouppercase << dec; // Resetting to default

cout << "More Printing " << 30 << ", " << 50.2 << '\n';

// Prefer '\n' over std::endl when outputting text to the console.
```

> \* https://www.geeksforgeeks.org/using-namespace-std-considered-bad-practice/

**C\# (Csharp)**

```Cs
using System;

// Main structure omitted

Console.Write("Hello World\n"); // '\n' is the new line character
Console.WriteLine("Hello World");
Console.WriteLine(10);
Console.WriteLine("Printing Integer: " + 10);
Console.WriteLine("Printing Any Number: " + 20.5);
Console.WriteLine("More Printing " + 20.5 + ", " + "50.2");
```

**Java**

```Java
// Main structure omitted

System.out.print("Hello world\n"); // '\n' is the new line character
System.out.println("Hello world");
System.out.println("Printing Integer: " + 10);
System.out.println("Printing Any Number: " + 20.5);
System.out.println("More Printing " + 20.5 + ", " + "50.2");

```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

```Javascript
console.log('Hello World\n'); // '\n' is the new line character
console.log("Hello World\n");
console.log(10);
console.log("Printing Integer: " + 10);
console.log("Printing Integer: ", 10);
console.log("Printing Integer: %d\n", 10);
console.log("Printing Float: %f\n", 20.5);
console.log("Printing Any Number: " + 20.5);
console.log("Printing Any Number: ", 20.5);
console.log("More Printing " + 20.5 + ", " + "50.2\n");
console.log("More Printing ", 20.5, ", ", "50.2\n");
console.log([1, 2, 3, 4]); // array
console.log({a:1, b:2, c:3}); // object
console.log("Printing a Object: %o\n", {a:1, b:2, c:3});
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/API/console
> - https://www.geeksforgeeks.org/console-in-javascript/

**Typescript**

```Typescript
console.log('Hello World\n'); // '\n' is the new line character
console.log("Hello World\n");
console.log(10);
console.log("Printing Integer: " + 10);
console.log("Printing Integer: ", 10);
console.log("Printing Integer: %d\n", 10);
console.log("Printing Float: %f\n", 20.5);
console.log("Printing Any Number: " + 20.5);
console.log("Printing Any Number: ", 20.5);
console.log("More Printing " + 20.5 + ", " + "50.2\n");
console.log("More Printing ", 20.5, ", ", "50.2\n");
console.log([1, 2, 3, 4]); // array
console.log({a:1, b:2, c:3}); // object
console.log("Printing a Object: %o\n", {a:1, b:2, c:3});
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/API/console
> - https://www.geeksforgeeks.org/console-in-javascript/

**Python**

```Python
print('Hello World')
print("Hello World\n", end='') # By default the print has '\n' appended after the last value, you can change it if you want.
print(10)
print("Printing Integer:", 10) # the ',' adds a space between the text and the value
print("Printing Float:", 20.5)
print("Printing Any Number:", 20.5)
print("More Printing", 20.5, ",", "50.2")
print([1, 2, 3, 4]) # array
print({"a":1, "b":2, "c":3}); # object
print({'a':1, 'b':2, 'c':3}); # object
print("Printing a Object: ", {"a":1, "b":2, "c":3})
```

#### Formatted

---

TODO

#### String Interpolation (Better Output)

---

**C**

```C
// Not Available
```

**C++ (Cpp)**

```Cpp
// Not Available
```

**C\# (Csharp)**

```Cs
// Example 1
string name = "Mark";
var date = DateTime.Now;
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");

// Example 2
string name = "Horace";
int age = 34;
Console.WriteLine($"{name} is {age} year{(age == 1 ? "" : "s")} old.");
```

> More Info: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated

**Java**

```Java
// Todo
```

**Rust**

```Rust
// Todo
```

**Go**

```Go
// Todo
```

**Javascript**

Also known as Template literals (ES specification) or Template strings (old name)

```Javascript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
`string text ${variable_name} string text ${variable_name} string text`
```

```Javascript
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

**Typescript**

Also known as Template literals (ES specification) or Template strings (old name)

```Typescript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
`string text ${variable_name} string text ${variable_name} string text`
```

```Typescript
const a: number  = 5;
const b: number = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
> - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

**Python**

Also known as f-Strings (3.6+)

```Python
# Example 1
name = "Eric"
age = 74
print(f"Hello, {name}. You are {age}.")

# Example 2
# TODO + Formating examples
```

### Input

---

TODO

### String Operations

---

TODO

### Array, List, Vectors &amp; Tuples Operations

---

#### Add Item

---

TODO

#### Update Item

---

TODO

#### Remove Item

---

TODO

#### Copy

---

TODO

#### Extra

---

TODO

### Pointer & Reference

---

TODO

### Control Flow

---

TODO

#### Conditional

---

TODO

#### Loop

---

TODO

### Function

---

TODO

### Exceptions

---

TODO

### Files

---

TODO

### Object Oriented

---

TODO

#### Class

---

TODO

#### Properties

---

TODO

#### Methods

---

TODO

#### Constructor & Destructors

---

TODO

#### Interface

---

TODO

#### Inheritance, Composition & Aggregation

---

TODO

#### Overloading

---

TODO

#### Polymorphism

---

TODO
