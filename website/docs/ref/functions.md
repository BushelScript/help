---
title: "5-1: Functions"
sidebar_label: "Part 1: Functions"
---

Functions allow BushelScript code to be named, reused, and called recursively. Put another way, they allow commands to be defined and implemented locally, in BushelScript code (as opposed to remotely, like in apps).

For background on the design of the command model, including functions, please consult [this blog post](https://igregory.ca/2021/bushel-command-model/).

See also: [Quick Tutorial](/docs/tutorial/functions).

## [Named functions](/docs/ref/grammar#definition)

A named function definition consists of:

- (One of the keywords `on` or `to`)
- A name, which gets defined as a command term in the current dictionary if such a term isn't already there
- A list of parameter definitions (one per line), which each consist of:
  - A name, which gets defined as a parameter term in the command's dictionary if such a term isn't already there
  - An optional [URI](/docs/ref/terms#semantic-uris) for the parameter term (or one of the keywords `direct` or `target`); if absent, defaults to a URI derived from the parameter name
      - This can be used to define direct and target parameters, or to provide synonym parameter names
  - An optional variable name to refer to the parameter's value in the function body; if absent, defaults to the parameter's name
  - A `type`, used by local function selection to determine which function to call given a set of arguments
- (The keyword `do` to end the parameter list, followed by a line break)
- A sequence of expressions in the function body, which may use any command, parameter and variable terms just defined
- (The keyword `end` to end the function body)
  
e.g.,

```
to add
  item [direct] (item to add)
  to [target] (target list): list
  times: integer
do
  repeat times times
    tell Core to add |item to add| to target list
  end
  target list -- Returns the target.
end

{"first"}
tell that to add "tail" times 5
```

## [Anonymous functions](/docs/ref/grammar#compound)

An anonymous function definition consists of:

- Optionally:
    - (The keyword `take`)
    - A (comma-separated) list of variable names to bind to ordered parameters (i.e., the items of the direct parameter as a decomposed sequence)
- (The keyword `do`)
- One of:
    - Sequence body:
        - (A line break)
        - A sequence of expressions in the function body, which may use any variable terms just defined
        - (The keyword `end`)
    - Non-sequence body:
        - A single expression for the function body, which may use any variable terms just defined

e.g.,

```
require library List

tell {}
  add map {1,2,3} by take value do
    value + 1
  end
  add map {1,2,3} by take value do value + 2
  add map {1,2,3} by do it + 3
end
```
