# Modules, Package & Headers

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

C has No Official Support for Packages Managers
Unofficial:

- [conan](https://conan.io/)
- [spack](https://spack.io)
- [buckaroo](http://buckaroo.pm)
- [hunter](https://github.com/cpp-pm/hunter)
- [vcpkg](https://github.com/Microsoft/vcpkg)

```C
// ------------------------------------
// Imports
// ------------------------------------
#include <stdio.h> // input/output to console
#include <stdlib.h>
#include <string.h>
// File names between <angle brackets> are headers from
// the C standard library.

#include "my_module.h"
#include "path/to/my_module.h"
#include "../path/to/my_module.h"
// For your own headers, use double quotes instead (Convention)
```

```C
// ------------------------------------
// Exports
// ------------------------------------

// Option 1 - Header Guards.

// This notation is just a convention, not the actual file name
#ifndef MY_HEADER_FILE_NAME_H
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here
// This is a header file (.h) the actual code will be
// inside a source file (.c)

#endif


// Option 2 - Pragma

// Same purpose as header guards. However,
// is not an official part of the C/C++ language,
// and not all compilers support it (although most modern compilers do).
#pragma once

// Code Declarations Here
// This is a header file (.h) the actual code will be
// inside a source file (.c)
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/header-guards/

[Back to top](#top)

## C++ (Cpp)

C++ has No Official Support for Packages Managers
Unofficial:

- [conan](https://conan.io/)
- [spack](https://spack.io)
- [buckaroo](http://buckaroo.pm)
- [hunter](https://github.com/cpp-pm/hunter)
- [vcpkg](https://github.com/Microsoft/vcpkg)

```Cpp
// ------------------------------------
// Imports
// ------------------------------------

// C standard headers are available in C++.
// C headers end in .h, while
// C++ headers are prefixed with "c" and have no ".h" suffix.

#include <iostream> // input/output to console
#include <cstdio>
#include <string>
// File names between <angle brackets> are headers from
// the C++ (Cpp) standard library.

#include "my_module.h"
#include "path/to/my_module.h"
#include "../path/to/my_module.h"
// For your own headers, use double quotes instead (Convention)
```

```Cpp
// ------------------------------------
// Exports
// ------------------------------------

// Option 1 - Header Guards.

// This notation is just a convention, not the actual file name
#ifndef MY_HEADER_FILE_NAME_H
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here
// This is a header file (.h) the actual code will be
// inside a source file (.cpp)

#endif

// Option 2 - Pragma

// Same purpose as header guards. However,
// is not an official part of the C/C++ language,
// and not all compilers support it (although most modern compilers do).
#pragma once


// Code Declarations Here
// This is a header file (.h) the actual code will be
// inside a source file (.cpp)
```

> More Info:
> - https://learnxinyminutes.com/docs/c++/

[Back to top](#top)

## C# (Csharp)

Official Package Manager: [NuGet](https://www.nuget.org/)

```Cs
// ------------------------------------
// Imports
// ------------------------------------

using System; // input/output to console
using Alias = System.Console;
```

```Cs
// ------------------------------------
// Exports
// ------------------------------------

// Option 1 - Just create a class
public class Calculator
{
	public int Sum(int a, int b)
	{
		return a + b;
	}
}

// Option 2 - You can also have a namespace
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

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/using-namespaces

[Back to top](#top)

## Java

```Java
// ------------------------------------
// Imports
// ------------------------------------

import java.util.Scanner; // Input
import java.util.ArrayList;
import java.util.*;
```

```Java
// ------------------------------------
// Exports
// ------------------------------------

// TODO
```

[Back to top](#top)

## Rust

Official Package Manager: [Crates.io](https://crates.io/)

```Rust
// ------------------------------------
// Imports
// ------------------------------------

// No need for input/output library for the console

use std::env
```

```Rust
// ------------------------------------
// Exports
// ------------------------------------

// TODO
```

[Back to top](#top)

## Go

Package Manager are an experimental opt-in feature in Go 1.11

- [Dep](https://golang.github.io/dep/)
- [Go pkg](https://golang.org/pkg/)
- [Package Management Tools](https://github.com/golang/go/wiki/packagemanagementtools)
- [Download and install packages and dependencies](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies)

```Go
// ------------------------------------
// Imports
// ------------------------------------

package main // input/output to console
import "fmt" // import keyword is used to import packages in your program and fmt package is used to implement formatted Input/Output with functions.
```

```Go
// ------------------------------------
// Exports
// ------------------------------------

// TODO
```

> More Info:
> - https://medium.com/@adiach3nko/package-management-with-go-modules-the-pragmatic-guide-c831b4eaaf31
> - https://github.com/golang/go/wiki/Modules

[Back to top](#top)

## Javascript

Official Package Manager: [NPM](https://www.npmjs.com)

```Javascript
// ------------------------------------
// Imports - ECMAScript format
// ------------------------------------

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

```Javascript
// ------------------------------------
// Imports - Browser Specific
// ------------------------------------

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

```Javascript
// ------------------------------------
// Imports - Node.js Specific
// ------------------------------------

// Since version 13, node has experimental support (Similar to the Browser)
// If you want to use a ECMAScript format now, you can try a loader like https://www.npmjs.com/package/esm

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
```

```Javascript
// ------------------------------------
// Imports - Legacy CommonJS format
// ------------------------------------

const package = require('module-name');
const { PI } = Math;
```

```Javascript
// ------------------------------------
// Exports - ECMAScript format
// ------------------------------------

// There are two types of exports:
// - Named Exports (Zero or more exports per module)
// - Default Exports (One per module)

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

```Javascript
// ------------------------------------
// Exports - Legacy CommonJS format
// ------------------------------------

// TODO
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

[Back to top](#top)

## Typescript

Official Package Manager: [NPM](https://www.npmjs.com)

```Typescript
// ------------------------------------
// Imports
// ------------------------------------

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
let promise = import("module-name");
```

```Typescript
// ------------------------------------
// Exports
// ------------------------------------

// There are two types of exports:
// - Named Exports (Zero or more exports per module)
// - Default Exports (One per module)

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

[Back to top](#top)

## Python

Official Package Manager: [pip / Pypi](https://pypi.org/)

```Python
# ------------------------------------
# Imports
# ------------------------------------

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

```Python
# ------------------------------------
# Exports
# ------------------------------------

# No extra code is needed
# Just type your code and import from other files


# BUT you can use the following convention

# Lets say you have the following folder/files
"""
MyModule/
MyModule/__init__.py
MyModule/MyClass.py
MyModule/MyUtil.py
"""

# Import them inside __init__.py
from MyClass import MyClass
from MyUtil import MyUtil

# You can now import them directly from your Module.
from MyModule import MyClass
```

> More Info: https://docs.python.org/3/tutorial/modules.html

[Back to top](#top)
