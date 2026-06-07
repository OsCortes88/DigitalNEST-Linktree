function LinkCard({ icon, label, reference }) {
  return (
    <>
      <a href={reference} target="_blank" rel="noopener noreferrer" className="pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-lg flex p-4 items-center outline outline-black/10 rounded-xl shadow-lg transition hover:bg-gray-100 hover:shadow-xl hover:scale-[1.02] dark:bg-(--retro-charcoal) dark:hover:bg-(--retro-graphite)">
          <img src={icon} className="w-10 h-10 object-cover dark:filter-[invert(1)_brightness(2)]" alt={icon} />
          <div className="break-all ml-5 max-w-3/5">
            <b>{label}</b>
            <p className="label hidden md:block">{reference}</p>
          </div>
          <img src="./openIcon.svg" className="w-8 h-8 object-cover ml-auto dark:filter-[invert(1)_brightness(2)]" alt={icon} />
        </div>
      </a>
    </>
  )
}

export default LinkCard