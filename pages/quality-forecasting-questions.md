# Asking Quality Forecasting Questions

## Introduction

Forecasting is hard. Asking good forecasting questions may be harder. In his [Edge Foundation Master Class on Forecasting](https://soundcloud.com/edgefoundationinc/edgemasterclass2015-class-1-pt-1), Phil Tetlock remarked something to the effect that "Asking good questions is difficult. We're terrible at it."

What makes a good Forecasting question? Some desirable characteristics:

## Objectively Resolvable

The core distinction between an adequate forecasting question and an unworkable one is an objective resolution.

Suppose we want to ask [when Polio will be eradicated](https://www.metaculus.com/questions/3353/when-will-the-who-certify-the-worldwide-eradication-of-polio/). The direct piece of knowledge is essentially unknowable; the last poliovirus to infect a human will be destroyed at a specific time on a specific day, but we won't be able to observe it. All we'll know is that there aren't any more cases.

So, instead of the actual eradication, this is more easily framed in terms of the [claims of the authority in the position to resolve](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19009) the underlying phenomenon. In this case, the World Health Organization is [such an authority](https://www.who.int/news-room/feature-stories/detail/two-out-of-three-wild-poliovirus-strains-eradicated).

There's a sweet spot in terms of interpretative flexibility. If you reference a particular URL with a dogmatic interpretation about what content should be there at a particular time, your question may be resolved ambiguously or in an otherwise undesirable way if the site architecture changes before resolution time. But forecasters can generally agree on outcomes in a less rigid way.

On the flip side of this issue, it's also possible to construct questions that are insufficiently concrete. You can forecast on whether or [not someone will do something drastic](https://www.metaculus.com/questions/3401/will-north-korea-fail-to-send-the-us-a-christmas-gift/), but "something drastic" is a matter of interpretation, and resolving it can be [a source of some consternation for your forecasters](https://www.metaculus.com/questions/3401/will-north-korea-fail-to-send-the-us-a-christmas-gift/#comment-19167).

[If the question refers to particular points in time, does it do so unambiguously?](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19013)  (E.g., not "by March 2023" but "by the start of March 2023" or, better still, "by noon UTC on 2023-03-01".)

## Non-Obvious (to a thoughtful forecaster)

The answer to a question shouldn't be immediately obvious. Consider the following two forecast questions:

* Will [Global GDP Growth](https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG) be greater than 3% this year?
* Will the [Sun](https://en.wikipedia.org/wiki/Sun) spontaneously disappear this year?

The first question is useful and non-obvious. I must do a bit of research to determine what my credence in the claim is. The second is extremely obvious--to the point of simply being factual information. If we really need to "do forecasting", I can research that [the sun has continuously existed for approximately 4.6 billion years](https://www.aanda.org/articles/aa/abs/2002/30/aa2598/aa2598.html), implying its annual frequency of spontaneous disappearance is less than 0.000000002%. But we don't need to "do forecasting"--this question resolves with such extreme probability that placing any credence on the alternative is a waste of effort.

There is an important nuance to non-obviousness. A question should be non-obvious *to a thoughtful forecaster*. We can ask a non-forecaster to predict an outcome, and they can typically generate a prediction and place very high credence on it. For example, if we ask someone whether their preferred sports team is going to win the upcoming game, they may express [a confident prediction of impending victory](https://www.lesswrong.com/posts/RmCjazjupRGcHSm5N/professing-and-cheering). How likely are they to be right? Probably about 50%.

By contrast, if we ask a thoughtful forecaster what will happen, we are probably going to receive a quantitative prediction. A thoughtful forecaster will, among other things, begin to decompose the question into simpler questions that can be resolved simply by looking up the answers. Are these predictable games, or coin flips? Is one team statistically more competent than the other? Are there other markets on this outcome already? This is a procedure which requires some conscious effort, and usually a bit of research.

## Outcome-Balanced

In general, forecasting questions are most useful when the outcomes are unclear. Suppose we're going to create questions about whether our favorite sports team, the Losers, will win each game they were scheduled to play in the upcoming regular season. They play the first game, and lose. Our credence in their subsequent victories should go down a bit. They play the second game, and lose again. Again, our credence in their victory goes down. The Losers aren't an awesome team! Suppose they lose every game up to the middle of the season. Our credence in them winning the rest of the season should be pretty low at this point--perhaps so much so that the outcome is no longer [non-obvious](#nonobvioustoathoughtfulforecaster).

In this case, it may not be worth continuing to ask the questions about each game. They aren't outcome-balanced enough. We can still ask questions about the team and season, but we should think about the questions differently. Instead of predicting victory for each game, what about the probability that the Losers win *any* games in the rest of the season? Or if you want to ask about each game, perhaps you should instead predict the point spreads, rather than whether the game's ultimate victor.

Now, let's change the perspective a little bit. Suppose that you run a forecasting competition on a wide variety of topics. You've been running it for a while, and are starting to get enough resolutions to do some analysis on your performance. Initial results are promising! The community's Brier score is nice and low, on par with [other](https://www.metaculus.com/questions/track-record/) forecasting communities. But something weird is going on: you've had 20 questions resolve, but only one resolved positively. All the others were negative.

What should you forecast the next time you address a quesiton in your community? Based solely on the fact that it's being asked in the community, the outside view suggests around 5%. This is not a desirable outcome balance.

For binary questions, any randomly-selected subset of resolved questions should be roughly 50% positive, 50% negative. This maximizes the information conveyed by a forecast from a well-calibrated forecaster. Similarly, for continuous questions, the answer should optimally be uniformly distributed across the normalized range.

Now, optimizing in this way is tricky, requiring a long track record from an active community. But I believe that a first step is for question authors to simply be aware of it, and [refactor their questions accordingly](https://www.metaculus.com/questions/935/discussion-topic-what-features-should-metaculus-add-may-2018-edition/#comment-6564).

## Bonus: Not being asked elsewhere

Many of the top forecasters split their attention between multiple forecasting communities. This means that when you create forecasting games based on things that are being forecast elsewhere, those other forecasts will be seen by your toughtful forecasters. Accordingly, you might not be adding value to the forecasting community by launching a market on that question.

* [Metaculus](https://metaculus.com/)
* [Forecast](https://forecastapp.net/)
* [Good Judgement Open](https://gjopen.com/)
* [CSET Foretell](https://www.cset-foretell.com/)
* [Augur](https://augur.net/)
* [PredictIt](https://www.predictit.org/)

## Sanity Checked

* [Does the question close too early?](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19006)

### Does the question match its metadata?

In addition to the question text, you're also going to have to sepcify some metadata. What's a punchy title for this question? What's the long, boring, properly caveatted version of the question? When should this market close? When should it resolve? How should it be structured (binary, categorical, continuous)? Much of this data should be included in some way in the question description, and if so, it should definitely be specified correctly in both the text and the metadata. Some specific examples of this:

* [Does the resolution criteria agree with the question title?](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19008)
* [Does the internal resolution/close date match the question text?](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19005)

### [Is the question written](https://www.metaculus.com/questions/3418/question-writing-checklist/#comment-19010) from a [neutral point of view?](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view)

While it isn't strictly critical that a question be free of any perspective or stance, introducing bias is considered poor form and may drastically reduce the quality of discussion.

## See Also

* AI Forecasting Dictionary's [Best practices for question writing](https://parallel-forecast.github.io/AI-dict/docs/best-practices.html)
* foretold.io's [Best Practices for Writing Questions](https://docs.foretold.io/best-practices-writing-questions)
* Metaculus' [Question Writing Checklist](https://www.metaculus.com/questions/3418/question-writing-checklist/)