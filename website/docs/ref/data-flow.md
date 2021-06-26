---
title: "1-3: Data Flow"
sidebar_label: "Part 3: Data Flow"
---

As any computer program, BushelScript scripts need to shunt data around to get things done.

See also: [Quick Tutorial](/docs/tutorial/data-flow).

## [Anonymous](/docs/ref/grammar#reference)

The `that` keyword refers to the result of the last sequenced expression (i.e., whatever was discarded at the end of the previous line). This is called _anonymous_ data flow because there is no naming involved. It is somewhat analogous to shell script pipes (`|`) or the implicit data flow between actions in Automator or Siri Shortcuts.

`that` only lacks meaning at the beginning of a [function](functions), where it evaluates to [`null`](basic-syntax#null-the-absence-of-a-value) because there is no previous expression. Since all language structures are expressions, they always result in a value, which may be referred to by `that` once discarded.

Anonymous data flow is encouraged over the use of variables whenever reasonable. But don't feel restricted to it.

## [Variables](/docs/ref/grammar#definition)

Variables are [terms](terms) defined using a `let` expression. As all terms, they can shadow other terms, and they may consist of multiple words.
