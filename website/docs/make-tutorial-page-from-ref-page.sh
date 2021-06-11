---
---
#!/bin/bash

infile="ref/$1.md"
outfile="tutorial/$1.md"

if [ -f "$outfile" ]
then
	echo "$outfile already exists"
	exit 1
fi

cat "$infile" | sed -e 's/Part/Step/' -e 's;Quick Tutorial\](\.\./tutorial;Language Reference\](\.\./ref;' > "$outfile"
mate "$outfile"
