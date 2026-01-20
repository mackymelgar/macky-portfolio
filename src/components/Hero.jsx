import profileImg from '../assets/projects/profile.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={profileImg}
        alt="Edre Mark Macky Melgar"
        className="hero-avatar"
      />

      <h2>Edre Mark Melgar</h2>
      <h3>IT Student | Web Developer</h3>
      <p>From imagination to implementation.</p>

      <div className="buttons">
        <a href="#projects" className="btn">Projects</a>
        <a href="#contact" className="btn outline">Contact</a>
      </div>
    </section>
  )
}
