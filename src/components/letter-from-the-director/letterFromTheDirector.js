import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import GrayQuote from 'components/quote/grayQuote'

import './letterFromTheDirector.scss'

class LetterFromTheDirector extends Component {
  render() {
    return (
      <div className="letterFromTheDirector">
        <div className="letterFromTheDirector-header">
          <h3 className="letterFromTheDirector-header-title">
            A Letter from the Director
          </h3>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="letterFromTheDirector-header-line"
          />
        </div>
        <div className="letterFromTheDirector-body">
          <h4 className="letterFromTheDirector-text">
            In 2016, while travelling in South Africa, I found myself lost in
            the natural beauty of the game reserves and the wildlife who call it
            home. One afternoon, I was walking through the bush with a game
            ranger, when we stumbled across a white rhino peacefully grazing.
            What struck me more than the animal’s vicious beauty was that this
            scene could have been taking place 50 million years ago or today. I
            was looking at a living, breathing time machine in a land that time
            forgot. However, the magic of that moment was tainted when I quickly
            learned that this magnificent creature was being massacred to the
            brink of extinction.
          </h4>
          <div className="letterFromTheDirector-quote">
            <GrayQuote />
            <h4 className="letterFromTheDirector-text">
              I felt a responsibility to expose the social impact of the illegal
              wildlife trade and humanize the men and women who are so
              devastatingly affected.
            </h4>
          </div>
          <h4 className="letterFromTheDirector-text">
            A nonsensical demand for rhino horn in parts of Asia is fuelling a
            poaching war on the ground in South Africa. International crime
            syndicates are preying on the most financially-desperate people
            living around protected areas, and offering them a fraction of the
            overseas profits to poach from their own wildlife. Meanwhile, other
            people in these same rural communities are taking the legitimate
            PATH OF BECOMING ANTI-POACHING rangers and putting their lives on
            the line to protect their wildlife heritage. These men and women
            from the same communities are killing each other, along with their
            iconic rhino, to feed an unnecessary demand on the other side of the
            world.
          </h4>
          <h4 className="letterFromTheDirector-text">
            When I got back to the U.S. after my trip, I continued researching
            and found that there was a fair amount of international media
            coverage about the multi-billion dollar illegal wildlife trade, but
            nobody was talking about the communities on the ground who were
            being torn apart by this war. My objective as a filmmaker became
            clear. I felt a responsibility to expose the social impact of the
            illegal wildlife trade and humanize the men and women who are so
            devastatingly affected. I developed a dramatic short film, based on
            actual events, that explores how two people from the same level of
            poverty, the same community, and even the same family can end up on
            opposite sides of this war.
          </h4>
          <h4 className="letterFromTheDirector-text">
            The poaching crisis is a complex issue and the conversation around
            it must go beyond simple right and wrong. By painting an unbiased
            portrait of this modern war and exposing both sides of the struggle,
            it is my hope that Sides of a Horn will be a catalyst that inspires
            a greater discussion that can lead to positive change. The human
            death toll is rising and the rhino is facing extinction within the
            next decade. One strength of the short film medium is the ability to
            tell vital, urgent stories, and this story is as urgent as they
            come.
          </h4>
          <h4 className="letterFromTheDirector-text">
            <span className="letterFromTheDirector-text-signature">
              Toby Wosskow
            </span>
            <br />
            Toby Wosskow
            <br />
            Writer and Director
          </h4>
        </div>
      </div>
    )
  }
}

export default LetterFromTheDirector
