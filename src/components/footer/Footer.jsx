import './Footer.css'

function Footer() {

  return (
    <footer id="contact" className="footer">
      <section className='footer__section--merger'></section>
      <section className='footer__section--info'>
        <div>
          <section className='footer__section--links'>
            <a>
              <p>Contact Me · kai.jauregi@proton.me</p>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/jauregiazcue/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/jauregiazcue">
                <i class="fa-brands fa-square-github"></i>
              </a>
          </section>
         
          <hr />
          <p>© Kai Jauregi Azcue. All rights reserved.</p>
        </div>

      </section>

    </footer>
  );
}

export default Footer; 