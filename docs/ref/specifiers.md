---
title: 3-1: Specifiers
sidebar_label: Part 1: Specifiers
---

A _specifier_ is a static, composable query of object relations.

See also: [Quick Tutorial](../tutorial/specifiers).

## Relations

_Relations_ _relate_ objects to each other, connecting them through an object graph somewhat analogous to a [relational database](https://en.wikipedia.org/wiki/Relational_database).

Relations are not themselves syntactic elements, but exist at runtime between objects and are described by specifiers.

## Chaining

A specifier _chains_ together descriptions of relations, starting from a concrete _root object_.

For example, a specifier might refer to the `length` property of its root object, or it might refer to an element (of an element) of the root.

**Syntax**:

    <specifier> :: <unqualified-specifier> [ of <expression> ]
    
    <unqualified-specifier> ::
      ( <element-specifier> | <property-specifier> )

## Element relations

Objects are often organized into a hierarchical tree structure through _element relations_. An object is an _element_ of another when it is hierarchically subordinate to it in such a structure.

An element relation exists based on an element type, an indexing form, and zero to two _identifying objects_ (depending on the indexing form).

### Element specifiers

An _element specifier_ describes an element relation. The syntax varies by indexing form, but always includes a [type term](terms#term-types). Reciprocally, the syntactic form used determines the specifier's indexing form.

**Syntax**:

    <element-specifier> ::
      ( <simple-specifier> | <name-specifier> | <index-specifier> |
        <id-specifier> |
        <absolute-positioning-specifier> |
        <relative-positioning-specifier> |
        <range-specifier> | <filter-specifier> |
        <all-specifier> )

## Indexing forms

Each element relation has an _indexing form_ that specifies how it selects objects.

### Simple

Simple form is a convenience syntax for either Name or Index form, depending on the type of identifying object used.

**Identifying object**: A `string`, `integer` or `real`. `string` makes a Simple specifier act like a Name specifier; `integer` and `real` make a Simple specifier act like an Index specifier. An object that is not of one of these types produces a runtime error.

**Syntax**:

    <simple-specifier> :: <type-term> <expression>

**Examples**:

```
document "Untitled"
window 1
```

### Name

Name form specifies a single element according to the value of its `ae4:pnam` (`name`) property.

**Identifying object**: A `string` object that a `name` property must match.

**Syntax**:

    <name-specifier> :: <type-term> named <expression>

**Examples**:


document named "Untitled"
```

### Index

Index form specifies a single element according to the value of its `ae4:pidx` (`index`) property.

**Identifying object**: An `integer` or `real` object that an `index` property must match.

**Syntax**:

    <index-specifier> :: <type-term> index <expression>

**Examples**:


window index 1
```

### ID

ID form specifies a single element according to the value of its <code>ae4:ID&nbsp;&nbsp;</code> (`id`) property.

**Identifying object**: An object that an `id` property must match.

**Syntax**:

    <id-specifier> :: <type-term> id <expression>

**Examples**:


-- For exposition purposes, suppose the document's
-- identifying object is the integer 123.
document named "Untitled" --> document id 123
let docid be id of that --> 123

document id docid --> document id 123
```

### Absolute positioning

Absolute Positioning form specifies a single element according to its ordinal position within a container.

**No identifying objects**, but the selection varies based on the positioning used.

**Syntax**:

    <absolute-positioning-specifier> ::
      ( first | middle | last | some ) <type-term>

The choice of `first`, `middle`, `last` or `some` affects the meaning of the specifier:

- `first` selects the item ordered first in its container; typically equivalent to `<type> index 1`.
- `middle` selects the item ordered at the center of its container (the median item), preferring the one ordered first when a two-way tie occurs. For a sequence with a `length` property, equivalent to `<type> index (floor (length / 2))`.
- `last` selects the item ordered last in its container; for a sequence with a `length` property, equivalent to `<type> index (length)`.
- `some` selects a random item from the container. No, seriously. Listen, this was Apple's idea, not mine 👀.

**Examples**:


first window
middle window
last window
some window
```

### Relative positioning

Relative Positioning form specifies a single element according to its ordinal position relative to another element in the same container.

**No identifying objects**, but the selection varies based on the positioning used.

**Syntax**:

    <relative-positioning-specifier> ::
      <type-term> ( before | after ) <expression>

The choice of `before` or `after` affects the meaning of the specifier:

- `before` selects the item ordered immediately before the reference element.
- `after` selects the item ordered immediately after the reference element.

**Note** that the reference element is not an identifying object, but is rather the immediate parent of the specifier.

**Examples**:


window before last window
window after that --> last window
```


window after it
```

To form a Relative Positioning specifier under the current default target, `it` must be used, since the syntax requires explicit mention of the parent after `before`/`after`; i.e., `window after` is not a syntactically valid specifier.

### All

All form specifies every element in a container.

**No identifying objects**.

**Syntax**:

    <all-specifier> ::
      ( ( all | every ) <type-term> ) | <plural-type-term>

**Examples**:


every window
all windows
windows
```

### Range

Range form specifies elements within a range of values in a container. The test used to determine whether an object is _in the range_ depends on the element and container types, and possibly the type of the identifying objects used.

**Identifying objects**: One representing the lower bound, and another representing the upper bound.

**Syntax**:

    <range-specifier> ::
      <type-term> <expression> ( thru | through ) <expression>

**Examples**:


paragraph 1 thru 2
windows 2 through -1
```

### Filter

Filter form specifies elements that pass a certain custom test.

A Filter test is predicated on comparions between test specimen-rooted specifiers and other objects. Logical operations can compose these tests to form new tests.

**No identifying objects**, but a special test predicate expression is used instead.

**Syntax**:

    <filter-specifier> ::
      <type-term> ( where | whose ) <test-expression>
    
    <test-expression> :: <expression>

The test expression should usually consist of binary comparison or logical [operations](basic-syntax#binary-operators).

#### Specimen specifiers

Syntactically unrooted specifiers in the test expression are implicitly rooted in the test specimen object. Such specifiers are called _specimen specifiers_, and are reevaluated for each object tested.

**Examples**:


windows where name contains "Google"
```

`name` in this context is a specimen specifier.

## Property relations

A _property relation_ relates a _host object_ to a _value object_ via a [property term](terms#term-types). A given property relation either serves to describe the host object, or is simply related and auxiliary to it.

_Property_ and _property relation_ are interchangeable terms.

### Attributive properties

A property relation is _attributive_ when it serves to describe its host object. For instance, the `name` property often ascribes its host a user-friendly name string.

### Relative properties

A property relation is _relative_ when it relates its host to its value but does not serve to describe the host. Relative properties effectively serve as individual named element relations.

A property can typically be called relative if it refers to an object that cannot be described as a simple "value"; that is, if it refers to a text box or a table cell, and not a string or an integer.

For example, the Safari application's `window` type declares the property `current tab`, with type `tab`. The tab deemed "current" in a web browser is prone to change at a moment's notice, and is an element of the window rather than a descriptive attribute. This property is thus a relative property.

### Property specifiers

A _property specifier_ describes a property relation, and is created by simply naming a property term.

**Syntax**:

    <property-specifier> :: <property-term>

**Examples**:


name
current tab
```

## Evaluation

_Evaluating_ a specifier follows its chain of relational queries to arrive at a value or storage location.

### Implicit evaluation

Specifiers are _implicitly evaluated_ in most expression contexts. This means that naming a specifier will, by default, result in the specifier's current value rather than a static, unevaluated `specifier` object.

The following are all the contexts where specifiers are _not_ implicitly evaluated:

- The argument of a reference expression (see below); e.g., `ref window 1`.
- The target expression of a `tell` expression; e.g., `tell window 1`.
- Key expressions in a record; e.g., `{name: "abc"}`.
- The destination expression of a `set` expression; e.g., `set URL to "https://google.com/"`.
- The parent expression of a specifier phrase; e.g., `name of window 1` (the final specifier will be evaluated, but `window 1` will not).
- Filter test expressions; e.g., `windows where name is "Untitled"` (the final specifier will be evaluated, but `name` will not).

### Explicit evaluation

A specifier can be _explicitly evaluated_ with a `get` expression. This always results in evaluation, even in contexts where implicit evaluation is disabled.

**Syntax**:

    <get-expression> :: get <expression>

### Reference expressions

Implicit evaluation can be contextually disabled with a `ref` expression. This always creates a `specifier` object, which can then be sent in [remote calls](resources#remote-calls) or evaluated later.

**Syntax**:

    <ref-expression> :: ref <expression>
