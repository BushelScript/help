---
title: 2-1: Terms
sidebar_label: Part 1: Terms
---

_Terms_ are the syntactic particles of any BushelScript program. Each has a name, which identifies it in its [dictionary](dictionaries), a type, which determines its syntactic function, and a UID, which uniquely identifies its runtime semantics.

See also: [Quick Tutorial](../tutorial/terms).

## Term names

A _term name_ consists of one or more _words_ separated by whitespace and other _word-breaking characters_.

**Syntax**:

    <term-name> :: <word> [ <term-name> ]
    
    <word> :: (any valid UTF-8 byte sequence,
               terminated by one of the following characters:
                 - Whitespace (Unicode General Category Z*, U+000A ~ U+000D, and U+0085)
                 - Punctuation (Unicode General Category P*)
                 - Symbols (Unicode General Category S*)
                 not including: _ . - / ' ’
              )

### Normalization

Term names are automatically _normalized_ by the parser. Normalization removes leading and trailing whitespace, and replaces any whitespace between words with a single space character.

For example, the parser normalizes both <code>&nbsp; hello&#9;world&nbsp;</code> and <code>hello&#9;&nbsp;&#9;world&nbsp;&#9;&nbsp;</code> to `hello world`.

## Term types

| Term type  | `define` syntax | Syntactic function                                                                                            |
|------------|-----------------|---------------------------------------------------------------------------------------------------------------|
| Dictionary | `dictionary`    | Exists exclusively to contain a [dictionary](dictionaries) for organizational purposes.                       |
| Type       | `type`          | Can create a `type` object or a variety of [specifiers](specifiers#element-specifiers).                       |
| Property   | `property`      | Creates a property specifier.                                                                                 |
| Constant   | `constant`      | Evaluates to a `constant` object representing itself; models symbolic constants or AppleScript "enumerators". |
| Command    | `command`       | [Invokes a command](basic-syntax#command-invocations).                                                        |
| Parameter  | `parameter`     | [Associates an argument with a parameter in a command invocation](basic-syntax#summarized-meta-terminology).  |
| Variable   | `variable`      | Refers to stored data; usually defined using a [`let` expression](data-flow#variables).                       |
| Resource   | `resource`      | [Refers to an imported resource](resources#resource-terms).                                                   |

## Term UIDs

Every term has a _unique identifier_ (_UID_) which identifies its semantics at runtime. A UID is composed of a domain and a piece of data that uniquely identifies it within its domain. The set of allowable data values is determined by the domain.

### UID domains

| Domain        | Description                                                       | Data format                                  | Example UIDs in this domain                                                                                                                      |
|---------------|-------------------------------------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `ae4`         | Four-byte AppleEvent code                                         | 4 MacRoman characters                        | `ae4:cwin`                                                                                                                                       |
| `ae8`         | AE event class code, AE event ID code                             | 8 MacRoman characters                        | `ae8:coresetd`                                                                                                                                   |
| `ae12`        | AE event class code, AE event ID code, AE parameter code          | 12 MacRoman characters                       | `ae12:coresetddata`                                                                                                                              |
| `id`          | BushelScript native identifier (dervied from qualified term name) | Any number of term names separated by colons | `id:variable name`<br>`id:Dictionary:type:identifier`                                                                                            |
| `res`         | Resource ID                                                       | <code>(system &#124;app&#124;appid &#124;as):&lt;data&gt;</code>     | `res:system`<br>`res:app:System Preferences`<br>`res:appid:com.apple.Safari`<br>`res:as:/Users/user/Scripts/Script.scpt` |
| `asid`        | AppleScript user identifier                                       | Any valid AppleScript user identifier        | `asid:an_applescript_handler`<br>`asid:AnAppleScriptHandler`                                                                                     |
| `var(plural)` | Plural variant                                                    | Any UID                                      | `var(plural):ae4:cwin`                                                                                                                           |
| ────          | ───────                                                           | ──────                                       |                                                                                                                                                  |

## Typed UIDs (TUIDs)

A _typed UID_ (_TUID_) is the identifying combination of a term UID and a term type. A TUID unambiguously specifies a particular UID (and its particular semantics) in contexts where multiple types of terms might happen to share UIDs (but not semantics).

## Overlapping terms

Two or more terms _overlap_ each other if they have the same name, TUID, or both.

### Synonyms

Overlapping terms with the same TUID but different names are _synonyms_ of each other. Replacing a term with one of its synonyms yields no change in program behavior.

**Examples**:

```
4 -- Can be any expression.

(sqrt that) = (square root that) --> true
```

The result is always `true` because `sqrt` and `square root` have identical semantics; they are synonyms.

### Homonyms

Overlapping terms with identical names but different TUIDs are _homonyms_ of each other. Such identical-looking terms with different behavior are [surprising](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) and should usually be avoided.

Note that homonyms are necessarily defined in different [dictionaries](dictionaries), since a dictionary accessibly maps a name to at most one term.

### Identical terms

Terms that overlap in both name and TUID are called _identical terms_. Identical terms can be used interchangeably like synonyms, but unlike homonyms they cause minimal confusion.

While identical terms have the same name and TUID, they are not guaranteed to contain the same dictionary.

Identical terms cannot be defined in the same dictionary, since such terms would simply coalesce into one.

## Raw form

_Raw form_ is special syntax that creates an anonymous term by specifying its type and UID inline. Terms created this way have the same syntactic function as any other term of their type.

**Syntax**:

    <raw-term> :: « <term-type> <term-uid> »
    
    <term-type> ::
      ( dictionary | type | property | constant | command | parameter |
        variable | resource )

**Examples**:


ref «type ae4:cwin» --> window
ref «type var(plural):ae4:cwin» --> windows
```

This example refers to already-defined terms, which are displayed with their regular names at runtime.


«resource res:appid:com.apple.Safari» --> application id "com.apple.Safari"
```

If a resource's [requirement](resources#requirements) is not satisfied, a parse error will result as usual, although the error message may be less clear.


«type ae4:abcd» --> «type ae4:abcd»
```

`«type ae4:abcd»` is a not a defined term, but raw form can construct it on the fly. This is useful to quickly fill gaps in AppleScript terminology.
