import React, { Component } from 'react'

// Images
import letterFromTheDirector from 'images/letterFromTheDirector.jpg'
import AWFNews from 'images/AWFNews.jpg'
import virginNews from 'images/virginNews.jpg'

import './news.scss'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedNews: 0,
    }

    this.news = [
      {
        src: letterFromTheDirector,
        href: 'http://www.rhinomovie.com/press.html',
        alt: 'Letter from the director',
        id: 0,
      },
      {
        src: AWFNews,
        href:
          'https://www.awf.org/blog/sides-horn-exploring-horrors-south-africas-poaching-war',
        alt: 'AWS on Sides of a Horn',
        id: 1,
      },
      {
        src: virginNews,
        href: 'https://www.virgin.com/richard-branson/sides-horn',
        alt: 'Richard Branson on Sides of a Horn',
        id: 2,
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

  // newsClick = id => {
  //   console.log('id', id)
  //   console.log('this.state.selectedNews', this.state.selectedNews)
  //   console.log('--------------')
  //   if (id === this.state.selectedNews) {
  //     window.open(this.news[this.state.selectedNews].href, '_blank')
  //   } else if (id === this.state.selectedNews + 1 || id === 0) {
  //     this.previousNews()
  //   } else {
  //     this.nextNews()
  //   }
  // }

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
