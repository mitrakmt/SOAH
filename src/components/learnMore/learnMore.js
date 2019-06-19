import React, { Component } from 'react'

import HeaderImage from 'images/SOAH_Still29_full.png'

import EducateYourself from 'components/educateYourself/educateYourself'

import ImageBox from './components/imageBox'

import LearnMore1 from 'images/learnMore/learnMore1.png'
import LearnMore2 from 'images/learnMore/learnMore6.png'
import LearnMore3 from 'images/learnMore/learnMore3.png'
import LearnMore4 from 'images/learnMore/learnMore2.png'
import LearnMore5 from 'images/learnMore/learnMore5.jpg'
import LearnMore6 from 'images/learnMore/learnMore4.jpg'
import LearnMore7 from 'images/learnMore/learnMore8.jpg'
import LearnMore8 from 'images/learnMore/learnMore7.jpg'
import UndercoverChina from 'images/undercoverChina.jpg'
import UndercoverThailand from 'images/undercoverThailand.jpg'

import './learnMore.scss'

class LearnMore extends Component {
  constructor(props) {
    super(props)

    this.boxes = [
      {
        image: LearnMore1,
        link: 'https://campaign.awf.org/poaching-infographic/',
        text: "Africa's Poaching Crisis",
      },
      {
        image: LearnMore2,
        link: 'https://campaign.awf.org/modern-poaching/',
        text: 'Modern Poaching',
      },
      {
        image: LearnMore3,
        link:
          'https://wildaid.org/wp-content/uploads/2018/09/25-Years-After-Chinas-Ban.pdf',
        text: 'WildAid Rhino Report',
      },
      {
        image: LearnMore4,
        link:
          'https://campaign.awf.org/2018-canines/?utm_source=1808summerig&utm_medium=social&utm_campaign=fy19summer&ms=B19A04E12S',
        text: 'Canine Heroes',
      },
      {
        image: LearnMore5,
        link:
          'https://www.awf.org/blog/humans-are-biggest-threat-africas-wildlife',
        text: 'HUMANS ARE THE BIGGEST THREAT TO AFRICA’S WILDLIFE',
      },
      {
        image: LearnMore6,
        link:
          'https://www.awf.org/blog/how-win-fight-save-africas-elephants-and-rhinos',
        text: 'HOW TO WIN THE FIGHT TO SAVE AFRICA’S ELEPHANTS & RHINOS',
      },
      {
        image: LearnMore7,
        link: 'https://www.awf.org/blog/what-lies-ahead-africas-rhinos',
        text: "What lies ahead for Africa's Rhinos",
      },
      {
        image: LearnMore8,
        link:
          'https://www.awf.org/blog/strengthening-africas-criminal-justice-systems-fight-illegal-wildlife-trade',
        text:
          'STRENGTHENING AFRICA’S CRIMINAL JUSTICE SYSTEMS TO FIGHT ILLEGAL WILDLIFE TRADE',
      },
      {
        image: UndercoverChina,
        link: 'https://elephantleague.org/grinding-rhino-report/',
        text: 'Undercover Rhino Horn Trafficking Investigation in China',
      },
      {
        image: UndercoverThailand,
        link:
          'https://elephantleague.org/wildlife-crime-kingpins-arrested-thailand/',
        text: 'Undercover Rhino Horn Trafficking Investigation in Thailand',
      },
    ]
  }
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <h3 className="learnMore-pageTitle">learn more</h3>
        <img
          src={HeaderImage}
          className="learnMore-headerImage"
          alt="Two men staring at a screen"
        />
        <EducateYourself />

        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[0]} />
          <ImageBox data={this.boxes[1]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[2]} />
          <ImageBox data={this.boxes[3]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[4]} />
          <ImageBox data={this.boxes[5]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[6]} />
          <ImageBox data={this.boxes[7]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[8]} />
          <ImageBox data={this.boxes[9]} />
        </div>
      </div>
    )
  }
}

export default LearnMore
