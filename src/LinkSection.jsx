import LinkCard from "./LinkCard"

function LinkSection() {

  const linkData = [
    { icon: '/src/assets/portfolio.svg', label: 'Portfolio', reference: 'https://oscortes88.github.io/projects.html'},
    { icon: '/src/assets/github.svg', label: 'Github', reference: 'https://github.com/OsCortes88' },
    { icon: '/src/assets/linkedin.svg', label: 'LinkedIn', reference: 'http://www.linkedin.com/in/oswaldo-cortes'},
    { icon: '/src/assets/document.svg', label: 'Resume', reference: 'https://docs.google.com/document/d/1ot_hIcSndYVe4vVYqQdZgg8NTJPuTOY_PhlAhl9MUIo/edit?usp=sharing'},
  ]

  const links = linkData.map((link) => 
    <LinkCard key={link.label} icon={link.icon} label={link.label} reference={link.reference} description={link.description} />
  )

  return (
    <div className="flex flex-col gap-8 p-10">
      {links}
    </div>
  )

}

export default LinkSection