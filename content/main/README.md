# Main (Entry Point)

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
#include <stdlib.h> // For exit(), EXIT_SUCCESS, EXIT_FAILURE

int main(void)
{
	// Code Here

	// In some codes, instead of "return 0", you might find One of the following:
	return exit(0);
	return EXIT_SUCCESS;
	return exit(EXIT_SUCCESS);
}
```

> More Info:
> - https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/
> - https://stackoverflow.com/questions/13667364/exit-failure-vs-exit1

## C++ (Cpp)

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
#include <cstdlib> // For exit(), EXIT_SUCCESS, EXIT_FAILURE

int main(void)
{
	// Code Here

	// In some codes, instead of "return 0", you might find One of the following:
	return exit(0);
	return EXIT_SUCCESS;
	return exit(EXIT_SUCCESS);
}
```

> More Info:
> - https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/
> - https://stackoverflow.com/questions/13667364/exit-failure-vs-exit1

## C# (Csharp)

```Cs
public class MyClassName
{
	public static void Main(string[] args)
	{
		// Code Here
	}
}
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/main-and-command-args/
> - https://www.geeksforgeeks.org/main-method-in-c-sharp/

## Java

```Java
public static void main(String[] args)
{
	// Code Here
}
```

## Rust

```Rust
// Todo
```

## Go

```Go
// Todo
```

## Javascript

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
// TODO Args Example (Node)
```

## Typescript

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

## Python

```Python
# You dont need a main function. The Code runs top to bottom
# But, if you want to be organized:

def main():
	# Code Here

main()

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed
```

```Python
def main():
	# Code Here

# Conditional to check If you are running the source file as
# the main program entry point (Instead of importing it from another file)

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
