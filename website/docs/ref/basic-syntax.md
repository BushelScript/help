---
title: "1-2: Basic Syntax"
sidebar_label: "Part 2: Basic Syntax"
---

BushelScript, being a programming language, has syntax which must be adhered to.

See also: [Quick Tutorial](../tutorial/basic-syntax).

## Comments

_Comments_ are pieces of text embedded in a program that are intended only to aid human readers. They have no formal semantic effect on the program; adding or removing comments does not change what a program does.

### Line comments

_Line comments_ begin with `--` and continue to the end of their line.

**Syntax**:

    <line-comment> :: -- <line-comment-text>
    
    <line-comment-text> ::
      (any valid UTF-8 byte sequence, excluding line breaks)

### Block comments

_Block comments_ begin with `--(` and continue through to new lines, until either `)--` or the end of the program is reached.

**Syntax**:

    <block-comment> :: --( <block-comment-text> [ )-- ]
    
    <block-comment-text> :: (any valid UTF-8 byte sequence)

## Values

### Numbers

Surprise, surprise: BushelScript supports numbers.

#### `integer`s

Positive and negative whole numbers, no fractions. Any numeric literal below 2⁶³ (about 9.223 × 10¹⁸) without a decimal point produces an `integer`.

`integer`s store signed 64-bit values. This means they can be fairly big (-2⁶³ ≤ 𝑥 < 2⁶³ for all integers 𝑥).

**Syntax**:

    <integer> ::
      (any sequence of decimal digits 0–9 such that their
       value in base-10 is within the bounds described above)

#### `real`s

Positive and negative numbers with fractions allowed. A numeric literal with a decimal point produces a `real`.

`real`s use double-precision [floating-point](https://en.wikipedia.org/wiki/Floating-point_arithmetic) format. This provides a huge range of representable values, but can cause imprecision in base-10 calculations: `real`s are stored as 𝑠 × 2ⁿ, where 𝑠 and 𝑛 are integers, but not all decimal numbers can be represented exactly in this format.

**Syntax**:

    <real> ::
      [ <digits> ] . <digits> [ ( e | E ) [ + | - ] <digits> ]
    
    <digits> :: (any sequence of decimal digits 0–9)

### `string`, a sequence of characters

A `string` is a sequence of Unicode characters. If it's text, it goes in a `string`.

**Syntax**:

    <string> :: ( ( " <string-characters> " ) | ( “ <string-characters> ” ) )
    
    <string-characters> ::
      (any valid UTF-8 byte sequence, excluding line breaks and
       the applicable string-closing character)

**Examples**:

```
"abc"
"this is a string value"
"😀😃😄" -- length 3 (grapheme clusters, not UTF-16 units)
```

### `boolean`, truth and falsity

A `boolean` represents the answer to a yes-or-no question. It can be reacted to by [control flow constructs](control-flow) or factored into [logical operations](#binary-operators).

**Syntax**:

    <boolean> :: true | false

**Examples**:

```
true
false
true and false --> false
false or true --> true
```

### `null`, the absence of a value

`null` indicates the absence of a meaningful value. Its effective semantics depend on the context of its use.

`null` is the sole value of [raw form](terms#raw-form) [type](terms#term-types) `«type ae4:msng»`, which is called `missing value` in AppleScript. It is [encoded](resources#remote-invocations) as this type object when sent in an AppleEvent.

**Syntax**:

    <null> :: null

**Examples**:

```
null
null as boolean --> false
```

Parameters without corresponding arguments in a [function](functions) [invocation](#command-invocations) are set to `null` in the function body:

```
on build greeting: to name
  -- 'name' is null if the 'to' parameter is omitted
  alert name
  -- null as a boolean is false
  "Hello" & (if name then (", " & name) else "") & "!"
end

build greeting --> "Hello!"
alert that

build greeting to "Billy" --> "Hello, Billy!"
alert that
```

## Commands

_Commands_ are units of operation. They take and produce data, and may have additional effects.

### Parameters

Inputs to a command are called its _parameters_. The caller provides their values.

### Result

The output of a command is called its _result_. It is available to the caller after it has received control back from a call.

### Side-effects

Commands often have _side-effects_; that is, they modify outside state in addition to producing a result. Side-effects are necessary for a program to really do anything, but they can also make code harder to debug. Commands without side-effects are analogous to mathematical functions.

### Command invocations

A command is _invoked_ by naming it. This produces a _command invocation_ expression, which passes _arguments_ to the command's parameters and evaluates to its result.

**Syntax**:

    <invocation> :: <command-name> [ <direct-object-argument> ] [ <arguments> ]
    
    <direct-object-argument> :: <expression>
    <arguments> :: <argument> [ <arguments> ]
    <argument> :: <parameter-name> <expression>

### Summarized meta-terminology

To be as clear and precise as possible, here is a table summarizing what each confusingly similar command-related term precisely means:

| Term                | Definition                                                                                                     |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| call                | A single evaluation of a command with a certain set of inputs. Often but not strictly produced by invocations. |
| invocation          | An expression that generates a command call, using a certain set of arguments, and evaluates to its result.    |
| parameter           | An input value from the point of view of a command. May change between calls.                                  |
| argument            | An input value from the point of view of an invocation. Is ephemeral and constant on a per-invocation basis.   |
| parameter name/term | The name that associates an argument with a parameter in invocations. e.g., `new` in `make new window`.        |

## Operators

_Operators_ are built-in commands with no side-effects that are exceptions to the regular invocation syntax.

Each operator has an assigned _precedence_ ranking. This will be elaborated on as soon as some issues get ironed out.

### Unary operators

_Unary operators_ require one operand.

#### Unary prefix operators

_Unary prefix operators_ are positioned before their operand.

| Syntax | Name      | Result                                              |
|--------|-----------|-----------------------------------------------------|
| `not`  | Unary NOT | The negation of the operand coerced to a `boolean`. |

**Syntax**:

    <unary-prefix-operation> :: <unary-prefix-operator> <expression>
    
    <unary-prefix-operator> ::
      (one of the operators in the first column of the above table)

#### Unary postfix operators

_Unary postfix operators_ are positioned after their operand.

There are none at the moment.

### Binary operators

_Binary operators_ require two operands.

#### Binary infix operators

_Binary infix operators_ are positioned in-between their operands.

| Syntax                                                                                                                                       | Name                                                     | Result                                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `or`                                                                                                                                         | OR                                                       | [OR](https://mathworld.wolfram.com/OR.html) or [disjunction](https://en.wikipedia.org/wiki/Logical_disjunction) of the operands coerced to `boolean`s.   |
| `xor`                                                                                                                                        | XOR                                                      | [XOR](https://mathworld.wolfram.com/XOR.html) or [exclusive disjunction](https://en.wikipedia.org/wiki/XOR_gate) of the operands coerced to `boolean`s.  |
| `and`                                                                                                                                        | AND                                                      | [AND](https://mathworld.wolfram.com/AND.html) or [conjunction](https://en.wikipedia.org/wiki/Logical_conjunction) of the operands coerced to `boolean`s. |
| `is a`<br></br>`is an`                                                                                                                            | Typecheck                                                | Whether the first operand is of the type described by the second operand.                                                                                |
| `is not a`<br></br>`is not an`<br></br>`isn't a`<br></br>`isn’t a`<br></br>`isn't an`<br></br>`isn’t an`                                                              | Negated typecheck                                        | Whether the first operand is _not_ of the type described by the second operand. `x is not a y` = `not (x is a y)`.                                       |
| `equals`<br></br>`[is] equal to`<br></br>`equals to`<br></br>`is`<br></br>`=`<br></br>`==`                                                                            | Equality check                                           | Whether the first operand is considered equal to the second operand.                                                                                     |
| `[is] not equal to`<br></br>`isn't equal to`<br></br>`isn’t equal to`<br></br>`[is] unequal to`<br></br>`is not`<br></br>`isn't`<br></br>`isn’t`<br></br>`not =`<br></br>`!=`<br></br>`≠` | Inequality check<br></br>Negated equality check               | Whether the first operand is _not_ considered equal to the second operand. `x is not equal to y` = `not (x is equal to y)`.                              |
| `[is] less than`<br></br>`<`                                                                                                                      | Less-than check                                          | Whether the first operand is ordered before the second operand.                                                                                          |
| `[is] less than [or] equal to`<br></br>`[is] less than or equals`<br></br>`<=`<br></br>`≤`                                                                  | Less-than-equal check                                    | Whether the first operand is ordered before or the same as the second operand.                                                                           |
| `[is] greater than`<br></br>`>`                                                                                                                   | Greater-than check                                       | Whether the first operand is ordered after the second operand.                                                                                           |
| `[is] greater than [or] equal to`<br></br>`[is] greater than or equals`<br></br>`>=`<br></br>`≥`                                                            | Greater-than-equal check                                 | Whether the first operand is ordered after or the same as the second operand.                                                                            |
| `starts with`<br></br>`begins with`                                                                                                               | Starts-with check                                        | Whether the sequential contents of first operand begin with the second or its contents.                                                                  |
| `ends with`                                                                                                                                  | Ends-with check                                          | Whether the sequential contents of first operand end with the second or its contents.                                                                    |
| `contains`<br></br>`has`                                                                                                                          | Containment check                                        | Whether the second operand or its contents are contained by the first operand.                                                                           |
| `does not contain`<br></br>`doesn't contain`<br></br>`doesn’t contain`<br></br>`does not have`<br></br>`doesn't have`<br></br>`doesn’t have`                          | Non-containment check<br></br>Negated containment check       | Whether the second operand or its contents are _not_ contained by the first operand. `x does not contain y` = `not (x contains y)`.                      |
| `is in`<br></br>`is contained by`                                                                                                                 | Contained-by check<br></br>Converse containment check         | Whether the first operand or its contents are contained by the second operand. `x is in y` = `y contains x`.                                             |
| `is not in`<br></br>`isn't in`<br></br>`isn’t in`<br></br>`is not contained by`<br></br>`isn't contained by`<br></br>`isn’t contained by`                             | Not-contained-by check<br></br>Converse non-containment check | Whether the first operand or its contents are _not_ contained by the second operand. `x is not in y` = `not (x is in y)`.                                |
| `&`                                                                                                                                          | Concatenate                                              | The contents of the first operand and the contents of the second operand joined together.                                                                |
| `+`                                                                                                                                          | Add                                                      | The sum of the first and second operands.                                                                                                                |
| `-`<br></br>`−`                                                                                                                                   | Subtract                                                 | The difference between the first and second operands.                                                                                                    |
| `*`<br></br>`×`                                                                                                                                   | Multiply                                                 | The product of the first and second operands.                                                                                                            |
| `/`<br></br>`÷`                                                                                                                                   | Divide                                                   | The quotient of the first and second operands.                                                                                                           |
| `as`                                                                                                                                         | Coerce                                                   | The first operand coerced to the type described by the second operand.                                                                                   |
| ───────────                                                                                                                                  | ────────                                                 |                                                                                                                                                          |

**Syntax**:

    <binary-infix-operation> ::
      <expression> <binary-infix-operator> <expression>
    
    <binary-infix-operator> ::
      (one of the operators in the first column of the above table)
