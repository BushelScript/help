---
title: "2-2: Dictionaries"
sidebar_label: "Part 2: Dictionaries"
---

A _dictionary_ is a set of [terms](terms) identified by [term name](terms#term-names). Dictionaries are themselves contained in terms. Every term has a dictionary. The term that contains a dictionary is the dictionary's _container term_. Organizing terms into dictionaries helps reduce name clashes.

See also: [Quick Tutorial](../tutorial/dictionaries).

## The lexicon

The _lexicon_ refers to the list of in-scope dictionaries at a given point in a program. A term is _in the lexicon_ if it is defined by one of those dictionaries.

## Term lookup

When the parser encounters a term name (such as `abc`), it consults the lexicon to find a term with that name. This process is _term lookup_. Term lookup has two subprocesses, primary lookup and secondary lookup. Primary lookup is always tried first, and if it fails, secondary lookup is tried instead. If secondary lookup also fails, then the entire lookup fails, and an "undefined term" error may result.

### Primary term lookup

_Primary term lookup_ finds terms in the lexicon. The dictionaries in the lexicon are searched in order from bottom (most recently pushed) to top (the built-in top-level dictionary).

#### Term shadowing

A term in the lexicon _shadows_ any [homonyms](terms#homonyms) in dictionaries later in the search order. Shadowed terms are hidden from primary lookup until the shadowing term's dictionary is removed from the lexicon.

### Secondary term lookup

_Secondary term lookup_ finds terms exported by the dictionaries of terms in the lexicon (explained below).

## Exporting dictionaries

An _exporting dictionary_ _exports_ its contents, making them visible to secondary term lookup when the dictionary's container term is in the lexicon. All dictionaries other than command dictionaries (used for parameters) and `function` dictionaries (used for variables) are exporting.

Given the following dictionary setup:

```
defining type A
  defining type B
    define type C
  end
end
```

`A` and `B` are both terms containing exporting dictionaries. Therefore, `B` is visible to secondary term lookup when `A` is in the lexicon because `A` exports it. Likewise, `C` is visible to secondary term lookup when `B` is in the lexicon because `B` exports it.

Note that `C` is _not_ visible when only `A` is in the lexicon because `C` is exported by `B`, not `A`. In this case, `C` could be referred to as `B : C` or `A : B : C`, but not as just `C`.

This feature is likely to be tweaked or removed in the future.
