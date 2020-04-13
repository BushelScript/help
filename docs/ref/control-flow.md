---
title: 5-2: Control Flow
sidebar_label: Part 2: Control Flow
---

_Not written yet._

See also: [Quick Tutorial](../tutorial/control-flow).

## Conditional expressions

Conditional expressions in BushelScript are fairly standard:

```applescript
if 1 = 2 then
  alert "Houston, we have an even bigger problem"
else if "hello" contains "p"
  alert "Whatever you say… (??)"
else
  if true
    alert "Everything is completely normal."
  else
    alert "thisisfine.jpg"
  end
end
```

`then` after the condition is optional.

## Conditional loops

```applescript
minutes of current date
repeat while (minutes of (let date be current date)) = that
  log seconds of date
end
```

## Constant-bounded loops

```applescript
let choices be {}
repeat 5 times
  choose from {"Choice A", "Choice B"}
  -- (this command is NYI!) add that to choices
end
```

## Iterative loops

```applescript
use app Finder
alert "Your currently connected disks are…"
tell Finder to get name of disks
repeat for disk name in that
  alert disk name
end
```
