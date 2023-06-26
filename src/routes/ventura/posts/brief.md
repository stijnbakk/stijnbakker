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

<!-- <TLDR items={TLDRitems} /> -->

Project Ventura is my documentation and build-in-public journey of creating a business. Inspired by documentation of that process in the podcast [StartUp](https://gimletmedia.com/shows/startup). This website and everything around it act as my accountability tool.

This document here is the project brief. A succint 'assignment' for myself on how to execute over the coming 3 months.

## Project objective

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

### Personal objectives

- From over-strategising to actionable research, experiments and talking with people
- From tendency to build without thought, to actionable research, validation setups and messy mockups and prototypes
- From closed-off thinking in my office to publicly sharing, talking about my ambition, and getting feedback

## Project boundaries

- Monthly maximum budget of € 350,- to spend primarily on ads to validate concepts
- Hourly logging, targeting 32 hours a week, with accountability weekly in blog
- Weekly blog post outlining key findings, hours and next steps
- Limit hours on bootstrap funds to max 30 hours a week
- Postpone actual product building until there is a validated MVP

## Project approach and phases

**The approach** is classic strategy consulting inspired: weekly sprints, clearly defined deliverables, accountability reports at the end of every week.

Objective is to have a validated business proposal.

Starting point is a vague collection of ideas, hooks for interesting problems and rough outlined document with vision for the world.

### 5 Phases of the project:

| Phase                             | Description                                                                                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Search direction consolidation | Collect historical notes, hunges and ideas into seperate clearly defined search areas for focused research and opportunity identification                                               |
| 2. Problem statement definition   | Focused research per search area to define the key painpoints of target audience and opportunities for solutions which map on the 'map' of personal skills, interest and audience match |
| 3. Solution design and validation | Design value propositions for most promising painpoints, including a high-level strategy. Convert into validatable experiments (waitlists)                                              |
| 4. Business model design          | Select most promising value propositions and detail out the business model and revenue model, validate in the running experiment                                                        |
| 5. Strategy consolidation         | Select 1-2 most promising value propositions that have market traction and overlap with personal interest, target audience matching, and potential for long-term big-thinking           |

### Plan in detail week by week

| Month | Week (2023) | Phase | Plan and deliverables                                          |
| ----- | ----------- | ----- | -------------------------------------------------------------- |
| 06    | W26         | 01    | `Project brief`, `3-4 search areas definition`                 |
| 07    | W27         | 02    | `Problem statement hypotheses`, `Research area interim report` |
|       | W28         | 02    | `Search area report and conclusion`, `Problem statement`       |
|       | W29         | 03    | `Solution design`                                              |
|       | W30         | 03    | `Experiment design`                                            |
| 08    | W31         | 03    | `Experiment design`, `Experiment launch`                       |
|       | W32         | 03    | `Experiment insights`, `Experiment tweaks`                     |
|       | W33         | 03    | `Experiment conclusions`                                       |
|       | W34         | 04    | `Business model 1 & 2`                                         |
|       | W35         | 04    | `Business model 3 & 4`                                         |
| 09    | W36         | 04    | `Business model design report`                                 |
|       | W37         | 05    | `Business + strategy design 1`                                 |
|       | W38         | 05    | `Business + strategy design 2`                                 |
|       | W39         | 05    | `Business design report + insights + recommendations`          |

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
