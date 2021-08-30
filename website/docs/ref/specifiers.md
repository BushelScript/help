---
title: "3-1: Specifiers"
sidebar_label: "Part 1: Specifiers"
---

A _specifier_ is a composable query of relations. The concepts and syntax come directly from AppleScript.

See also: [Quick Tutorial](/docs/tutorial/specifiers).

## Relations

_Relations_ relate items to each other, connecting them through an item graph somewhat analogous to a [relational database](https://en.wikipedia.org/wiki/Relational_database).

Relations are not themselves syntactic elements, but exist at runtime between items and are described by specifiers.

## [Chaining](/docs/ref/grammar#specifier)

A specifier is a _chain_ of relation descriptions, starting from a concrete _root item_.

For example, a specifier referring to the `id` property of a root item is a chain of one relation description. On the other hand, a specifier referring to the `length` property of the Calendar event before the event "Lunch" of the root item (a Calendar account) is a chain of three relation descriptions.

## Element relations

Items are often organized into a hierarchical tree structure through _element relations_. An item is an _element_ of another when it is hierarchically subordinate to it in such a structure.

An element relation exists based on an element type, an indexing form, and zero to two _identifying items_ (depending on the indexing form).

### [Element specifiers](/docs/ref/grammar#specifier)

An _element specifier_ describes an element relation. The syntax varies by indexing form, but always includes a [type term](/docs/ref/terms#term-roles). Reciprocally, the syntactic form used determines the specifier's indexing form.

## Indexing forms

Each element relation has an _indexing form_ that specifies how it selects items.

### [Simple](/docs/ref/grammar#specifier)

Simple form is a convenience syntax for either Name or Index form, depending on the type of identifying item used.

**Identifying item**: A `string`, `integer` or `real`. `string` makes a Simple specifier act like a Name specifier; `integer` and `real` make a Simple specifier act like an Index specifier. An item that is not of one of these types produces a runtime error.

```
document "Untitled"
window 1
```

### [Name](/docs/ref/grammar#specifier)

Name form specifies a single element according to the value of its `ae4:pnam` (`name`) property.

**Identifying item**: A `string` that a `name` property must match.

```
document named "Untitled"
```

### [Index](/docs/ref/grammar#specifier)

Index form specifies a single element according to the value of its `ae4:pidx` (`index`) property.

**Identifying item**: A `number` that an `index` property must match.

```
window index 1
```

### [ID](/docs/ref/grammar#specifier)

ID form specifies a single element according to the value of its <code>ae4:ID&nbsp;&nbsp;</code> (`id`) property.

**Identifying item**: An item that an `id` property must match.

```
-- Suppose the document's identifying item is the integer 123.
document named "Untitled" --> document id 123
let docid be id of that --> 123

document id docid --> document id 123
```

### [Absolute positioning](/docs/ref/grammar#specifier)

Absolute Positioning form specifies a single element according to its ordinal position within a container.

**No identifying items**, but the selection varies based on the positioning used.

The choice of `first`, `middle`, `last` or `some` affects the meaning of the specifier:

- `first` selects the item ordered first in its container; typically equivalent to `<type> index 1`.
- `middle` selects the item ordered at the center of its container (the median item), preferring the one ordered first when a two-way tie occurs. For a sequence with a `length` property, equivalent to `<type> index (floor (length / 2))`.
- `last` selects the item ordered last in its container; for a sequence with a `length` property, equivalent to `<type> index (length)`.
- `some` selects a random item from the container. No, seriously. Listen, this was Apple's idea, not mine 👀.

```
first window
middle window
last window
some window
```

### [Relative positioning](/docs/ref/grammar#specifier)

Relative Positioning form specifies a single element according to its ordinal position relative to another element in the same container.

**No identifying items**, but the selection varies based on the positioning used.

The choice of `before` or `after` affects the meaning of the specifier:

- `before` selects the item ordered immediately before the reference element.
- `after` selects the item ordered immediately after the reference element.

**Note** that the reference element is not an identifying item, but is rather the immediate parent of the specifier.

```
window before last window
window after that --> last window
```

To form a Relative Positioning specifier under the current default target, `it` must be used, since the syntax requires explicit mention of the parent after `before`/`after`; i.e., `window after` is not a syntactically valid specifier:

```
window after it
```

### [All](/docs/ref/grammar#specifier)

All form specifies every element in a container.

**No identifying items**.

```
every window
all windows
windows
```

### [Range](/docs/ref/grammar#specifier)

Range form specifies elements within a range of values in a container. The test used to determine whether an item is _in the range_ depends on the element and container types, and possibly the type of the identifying items used.

**Identifying items**: One representing the lower bound, and another representing the upper bound.

```
paragraph 1 thru 2
windows 2 through -1
```

### [Filter](/docs/ref/grammar#specifier)

Filter form specifies elements that pass a certain custom test.

A Filter test is predicated on comparions between test specimen-rooted specifiers and other items. Logical operations can compose these tests to form new tests.

**No identifying items**, but a special test predicate expression is used instead.

The test expression should usually consist of binary comparison or logical [operations](/docs/ref/basic-syntax#binary-operators).

#### Specimen specifiers

Syntactically unrooted specifiers in the test expression are implicitly rooted in the test specimen item. Such specifiers are called _specimen specifiers_, and are reevaluated for each item tested.

```
windows where name contains "Google"
```

`name` in this context is a specimen specifier.

## Property relations

A _property relation_ relates a _host item_ to a _value item_ via a [property term](/docs/ref/terms#term-roles). While element relations are one-to-many, property relations are one-to-one. Property relations often describe the host item with number or string values, although they can also act as references to other complex items.

### [Property specifiers](/docs/ref/grammar#specifier)

A _property specifier_ describes a property relation, and is created by simply naming a property term.

```
name
current tab
```

## Evaluation

_Evaluating_ a specifier follows its chain of relational queries to arrive at a value or storage location.

### Implicit evaluation

Specifiers are _implicitly evaluated_ in most expression contexts. This means that naming a specifier will, by default, result in the specifier's current value rather than a static, unevaluated `specifier` item.

The following are all the contexts where specifiers are _not_ implicitly evaluated:

- The argument of a reference expression (see below); e.g., `ref window 1`.
- The target expression of a `tell` expression; e.g., `tell window 1`.
- Key expressions in a record; e.g., `{name: "abc"}`.
- The destination expression of a `set` expression; e.g., `set URL to "https://google.com/"`.
- The parent expression of a specifier phrase; e.g., `name of window 1` (the final specifier will be evaluated, but `window 1` will not).
- Filter test expressions; e.g., `window where name is "Untitled"` (the final specifier will be evaluated, but `name` will not).

### [Explicit evaluation](/docs/ref/grammar#getset)

A specifier can be _explicitly evaluated_ with a `get` expression. This always results in evaluation, even in contexts where implicit evaluation is disabled.

### [Reference expressions](/docs/ref/grammar#getset)

Implicit evaluation can be contextually disabled with a `ref` expression. This always creates a `specifier` item, which can then be sent in [remote calls](/docs/ref/resources#remote-calls) or evaluated later.
