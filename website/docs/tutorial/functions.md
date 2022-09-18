---
title: "4-1: Functions"
sidebar_label: "Step 1: Functions"
---

_Not written yet._

See also: [Language Reference](/docs/ref/functions).

## Early return

Control automatically returns from a function after its last sequenced expression is evaluated. However, you can also return explicitly using the `return` keyword:

```
-- Tells the user something on the hour
on notify user: for date
  if (minutes of date) ≠ 0 then return false
  
  alert "New hour!" message "It's now " & ((hours of date) as string) & ":00."
  true
end

repeat while not (notify user for current date)
  delay 60
end
```
