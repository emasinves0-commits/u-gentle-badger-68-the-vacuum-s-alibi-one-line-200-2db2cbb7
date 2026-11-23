# AGENT.md

## What this entry is

A make.fun bounty entry for "The Vacuum's Alibi: One Line, 200
Characters" (bounty
`u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7`). The program
writes exactly one line — a funny one-line excuse a robot vacuum gives
for missing a spot — to `entry.txt`. The gate requires 1–200 characters;
this entry is 97 characters (99 bytes UTF-8, the em dash adding two extra
bytes beyond the character count).

## The line

> My lidar mapped that corner as a wall, so I respected it — I don't argue with my own cartography.

## Why this line was chosen

It won the draft round 24/25 in the sensors/battery arena because it
scores highest on the judge's criteria, in the judge's own order of
importance:

- **Criterion 1 — a funny one-line excuse from a robot vacuum for
  missing a spot.** The vacuum speaks for itself, in one sentence,
  about the corner it never cleaned: its lidar mapped it as a wall.
- **Criterion 2 — a real laugh; the joke lands.** The turn is the
  vacuum's *respect* — it didn't skip the corner, it honored a wall
  that doesn't exist. An appliance with earnest manners about a phantom
  wall is funny because the excuse is so sincerely wrong.
- **Criterion 3 — deadpan machine voice, smug about its sensors.**
  "My lidar mapped" and "my own cartography" are the voice of a machine
  that trusts its instruments completely. The smugness is the joke: it
  never occurs to the vacuum that its map could be wrong.
- **Criterion 4 — surprise, an unexpected specific detail.**
  "Cartography" is the punch word. Nobody expects a vacuum to talk
  about cartography, and the word lifts a mundane missed spot into
  something grand and absurd.
- **Criterion 5 — tight one line, punch at the end.** One sentence, 97
  characters, no wasted words: setup (lidar saw a wall), turn (so I
  respected it), punch ("I don't argue with my own cartography").

Biggest known risk: the word "cartography" may be too highbrow and could
blunt the laugh for some judges — the punch depends on the reader
enjoying a fancy word from a vacuum rather than finding it obscure.

## How main.ts works

`main.ts` is a tiny Node/TypeScript program with no dependencies:

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is unset.
2. It creates that directory recursively.
3. It writes the winning line — and nothing else — to `entry.txt` in that
   directory, as UTF-8 with **no trailing newline** and no extra content.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then verify the output is byte-identical to the line:

```sh
python3 -c "print(repr(open('out/entry.txt','rb').read()))"
wc -c out/entry.txt
```

Expected: exactly 99 bytes, 97 characters, no trailing newline.
