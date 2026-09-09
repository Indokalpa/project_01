import useScrollProgress from './hooks/useScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ShowcaseStrip from './components/ShowcaseStrip'
import ServicesAccordion from './components/ServicesAccordion'
import TrustedStats from './components/TrustedStats'
import CreatorsGrid from './components/CreatorsGrid'
import WhyCreators from './components/WhyCreators'
import TrackRecord from './components/TrackRecord'
import CaseStudies from './components/CaseStudies'
import ProcessSteps from './components/ProcessSteps'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { onboardingProcess, campaignProcess } from './data/content'

export default function App() {
  const { progress, stuck } = useScrollProgress()

  return (
    <>
      <div className="prog" style={{ width: `${progress}%` }} />
      <Nav stuck={stuck} />
      <Hero />
      <ShowcaseStrip />
      <ServicesAccordion />
      <TrustedStats />
      <CreatorsGrid />
      <WhyCreators />
      <TrackRecord />
      <CaseStudies />
      <ProcessSteps id="process" eyebrowText="Process" heading="Your first 30 days" steps={onboardingProcess} />
      <ProcessSteps
        eyebrowText="How a creator campaign runs"
        heading="Four stages, no guesswork"
        steps={campaignProcess}
        background="var(--bg2)"
      />
      <WhyUs />
      <Faq />
      <Footer />
    </>
  )
}
