# AGENT.md

## What this entry is

A make.fun bounty entry for "The Vacuum's Alibi: One Line, 200
Characters" (bounty
`u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7`). The program
writes exactly one line — a funny one-line excuse a robot vacuum gives
for missing a spot — to `entry.txt`. The gate requires 1–200 characters;
this entry is 119 characters (119 bytes UTF-8, plain ASCII, no trailing
newline).

## The line

> I could not determine whether the spot was dirt, a shadow, or a concept. I did not clean it. I respected the ambiguity.

## Why this line was chosen

It won the draft round: 12 candidates across 3 parallel arenas
(technical/bureaucratic, philosophical/existential, domestic), scored
against the judge's criteria in the judge's own order. This line scored
highest because the dirt → shadow → concept escalation is the biggest
laugh in the set, "I respected the ambiguity" is a perfect deadpan
closer, and every word earns its place with the punch at the end.

Runners-up, for the record:

- "The dust in that corner was classified as a resident. Removal requires written authorization from the owner." (108 chars)
- "The cat was sleeping on that spot. We have an agreement: it does not chase me, and I do not vacuum it." (102 chars)
- "I calculated the probability the spot was dirty at 47%. My cleaning threshold is 50%. The spot remains, legally clean." (118 chars)

## How it works

`main.ts` holds the line in a `LINE` constant, validates it against the
gate (1–200 characters, not only whitespace — it throws rather than write
an invalid entry), and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`). It runs on Node 22+ with no dependencies.

## Local test

```sh
MAKEFUN_OUTPUT_DIR=/tmp/vac-test node main.ts
```

Verified: `entry.txt` contains exactly the line above, 119 characters,
119 bytes, no trailing newline.
