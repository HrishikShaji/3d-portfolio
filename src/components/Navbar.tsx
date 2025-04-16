import { useEffect, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
    <div className="inner">
      <a className="logo" href="#hero">
        Hrishik
      </a>
      <nav className="desktop">
        <ul>
          {navLinks.map((item) => (
            <li key={item.link} className="group">
              <a href={item.link}>
                <span>{item.name}</span>
                <span className="underline" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact" className="contact-btn group">
        <div className="inner">
          <span>Contact me</span>
        </div>
      </a>
    </div>
  </header>
}
