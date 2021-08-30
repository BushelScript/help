---
title: "2-2: Dictionaries"
sidebar_label: "Part 2: Dictionaries"
---

A _dictionary_ is a set of [terms](/docs/ref/terms) identified by [term name](/docs/ref/terms#term-names). Dictionaries are themselves contained in terms. Every term has a dictionary. The term that contains a dictionary is the dictionary's _container term_. Organizing terms into dictionaries helps reduce name clashes.

See also: [Quick Tutorial](/docs/tutorial/dictionaries).

## The lexicon

The _lexicon_ refers to the list of in-scope dictionaries at a given point in a program. A term is _in the lexicon_ if it is defined by one of those dictionaries.

## Term lookup

When the parser encounters a term name (such as `abc`), it consults the lexicon to find a term with that name, using a process called _term lookup_. Term lookup has two subprocesses, _primary lookup_ and _secondary lookup_, which are attempted in that order.

Primary term lookup finds terms by searching dictionaries in the lexicon, in order from most to least recently pushed, for a term with the name in question. The lookup ends once such a term is found, even if there are other such terms in the lexicon dictionaries. Terms that are invisible to primary lookup in this way are said to be _shadowed_. Primary lookup is very similar to lexical scoping, as found in many other programming languages.

If primary lookup fails to find a term, secondary lookup is attempted instead. Secondary lookup finds terms exported by the dictionaries in the lexicon, in the same search order as primary lookup would search them. The meaning of "exported" is discussed below.

If both primary and secondary lookup fail for a name, then the parser will backtrack one word and try again. For example, if the name `one two three` failed term lookup, then the parser will reinterpret it as `|one two| three`, where `one two` and `three` are separate names. If lookup of `one two` fails, then the parser will backtrack again and reinterpret it as `|one| two three`. Note that if `one` happened to be a language keyword, it would be interpreted as such at this point; this is why terms that begin with language keywords are allowed. Finally, if lookup of `one` fails again, then the parser raises an undefined term error.

## Exporting dictionaries

An _exporting dictionary_ "exports" its contents, making them visible to secondary term lookup when the dictionary's container term is in the lexicon. All dictionaries other than command dictionaries (used for parameters) and `function` dictionaries (used for variables) are exporting.

Given the following dictionary setup:

```
defining type A
  defining type B
    define type C
  end
end
```

`A` and `B` are both terms containing exporting dictionaries. Therefore, `B` is visible to secondary term lookup when `A` is in the lexicon because `A` exports it. Likewise, `C` is visible to secondary term lookup when `B` is in the lexicon because `B` exports it.

Note that `C` is _not_ visible when only `A` is in the lexicon because `C` is exported by `B`, not `A`. In this case, `C` could be referred to as `B/C` or `A/B/C`, but not as just `C`.

The mechanics of exporting may be changed before v1.0.
