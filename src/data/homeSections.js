import { HomeSection } from '../containers/home'
import LandingPageView from '../components/landingPage'

export default [
  {
    Container: HomeSection,
    props: {
      Component: LandingPageView,
      sectionName: 'landingPage'
    }
  }
]
