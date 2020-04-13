#!/bin/bash

outfile="ref/$1.md"

if [ -f "$outfile" ]
then
	echo "$outfile already exists"
	exit 1
fi

cat <<END > "$outfile"
---
title: $2-$3: $4
sidebar_label: Part $3: $4
---

See also: [Quick Tutorial](../tutorial/$1).
END
mate "$outfile"
