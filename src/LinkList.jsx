import LinkCard from "./LinkCard"


function LinkList() {

  const linkData = [
    { icon: '/src/assets/portfolio.svg', label: 'Portfolio', reference: 'https://OsCortes88.github.io', description: '' },
    { icon: '/src/assets/github.svg', label: 'Github', reference: 'https://github.com/OsCortes88', description: '' },
    { icon: '/src/assets/linkedin.svg', label: 'LinkedIn', reference: 'http://www.linkedin.com/in/oswaldo-cortes', description: '' },
    { icon: '/src/assets/document.svg', label: 'Resume', reference: 'https://docs.google.com/document/d/1ot_hIcSndYVe4vVYqQdZgg8NTJPuTOY_PhlAhl9MUIo/edit?usp=sharing', description: '' },
  ]

  const links = linkData.map(link => 
    <LinkCard icon={link.icon} label={link.label} reference={link.reference} description={link.description} />
  );

  return (
    <div className="p-5">
      {links}
    </div>
  )

}

export default LinkList