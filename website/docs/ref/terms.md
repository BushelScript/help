---
title: "2-1: Terms"
sidebar_label: "Part 1: Terms"
---

_Terms_ are the syntactic particles of BushelScript programs. Terms defined in dictionaries have [names](#term-names). Every term has a [syntactic role](#syntactic-roles), a [semantic URI](#semantic-uris), and contains a [dictionary](dictionaries) which can define more terms.

See also: [Quick Tutorial](../tutorial/terms).

## [Term names](grammar#term-name)

Each term defined in a dictionary has a name used to refer to it. Syntactically, a _term name_ consists of one or more _words_ separated by whitespace and other _word-breaking characters_. Term names are automatically _normalized_ by the parser by removing leading and trailing whitespace, and replacing any whitespace between words with a single space character. For example, the parser normalizes both <code>&nbsp;term&nbsp;name&nbsp;</code> and <code>term&#9;&nbsp;&#9;name</code> to `term name`.

## [Syntactic roles](grammar#term-id)

Each term has a _syntactic role_, which determines its function.

| Term role  | `define` syntax | Syntactic function                                                                                            |
|------------|-----------------|---------------------------------------------------------------------------------------------------------------|
| Type       | `type`          | Can create a `type` object or a variety of [specifiers](specifiers#element-specifiers).                       |
| Property   | `property`      | Creates a property specifier.                                                                                 |
| Constant   | `constant`      | Evaluates to a `constant` object representing itself; models symbolic constants or AppleScript "enumerators". |
| Command    | `command`       | [Invokes a command](basic-syntax#command-invocations).                                                        |
| Parameter  | `parameter`     | [Associates an argument with a parameter in a command invocation](basic-syntax#summarized-meta-terminology).  |
| Variable   | `variable`      | Refers to stored data; usually defined using a [`let` expression](data-flow#variables).                       |
| Resource   | `resource`      | [Refers to an imported resource](resources#resource-terms).                                                   |

## Semantic URIs

Each term also has a _semantic URI_, which identifies its runtime meaning. As usual, a URI consists of `scheme:identifying-data`. The scheme determines which data values are allowed and how they are interpreted at runtime.

### URI schemes

| Scheme        | Description                                                       | Data format                                  | Example URIs with this scheme                                                                                                                    |
|---------------|-------------------------------------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`          | BushelScript native identifier (dervied from qualified term name) | Any number of term names separated by colons | `id:variable name`<br></br>`id:My ibrary:my type:my property`                                                                                            |
| `res`         | Resource ID                                                       | See [resource types](resources#types-of-resources) | `res:library:My Library`<br></br>`res:system`<br></br>`res:app:System Preferences`<br></br>`res:appid:com.apple.Safari`<br></br> |
| `ae4`         | Four-byte AppleEvent code                                         | 4 MacRoman characters                        | `ae4:cwin`                                                                                                                                       |
| `ae8`         | AE event class code, AE event ID code                             | 8 MacRoman characters                        | `ae8:coresetd`                                                                                                                                   |
| `ae12`        | AE event class code, AE event ID code, AE parameter code          | 12 MacRoman characters                       | `ae12:coresetddata`                                                                                                                              |
| `asid`        | AppleScript user identifier                                       | Any valid AppleScript user identifier        | `asid:an_applescript_handler`<br></br>`asid:AnAppleScriptHandler`                                                                                     |

## Term IDs

A _term ID_ is a combination of a term role and a semantic URI. Term IDs are used in contexts where multiple types of terms might happen to share the same URI (usually, but not always, with the `ae4` scheme).

## Overlapping terms

Two or more terms _overlap_ each other if they have the same name, ID, or both.

### Synonyms

Overlapping terms with the same ID but different names are _synonyms_ of each other. Replacing a term with one of its synonyms yields no change in program behavior.

```
4 -- Can be any expression.

(sqrt that) = (square root that) --> true
```

The result is always `true` because `sqrt` and `square root` have identical semantics; they are synonyms.

### Homonyms

Overlapping terms with identical names but different IDs are _homonyms_ of each other. Such identical-looking terms with different behavior should be avoided if possible. Note that homonyms are necessarily defined in different [dictionaries](dictionaries), since a dictionary accessibly maps a name to at most one term.

### Identical terms

Terms from different dictionaries that overlap in both name and ID are _identical terms_. Identical terms can be used interchangeably like synonyms, but unlike homonyms, they cause minimal confusion. However, they may not have the same dictionary.

## [Raw form](grammar#term)

_Raw form_ is special syntax that creates an anonymous term by stating its syntactic role and semantic URI inline. Terms created this way have the same syntactic function as any other term of their role.

This example refers to a term that's already defined (displayed with its usual name at runtime):

```
ref «type ae4:cwin» --> window
```

`«type ae4:abcd»` is a not typically a defined term, but raw form can construct it on the fly. This is useful to quickly fill gaps in AppleScript terminology.

```
«type ae4:abcd» --> «type ae4:abcd»
```
