---
title: "1-2: Basic Syntax"
sidebar_label: "Step 2: Basic Syntax"
---

Syntax is the structure of language. Programming languages have stricter syntactic rules than natural languages, and BushelScript is no exception.

See also: [Language Reference](/docs/ref/basic-syntax).

## Comments

You can write _comments_ to help people understand your code. Use them to explain the behavior, purpose or design of complicated code, to help others adapt your code to their needs, or even to share ASCII art (please don't).

Your programs will work just fine without any comments. Then again, a car would work just fine without an instruction manual. What and why you comment is really up to you.

There are two kinds of comments:

### Line comments

_Line comments_ start with two hypens `--` and continue to the end of the current line. They never extend over multiple lines.

```
-- I'm a line comment
-- You can write whatever you like here.
-- The computer doesn't care!
-- Though other humans probably will 😉

this is not a line comment and will probably cause an error

-- An empty line comment:
--
```
### Block comments

_Block comments_ start with two hyphens and an opening parenthesis `--(`, and they continue across any number of lines until a closing parenthesis and two more hyphens are reached `)--`.

```
--( Single-line block comments are possible )--
--( Multi-line
    block comments
    are too )--
--(
    Whatever style
    
    floats your boat.
)--

```

## Values

_Values_ are abstract objects, like numbers. Every value belongs to a type class, discussed later in [1-4: Object Types](object-types).

### Numbers

Type a number to produce a number value. Whole numbers are of type `integer`, while numbers with fractional components are of type `real`.

```
123 -- integer
1.23 -- real
```

### `string`, a sequence of characters

Type anything between quotation marks to produce a `string`, which is a fancy name for a glob of text, like a character, word, sentence, or doctoral dissertation.

```
-- Note that each of these lines produces a string that is
-- immediately discarded; none of this actually does
-- much of anything.
-- That is to say, don't write real programs like this.

"a"
"string"
"is composed of one or more letters, or digits 1234567890, or"
"anything, really."

"To include a quotation mark character in a string, type"
"a backslash like this \" to \"escape\" it."
"Strings can also be empty, like this next one:"
""
```

### `boolean`, truth and falsity

Type `true` to produce a value representing truth and `false` for a value representing falsity.

These `boolean` values are more typically produced when ask a yes-or-no question. For example, "1 is a number" is, under usual definitions, indisputably true; while "the character count of the most recent tweet on Twitter is 49" may or may not be true, depending on the state of the world when we ask the question.

```
true -- boolean
false -- boolean
1 = 2 -- boolean (more on this below)
```

### `null`, the absence of a value

Finally, you can type `null` to get a value that represents the lack of an otherwise meaningful value. For instance, if I asked "what is your great niece's nephew's birthday?", and you replied that that person doesn't exist, we could represent this formally as `null`—a placeholder for the lack of a birthday value.

```
null
```

## Commands

_Commands_ are actions like `add`, `remove`, `search`, and `send`. They can take data as input and produce data as output, and they may have additional effects.

We can _invoke_ (run) a command by typing its name. For example, `alert` is the built-in command that we used in [Step 1: User Interaction](user-interaction):

```
alert
```

### Direct object arguments

We didn't give `alert` anything to display. We can tell it to show a `string` like this:

```
alert "some message"
```

The input values we give to a command are called the _arguments_, and this special argument, the _direct argument_, comes right after the name of the command. Another example is:

```
cos 3.14159265
```

Here, the `real` approximation of π is the direct argument. Note that we don't _have_ to provide a direct argument.

### Named arguments

We can provide additional input as _named arguments_. To do this, we type the name of a parameter that the command defines, and follow that with the value. For example:

```
send "Hey!" to "ian@example.com"
```

This invocation provides two arguments: The direct argument `"Hey!"`, and the named argument `"ian@example.com"` associated with the parameter `to`. If the command doesn't require it, we can also provide only named arguments:

```
download from "https://example.com/"
```
Finally, we can specify multiple named arguments, as many as the command supports:

```
login "ian@example.com" to "example.com" password "password123"
```

## Operators

_Operators_ are special commands that are called differently and have no side-effects. Common math operators like `+` and `*` (multiply) are built in.

```
1 + 2
not (true and false)
```

For a full list, consult the [Language Reference](/docs/ref/basic-syntax#operators).
