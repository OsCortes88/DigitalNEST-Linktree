function AboutSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-xl items-center p-4 gap-x-4">
        <img
          src="src/assets/profile.JPG"
          alt="profile picture"
          className="
            hover:brightness-75 hover:shadow-xl hover:scale-[1.02]
            w-32 h-32 rounded-full cursor-pointer object-cover
            "
        />

        <div>
          <b>Oswaldo Cortes-Tinoco</b>
          <p>Software Engineer</p>
          <p>Salinas, CA</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;