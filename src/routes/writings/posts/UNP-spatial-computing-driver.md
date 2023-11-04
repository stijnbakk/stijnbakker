---
title: Spatial Computings' real driver - SwiftUI
description: Vision Pro will give AR a boost, but SwiftUI is the true magic, unlocking developers' creativity allowing the definition of spatial computing to emerge over time
author: Stijn Bakker
date: 2023-06-23
published: false
---

<script>
  import TLDR from '$lib/components/common/TLDR.svelte'

  let TLDRitems = [
    "Apple launched a new paradigm, not a new device with the Vision Pro. <i>Spatial computing</i> will supplement <i>desktop computing</i> and <i>mobile computing</i>, but will take a long time to become mainstream",
    "But Apple didn't define <i>spatial computing</i> yet; it merely provided a first set of tools to enable developers to propperly explore what it means",
    "This means the notion of <i>spatial computing</i> will emerge over time, through the creativity of developers and gradual iteration of developer tools"
  ]
  </script>

<TLDR items={TLDRitems} />

Apple launched [a new gadget](https://www.apple.com/apple-vision-pro/). And reactions are... Mixed.

![](spatial-computing-driver/vision-pro-reaction.jpeg)

[Vision Pro](https://www.apple.com/apple-vision-pro/) is a VR or AR goggle. A hardware engineering marvel. (As an industrial designer I was really really in awe).

![](spatial-computing-driver/exploded-view.webp)

But a products' tech never really counts, only for nerds. What matters is its value.

And that is where Vision Pro's demo fell short. Apple decided to showcase its powerful tech on a selection of meriod consumer-focused use cases. Really Apple? People will purchase a 3.500 USD dollar device to enjoy a movie together, Skype with a 3D face, or record a memory of your kid's birthday wearing skiing goggles?

![](spatial-computing-driver/divorced-dad.webp)

No of course not.

But Apple knows the keynote is watched by everyone. They need something visual to show. And in a device that is so different from anything we've every experienced, that's quite a challenge. I don't blame them. In fact, I think they did a really really good job.

But the most important thing Apple didn't show in the keynote. They showed it in the WWDC developer videos:

**[SwiftUI](https://developer.apple.com/xcode/swiftui/) and [visionOS](https://developer.apple.com/visionos/**

![](spatial-computing-driver/swiftui.webp)

[SwiftUI](https://developer.apple.com/xcode/swiftui/) will be the real game-changer here.

SwiftUI is Apple's way to build user interfaces. It's very powerful and fairly user-friendly. It achieves something the internet never really could - a streamlined experience across apps that are still incredibly customisable. It's like HTML and CSS, but completely different.

And SwiftUI fully integrates with a massive set of [SDKs](https://developer.apple.com/whats-new/), allowing developers to only focus on the functionality and user-value of their apps, instead of worrying about fuzzy stuff.

<small>little note here; I fully realise how Apple simultaneously enables and limits developers with a fairly restrictive set of SDKs, but for a lot of functionalities the trade-offs seem to be worth it in favour of enabling creativity</small>

Sure, developing for the VisionOS is still developing rectangular frames. Floating iPads.

![](spatial-computing-driver/floating-ipads.webp)

But all of those rectangular frames now have the potential to become 3D, with minimal changes to the code. Not a lot to learn extra as a developer, and a potentially massively different experience.

That means we can build on existing knowledge and skills of developers in Swift and the Apple SDKs, like how a carpenter intuitively knows his hammer and saw. And with minimal extra teaching, we can enable the developer to build completely new experiences.

That means an unlocking of creativity. Because building what you dream-up gets very very easy.

And that means - lots of trial and error.

Lots and lots of new apps, new experiences.

And over time some of those apps and experiences will stick.

Some will settle in our minds as completely normal. Similar to how we now consider taps, swipes and pinches on glass, with recognizable elements like buttons, form fields and tab bars completely normal. Those elements 'construct' a user interface. Desktop computing is ultimately defined by forms. Mobile use by swipes and pinches and tabs. What will that look like for _spatial computing_?

Over the next 3-4 years Vision Pro will primarily be a device for developers. Their creativity, and next iterations of VisionOS and SwiftUI will slowly and steadily define what spatial computing will come to mean.

And when we know what that means, Apple will know exactly what to design and engineer their hardware around. Sprinkle in some innovation, and the price will drop drastically. Then add some useful and visually exciting use-cases, and Vision Pro (or Vision SE by that time), might just become a mainstream device (for professionals).

I for one am very excited what developers come up with, and how Apple will evolve VisionOS and SwiftUI to take advantage of 'spatial' applications.

<small>On a narrowly related note. In the developer video <a href="https://developer.apple.com/videos/play/wwdc2023/10279/">Meet Safari for spatial computing</a> the developers repeatedly rever to <code>xrOS</code> instead of <code>visionOS</code>. Could it be that <a href="https://www.macrumors.com/guide/xros/">the original rumors around the OS</a> were right? </small>
