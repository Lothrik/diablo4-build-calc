# diablo4-build-calculator
A build calculator for [Diablo 4](https://diablo4.blizzard.com).

# frequently asked questions

## Where does this data come from?
With a few exceptions: It all comes directly from the game; I do the data mining myself.

The tools I use for this are not currently public.

You can use [CASCExplorer](https://github.com/WoW-Tools/CASCExplorer) to extract your own copy of the game assets.

Parsing the proprietary file formats within is an exercise left to the reader.

I recommend examining the ``.stl`` files first.

Blizzard uses a relatively simple hash function to reference just about everything, including other files.

```cs
uint HashFunctionExample(string input)
{
    input = input.ToLowerInvariant();
    uint hash = 0;
    for (int i = 0; i < input.Length; i++)
        hash = (hash << 5) + hash + input[i];
    return hash;
}
```

## How do I run a copy of this site locally?
Launch any web server with ``diablo4-build-calc`` as the root directory:
```bat
cd ./diablo4-build-calc/
python3 -m http.server 8000
```

## What are the attack speed multipliers I see listed on some skills?
Each skill has its own unique attack animation. Blizzard occasionally wants certain skills to be faster, or slower. Rather than rework the animation directly they simply multiply how quickly your character executes that specific skill.

I datamine that multiplier as the "attack speed multiplier" you see on certain skills.

One skill having a significantly higher multiplier than another doesn't necessarily mean that skill is faster, just that it was slower than it currently is at some point in the past.

Just as an example, Maul was buffed between build 39858 and 41428 to be 10% faster — that change can be seen [here](https://lothrik.github.io/diablo4-build-calc/history/39858-41428.html).

## Can I give you money for this?
You're free to do whatever you want, I do have a [Patreon](https://www.patreon.com/lothrik). I'm not selling you anything though.

## I found a bug or want to request a feature, what should I do?
You can [open an issue](https://github.com/Lothrik/diablo4-build-calc/issues/new) or message me on Discord.