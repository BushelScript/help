---
title: "4-2: Control Flow"
sidebar_label: "Step 2: Control Flow"
---

_Not written yet._

See also: [Language Reference](/docs/ref/control-flow).

## The default target

A `tell` expression pushes a new _default target_. The current default target:

- Is used as the direct object argument for command invocations when none is otherwise specified
- Is asked to handle commands not handled by the direct object (which is consulted first)

This example demonstrates the first point:

```
tell "hello!"
  -- When no direct object is specified, the default command target
  -- is used as the direct object:
  alert
  -- When a direct object is specified, the default target is still
  -- consulted to handle the command but is otherwise ignored:
  alert "goodbye."
end
```

This example demonstrates the second point:


tell 9
  -- Handled by the integer object '9':
  sqrt
end
```
