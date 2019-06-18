import { FundTheCauseSection } from 'containers/fundTheCause'
import FundTheCause from 'components/fundTheCause'
import CreditsPageView from 'components/credits'

export default [
  {
    Container: FundTheCauseSection,
    props: {
      Component: FundTheCause,
      sectionName: 'fundTheCause',
    },
  },
  {
    Container: FundTheCauseSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
