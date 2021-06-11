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

This reference describes version **0.4** of the BushelScript software package. Syntax specifications and examples refer to the "BushelScript English"/`bushelscript_en` language module.

## Grammar format

A loose grammar is defined by this reference, in sections with the **Syntax** boldface callout. The form is similar to [BNF](https://en.wikipedia.org/wiki/Backus–Naur_form):

- Anything inside `<` and `>` refers to a "rule" or "production", i.e., a named grammar element.
- `::` denotes the definition of a rule.
- Any non-[`<` `>` `(` `)` `[` `]` `|` `::` whitespace] characters occur literally.
- `(` and `)` group elements.
- Elements inside `[` and `]` may or may not occur. Whether they occur can alter semantics.
- A `|` between two elements indicates that either may occur. Which one occurs can alter semantics.

To simplify the grammar, we allow rules to be templates. We write rule `R` templated on `X` as `R( X )`.

For example:

    <foo> :: foo [ <bar> ]
    <bar> :: bar ( baz | <bar> )

| Source code     | Matches `<foo>`? |
|-----------------|------------------|
| foo             | ✓                |
| bar             | ✗                |
| foo bar         | ✗                |
| foo baz         | ✗                |
| foo bar baz     | ✓                |
| foo bar bar baz | ✓                |

The full grammar comprises [Appendix B](grammar).
