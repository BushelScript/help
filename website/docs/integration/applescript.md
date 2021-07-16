---
title: AppleScript
sidebar_label: AppleScript
---

AppleScript has been in use for decades, and with such usage comes a large back catalog of existing code. Through an AppleEvent-based AppleScript [FFI](https://en.wikipedia.org/wiki/Foreign_function_interface), BushelScript scripts can use this code, too.

If you find yourself calling AppleScript because of a deficiency in BushelScript's AppleEvent functionality, please [file a bug report](https://github.com/BushelScript/BushelScript/issues/new) describing how BushelScript could be improved. Thanks!

## Importing scripts

AppleScript scripts can be _imported_ as [`AppleScript` resources](/docs/ref/resources#applescript).

### Terminology

When an imported script defines _terminology_ in an `sdef` file, its resource term [contains and exports](/docs/ref/dictionaries) it. This is usually the case for AppleScript libraries.

## Calling handlers

_Handlers_ are functions written in AppleScript which are callable through in-process AppleEvents. AppleScript handlers can thus be called from BushelScript through [remote calls](/docs/ref/resources#remote-calls) with the _AppleEvent descriptor_ transport format.

### With command terms

A handler for which a _command term_ is defined can be [invoked](/docs/ref/basic-syntax#command-invocations) like any other command. This is typically the case with AppleScript libraries.

### Via user-defined identifiers

Handlers named using AppleScript _user-defined identifiers_ (green text in Script Editor) are not automatically imported as terms into BushelScript, but are still accessible through [raw form](/docs/ref/terms#raw-form) terms with the `asid` [semantic URI scheme](/docs/ref/terms#uri-schemes).

```
require AppleScript My Script at "~/Scripts/My Script.scpt"

tell My Script
  -- Calls a handler named with the
  -- user-defined identifier "my_applescript_handler"
  #command [asid:my_applescript_handler]
end tell
```
