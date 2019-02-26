import React, { Component } from 'react'

// Images
import letterFromTheDirector from 'images/news/letterFromTheDirector.jpg'
import AWFNews from 'images/news/AWFNews.jpg'
import virginNews from 'images/news/virginNews.jpg'

import virginVideo from 'images/news/VirginVideo_News.png'
import romanianNews from 'images/news/Romanian_News.png'
import wanNews from 'images/news/WAN_News.png'
import inTheMakingNews from 'images/news/InTheMaking_News.png'
import screeningsNews from 'images/news/Screenings_News.png'

import './news.scss'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNews: 0,
    }

    this.news = [
      {
        src: wanNews,
        href:
          'https://worldanimalnews.com/wan-exclusive-with-sides-of-a-horn-filmmaker-toby-wosskow-check-out-their-new-trailer/',
        alt: 'World Animal News Interview Writer-Director Toby Wosskow',
        id: 0,
        internal: false,
      },
      {
        src: virginVideo,
        href: 'https://www.virgin.com/richard-branson/sides-horn-0',
        alt: 'Virgin Release Official Trailer',
        id: 1,
        internal: false,
      },
      {
        src: letterFromTheDirector,
        href: '/press',
        alt: 'Director’s Statement from Toby Wosskow',
        id: 2,
        internal: true,
      },
      {
        src: screeningsNews,
        href: '/screenings',
        alt: 'Global Screenings Announced Frequently',
        id: 3,
        internal: true,
      },
      {
        src: romanianNews,
        href: 'https://www.facebook.com/watch/?v=756755554724195',
        alt: 'Canal 3 Cover Sides of a Horn on Romanian News Broadcast',
        id: 4,
        internal: false,
      },
      {
        src: AWFNews,
        href:
          'https://www.awf.org/blog/sides-horn-exploring-horrors-south-africas-poaching-war',
        alt: 'AWS on Sides of a Horn',
        id: 5,
      },
      {
        src: virginNews,
        href: 'https://www.virgin.com/richard-branson/sides-horn',
        alt: 'Richard Branson on Sides of a Horn',
        id: 6,
      },
      {
        src: inTheMakingNews,
        href:
          'https://www.peoplemagazine.co.za/entertainment/sides-horn-making/',
        alt:
          'People Magazine Announce World Rhino Day 2017 Kickstarter Campaign',
        id: 7,
      },
    ]
  }

  nextNews = () => {
    let currentPage = this.state.selectedNews

    if (currentPage === this.news.length - 1) {
      this.setState({
        selectedNews: 0,
      })
      return
    }

    this.setState({
      selectedNews: ++currentPage,
    })
  }

  previousNews = () => {
    let currentPage = this.state.selectedNews

    if (currentPage === 0) {
      this.setState({
        selectedNews: this.news.length - 1,
      })
      return
    }

    this.setState({
      selectedNews: --currentPage,
    })
  }

  render() {
    const { sectionName } = this.props
    const { selectedNews } = this.state
    let nextNews = 0
    let previousNews = 0
    if (selectedNews === 0) {
      nextNews = selectedNews + 1
      previousNews = this.news.length - 1
    } else if (selectedNews === this.news.length - 1) {
      nextNews = 0
      previousNews = selectedNews - 1
    } else {
      nextNews = selectedNews + 1
      previousNews = selectedNews - 1
    }

    return (
      <div className={`${sectionName}`}>
        <div className="news-header">
          <span className="news-header-line" />
          <h3 className="news-header-text">In the News</h3>
          <span className="news-header-line" />
        </div>
        <div className="news-images">
          <a onClick={this.previousNews} className="news-images-navigate">
            <img
              src={this.news[previousNews].src}
              className="news-images-leftNews"
              alt={this.news[previousNews].alt}
            />
          </a>
          <a
            href={this.news[selectedNews].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={this.news[selectedNews].src}
              className="news-images-mainNews"
              alt={this.news[selectedNews].alt}
            />
          </a>
          <a onClick={this.nextNews} className="news-images-navigate">
            <img
              src={this.news[nextNews].src}
              className="news-images-rightNews"
              alt={this.news[nextNews].alt}
            />
          </a>
          {/* {this.news.map(piece => (
            <a
              onClick={() => this.newsClick(piece.id)}
              className="news-images-navigate"
            >
              <img
                src={piece.src}
                className={`news-images-piece ${
                  this.news[selectedNews].id === piece.id
                    ? 'news-images-mainNews'
                    : ''
                } ${
                  this.news[nextNews].id === piece.id
                    ? 'news-images-rightNews'
                    : ''
                } ${
                  this.news[previousNews].id === piece.id
                    ? 'news-images-leftNews'
                    : ''
                }`}
                alt={piece.alt}
              />
            </a>
          ))} */}
        </div>
        <div className="news-arrows">
          <h5
            className="news-arrows-arrow"
            onClick={this.previousNews}
          >{`<`}</h5>
          <h5 className="news-arrows-arrow" onClick={this.nextNews}>{`>`}</h5>
        </div>
      </div>
    )
  }
}

export default News
