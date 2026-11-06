import { HashRouter, Routes, Route } from 'react-router-dom'
import content from './content/content.json'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import TheArt from './components/TheArt'
import GuruAndCraft from './components/GuruAndCraft'
import Journey from './components/Journey'
import SecondLife from './components/SecondLife'
import Mission from './components/Mission'
import Gallery from './components/Gallery'
import Collaborate from './components/Collaborate'
import Footer from './components/Footer'
import FullStory from './pages/FullStory'
import AwarenessSpeech from './pages/AwarenessSpeech'
import VolunteerStatement from './pages/VolunteerStatement'

function MainPage() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <Nav nav={content.nav} personName={content.person.name} />
      <main>
        <Hero person={content.person} />
        <About about={content.about} />
        <TheArt art={content.art} />
        <GuruAndCraft data={content.guruAndCraft} />
        <Journey journey={content.journey} />
        <SecondLife data={content.secondLife} />
        <Mission mission={content.mission} />
        <Gallery gallery={content.gallery} />
        <Collaborate collaborate={content.collaborate} />
      </main>
      <Footer footer={content.footer} />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story" element={<FullStory />} />
        <Route path="/speech" element={<AwarenessSpeech />} />
        <Route path="/volunteer" element={<VolunteerStatement />} />
      </Routes>
    </HashRouter>
  )
}
