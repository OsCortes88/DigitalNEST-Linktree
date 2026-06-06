import './App.css'
import AboutSection from './AboutSection.jsx';
import LinkList from './LinkList.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blau">
        <div>
          <h1>
            Associate Technical Assessment
          </h1>
        </div>
      </header>


      <section className="flex-1 p-10 pt-0">
        <AboutSection />
        
        <LinkList />
      </section>
      

      <footer className="bg-grana">
        <p>© BizzNEST · software-development-associate · technical-assessment</p>
      </footer>
    </div>
  )
}

export default App
