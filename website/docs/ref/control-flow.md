---
title: "5-2: Control Flow"
sidebar_label: "Part 2: Control Flow"
---

See also: [Quick Tutorial](../tutorial/control-flow).

## [Conditional expressions](../grammar#compound)

```
if 1 = 2
  alert "computer dun broke"
else if "hello" contains "p"
  alert "computer dun broke"
else
  if true then alert "everything is fine"
  else alert "thisisfine.jpg"
  alert "You selected" & (if ask for boolean prompt "Yes or no?" then "yes" else "no")
end
```

## [Conditional loops](../grammar#compound)

```
let l be {}
let min be minutes of current date
repeat while (minutes of (let date be current date)) = min
  add seconds of date to l
  delay 1
end
l
```

```
seconds of current date
repeat while that = min
  seconds of current date
end
```

## [Constant-bounded loops](../grammar#compound)

```
let choices be {}
repeat 5 times
  choose from {"Choice A", "Choice B"}
  add that to choices
end
choices
```

## [Iterative loops](../grammar#compound)

```
use app Finder
alert "Your currently connected disks are…"
tell Finder to get name of every disk
repeat for disk name in that
  alert disk name
end
```
