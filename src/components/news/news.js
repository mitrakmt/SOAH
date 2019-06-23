import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Images
import wanNews from 'images/news/WorldAnimalNews.jpg'
import virginVideo from 'images/News_VirginReleaseOfficialTrailer.png?sizes[]=100,sizes[]=400,sizes[]=600'
import AWFNews from 'images/news/AfricanWildlifeFoundation.png?sizes[]=100,sizes[]=400,sizes[]=600'
import romanianNews from 'images/news/Canal3.png?sizes[]=100,sizes[]=400,sizes[]=600'
import screeningsNews from 'images/news/Screenings.jpg?sizes[]=100,sizes[]=400,sizes[]=600'
import virginNews from 'images/news/Virgin_RichardBransonAnnoucement.jpeg?sizes[]=100,sizes[]=400,sizes[]=600'
import inTheMakingNews from 'images/news/PeopleMagazine.jpg?sizes[]=100,sizes[]=400,sizes[]=600'

import './news.scss'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNews: 0,
    }

    // NOTE -- VERY IMPORTANT, PLEASE READ: each object in the news list must have a unique ID. They must also be in order, so if you add an article to the beginning, update all the articles to be in order (starting from 0)
    this.news = [
      {
        src: virginNews.src,
        srcSet: virginNews.srcSet,
        href: 'https://www.virgin.com/richard-branson/sides-horn',
        alt: 'Richard Branson on Sides of a Horn',
        id: 0,
      },
      {
        src: wanNews.src,
        srcSet: wanNews.srcSet,
        href:
          'https://worldanimalnews.com/wan-exclusive-with-sides-of-a-horn-filmmaker-toby-wosskow-check-out-their-new-trailer/',
        alt: 'World Animal News Interview Writer-Director Toby Wosskow',
        id: 1,
        internal: false,
      },
      {
        src: virginVideo.src,
        srcSet: virginVideo.srcSet,
        href: 'https://www.virgin.com/richard-branson/sides-horn-0',
        alt: 'Virgin Release Official Trailer',
        id: 2,
        internal: false,
      },
      {
        src: screeningsNews.src,
        srcSet: screeningsNews.srcSet,
        href: '/screenings',
        alt: 'Global Screenings Announced Frequently',
        id: 3,
        internal: true,
      },
      {
        src: romanianNews.src,
        srcSet: romanianNews.srcSet,
        href: 'https://www.facebook.com/watch/?v=756755554724195',
        alt: 'Canal 3 Covers Sides of a Horn',
        id: 4,
        internal: false,
      },
      {
        src: AWFNews.src,
        srcSet: AWFNews.srcSet,
        href:
          'https://www.awf.org/blog/sides-horn-exploring-horrors-south-africas-poaching-war',
        alt: 'African WIldlife Foundation on Sides of a Horn',
        id: 5,
      },
      {
        src: inTheMakingNews.src,
        srcSet: inTheMakingNews.srcSet,
        href:
          'https://www.peoplemagazine.co.za/entertainment/sides-horn-making/',
        alt:
          'People Magazine Announces World Rhino Day 2017 Kickstarter Campaign',
        id: 6,
      },
    ]
  }

  nextNews = () => {
    let currentPage = this.state.selectedNews

    if (currentPage === this.news.length - 1) {
      return
    }

    this.setState(
      {
        selectedNews: ++currentPage,
        transitioning: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            transitioning: false,
          })
        }, 500)
      }
    )
  }

  previousNews = () => {
    let currentPage = this.state.selectedNews

    if (currentPage === 0) {
      return
    }

    this.setState(
      {
        selectedNews: --currentPage,
        transitioning: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            transitioning: false,
          })
        }, 500)
      }
    )
  }

  newsClick = id => {
    if (id === this.state.selectedNews) {
      window.open(this.news[this.state.selectedNews].href, '_blank')
    } else if (id === this.state.selectedNews - 1) {
      this.previousNews()
    } else {
      this.nextNews()
    }
  }

  render() {
    const { sectionName } = this.props
    const { selectedNews } = this.state
    let nextNews = 0
    let previousNews = 0
    if (selectedNews === 0) {
      nextNews = selectedNews + 1
      previousNews = null
    } else if (selectedNews === this.news.length - 1) {
      nextNews = null
      previousNews = selectedNews - 1
    } else {
      nextNews = selectedNews + 1
      previousNews = selectedNews - 1
    }

    return (
      <div className={`${sectionName}`}>
        <div className="news-header">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="news-header-line news-header-left"
          />
          <h3 className="news-header-text">In the News</h3>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="news-header-line news-header-right"
          />
        </div>
        <div className="news-images">
          {this.news.map(piece => (
            <span
              onClick={() => this.newsClick(piece.id)}
              className="news-images-navigate"
              key={`news-carousel-${piece.id}`}
            >
              <img
                srcSet={piece.srcSet}
                src={piece.src}
                className={`news-images-piece ${
                  this.news[selectedNews].id === piece.id
                    ? 'news-images-mainNews'
                    : ''
                } ${
                  this.news[nextNews] && this.news[nextNews].id === piece.id
                    ? 'news-images-rightNews'
                    : ''
                } ${
                  this.news[previousNews] &&
                  this.news[previousNews].id === piece.id
                    ? 'news-images-leftNews'
                    : ''
                } ${
                  piece.id > selectedNews + 1
                    ? 'news-images-farRight'
                    : piece.id < selectedNews - 1
                    ? 'news-images-farLeft'
                    : ''
                }`}
                alt={piece.alt}
              />
              <span
                className={`news-images-title ${
                  this.state.transitioning
                    ? 'news-images-titleTransitionStart'
                    : 'news-images-titleTransitionEnd'
                }`}
                onClick={() => this.newsClick(selectedNews)}
              >
                {this.news[selectedNews].alt}
              </span>
            </span>
          ))}
        </div>
        <div className="news-arrows">
          <h5
            className={`news-arrows-arrow ${
              this.state.selectedNews === 0 ? 'news-arrows-arrow-hide' : ''
            }`}
            onClick={this.previousNews}
          >{`<`}</h5>
          <h5
            className={`news-arrows-arrow ${
              this.state.selectedNews === this.news.length - 1
                ? 'news-arrows-arrow-hide'
                : ''
            }`}
            onClick={this.nextNews}
          >{`>`}</h5>
        </div>
      </div>
    )
  }
}

export default News
