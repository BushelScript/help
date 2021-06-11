---
title: 2-2: Dictionaries
sidebar_label: Part 2: Dictionaries
---

A _dictionary_ is a set of [terms](terms), each of which has a semantic [UID](terms#term-uids) and is uniquely identified by a syntactic [name](terms#term-names).

For the purposes of term lookup, a dictionary maps each [term name](terms#term-names) to at most one term.

A term can also _contain_ a single dictionary; this allows for nested dictionaries (i.e., a dictionary in a term in a dictionary). A dictionary is not itself a syntactic element, but its _container term_ can be used to refer to it.

Organizing terms into dictionaries insures against name clashes, and exporting (see below) ensures that such nested terms are no less convenient to use.

See also: [Quick Tutorial](../tutorial/dictionaries).

## Qualified term lookup

_Qualified term lookup_ looks for a term in a specific dictionary, specified by its container term.

**Syntax**:

    <term> :: <term-name> [ : <term> ]

**Examples**:

```
defining dictionary A
  defining type B
    define constant C
  end
end

A --> dictionary term 'A'
A : B --> type term 'B'
A : B : C --> constant term 'C'
```

## The lexicon

The _lexicon_ refers to the list of in-scope dictionaries at a given point in a program. A term is _in the lexicon_ if it is defined by one of those dictionaries.

## Unqualified term lookup

An unqualified term name (such as `abc`) or the first term name in a qualified term lookup (such as `abc` in `abc : def`) are examples of _unqualified term lookup_. Unqualified term lookup consults the lexicon to find a term.

Unqualified lookup is comprised of two subprocesses: primary and secondary lookup. Primary lookup is always used first. If primary lookup fails, secondary lookup is tried instead. If secondary lookup also fails, then the entire unqualified term lookup fails and an "undefined term" error results.

### Primary term lookup

_Primary term lookup_ finds terms in the lexicon. It occurs first in any unqualified lookup.

The dictionaries in the lexicon are searched in order from bottom (most recently pushed) to top (the built-in top-level dictionary).

#### Term shadowing

A term in the lexicon _shadows_ any [homonyms](terms#homonyms) in dictionaries later in the search order. Shadowed terms are hidden from primary lookup until the shadowing term's dictionary is removed from the lexicon.

### Secondary term lookup

_Secondary term lookup_ occurs if primary lookup fails. Secondary lookup finds terms exported by the dictionaries of terms in the lexicon (explained below).

## Exporting dictionaries

An _exporting dictionary_ _exports_ its contents, making them visible to secondary term lookup when the dictionary's container term is in the lexicon. Most dictionaries are exporting dictionaries.

**Examples**:

Given the following dictionary setup:

```
defining dictionary A
  defining dictionary B
    define type C
  end
end
```

`A` and `B` are both terms containing exporting dictionaries. Therefore, `B` is visible to secondary term lookup when `A` is in the lexicon because `A` exports it. Likewise, `C` is visible to secondary term lookup when `B` is in the lexicon because `B` exports it.

Note that `C` is _not_ visible when only `A` is in the lexicon because `C` is exported by `B`, not `A`. In this case, `C` could be referred to as `B : C` or `A : B : C`, but not as just `C`.

## Dictionary sources

The following table lists possible sources of dictionaries, how their container terms are named, and whether they export their contents.

| Dictionary source          | Term naming scheme             | Exports | Example name mapping |
| -------------------------- | ------------------------------ | :-----: | -------------------- |
| Built-in                   | `BushelScript`                 | N/A     | `BushelScript`
| Implicit top script block  | `script`                       | N/A     | `script`
| Dictionary terms           | Name of dictionary term        | ✓       | `define dictionary Oxford English` → `Oxford English`
| Type terms                 | Name of type term              | ✓       | `define type Keyboard` → `Keyboard`
| Resources                  | Name of resource               | ✓       | `use app Safari` → `Safari`
| Script block               | Name of script                 | ✗       | `script ChopOnions` → `ChopOnions`
| Function block             | `function`                     | ✗       | `function`
