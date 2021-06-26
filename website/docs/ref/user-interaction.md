---
title: "1-1: User Interaction"
sidebar_label: "Part 1: User Interaction"
---

BushelScript supports custom-built GUI commands as its primary mode of user interaction. Limited CLI interactions are also supported. Speech-based interactions are planned but have low priority.

See also: [Quick Tutorial](/docs/tutorial/user-interaction).

## GUI commands

Interaction with the user is done primarily through various GUI commands, heavily inspired by those made available by AppleScript's StandardAdditions module.

In BushelScript, GUI commands are routed through a background application called "BushelGUIHost". This alleviates many of the inconveniences and security shortcomings of using the StandardAdditions module.

---

### notification

    notification [<message>]
      [title <title>]
      [subtitle <subtitle>]
      [sound <sound name>]

Presents a banner-style notification.

- message: The informative message text. Smallest and lowest down, can have the most detail. The exception is if there is no `title` to display (i.e., none is specified and the calling script has no name); if so, then this text appears as the title instead.
- title: The title text. Largest and highest up, should provide appropriate context for the notification. Defaults to the name of the script, if any.
- subtitle: The subtitle text. Subordinate to the title, and if present, should provide more specific or elaborated context for the notification. Often not used.
- sound name: The name of the system sound to play when the notification is delivered.

---

### alert

    alert [<heading>]
      [message <message>]
      [title <title>]

Presents an informative message box.

- heading: The alert heading text. Displayed in bold font, should clearly indicate what this alert is for.
- message: The alert message text. Displayed in normal font subordinate to the heading; can be used to explain why the heading is so, what might be done about it, etc.
- title: The title of the alert window. Defaults to the name of the script, if any.

---

### choose from

    choose from [ [list] <list> ]
      [prompt <prompt>]
      [title <title>]

Presents a list of choices and asks the user to choose from them.

- list: The choices. Should be a `list`. If a `list`, each item is coerced to a `string` and displayed as a choice. Otherwise, the passed object is treated as a single atomic choice: coerced to a `string` and displayed as the single available item.
- prompt: The text displayed above the list of choices. Should explain what choice is being made and, if applicable, why.
- title: The title of the dialog window. Defaults to the name of the script, if any.

---

### ask

    ask [ [prompt] <prompt> ]
      [ [for | as] <type> ]
      [title <title>]

Prompts the user to enter data.

- prompt: The text displayed above the input area. Should explain what data is to be entered and, if applicable, why. Defaults to the generic `"Please enter a value:"`.
- type: The type of data requested as a `type` object. If absent or not a type object, defaults to `string`.
- title: The title of the dialog window. Defaults to the name of the script, if any.
