# Digit Separator (Also Known as Numeric Separator)

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

Digit Separator does NOT change the variable value. Its only a visual separators for digit grouping purposes.

This is a common feature of modern languages, and can aid readability of long literals, or literals whose value should clearly separate into parts.

## C

```C
// Not Available
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Since C++14
// You can use Simple Quotation Mark ( ' ) as a digit separator.

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
int decimal {1'000'000'000};
int hexadecimal {0xFFFF'FFFF};
int octal {00'23'00};
int binary {0b1010'0011};
```

> More Info:
> - https://en.cppreference.com/w/cpp/language/integer_literal
> - https://www.learncpp.com/cpp-tutorial/literals/

[Back to top](#top)

## C# (Csharp)

```Cs
// Since C# 7.0
// You can use Underscore ( _ ) as a Digit separator.

// TODO: Examples
```

[Back to top](#top)

## Java

```Java
// Since Java 7
// You can use Underscore ( _ ) as a Digit separator.

// Example from Official Docs
long creditCardNumber = 1234_5678_9012_3456L;
long socialSecurityNumber = 999_99_9999L;
float pi = 3.14_15F;
long hexBytes = 0xFF_EC_DE_5E;
long hexWords = 0xCAFE_BABE;
long maxLong = 0x7fff_ffff_ffff_ffffL;
byte nybbles = 0b0010_0101;
long bytes = 0b11010010_01101001_10010100_10010010;
```

> More Info:
> - https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html

[Back to top](#top)

## Rust

```Rust
// You can use Underscore ( _ ) as a Digit separator.

// TODO: Examples
```

[Back to top](#top)

## Go

```Go
// TODO
```

[Back to top](#top)

## Javascript

```Javascript
// Support:
// Node 12.5.0+
// Firefox 70+
// Safari 13+
// Chrome 75+

// You can use Underscore ( _ ) as a numeric separator.

const decimal = 1_000_000_000_000; // grouped per thousand
const decimal = 1_000_000.220_720; // grouped per thousand
const binary = 0b01010110_00111000; // grouped per octet
const binary = 0b0101_0110_0011_1000; // grouped per nibble
const hexadecimal = 0x40_76_38_6A_73; // grouped per byte
const bigInt = 4_642_473_943_484_686_707n; // grouped per thousand
const octal = 0o123_456;
```

> More Info:
> - https://v8.dev/features/numeric-separators

[Back to top](#top)

## Typescript

```Typescript
// Since TypeScript 2.7
// You can use Underscore ( _ ) as a numeric separator.

const decimal = 1_000_000_000_000; // grouped per thousand
const decimal = 1_000_000.220_720; // grouped per thousand
const binary = 0b01010110_00111000; // grouped per octet
const binary = 0b0101_0110_0011_1000; // grouped per nibble
const hexadecimal = 0x40_76_38_6A_73; // grouped per byte
const bigInt = 4_642_473_943_484_686_707n; // grouped per thousand
const octal = 0o123_456;
```

> More Info:
> - https://mariusschulz.com/blog/numeric-separators-in-typescript
> - https://github.com/Microsoft/TypeScript/pull/20324

[Back to top](#top)

## Python

```Python
# Since PEP-515 (Python 3.6)
# You can use Underscore ( _ ) as a digit separator.

decimal = 1_000_000_000
hexadecimal = 0xFFFF_FFFF
octal = 0o257
binary = 0b1010_0011
```

[Back to top](#top)
