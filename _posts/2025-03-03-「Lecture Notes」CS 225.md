---
title: 「Lecture Notes」CS 225
date: 2024-03-03 00:04:20 +0800
categories: [Lecture Notes]
tags: [Math, Programming, C/C++]     # TAG names should always be lowercase
math: true
---

# $\texttt{CS 225 Lecture Notes}$

## $\texttt{Variables}$

### $\texttt{Variable Definition}$

In C/C++, the name of variables should obey some rules, which are generally as follows:

$$\text{<type>   <name> [ = <value>]}$$

Here are some examples:

```cpp
int a = 1;
char ch = 'x';
short b;
node n = node();
```

### $\texttt{Variable Data Type}$

From the examples above, we can find that there are various aspects of variable data type, like `int`, `char`, `short`, `node` (hich is a `class` or a `struct`), and so on.

The basic data types are shown in the following table.

| Data Type | Bytes | Value Range |
|   :---:   | :---: |    :---:    |
| (signed) char | $1$ | $-128 \sim 127$ |
| unsigned char | $1$ | $0 \sim 255$ |
| (signed) short (int) | $2$ | $-2^{15}\sim 2^{15} - 1$ |
| unsigned short (int) | $2$ | $0\sim 2^{16} - 1$ |
| (signed) int | $4$ | $-2^{31}\sim 2^{31} - 1$ |
| unsigned (int) | $4$ | $0\sim 2^{32} - 1$ |
| (signed) long (int) (32-bit system)| $4$ | $-2^{31}\sim 2^{31} - 1$ |
| unsigned long (int) (32-bit system) | $4$ | $0\sim 2^{32} - 1$ |
| (signed) long (int) (64-bit system)| $8$ | $-2^{63}\sim 2^{63} - 1$ |
| unsigned long (int) (64-bit system) | $8$ | $0\sim 2^{64} - 1$ |
| (signed) long long | $8$ | $-2^{63}\sim 2^{63} - 1$ |
| unsigned long long | $8$ | $0\sim 2^{64} - 1$ |
| float | $4$ | |
| double | $8$ | |
| long double | $16$| |
| pointers (32-bit system) | $4$ | None |
| pointers (64-bit system) | $8$ | None |

> Notice that there are bytes difference for `long` and pointers in 32-bit or 64-bit systems.
{: .prompt-info }

### $\texttt{Type Casting}$

We use `(Type)expression` to coercively change the type of the expression to another type.

```cpp
int a = 10;
double b = 2.5;

double c = (double)a;
int d = (int)b;

printf("%d->%lf, %ld->%d\n", a, c, b, d);
// 10->10.0, 2.5->2

int x = 123;
int *ptr = (int*)x;
// ptr will point to the memory location 0x123.
```

> Notice that type casting may cause precision loss or overflow.
{: .prompt-warning }

## $\texttt{Encapsulation}$

In practice, public functions and private member variables in a `class` have encapsulation properties. In C/C++, data structures and function definitions are forward declared in **header files**(`.h`), and then implemented in **program files**(`.c/.cpp`).

Here is an example for a simple encapsulation:

```cpp
// Sphere.h
#ifndef SPHERE_H
#define SPHERE_H

Class Sphere {
    private:
        double r;
    public:
        Sphere();
        Sphere(double r_);
        double getRadius();
        double getVolumn();
        double changeRadius(double r_);
};

#endif
```

```cpp
// Sphere.cpp
#include <bits/stdc++.h>
#include "Sphere.h"

using namespace std;

Sphere::Sphere() { r = 1.0; }

Sphere::Sphere(double r_) { r = r_; }

Sphere::getRadius() { return r; }

Sphere::getVolumn() { return (4.0 / 3.0) * 3.1415926 * r * r * r;}

Sphere::changeRadius(double r_) { r = r_; }
```

In `Sphere.h`, the code

```cpp
#ifndef SPHERE_H
#define SPHERE_H

// code

#endif
```

are known as **include guards**, which is used to ensure that the header file `Sphere.h` is only defined once.

Another way to write include guards is:

```cpp
#pragma once

// code
```

## $\texttt{Namspcaces}$

The most crucial point of namespaces is to avoid conflicts caused by duplicate names.

### $\texttt{Namespace Definition}$

In general, a namespace is defined by a name and `{}`, chich can include nearly anything, like variables, functions, classes, structs, etc.

```cpp
namespace mynamespace{
    int a;
    void func(){
        // something
    }
    class node{
        private:
            // something
        public:
            // somethong
    };
    struct edge {
        // something
    };
}
```

### $\texttt{Namespace Usage}$

There are two ways to use the content in the namespace: keyword `using` and `::`. When we use keyword `using`, it means that all the content from the namespace will be included in the program file.

```cpp
using namespace mynamespace;
func();

// OR

mynamespace::func();

// OR 

using mynamespace::func();
func();
```

> Notice that if you use the keyword `using`, it will cover all the variables that have the same name.
> {: .prompt-info }

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    int value = 1;
}

int value = 2;

using namespace a;

int main() {
    cout << value << endl; // It will print 1
    return 0;
}
```

However, if there are two variables which have the same name in two different namespaces, the program won't be successfully compiled since there exist the ambiguous useage of the variable. And you should use `::` to avoid that although you use keyword `using` above.

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    int value = 1;
}
namespace b {
    int value = 2;
}

using namespace a;
using namespace b;

int main() {
    cout << value << endl; // error
    cout << a::value << " " << b::value << endl;
    return 0;
}
```

The namespaces can be **nested used**, and there are four ways to use the variables that in the inside namespace.

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    namespace b {
        int value = 2;
    }
    using namespace b;
}

using namespace a;

int main() {
    cout << value << endl;
    return 0;
}
```

Or

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    namespace b {
        int value = 2;
    }
}

using namespace a::b;

int main() {
    cout << value << endl;
    return 0;
}
```

Or 

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    namespace b {
        int value = 2;
    }
}

int main() {
    cout << a::b::value << endl;
    return 0;
}
```

Or

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace a {
    namespace b {
        int value = 2;
    }
}

using a::b::value

int main() {
    cout << value << endl;
    return 0;
}
```

The program allows us to write namespace have the same names many times, and it will combine these namespaces into one namespace automatically.

```cpp
namespace a{
    int a;
}
namespace a{
    void func();
}
namespace a{
    class node{
        private:
        public:
    };
}

// Equals to

namespace a {
    int a;
    void func();
    class node{
        private:
        public:
    };
}
```

The program allows us to write unnamed namespace. In this way, the content in the namespace is automatically included in the program.

```cpp
namespace {
    // something
}
```

## $\texttt{Classes}$

A class is to a car factory as an object is to a car. Classes define the behavior of a type of object. They contain variables and functions that are inherent to the class.

### $\texttt{Class Definition}$

A class is usually defined with two keywords `private` and `public` and the content in these two keywords.

```cpp
class myclass {
    private:
        // something
    public:
        // something
};
```

Where `private` indicates that part of the content is private and cannot be accessed or invoked externally, but can only be accessed internally by the class, and `public` represents public properties and methods that can be directly accessed or invoked by the outside world.

In general, the attribute members of a class should be set to `private`, and `public` is only reserved for those function interfaces that are used by outsiders, but this is not mandatory, and can be adjusted as needed.

### $\texttt{Constructors}$

Constructor is the first function called when a new object of a given `class` or `struct` is created.

The constructor is defined by the name which is the same as the name of its own `class` or `struct`.

```cpp
class time {
    private:
        int year, month, day;
    public: 
        time() {
            year = month = day = 0;
        }
        time(int yy, int mm, int dd) {
            year = yy;
            month = mm;
            day = dd;
        }
};

int main() {
    time t1; // (0, 0, 0)
    time t2 = time(25, 3, 3);
    return 0;
}
```

Where the constructor without parameters is called **parameterless constructor**, which is a type of **default constructors**, and the constructor with parameters is called **parameter constructor**.

> If we don't define constructors for a `class`, the compiler will automatically generate a default constructor. However, the value in the new object will be random in this way.
{: .prompt-info }

These two constructors can be combined as a new constructor.

```cpp
class time {
    private:
        int year, month, day;
    public: 
        time(int yy = 0, int mm = 0, int dd = 0) {
            year = yy;
            month = mm;
            day = dd;
        }
};
```

The constructor is called **all default constructor**

> Notice that **paramaterless constructors**, **constructors automatically generated**, and **all default constructors** are all **default constructors**. One `class` or `struct` can only have one **default constructor**.
{: .prompt-warning }

```cpp
// error
class time {
    private:
        int year, month, day;
    public: 
        time() {
            year = month = day = 0;
        }
        time(int yy = 0, int mm = 0, int dd = 0) {
            year = yy;
            month = mm;
            day = dd;
        }
};
```

Another way to write constructors is to use **initialization list**.

```cpp
class time {
    private:
        int year, month, day;
    public: 
        time(int yy = 0, int mm = 0, int dd = 0) : year(yy), month(mm), day(dd) {}
};
```

> We couldn't omit the `{}` behind.
{: .prompt-warning }
