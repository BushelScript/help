---
title: 1-3: Data Flow
sidebar_label: Step 3: Data Flow
---

See also: [Language Reference](../ref/data-flow).

## Anonymous

The `that` keyword refers to the result of the last sequenced expression (i.e., whatever was discarded at the end of the previous line).

This example uses `that` to perform a numeric calculation across multiple lines:

```applescript
-- Item price
14.99   --> 14.99
that    --> 14.99
-- Quantity
that * 4  --> 59.96
-- Plus tax
that + (that * 13 / 100) -- 59.96 + (59.96 * 13/100) --> 67.7548
```

This style is encouraged over the use of variables whenever reasonable. But don't feel restricted to it.

Also, all language structures are expressions that either generate a value or pass it through unmodified, so `that` almost always has a meaningful value. (The only exception is the first expression of a [function](function), where `that` is [`null`](basic-syntax#null-the-absence-of-a-value).)

## Variables

An important design difference from AppleScript arises here: in BushelScript, there are no green-lettered "user identifiers". Instead, all names are [terms](terms) defined by a [dictionary](dictionaries). This includes variable names, which are defined as _variable terms_ in the [function dictionary](dictionaries) using a `let` expression.

This defines a variable named `logic`:

```applescript
let logic
```

This defines a variable named `num` and assigns it a value of `42`:

```applescript
let num be 42
```

Like most other dynamic "scripting" languages, variables themselves are not assigned a specific data type.

Variable terms can shadow other terms:

```applescript
string -- string type
let string be "example string"
string -- "example string"
```

And like all terms, variable terms can be composed of multiple words:

```applescript
let my favorite number be 3.141592654
```

Shadowing and naming rules will be covered in detail in [terms](terms).
