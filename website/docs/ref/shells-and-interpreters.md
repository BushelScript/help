---
title: "4-2: Shells and Interpreters"
sidebar_label: "Part 2: Shells and Interpreters"
---

In true "scripting" fashion, BushelScript allows one to quickly slap together tons of different pieces of functionality to get the job done.

See also: [Quick Tutorial](../tutorial/shells-and-interpreters).

## [Weave expressions](grammar#literals)

A _weave expression_ embeds a foreign script within a BushelScript program. When a weave is evaluated, its _body_ is evaluated by the shell or other interpreter specified in its [_hashbang (`#!`) line_](https://en.wikipedia.org/wiki/Shebang_(Unix)).

Another `#!` on its own line ends the weave body. If it declares an interpreter, it also begins a new weave.

```
#!/bin/bash
echo 'Hello, world!'
#!/usr/bin/python3
print(input())
#!
alert that
```

This example uses two weave expressions, one using Bash and another using Python.

### Weave output

Weave expressions evaluate to whatever is written to their _standard output_. In the above example, the Bash script writes `Hello, world!` to its stdout, causing the `bash` weave to evaluate to the `string` value `"Hello, world!"`.

### Weave input

Similarly, weaves are automatically provided, through _standard input_, the current value of [`that`](data-flow#anonymous) coerced to a `string`. In the above example, the Python script reads the result of the `bash` weave from its own stdin and echoes it back out.
