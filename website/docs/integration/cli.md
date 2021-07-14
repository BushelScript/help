---
title: Command line
sidebar_label: Command line (bushelscript)
---

The `bushelscript` command-line tool runs BushelScript scripts. To use it, you'll probably want to install it to a location visible to your command-line shell (i.e., in your `PATH`). You can do this in BushelScript Editor → Preferences → Interpreter. The default install path is `/usr/local/bin/bushelscript`. Please note that if you want to permanently move BushelScript Editor, you'll have to reinstall the tool. (Temporary moves and updates, as well as remounting drives, cause no problems. It's a symbolic link, if you're familiar with those.)

## Run scripts

There are three ways to run scripts with the `bushelscript` command-line tool.

### From a file

If you don't specify `-e` or `--interactive` mode, then the first argument to `bushelscript` will be treated as the name of a script file to run.

```
bushelscript Script.bushel
bushelscript ~/Scripts/'Categorize Email.bushel'
```

The special file name `-` means standard input.

### From command line arguments

If you specify one or more `-e`, then the argument after `-e` is treated as a line of BushelScript code. The `-e` lines are stitched into a script and then run.

```
bushelscript -e 'require app Safari' -e 'tell Safari to open location "https://example.com"'
```

An alternative to this approach is to use a heredoc or similar, if your shell supports it:

```
bushelscript - <<END
require app Safari
tell Safari to open location "https://example.com"
END
```

### Interactive (REPL) mode

To get an interactive shell where you can run BushelScript code with immediate feedback, specify `--interactive` or `-i`.

```
$ bushelscript -i
bushelscript vx.y.z (build 999)
Type :exit or CTRL-D to exit
1> require app Calendar
app id "com.apple.iCal"
2> tell Calendar to make new event at calendar "Calendar" with properties {summary: "Lunch", start date: current date, end date: current date}
event id "AE940743-7C71-4383-839E-444322EA9C13" of calendar id "5C076C66-5FBB-4478-9423-170143BA4488" of app id "com.apple.iCal"
```

## Language

To specify the language on the command line, use `--language` or `-l` followed by a language ID. If the script's `#!` (hashbang) line contains this `-l` flag, the language ID it specifies is used, and the language given at the command line (if any) is ignored. If neither of these sources dictate which language to use, the default is `bushelscript_en` (BushelScript English).

## Output

### Result

By default, the tool will print the result of the final executed expression to standard output. To suppress this, specify `--no-result` or `-R`.

### Printing/logging

To print things to standard output, use the `log` command in your script. For now, there's no built-in way to write to other streams (or read text input).

## Input

### Arguments

All non-option, non-script file arguments passed to `bushelscript` will be available via the built-in `arguments` property.

```
$ bushelscript -e 'arguments' hi there
{"hi", "there"}
$ cat Script.bushel
arguments
$ bushelscript Script.bushel arg1 arg2 arg3
{"arg1", "arg2", "arg3"}
```

### Environment variables

To read environment variables, get an `environment variable` (aka `env var`) by name and inspect its `value` property.

```
$ bushelscript -e 'value of env var "HOME"'
"/Users/me"
```

You can also set environment variables through this property.
