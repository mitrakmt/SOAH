import LandingPage from '../containers/home'
import LandingPageView from '../components/landingPage'

export default [
  {
    Container: LandingPage,
    props: {
      Component: LandingPageView,
      sectionName: 'landingPage'
    }
  }
]
