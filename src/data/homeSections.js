import { HomeSection } from '../containers/home'
import LandingPageView from '../components/landingPage'
import TheStory from 'components/the-story/theStory'
// import LookInside from 'components/look-inside/lookInside'
// import TakeAction from 'components/take-action/takeAction'
import Credits from 'components/credits/credits'

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
      Component: TheStory,
      sectionName: 'theStory',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: Credits,
      sectionName: 'credits',
    },
  },
]
