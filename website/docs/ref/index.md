---
slug: /ref
title: "Language Reference – Introduction"
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

## Language grammar

An incomplete formal grammar is defined by this reference in [Appendix B](/docs/ref/grammar). When applicable, section headings throughout this reference act as links to relevant grammar rules.
