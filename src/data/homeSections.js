import { HomeSection } from '../containers/home'
import LandingPageView from '../components/landingPage'
import TakeActionView from '../components/take-action'

export default [
  {
    Container: HomeSection,
    props: {
      Component: LandingPageView,
      sectionName: 'landingPage',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: TakeActionView,
      sectionName: 'takeAction',
    },
  },
]
