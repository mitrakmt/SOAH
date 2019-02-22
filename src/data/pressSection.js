import { PressSection } from 'containers/press'
import PressPageView from 'components/press'
import CreditsPageView from 'components/credits'

export default [
  {
    Container: PressSection,
    props: {
      Component: PressPageView,
      sectionName: 'press',
    },
  },
  {
    Container: PressSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
