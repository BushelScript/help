---
title: 1-1: User Interaction
sidebar_label: Step 1: User Interaction
---

See also: [Language Reference](../ref/user-interaction).

## Obligatory “Hello, world!”

Okay, you can have your “hello, world” program.

This first one uses the `alert` command to display an informative message box. It is analogous to AppleScript’s `display alert`, or (browser) JavaScript’s `alert()`.

```applescript
alert "Hello, world!"
```

An alternative “hello, world” in BushelScript uses the `log` command to print to the standard output. You will only see the results of this program if you run it from the command line (you can run `bushelscript --help` for assistance with that); a log view is planned for BushelScript Editor but is not yet implemented.

```applescript
log "Hello, world!"
```
