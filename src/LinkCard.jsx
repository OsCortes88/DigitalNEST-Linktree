function LinkCard({ icon, label, reference }) {
  return (
    <>
      <a href={reference} target="_blank" rel="noopener noreferrer" className="block pointer-events-none p-4">
        <div className="pointer-events-auto mx-auto flex max-w-lg items-center p-2 rounded-xl shadow-lg outline outline-black/5 hover:bg-gray-100 hover:shadow-xl hover:scale-[1.02] transition">
          <img src={icon} className="w-10 h-10 object-cover shrink 0" alt={icon} />
          <div className="break-all ml-5">
            <b>{label}</b>
            <div className="flex">
              <p>{reference}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default LinkCard;