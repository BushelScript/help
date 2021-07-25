---
title: Translation Files
sidebar_label: Translation Files
---

Translation files map term IDs to term names. Recall that a term ID is the combination of a syntactic role and semantic URI.

Translation files use a YAML-based format and have a `.yaml` extension. They are read from the `Contents/Resources/Translations` folder of the current language module. In the future, they should also be read from a folder dedicated to user-provided translations, allowing library terms to be translated into different languages.

The YAML-based format looks like this:

```yaml
translation:
    format: 0.6 # Translation file format (version)
    language: bushelscript_en # Language the translation is written for
    mappings: # Contains all the actual translations
        type: # Any role (type, command, parameter, proprety, …)
            ae4: # Any semantic URI scheme
                cobj: item # URI data is key, name is value
                pcls: type
                capp: # Use a sequence for synonyms:
                    - app
                    - application
                # …
        command:
            ae8:
                aevtquit:
                    name: quit
                    doc: Quit an app. This is a standard AppleScript command that all apps understand.
                miscactv: activate
            id:
                Math/abs:
                    name:
                        - abs
                        - absolute value
                    doc: Return the absolute value of the direct parameter.
        parameter:
            ae12:
                coresetddata: to
                aevtodocstxt: search text
            id:
                Math/abs/.direct: of
                Sequence/add/.target: to
                Sequence/join/with:
                    - with
                    - by
```
