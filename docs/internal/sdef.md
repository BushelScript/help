---
title: sdef Files
sidebar_label: sdef Files
---

sdef (scripting definition) files are the modern AppleScript terminology definition format. They contain machine-readable AE code to AppleScript name mappings, implementation hints for the AppKit AppleEvent scripting mechanisms, and end-user documentation.

sdef files use an XML-based format, with a DTD you can find on any macOS system at `/System/Library/DTDs/sdef.dtd`. The format is explained surprisingly comprehensively in `man 5 sdef`. They have extension `.sdef`, hence their name.

BushelScript parses sdef files when the following resource types are imported:
  - `app`
  - `system` (i.e., `System Events.sdef`)
  - AppleScript-based `library`
  - `AppleScript` (by path)

All terms parsed from an sdef file are placed in the resource's dictionary, except for parameters, which are placed in their command's dictionary (in the resource dictionary).

BushelScript's sdef parsing is handled by [SDEFinitely](https://github.com/ThatsJustCheesy/SDEFinitely), which consists mostly of code extracted from hhas' SwiftAutomation, a descendant of ObjC-appscript.

Note that the system API used to retrieve the data, `OSACopyScriptingDefinitionFromURL`, automatically converts terminology definitions from older formats to sdef format as needed. Such older formats are the `scriptSuite`/`scriptTerminolgoy` plist pair (an obsolete but still existant format used by older AppKit apps) and the `'aete'` format (literally a Classic Mac OS binary resource fork format, it's horrible but it can still be used).
