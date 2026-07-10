import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AdminPage from './components/admin/AdminPage'

const isAdmin = new URLSearchParams(window.location.search).has('admin')

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <CTA />
      <Footer />
    </>
  )
}

function App() {
  return isAdmin ? <AdminPage /> : <Home />
}

export default App
