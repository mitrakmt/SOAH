import { UseYourVoiceSection } from 'containers/yourVoice'
import YourVoiceView from 'components/yourVoice'
import CreditsPageView from 'components/credits'

export default [
  {
    Container: UseYourVoiceSection,
    props: {
      Component: YourVoiceView,
      sectionName: 'yourVoice',
    },
  },
  {
    Container: UseYourVoiceSection,
    props: {
      Component: CreditsPageView,
      sectionName: 'credits',
    },
  },
]
