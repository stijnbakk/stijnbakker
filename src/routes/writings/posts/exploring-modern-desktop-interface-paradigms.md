---
title: Modern desktop interface paradigms
description: Description
author: Stijn Bakker
date: 2023-06-30
published: false
---

I've noticed a cultural shift in how we tend to think of user interfaces. <br/>
In modern UIs for desktop production tools, we tend to expect different types of interfaces now. <br/>
And sometimes we get annoyed if we don't get those (I'm looking at you, Jira).

## TLDR

- For designing desktop apps - make sure you have multiple ways of interacting with your app: 1) through keyboard shortcuts (use commonplace wherever possible), 2) through traditional UI button elements (use system elements wherever possible), and 3) through command pallettes or inline commands that enable a hybrid of fully-keyboard driven app use, and mouse-supported app use
- Use commonplace keyboard shortcuts wherever possible

I thougt I'd list the ones I know about here

## Keyboard first

Shortcuts are age-old. But also evolving.<br/>
Historically they have been about using a single control key with a letter (`CMD + S` for `Save`)<br/>
Then came the ones leveraging multiple control keys (`CMD + SHIFT + S` for `Save As`)<br/>
Not it looks like we might be entering a new era, where we're leveraging single or double control keys, with _multiple_ letter keys (`CMD + K  --> Z` for `Zen Mode` in Visual Studio Code)
![](/writings/exploring-modern-desktop-interface-paradigms/multi-letter-keyboard-shortcut.png)

But the other interesting bit it is that we come to memorise these shortcuts. <br/>
And we expect them to behave similarly across apps. <br/>

## Command palette / launchers

Arc browser `CMD + T` or `CMD + L`:
![](/writings/exploring-modern-desktop-interface-paradigms/arc-command-bar.png)
Notion `CMD + K`
![](/writings/exploring-modern-desktop-interface-paradigms/notion-command-bar.png)
Raycast, brought up with any custom shortcut (mine set to replace macOS Spotlight with `CMD + SPACE`),
![](/writings/exploring-modern-desktop-interface-paradigms/raycast-desktop-launcher.png)
Visual Studio Code, brought up with `CMD + P`
![](/writings/exploring-modern-desktop-interface-paradigms/vscode-command-bar.png)
Even websites have this, for example TailwindCSS opens up with `CMD + K`
![](/writings/exploring-modern-desktop-interface-paradigms/tailwindcss-command-bar.png)

In many ways this is a throwback to the old-fashioned programmer-style way of interacting with computers - through terminals:
![](/writings/exploring-modern-desktop-interface-paradigms/terminal.png)

## Inline command bars

Inline command bars are more specific to text-focused applications. Usually it is about typing in a `/` character, to pop up a dropdown menu.

Notion is probably the most popular example of this
![](/writings/exploring-modern-desktop-interface-paradigms/notion-inline-command.png)

But apps like Jira and Confluence also have something similar
![](/writings/exploring-modern-desktop-interface-paradigms/confluence-inline.png)

In a way, this style is very much a nod to features programmers have been using for years; the autocomplete feature that helps them select functions that work with the class of object they're working with.
![](/writings/exploring-modern-desktop-interface-paradigms/vscode-suggestions.png)

## Auto-hidign UIs

Another one, pretty specific to text editors, is the auto-hiding UI.

Prime example is iA Writer for macOS:
![](/writings/exploring-modern-desktop-interface-paradigms/iawriter.gif)

## Inspector

## The weird ones

- Extendible functionality like Obsidian and Raycast
- Spatial interfaces like Miro, Muse and Obsidian
- Markdown common place like Jira, Confluence, Notion, Slack
