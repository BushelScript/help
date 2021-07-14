---
title: Shortcuts and Automator
sidebar_label: Shortcuts and Automator
---

BushelScript Editor comes with a "Run BushelScript" action for your Shortcuts and Automator workflows. Its basic usage is self-explanatory.

## Input

If the action's input is AppleScript-compatible (i.e., it could be the input to a "Run AppleScript" action), then it will be available as the last result (`that` in BushelScript English) on the first line of the script. To save it for later, use a variable.

```
let action input be that
-- ...
-- ...
alert action input
```

## Output

If the result of the last expression executed is AppleScript-compatible, it will be yielded as the result of the Run BushelScript action. If the would-be result isn't AppleScript-compatible, the action returns its input instead.
