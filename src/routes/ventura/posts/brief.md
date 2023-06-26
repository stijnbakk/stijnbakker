---
title: Project Ventura brief
description: Outline of the what, how and why of Project Ventura en my quest to start a serious venture
author: Stijn Bakker
date: 2023-06-26
published: true
---

<script>
  import TLDR from '$lib/components/common/TLDR.svelte'

  let TLDRitems = [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
  </script>

<TLDR items={TLDRitems} />

Project Ventura. Very original name. What is it about?

Project Ventura is my documentation, build-in-public journey of creating a business. Inspired by documentation of that process in the podcast [StartUp](https://gimletmedia.com/shows/startup). This website and everything around it act as my accountability tool.

This document here is the project brief. A succint 'assignment' for myself on how to execute over the coming 3 months.

In a nutshell - july, august and september 2023 will be about settling on a validated value proposition and business case, with actionable next steps. Whether those are seeking investment, building a product, finding a co-founder, doesn't matter. I feel like I need the focus of having decided on one value proposition to continue with.

Personal objectives in a nutshell:

- From over-strategising to actionable research, experiments and talking with people
- From tendency to build without thought, to actionable research, validation setups and messy mockups and prototypes
- From closed-off thinking in my office to publicly sharing, talking about my ambition, and getting feedback

## Mission objective

<div class=' vp_statement'>
  Settle on a 
  <span>
    validated value proposition
    <div>Meaning that a significant portion of people have shown an actual interest to purchase the product at the price point if it were to exist.</div>
  </span> 
  and 
  <span>
    business case
    <div>Deliverable is a full pitch with a document outlining the problem statement, value proposition, revenue model, marketing strategy, product brief, product mockup, validation statistics, investment plan, development roadmap, software architecture and break-even analysis</div>
  </span>
  for a
  <span>
    'calm'
    <div>A company with ambition, but also a healthy balance and natural growth line. See <a href="https://calmfund.com">Calm Company Fund</a></div>
  </span>
  <span>
    software company
    <div>Software to me seems the most logical product category to start my first venture in. I have the experience and skillset for it, and the distribution benefits mean I won't necessarily need invesment to get started (as oppossed to manufactured goods)</div>
  </span>
  that serves
  <span>
    prosumers and SME businesses
    <div>I have a weak spot for (professional) entrepreneurs, whether they have a small company or are freelancers. Within that niche I have a weak spot for creatives and engineers. The professional use-case strikes me as the most viable use-case for a business, as opposed to the consumer use-case (who expect free products).
  </span>
  in 
  <span>
    running their enterprise
    <div>Part of my personal purpose is to 'empower people to craft a more beautiful world', in this case my targets audience tool for that is a business. This should help with that</div>
  </span>
  . The company will be 
  <span>
    remote-first
    <div>Modeled on Raycast, Muse and Ulysses, I have a general hunge that remote-first is going to be the way forward here</div>
  </span>
  , 
  <span>
    software-based
    <div>Software to me seems the most logical product category to start my first venture in. I have the experience and skillset for it, and the distribution benefits mean I won't necessarily need invesment to get started (as oppossed to manufactured goods)</div>
  </span>
  , 
  <span>
    design-driven
    <div>I believe software creators should be in direct contact with their users. To continually understand the value of the software, and iterate on that. A different phrasing for user-led is design-driven, which I like because it also encapsulates the aesthetic aspect of the product.</div>
  </span>
  , ideally 
  <span>
    bootstrapped
    <div>I understand full well that investment comes with growth expecatations. I've seen to many startups 'trapped' with a product that doesn't sell (enough), but investment committed, so founders are 'stuck'. Let's avoid that to start with, until I know I have something I can deliver on and feel comfortable making that promise.</div>
  </span> 
  and with a 
  <span>
    self-sustaining growth/business model
    <div>maybe obvious, but I feel the product should be profitable and self-sustaining. Unlike Reddit for example. It's marketing ideally also flows without a lot of ad spending, but grows organically. And the cashflow of the company allows the company to grow organically.</div>
  </span>
  .
</div>

<style lang="scss">
  .vp_statement{
    @apply text-xl font-serif leading-relaxed;
    span {
      @apply underline underline-offset-2 relative inline;
    
      &:hover{
        div{
          @apply block;
        }
      }
      div{
        @apply hidden absolute top-6 left-[-150px] bg-white rounded drop-shadow z-10 text-sm font-sans p-3 border-[1px] border-gray-200 min-w-[300px];
      }
    }
    /* span:hover */
  }


  </style>
