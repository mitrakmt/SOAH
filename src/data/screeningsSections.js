import { ScreeningsSections } from 'containers/screenings'
import ScreeningsPageView from 'components/screenings'
import CreditsPageView from 'components/credits'

export default [
  {
    Container: ScreeningsSections,
    props: {
      Component: ScreeningsPageView,
      sectionName: 'screenings',
    },
  },
  {
    Container: ScreeningsSections,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
