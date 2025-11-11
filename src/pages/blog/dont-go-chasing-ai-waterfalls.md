---
templateKey: blog-post
title: Don't Go Chasing AI Waterfalls
date: 2025-11-12T03:45:42.784Z
description: "The challenge for engineering leadership isn't to achieve some grand AI vision, but to provide the focus and enablement that allows developers to extract maximum value from specific investments."
featuredpost: true
featuredimage: /img/ai-post-waterfalls.jpg
tags:
  - leadership
  - ai
---
![AI City](/img/ai-city.png "AI City")

I was recently in a 1:1 meeting with a developer when he told me, "I removed the AI extensions from my code editor".

The natural reaction from an engineering leader might be, “Did he give up on AI? Did the novelty wear off? Is he just not finding it useful?”.

No. He had simply taken the next logical step in development using AI. He had moved on from using Github Copilot in his IDE to using it exclusively in the Copilot command line interface (CLI) tool in his terminal. Why is this significant? He had essentially graduated to the next “phase” of incorporating AI into his development workflow.

While that anecdote is about one developer’s tool usage, when looked at from a department perspective, it’s about the strategic discipline that underpins successful AI adoption. The challenge for engineering leadership isn't to achieve some grand AI vision, but to provide the focus and enablement that allows developers to extract maximum value from specific investments. To revisit the theme of a past blog post, it’s about prioritizing outcomes over spreading your time (and budget) across all of the shiny new things.

## The Strategic Choice: Maximizing a Single Vendor

In a world where budgets can be tight and time is always precious, it’s vital for engineering leaders to identify what is important. While some organizations have approached AI adoption like they’re going to an all-you-can-eat buffet, I believe that approach can lead to tooling fatigue and organizational debt.

Before OpenAI blew everyone’s minds with ChatGPT, Github had launched Copilot, a tool that could integrate with your code editor to provide enhanced code completion using AI in the background. We conducted a pilot experiment with it and while we found it to feel useful, measuring the productivity of the developers who were using it didn’t indicate that we were seeing significant gains in that area.

Once LLMs hit the scene, there was an explosion of options to choose from. Some organizations hitched their wagon to OpenAI’s ChatGPT, Anthropic’s Claude or any number of other options such as Cursor, Devin and so on. Others decided to try multiple (or all) AI tools.

On the opposite end, we made a clear choice to reevaluate Copilot and see what we thought. This decision wasn't about an exhaustive feature comparison; it was about discipline. In an ideal world, we would be able to identify the one tool that was best for our needs. By consolidating our investment, we could get deeply proficient with the tool, minimize training overhead, and enforce a consistent workflow.

The key strategic leverage here is that sticking to one platform does not mean sticking to one model. Through our single Copilot investment, we gained access to a wide variety of state-of-the-art large language models—including Claude, ChatGPT, and Gemini. This gave the team the necessary model flexibility and power without the overhead of managing separate accounts, invoices, and compliance for each one. It also allowed our developers to continue using their preferred IDE because Copilot has the flexibility to work with many development environments.

The shared platform also became a shared language. Learnings about how to prompt for a better unit test or how to create better rules for AI models to understand our codebase immediately applied to everyone on the team. We maintained a single, manageable point of integration while experimenting with the best capabilities of the AI landscape. 

## From Autocorrect to Agent: The Mandate of Experimentation

Since the beginning, our mandate to developers has not been "you must use AI". That's the kind of directive that can lead to feelings of resentment that tells a development team that you’re chasing the hype. Our mandate has been: "You must experiment with the tools to figure out what works for you, if anything". Our consistent message to developers is that this is another powerful tool that can enhance how you work just like compilers, Agile, DevOps and others have done in the past.

Our early use of Copilot was fairly modest. We used it primarily for "better autocorrect" and for writing tedious but necessary unit tests. It helped with volume, not complexity. At the time, many of our developers fell somewhere on a spectrum where one end was some amount of fear about being replaced vs the other end which was extreme excitement about the new tools. 

The first significant shift came with the transition to using the tool as a sophisticated agent. Copilot added “Agent” mode which opened up many new possibilities for how developers could use AI in their day to day work. 

This is where we started to extract the true return on our consolidated investment. The tool moved from simply completing the next line of code to being able to do the work of an agent: explaining what legacy code did, refactoring large code blocks, debugging complex issues, and generating documentation that could match the codebase's current state.

Developers didn't need a new, expensive tool for refactoring; they were empowered to use the existing one as an agent. Copilot doesn’t always have all of the latest bells and whistles of their competitors. It might be nice to have access to Claude Skills, or the latest and greatest features from Cursor. But we don’t need those to achieve our outcomes which is what counts. As long as Copilot continues to build the important features, like the CLI tool, we continue to realize the benefits of prioritizing a single vendor.

I can best illustrate that by pointing to the developer at the beginning of this blog post. He fits into a pattern I’ve been seeing for developers where many of them are traveling down this journey:

1. Phase 1: Learning how to use AI tools in their IDE  
2. Phase 2: Shifting to the CLI which has a better understanding of the codebase and they can more easily automate commands to have the AI complete full tasks  
3. Phase 3: Understanding that there is nothing preventing them from running two, three, even eight separate instances of the CLI in order to parallelize their work

Phase 3 can have a lot of attraction for developers. The opportunity to get a lot more done in the same amount of time is something many of us would love to be able to accomplish.

## The Next Leadership Challenge: Managing Overload

This power has an ironic danger: too many agents running in parallel. If a developer is running multiple agents for documentation, git tasks, and code generation, the terminal rapidly transforms from a focused environment into a potential context switching mess.

For decades we’ve understood that getting into a flow, a state of deep, uninterrupted concentration, is the key to getting more done. In the same vein, we want to move to the CLI to get more done, yet a badly managed workflow can re-introduce context debt, just in a different window.

This is where leadership steps in. We’ve accomplished our job of getting developers to experiment with the tools. We have 100% developer participation in that area. Our job is now to identify best practices for the workflow of CLI agents and help define clear guardrails for when and how to use them. The goal is to offload cognitive burden, not just move it around. Leadership can provide the necessary framework to ensure "flow state" isn't replaced by a "frenzy state".

The leadership lens here must be focused on how we measure results. Are we seeing a measurable decrease in the time-to-production for user stories? Are the unit test coverage metrics higher with the same number of engineers? Is the cognitive overhead of managing debt lower? Are we seeing more errors introduced into the codebase as a result of too much context switching?

This isn’t a love letter to Copilot, we could have chosen a different tool had circumstances been different. But our journey with Copilot isn't a story of rapid iteration with new vendors. It’s a story of maximizing investment and fostering a culture that views existing tools as platforms for deeper exploration. The best tool isn't always the newest or the most expensive. It’s the one your team knows so well they can outgrow its initial design. That is how we deliver value and achieve outcomes while maintaining financial responsibility.

