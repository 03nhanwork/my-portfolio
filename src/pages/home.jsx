import { useEffect, useRef } from 'react';
import './home.css'
import SideNav from '../components/sideNav'


import uciLogo from '../images/uci-logo.png'
import headshot from '../images/headshot.png';
import badmintonImg from '../images/myBrokenZZ.jpg';
import f1Img from '../images/f1max.png';


function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="home-page-container">
      <header className="top-nav-header">
        <SideNav />
      </header>
      <main className="main-body">
        <section className="sec1 scroll-section" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="sec1-image-container">
            <img src={headshot} alt="Nhan Nguyen headshot" className="headshot-image" />
          </div>
          <div className="sec1-content">
            <div className='name'>
              <div className='name-box'>
                <p>My name is</p>
                <h1>Nhan Nguyen</h1>
              </div>
            </div>
            <div className='age'>
              <div className='age-box'>
                <p>Jan 28, 2003</p>
                <h1>22</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='sec2 scroll-section' ref={(el) => (sectionsRef.current[1] = el)}>
          <div className='grad'>
            <p>University of California, Irvine</p>
            <h1>Bachelor's of Science</h1>
            <h1>Informtics</h1>
            <p>June 2025</p>
          </div>
          <div className='logo'>
            <img src={uciLogo} alt="UCI Logo" width="200px" />
          </div>
        </section>
        <section className='sec3 scroll-section' ref={(el) => (sectionsRef.current[2] = el)}>
          <div className='about'>
            <h1>About me</h1>
            <p>
              Hi, I'm Nhan! When I'm not behind a screen, you can find me strategizing with friends in online games or staying active on the badminton court.
              My passion for building things isn't just digital—I love the hands-on challenge of assembling high-performance PCs and meticulously crafting custom keyboards.
              I'm also fueled by a love for motorsports, especially the precision engineering of Formula 1, and I'm always eager to get my hands dirty exploring the world of car mechanics.
            </p>
          </div>
          <div className='hobbies'>
            <div className="hobby-images">
              <div className='badminton'>
                <img src={badmintonImg} alt="badminton" width="200px" />
              </div>
              <div className='f1'>
                <img src={f1Img} alt="f1Max" width="200px" />
              </div>
            </div>
          </div>
          <div className="contact-box">
            <h1>Contact</h1>
            <div className='inner-contact'>
              <p>(657) 257 - 9286</p>
              <p>03nhanwork@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


export default Home