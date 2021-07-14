---
title: "1-3: Data Flow"
sidebar_label: "Step 3: Data Flow"
---

As any computer program, BushelScript scripts need to shunt data around to get things done. The two primary ways to do this are anonymous data flow and variables.

See also: [Language Reference](/docs/ref/data-flow).

## Anonymous data flow

"Anonymous" data flow is passing values around without giving them names. This is aided by the `that` keyword, which refers to the result of the last sequenced expression, usually whatever was discarded at the end of the previous line.

We can perform a numeric calculation across multiple lines, without assigning any variables:

```
-- Item price
14.99   --> 14.99
that    --> 14.99
-- Quantity
4 * that  --> 59.96
-- Plus tax
that + (that * 13 / 100) --> = 59.96 + (59.96 * 13/100) = 67.7548
```

We can also check a condition without losing what we're working with (we'll cover conditional expressions more in Section 5):

```
join {"long", "long", "list"} by "-" --> "long-long-list"
if (length of that) = 14
  that --> "long-long-list"
end
```

This style is encouraged whenever reasonable, but don't feel restricted to it.

Take note that everything you write in BushelScript is an expression that yields a result, so `that` almost always has a meaningful value. (The only exception is the first expression of a program or [function](function), where `that` is [`unspecified`](basic-syntax#unspecified-the-incidental-absence-of-a-value).)

## Variables

If you are used to AppleScript, take note: In BushelScript, there are no green-lettered "user identifiers". Instead, all names, including variables, are [terms](terms) defined in a [dictionary](dictionaries).

Variables can be defined using a `let` expression. This defines a variable named `logic`:

```
let logic
```

This defines a variable named `num` and assigns it a value of `42`:

```
let num be 42
```

Like most other dynamic languages, variables themselves are not assigned a specific data type. i.e., BushelScript variables are more like variables in Python than in Java.

Variables can shadow (hide) other terms:

```
string --> string type
let string be "example string"
string --> "example string"
```

And like all terms, variables can be composed of multiple words:

```
let my favorite number be 3.141592654
```

Shadowing and naming rules will be covered in detail in [terms](terms).
