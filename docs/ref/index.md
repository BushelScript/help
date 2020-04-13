---
title: Language Reference – Introduction
sidebar_label: Introduction
---

Welcome to the _BushelScript Language Reference_. This set of documents is intended to specify, to a reasonable extent, the behaviour of the BushelScript language infrastructure and runtime interface.

## Parallel documents

For each reference page, there is a parallel page in the [Quick Tutorial](/help/docs/tutorial) which is written to be shorter and more accessible but which also glosses over details. Each page contains a "see also" link to its Quick Tutorial companion.

## The BushelScript scripting language

BushelScript is a macOS scripting language designed with the following principal goals in mind:

- Be useful:
  - Displace AppleScript for most practical AppleEvent scripting.
  - Supersede AppleScript as "the ultimate duct tape" by integrating with tons of different scripting interfaces.
  - Add practically useful features on top of an AppleScript-lookalike base.
- Be predictable:
  - Be open-source and driven by the community.
  - Be straightforward to read and minimally confusing to write and debug.
  - Avoid obscure, lacking or useless features.
- Be accessible:
  - Don't force novice scripters to read code with unintelligible symbols.
  - Don't force experienced programmers into a natural language paradigm.
  - Avoid alienating non-English speakers.
  - Seamlessly translate between programmer/user registers and different natural language bases.

## Versions and variants

This reference describes version **0.2** of the BushelScript software package.

Syntax specifications and examples in this reference refer to the "BushelScript (English)"/`bushelscript_en` language module.

## Grammar format

A loose [BNF](https://en.wikipedia.org/wiki/Backus–Naur_form)-esque grammar is defined by this reference, in sections with the **Syntax** boldface callout.

- Anything inside `<` and `>` refers to a production, or a named grammar element.
- `::` denotes the definition of a production.
- Any non-[`<` `>` `(` `)` `[` `]` `|` `\` `::` whitespace] characters occur literally.
- A pair of `(` and `)` groups element as appropriate.
- Elements inside `[` and `]` may or may not occur. The consequences of inclusion or omission depend on the context.
- A `|` between two elements indicates that either may occur. The semantics of each again depend on context.
- A `\` "escapes" a character: the single character that follows occurs literally regardless of any of these rules.

For example:

    <foo> :: foo [<bar>]
    <bar> :: bar ( <bar> | baz )

| Source code     | Matches `<foo>`? |
|-----------------|------------------|
| foo             | ✓                |
| foo bar baz     | ✓                |
| foo bar bar baz | ✓                |
| bar             | ✗                |
| foo bar         | ✗                |
| foobarbaz       | ✗                |
