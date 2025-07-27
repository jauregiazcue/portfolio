import './Footer.css'

function Footer() {

  return (
    <footer id="contact" className="footer">
      <section className='footer__section--merger'></section>
      <section className='footer__section--info'>
        <ul className='footer__ul'>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/jauregiazcue/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/jauregiazcue">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
        </ul>
        <p>© Kai Jauregi Azcue. All rights reserved.</p>
      </section>

    </footer>
  );
}

export default Footer; 