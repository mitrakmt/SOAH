import { LearnMoreSection } from 'containers/learnMore'
import LearnMore from 'components/learnMore'
import CreditsPageView from 'components/credits'

export default [
  {
    Container: LearnMoreSection,
    props: {
      Component: LearnMore,
      sectionName: 'learnMore',
    },
  },
  {
    Container: LearnMoreSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
