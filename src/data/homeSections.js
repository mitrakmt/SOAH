import { HomeSection } from '../containers/home'
import LandingPageView from '../components/landingPage'
import TrailerView from '../components/trailer'

export default [
  {
    Container: HomeSection,
    props: {
      Component: LandingPageView,
      sectionName: 'landingPage'
    }
  },
  {
    Container: HomeSection,
    props: {
      Component: TrailerView,
      sectionName: 'trailer'
    }
  }
]
