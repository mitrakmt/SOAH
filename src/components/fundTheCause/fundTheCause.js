import React, { Component } from 'react'

import HeaderImage from 'images/SOAH_Still29_full.png'

import PleaseDonate from 'components/pleaseDonate/pleaseDonate'

import ImageBox from './components/imageBox'
import LargeBox from './components/largeBox'

import LearnMore1 from 'images/learnMore/learnMore1.png'
import LearnMore2 from 'images/learnMore/learnMore6.png'
import LearnMore3 from 'images/learnMore/learnMore3.jpg'
import LearnMore4 from 'images/learnMore/learnMore2.png'
import LearnMore5 from 'images/learnMore/learnMore5.jpg'
import LearnMore6 from 'images/learnMore/learnMore4.jpg'
import LearnMore7 from 'images/learnMore/learnMore8.jpg'

import './fundTheCause.scss'

class FundTheCause extends Component {
  constructor(props) {
    super(props)

    this.boxes = [
      {
        image: LearnMore1,
        link: 'https://campaign.awf.org/poaching-infographic/',
        text:
          "African Wildlife Foundation is the leading conservation organization protecting rhinos, elephants, and other threatened species from the poaching crisis. AWF is Sides of a Horn's official philanthropic partner.",
        buttonText: 'Donate to THE AFRICAN WILDLIFE FOUNDATION',
      },
      {
        image: LearnMore2,
        link: 'https://campaign.awf.org/modern-poaching/',
        text:
          'The Sheldrick Wildlife Trust rescues and hand-rears orphaned baby elephants and rhinos in Kenya.',
        buttonText: 'donate to THE SHELDRICK WILDLIFE TRUST',
      },
      {
        image: LearnMore3,
        link: 'https://campaign.awf.org/countingelephants/',
        text:
          'Elephant Action League conducts investigations with an intelligence-led approach to combat wildlife crime.',
        buttonText: 'donate to THE ELEPHANT ACTION LEAGUE',
      },
      {
        image: LearnMore4,
        link:
          'https://campaign.awf.org/2018-canines/?utm_source=1808summerig&utm_medium=social&utm_campaign=fy19summer&ms=B19A04E12S',
        text:
          'Rhino Conservation Botswana works with the Botswana government to help reintroduce black and white rhinos into Botswana through relocation.',
        buttonText: 'donate to rhino conservation botswana',
        redButton: true,
      },
      {
        image: LearnMore5,
        link:
          'https://www.awf.org/blog/humans-are-biggest-threat-africas-wildlife',
        text:
          'The International Anti-Poaching Foundation empowers community members with the training, equipment, and management required to defend Africa’s wildlife.',
        buttonText: 'donate to THE international anti-poaching foundation',
      },
      {
        image: LearnMore6,
        link:
          'https://www.awf.org/blog/how-win-fight-save-africas-elephants-and-rhinos',
        text:
          'Children in the Wilderness aims to facilitate sustainable conservation through leadership development and education of rural children in Africa.',
        buttonText: 'donate to children in the wilderness',
      },
      {
        image: LearnMore6,
        link:
          'https://www.awf.org/blog/how-win-fight-save-africas-elephants-and-rhinos',
        text:
          'The Sides of a Horn team has vetted all organizations listed on this page. However, we encourage you to do your own research before donating to any non-profits to ensure that your donation goes to a legitimate and trustworthy recipient.',
      },
      {
        image: LearnMore7,
        link: 'https://www.awf.org/blog/what-lies-ahead-africas-rhinos',
        text:
          'WildAid’s high-impact media campaigns feature some of the most influential voices in the world, measurably increasing awareness about poaching, and prompting changes in attitudes and behavior. WildAid has partnered with Sides of a Horn to distribute the film in Asian territories.',
        buttonText: 'donate to WILDAID',
      },
    ]
  }
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <h3 className="fundTheCause-pageTitle">Fund the Cause</h3>
        <img
          src={HeaderImage}
          className="fundTheCause-headerImage"
          alt="Two men staring at a screen"
        />
        <PleaseDonate />
        <LargeBox data={this.boxes[0]} />
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[1]} />
          <ImageBox data={this.boxes[2]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[3]} />
          <ImageBox data={this.boxes[4]} />
        </div>
        <div className={`${sectionName}-images`}>
          <ImageBox data={this.boxes[5]} />
          <ImageBox data={this.boxes[6]} />
        </div>
        <LargeBox data={this.boxes[7]} />
      </div>
    )
  }
}

export default FundTheCause
