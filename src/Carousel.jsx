import { useState } from "react"

function Carousel () {
  const [index, setIndex] = useState(0)

  const carouselContent = [
    {label: "About Me", description: "As a young boy, STEM subjects were always my favorite. When I came across a CS course in High school, I instantly loved it. From there on out, I joined the CSin3 program to pursue a degree. As a graduate, I am now seeking new frontiers."},
    {label: "My Philosophy", description: " I am a strong believer that things get done better when we work as a team. As a result, in any job I always look forward to brining my best and helping my team. After all, Rome wasn't built by one person."},
    {label: "Hobbies", description: "Outside of work, you can usually find me hooping or playing soccer with my friends, jamming on my guitar to my favorite songs, or destroying my opponents in eFootball"},
  ]

  const handlePrev = () => {
    setIndex((current) => (current === 0 ? carouselContent.length - 1 : current - 1))
  }

  const handleNext = () => {
    setIndex((current) => (current + 1) % carouselContent.length)
  }

  return (
    <div className="relative overflow-hidden ">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carouselContent.map((section, idx) => (
            <div key={idx} className="min-w-full p-4">
              <b>{section.label}</b>
              <p>{section.description}</p>
            </div>
          ))}
      </div>


      <div className="flex justify-center gap-10 mt-2">
        <button onClick={handlePrev} className="bg-(--color-retro-burgundy) hover:bg-(--color-primary-grana) text-white rounded px-4 py-2">
          ‹
        </button>

        <button onClick={handleNext} className="bg-(--color-retro-burgundy) hover:bg-(--color-primary-grana) text-white rounded px-4 py-2">
          ›
        </button>
      </div>
    </div>
  )
}

export default Carousel