---
title: "3-2: Resources"
sidebar_label: "Part 2: Resources"
---

`use` expressions find and import _resources_. Resources refer to external components, such as applications or other scripts.

The syntax of a `use` expression depends on the [type of resource](#types-of-resources) being referred to.

See also: [Quick Tutorial](/docs/tutorial/resources).

## Requirements

Many external components are not necessarily available in any generic host environment. For example, a script might rely on an application which is not installed by default.

To this end, a `use` expression declares a script _requirement_. If any such requirement is not met by the host environment, the script will refuse to run. The conditions under which a requirement is deemed met are specific to each resource type.

[^parse-error]: 

```
use app Google Chrome
```

This declares a requirement on Google Chrome being installed. If Google Chrome is not installed, the parser complains:

> Can't find required app Google Chrome

(Unmet requirements are a parser error because resources can import terms.)

## Resource terms

A `use` expression imports a resource by defining a _resource term_ for it.

Note that _resource_ and _resource term_ are interchangeable; the latter simply emphasizes that a resource is a unique kind of [term](terms).

### Imported terms

Resources are often accompanied by _imported terms_, which they [contain and export](dictionaries).

For example, the scripting dictionary for the Contacts app defines the [type term](terms) `person`, so when imported, the `Contacts` resource term contains and exports `person` (along with the rest of the dictionary):

```
use app Contacts
-- The term 'Contacts' has the Contacts AppleScript dictionary
person --> type 'person' (in Contacts dictionary)
```

### Remote calls

At runtime, a resource evaluates to a _resource object_ that represents it. A command call sent to such an object usually triggers a _remote call_.

The nature of a remote call depends on the type of the object responsible, and therefore, on the type of resource it represents.

#### Encoding

Most remote calls require _encoding_ (or _boxing_ or _packing_) of data into a _transport format_. For example, calls sent to applications and AppleScript scripts are routed through AppleEvents, which require data in the _AppleEvent descriptor_ transport format.

Encoding can fail if an object is not adequately representable in the target format. For instance, a `record` can only be encoded as an AppleEvent descriptor if its keys are [`ae4`](terms#uri-schemes) symbolic contants.

#### Decoding

Data received in response to a remote call requires _decoding_ (or _unboxing_ or _unpacking_) from a transport format into a native BushelScript format. For example, reply AppleEvents contain data in the _AppleEvent descriptor_ format, which must be decoded to be used.

##### Wrapper objects

Decoding can fail if a suitable data type mapping does not exist. When this occurs, the data is left intact in a _wrapper object_. A wrapper object can subsequently be sent in any remote calls using the same transport format, but is otherwise opaque.

### Remote specifiers

[Specifiers](specifiers) rooted in a resource object are called _remote specifiers_ because their evaluation triggers a remote call.

## Types of resources

### [App](/docs/ref/grammar#require)

`use app` refers to an app installed on the host system.

- **Imported terms**: The app's AppleScript terminology, if it defines any.
- **Remote calls**: AppleEvents sent to the application.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within the application.

```
use app Mail
use app id com.apple.Safari

-- Error if Google Chrome is not installed:
use app Google Chrome

tell Google Chrome to make new window -- Remote call
name of front window of Google Chrome -- Remote specifier eval
```

### [Library](/docs/ref/grammar#require)

`use library` refers to an installed script library (written in BushelScript or AppleScript).

If the library is written in BushelScript:

- **Imported terms**: Terms the script defines.
- **Local calls**: Calls to local functions. (Function definitions are imported.)
- **Local specifiers**: Like any other local specifiers.

If the library is written in AppleScript:

- **Imported terms**: The script's sdef terminology, if it defines any.
- **Remote calls**: AppleEvents executed in the context of the AppleScript script.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: None (will produce an error when evaluated).

### [AppleScript](/docs/ref/grammar#require)

`use AppleScript` refers to an AppleScript file located somewhere on the host system.

- **Imported terms**: The script's sdef terminology, if it defines any.
- **Remote calls**: AppleEvents executed in the context of the AppleScript script.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: None (will produce an error when evaluated).

### [System](/docs/ref/grammar#require)

`use system` or equivalent refers to the operating system in general, or a specific minimum version thereof.

- **Imported terms**: The `System Events` app's AppleScript terminology.
- **Remote calls**: AppleEvents sent to the `System Events` app.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within `System Events`.
