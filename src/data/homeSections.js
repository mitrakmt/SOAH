import { HomeSection } from '../containers/home'
import LandingPageView from '../components/landingPage'
import TheStoryPageView from 'components/theStory'
import LookInsidePageView from 'components/lookInside'
import TakeActionPageView from 'components/takeAction'
import PosterArtPageView from 'components/posterArt'
import CreditsPageView from 'components/credits'

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
      Component: TheStoryPageView,
      sectionName: 'theStory',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: TakeActionPageView,
      sectionName: 'takeAction',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: LookInsidePageView,
      sectionName: 'lookInside',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: PosterArtPageView,
      sectionName: 'posterArt',
    },
  },
  {
    Container: HomeSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
