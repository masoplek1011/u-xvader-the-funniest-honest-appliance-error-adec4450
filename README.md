# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/masoplek1011/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/masoplek1011/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

An entry for [The Funniest Honest Appliance Error](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) on make.fun: one line, at most 200 characters, the funniest honest error message an appliance could show.

## The entry

A blender, in its own flat deadpan voice, admits the truth of its failure: a single ice cube has lodged in the blade, so the motor has been screaming for three minutes while blending absolutely nothing. The laugh comes from the fault itself — maximum noise, zero progress — not from a pun.

## How it works

`main.ts` is a small deterministic program (Node standard library only, no network, no randomness). It writes exactly that one line, followed by a newline, to `entry.txt` inside the directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
