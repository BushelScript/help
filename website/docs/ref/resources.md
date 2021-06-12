---
title: "3-2: Resources"
sidebar_label: "Part 2: Resources"
---

`use` expressions find and import _resources_. Resources refer to external components, such as applications or other scripts.

The syntax of a `use` expression depends on the [type of resource](#types-of-resources) being referred to.

See also: [Quick Tutorial](../tutorial/resources).

## Requirements

Many external components are not necessarily available in any generic host environment. For example, a script might rely on an application which is not installed by default.

To this end, a `use` expression declares a script _requirement_. If any such requirement is not met by the host environment, the script will refuse to run. The conditions under which a requirement is deemed met are specific to each resource type.

[^parse-error]: Unmet requirements are a parse error because a required resource could provide terms used in the script.

```
use application Google Chrome
```

This declares a requirement on Google Chrome being installed. If Google Chrome is not installed, the parser [^parse-error] complains:

> this script requires the application “Google Chrome”, which was not found on your system

## Resource terms

A `use` expression imports a resource by defining a _resource term_ for it.

Note that _resource_ and _resource term_ are interchangeable; the latter simply emphasizes that a resource is a unique kind of [term](terms).

### Imported terms

Resources are often accompanied by _imported terms_, which they [contain and export](dictionaries).

```
use application Contacts

Contacts : person --> type 'person' (contained within Contacts)
person --> type 'person' (exported by Contacts)
```

The scripting dictionary for Contacts defines the [type term](terms) `person`. Therefore, the `Contacts` resource term contains and exports `person` (along with the rest of the dictionary).

### Remote calls

At runtime, a resource evaluates to a _resource object_ that represents it. A command call sent to such an object usually triggers a _remote call_.

The nature of a remote call depends on the type of the object responsible, and therefore, on the type of resource it represents.

#### Encoding

Most remote calls require _encoding_ (or _boxing_ or _packing_) of data into a _transport format_. For example, calls sent to applications and AppleScript scripts are routed through AppleEvents, which require data in the _AppleEvent descriptor_ transport format.

Encoding can fail if an object is not adequately representable in the target format. For instance, a `record` can only be encoded as an AppleEvent descriptor if its keys are [`ae4`](terms#uid-domains) constants.

#### Decoding

Data received in response to a remote call requires _decoding_ (or _unboxing_ or _unpacking_) from a transport format into a native BushelScript format. For example, reply AppleEvents contain data in the _AppleEvent descriptor_ format, which must be decoded to be used.

##### Wrapper objects

Decoding can fail if a suitable data type mapping does not exist. When this occurs, the data is left intact in a _wrapper object_. A wrapper object can subsequently be sent in any remote calls using the same transport format, but is otherwise opaque and fairly useless.

### Remote specifiers

[Specifiers](specifiers) rooted in a resource object are called _remote specifiers_ because their evaluation triggers a remote call.

## Types of resources

### [Application](../grammar#require)

`use app` and `use application` are refer to an application installed on the host system.

- **Imported terms**: The app's AppleScript terminology, if it defines any.
- **Remote calls**: AppleEvents sent to the application.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within the application.

```
use app Mail
use application id com.apple.Safari

-- Error if Google Chrome is not installed:
use application Google Chrome

tell Google Chrome
  make new window -- Remote call
  name of front window -- Remote specifier eval
end tell
```

### [AppleScript](../grammar#require)

`use AppleScript` refers to an AppleScript file located somewhere on the host system.

- **Imported terms**: The script's `sdef` terminology, if it defines any.
- **Remote calls**: AppleEvents executed in the context of the script.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: None (will produce an error when evaluated).

### [System](../grammar#require)

`use system` or equivalent refers to the operating system in general, or a specific minimum version thereof.

- **Imported terms**: The `System Events` app's AppleScript terminology.
- **Remote calls**: AppleEvents sent to the `System Events` app.
  - **Transport format**: _AppleEvent descriptor_
- **Remote specifiers**: AppleEvent Object Model (AEOM) objects within `System Events`.
