import { useState } from "react"
import Carousel from "./Carousel"

function AboutSection() {
  const [viewingAboutMe, setViewingAboutMe] = useState(false)

  return (
    <div className="p-10 pb-0">
      <div className={`mx-auto flex flex-col md:flex-row items-center max-w-xl transition-all duration-1000 ease-out ${viewingAboutMe ? "justify-start gap-x-5" : "justify-center"}`}>
        <img src="src/assets/profile.JPG" alt="profile picture"
          className="hover:brightness-75 hover:shadow-xl hover:scale-[1.02] w-32 h-32 rounded-full cursor-pointer object-cover"
          onClick={() => setViewingAboutMe(!viewingAboutMe)}
        />

        {/* General iformation to Display when profile picture is not clicked */}
        <div className={`
            overflow-hidden transition-all duration-1000
            ${viewingAboutMe ? "opacity-0 translate-x-50 w-0 h-0" : "opacity-100 translate-x-0"}
          `}>
          <div className="flex flex-col gap-4 text-center sm:pt-4 p-4">
            <b>Oswaldo Cortes-Tinoco</b>
            <h3>Software Engineer</h3>
            <div className="flex items-center justify-center">
              <img src="./src/assets/locationIcon.svg" className="w-5 h-5 dark:filter-[invert(1)_brightness(2)]"/>
              <h3>Salinas, CA</h3>
            </div>
          </div>
        </div>

        {/* Show the About carousel where viewers can navigate and see more info about me */}
        <div className={`overflow-hidden transition-all duration-1000 ${viewingAboutMe ? "opacity-100" : "opacity-0 translate-x-50 w-0 h-0"}`}>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default AboutSection