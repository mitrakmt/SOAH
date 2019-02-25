import { ShareTheMessageSection } from 'containers/shareTheMessage'
import ShareTheMessagePageView from 'components/shareTheMessageLanding'
import ShareTheStoryPageView from 'components/shareTheStory'
import CreditsPageView from 'components/credits'
import PosterArtPageView from 'components/posterArt'

export default [
  {
    Container: ShareTheMessageSection,
    props: {
      Component: ShareTheMessagePageView,
      sectionName: 'shareTheMessageLanding',
    },
  },
  {
    Container: ShareTheMessageSection,
    props: {
      Component: PosterArtPageView,
      sectionName: 'posterArt',
    },
  },
  {
    Container: ShareTheMessageSection,
    props: {
      Component: ShareTheStoryPageView,
      sectionName: 'shareTheStory',
    },
  },
  {
    Container: ShareTheMessageSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
