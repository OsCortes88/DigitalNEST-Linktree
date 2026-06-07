import AboutSection from './AboutSection.jsx'
import LinkSection from './LinkSection.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-(--retro-black) dark:text-white">
      <header className="bg-(--color-primary-blau)">
        <div>
          <h1>
            Associate Technical Assessment
          </h1>
        </div>
      </header>


      <section className="flex-1 p-10">
        <AboutSection />

        <LinkSection />
      </section>
      

      <footer className="bg-(--color-retro-burgundy)">
        <p>© BizzNEST · software-development-associate · technical-assessment</p>
      </footer>
    </div>
  )
}

export default App
