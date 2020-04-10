# Modules, Package & Headers

- [Imports](#imports)
	- [C](#c)
	- [C++ (Cpp)](#c-cpp)
	- [C# (Csharp)](#c-csharp)
	- [Java](#java)
	- [Rust](#rust)
	- [Go](#go)
	- [Javascript](#javascript)
	- [Typescript](#typescript)
	- [Python](#python)
- [Exports](#exports)
	- [C](#c-1)
	- [C++ (Cpp)](#c-cpp-1)
	- [C# (Csharp)](#c-csharp-1)
	- [Java](#java-1)
	- [Rust](#rust-1)
	- [Go](#go-1)
	- [Javascript](#javascript-1)
	- [Typescript](#typescript-1)
	- [Python](#python-1)
- [Manager](#manager)
	- [C](#c-2)
	- [C++ (Cpp)](#c-cpp-2)
	- [C# (Csharp)](#c-csharp-2)
	- [Java](#java-2)
	- [Rust](#rust-2)
	- [Go](#go-2)
	- [Javascript](#javascript-2)
	- [Typescript](#typescript-2)
	- [Python](#python-2)

## Imports

### C

```C
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

> More Info: https://learnxinyminutes.com/docs/c/

[Back to top](#top)

### C++ (Cpp)

```Cpp
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

> More Info: https://learnxinyminutes.com/docs/c++/

[Back to top](#top)

### C# (Csharp)

```Cs
using System; // input/output to console
using Alias = System.Console;
```

> More Info: https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/using-namespaces

[Back to top](#top)

### Java

```Java
// No need for output library for the console

import java.util.Scanner; // Input
import java.util.ArrayList;
import java.util.*;
```

[Back to top](#top)

### Rust

```Rust
// No need for input/output library for the console

use std::env
```

[Back to top](#top)

### Go

```Go
package main // input/output to console
import "fmt" // import keyword is used to import packages in your program and fmt package is used to implement formatted Input/Output with functions.
```

[Back to top](#top)

### Javascript

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

[Back to top](#top)

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

[Back to top](#top)

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

[Back to top](#top)

Legacy CommonJS format

```Javascript
// No need for output library for the console
const package = require('module-name');
const { PI } = Math;
```

[Back to top](#top)

### Typescript

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

[Back to top](#top)

### Python

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

[Back to top](#top)

## Exports

### C

```C
// Header Guards.
// This notation is just a convention, not the actual file name
#ifndef MY_HEADER_FILE_NAME_H
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here

// This is a header file (.h) the actual code will be
// inside a source file (.c)

#endif
```

```C
// Same purpose as header guards. However,
// is not an official part of the C/C++ language,
// and not all compilers support it (although most modern compilers do).
#pragma once

// Code Declarations Here

// This is a header file (.h) the actual code will be
// inside a source file (.c)
```

> More Info: https://www.learncpp.com/cpp-tutorial/header-guards/

[Back to top](#top)

### C++ (Cpp)

```Cpp
// Header Guards.
// This notation is just a convention, not the actual file name
#ifndef MY_HEADER_FILE_NAME_H
#define MY_HEADER_FILE_NAME_H

// Code Declarations Here

// This is a header file (.h) the actual code will be
// inside a source file (.cpp)

#endif
```

```Cpp
// Same purpose as header guards. However,
// is not an official part of the C/C++ language,
// and not all compilers support it (although most modern compilers do).
#pragma once


// Code Declarations Here

// This is a header file (.h) the actual code will be
// inside a source file (.cpp)
```

> More Info: https://www.learncpp.com/cpp-tutorial/header-guards/

[Back to top](#top)

### C# (Csharp)

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

[Back to top](#top)

### Java

```Java
// TODO
```

[Back to top](#top)

### Rust

```Rust
// TODO
```

[Back to top](#top)

### Go

```Go
// TODO
```

[Back to top](#top)

### Javascript

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

[Back to top](#top)

Legacy CommonJS format

```Javascript
// TODO
```

> More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

[Back to top](#top)

### Typescript

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

[Back to top](#top)

### Python

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

[Back to top](#top)

## Manager

### C

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

[Back to top](#top)

### C++ (Cpp)

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

[Back to top](#top)

### C# (Csharp)

[NuGet](https://www.nuget.org/)

Example: TODO

[Back to top](#top)

### Java

TODO

[Back to top](#top)

### Rust

[Crates.io](https://crates.io/)

Example: TODO

[Back to top](#top)

### Go

Modules are an experimental opt-in feature in Go 1.11

- [Dep](https://golang.github.io/dep/)
- [Go pkg](https://golang.org/pkg/)
- [Package Management Tools](https://github.com/golang/go/wiki/packagemanagementtools)
- [Download and install packages and dependencies](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies)

Example: TODO

> More Info:
> - https://medium.com/@adiach3nko/package-management-with-go-modules-the-pragmatic-guide-c831b4eaaf31
> - https://github.com/golang/go/wiki/Modules

[Back to top](#top)

### Javascript

[NPM](https://www.npmjs.com)

Example: TODO

[Back to top](#top)

### Typescript

[NPM](https://www.npmjs.com)

Example: TODO

[Back to top](#top)

### Python

[pip / Pypi](https://pypi.org/)

Example: TODO

[Back to top](#top)
