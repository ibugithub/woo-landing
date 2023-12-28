import Header from "@/components/header/header"
import Hero from "@/components/hero"
import FeatureSection from "@/components/feature-section/feature-section"
import Section from "@/components/Section/section"
import Testimoial from "@/components/testimonial.jsx/testimonial"
import People from "@/components/people/people"
import Cta from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
    <Header/>
    <Hero />
    <FeatureSection />
    <Section />
    <Testimoial />
    <People />
    <Cta />
    <Footer />
    </>
  )
}
