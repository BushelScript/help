---
title: "3-2: Resources"
sidebar_label: "Part 2: Resources"
---

`require` expressions find and import _resources_, which are external components like applications and other scripts.

The syntax of a `require` expression depends on the [type of resource](#types-of-resources) being referred to.

See also: [Quick Tutorial](/docs/tutorial/resources).

## Requirements

Resources such as non-default apps aren't available in all host environments. To this end, a `require` expression declares a _requirement_, which, if not met by the host environment, will trigger a parse error. The conditions under which a requirement is met are specific to each resource type.

```
require app Google Chrome
```

This declares a requirement on Google Chrome being installed. If it's not installed, the parser complains:

> Can't find required app Google Chrome

(Unmet requirements are a parse error because resources can import terms.)

## Resource terms

`require` expressions define _resource terms_. Note that _resource_ and _resource term_ will be used interchangeably at times.

### Imported terms

Resource terms often [contain (and export)](/docs/ref/dictionaries) _imported terms_.

For example, the scripting dictionary for the Contacts app defines the [type](/docs/ref/terms) `person`, so when imported, the `Contacts` resource contains and exports `person` (along with the rest of the dictionary):

```
require app Contacts
-- The term 'Contacts' contains the Contacts AppleScript dictionary
person --> type 'person' in Contacts dictionary
```

### Remote calls

At runtime, a resource evaluates to a _resource item_ that represents it. Resource items often handle commands via _remote calls_ over some protocol, requiring marshalling of data.

#### Encoding

Most remote calls require _encoding_ (or _boxing_ or _packing_) of data into a _transport format_. For example, calls sent to apps and AppleScripts are routed through AppleEvents, which require data represented as AppleScript objects.

If encoding is possible, it happens automatically. Encoding can fail if an item is not adequately representable in the target format; for instance, a `record` can only be encoded as an AppleScript object if its keys are [`ae4`](/docs/ref/terms#uri-schemes) symbolic contants.

#### Decoding

Data received in response to a remote call requires _decoding_ (or _unboxing_ or _unpacking_) from a transport format into BushelScript items. For example, reply AppleEvents contain AppleScript objects, which must be decoded to be useful in BushelScript. If decoding is possible, it happens automatically.

Decoding can fail if no type of BushelScript item is known by the runtime system to adequately represent it. When this happens, the data is left intact in a _wrapper item_ whose sole use is to be sent in remote calls with the same transport format.

### Remote specifiers

[Specifiers](/docs/ref/specifiers) rooted in a resource item can trigger remote calls when evaluated. These are called _remote specifiers_.

```
require app Safari
name of every window of Safari -- Remote specifier (triggers remote "get" call)
```

## Types of resources

### [App](/docs/ref/grammar#require)

`require app` refers to an app installed on the host system.

- **Imported terms**: The app's AppleScript terminology, if it defines any.
- **Remote calls**: AppleEvents sent to the application.
  - **Transport format**: AppleScript objects
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within the application.

```
require app Mail
require app id com.apple.Safari

-- Error if Google Chrome is not installed:
require app Google Chrome

tell Google Chrome to make new window -- Remote call
name of front window of Google Chrome -- Remote specifier evaluation
```

### [Library](/docs/ref/grammar#require)

`require library` refers to an installed script library (written in BushelScript or AppleScript).

If the library is written in BushelScript:

- **Imported terms**: Terms the script defines.
- **Local calls**: Calls to local functions. (Function definitions are imported.)
- **Local specifiers**: Like any other local specifiers.

If the library is written in AppleScript:

- **Imported terms**: The script's sdef terminology, if it defines any.
- **Remote calls**: AppleEvents executed in the context of the AppleScript script.
  - **Transport format**: AppleScript objects
- **Remote specifiers**: None (will produce an error when evaluated).

### [AppleScript](/docs/ref/grammar#require)

`require AppleScript` refers to an AppleScript file located somewhere on the host system.

- **Imported terms**: The script's sdef terminology, if it defines any.
- **Remote calls**: AppleEvents executed in the context of the AppleScript script.
  - **Transport format**: AppleScript objects
- **Remote specifiers**: None (will produce an error when evaluated).

### [System](/docs/ref/grammar#require)

`require system` or equivalent refers to the operating system in general, or a specific minimum version thereof.

- **Imported terms**: The `System Events` app's AppleScript terminology.
- **Remote calls**: AppleEvents sent to the `System Events` app.
  - **Transport format**: AppleScript objects
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within `System Events`.
