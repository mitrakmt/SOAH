import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// Images
import AWFNews from 'images/news/AfricanWildlifeFoundation.png?sizes[]=100,sizes[]=400,sizes[]=600'
import screeningsNews from 'images/news/Screenings.jpg?sizes[]=100,sizes[]=400,sizes[]=600'
import virginNews from 'images/news/Virgin_RichardBransonAnnoucement.jpeg?sizes[]=100,sizes[]=400,sizes[]=600'
import NYTimes from 'images/news/NYTimes.png?sizes[]=100,sizes[]=400,sizes[]=600'
import Forbes from 'images/news/Forbes.png?sizes[]=100,sizes[]=400,sizes[]=600'
import WildAid from 'images/news/WildAid.jpg?sizes[]=100,sizes[]=400,sizes[]=600'
import LassIsMore from 'images/news/LassIsMore.jpg?sizes[]=100,sizes[]=400,sizes[]=600'
import UKFilmReview from 'images/news/UKFilmReview.png?sizes[]=100,sizes[]=400,sizes[]=600'
import FilmThreat from 'images/news/FilmThreat.png?sizes[]=100,sizes[]=400,sizes[]=600'

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
        src: NYTimes.src,
        srcSet: NYTimes.srcSet,
        href:
          'https://www.forbes.com/sites/risasarachan/2019/06/17/sir-richard-branson-and-director-toby-wosskow-on-the-urgent-message-behind-sides-of-a-horn/#467ccf953522',
        alt: 'THE NEW YORK TIMES RECOMMENDS SIDES OF A HORN',
        id: 0,
      },
      {
        src: Forbes.src,
        srcSet: Forbes.srcSet,
        href:
          'https://www.forbes.com/sites/risasarachan/2019/06/17/sir-richard-branson-and-director-toby-wosskow-on-the-urgent-message-behind-sides-of-a-horn/#8a5ccf3522e3',
        alt:
          'FORBES INTERVIEWS EXECUTIVE PRODUCER SIR RICHARD BRANSON AND WRITER-DIRECTOR TOBY WOSSKOW',
        id: 1,
      },
      {
        src: AWFNews.src,
        srcSet: AWFNews.srcSet,
        href:
          'https://www.awf.org/blog/sides-horn-exploring-horrors-south-africas-poaching-war',
        alt: 'African WIldlife Foundation on Sides of a Horn',
        id: 2,
      },
      {
        src: WildAid.src,
        srcSet: WildAid.srcSet,
        href: 'https://www.virgin.com/virgin-unite/poaching-steals-us-all',
        alt: 'WILDAID CEO PETER KNIGHTS TALKS SIDES OF A HORN',
        id: 3,
      },
      {
        src: virginNews.src,
        srcSet: virginNews.srcSet,
        href: 'https://www.virgin.com/richard-branson/sides-horn',
        alt: 'Richard Branson on Sides of a Horn',
        id: 4,
      },
      {
        src: screeningsNews.src,
        srcSet: screeningsNews.srcSet,
        href: '/screenings',
        alt: 'Global Screenings Announced Frequently',
        id: 5,
        internal: true,
      },
      {
        src: LassIsMore.src,
        srcSet: LassIsMore.srcSet,
        href:
          'https://tvandfilmguy.com/2019/06/25/sides-of-a-horn-and-a-nuanced-look-at-rhino-poaching/',
        alt: 'LASS IS MORE PODCAST INTERVIEW WITH WRITER-DIRECTOR TOBY WOSSKOW',
        id: 6,
      },
      {
        src: UKFilmReview.src,
        srcSet: UKFilmReview.srcSet,
        href:
          'https://www.ukfilmreview.co.uk/post/sides-of-a-horn-short-film-review',
        alt: 'UK FILM REVIEW GIVES SIDES OF A HORN 5 STARS',
        id: 7,
      },
      {
        src: FilmThreat.src,
        srcSet: FilmThreat.srcSet,
        href: 'http://filmthreat.com/reviews/sides-of-the-horn/',
        alt: 'FILM THREAT DECLARES WOSSKOW A "TALENT TO WATCH"',
        id: 8,
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
