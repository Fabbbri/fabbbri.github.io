import { useState, useEffect, useRef } from 'react';
import './App.css';
import fondoImg  from './fondo.jpg';
import cvPdfUrl  from './CV_Fabricio_Gonzalez.pdf';

/* ── Icons ──────────────────────────────────────────────────── */
function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ExternalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Scroll hook ─────────────────────────────────────────────── */
function useScrolled(threshold) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > (threshold || 80));
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, [threshold]);
  return scrolled;
}

/* ── InView hook (scroll-reveal) ─────────────────────────────── */
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { setInView(entry.isIntersecting); },
      { threshold: 0.12, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return [ref, inView];
}

/* ── Animated section wrapper ────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`Reveal${inView ? ' Reveal--visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────── */
function App() {
  const scrolled = useScrolled(80);

  const profile = {
    name:        'Fabricio González Cerdas',
    role:        'Computer Engineering Student • Software + Hardware Design',
    eyebrow:     "Hello, I’m",
    tagline:     'I build reliable software and design digital hardware systems—from low-level architecture to data-driven applications.',
    location:    'Guadalupe, Cartago, Costa Rica',
    email:       'fabriglez.contact@gmail.com',
    residence:   'Costa Rica',
    city:        'Guadalupe, Cartago',
    age:         '21',
    links: {
      github:   'https://github.com/Fabbbri',
      linkedin: 'https://www.linkedin.com/in/fabriciogonzalezcerdas/',
      cv:       cvPdfUrl,
    },
    about:
      "I’m a Computer Engineering student at Instituto Tecnológico de Costa Rica (expected graduation: 2028). I enjoy building solutions that connect software and hardware, with strong interests in computer architecture, digital design, and data-driven applications. I’m also passionate about software development, especially creating scalable applications, APIs, and systems that solve real-world problems. I’m currently looking for internship opportunities where I can contribute to engineering teams working on embedded systems, security, cloud computing, data platforms, and modern software development.",

    info: [
      { label: 'Residence', value: 'Costa Rica'       },
      { label: 'City',      value: 'Guadalupe, Cartago' },
      { label: 'Age',       value: '21'               },
    ],

    languages: [
      { label: 'Spanish (Native)', value: 100 },
      { label: 'English (B2)',     value: 80  },
    ],

    skills: [
      { label: 'Systems Programming (C / C++)',        value: 85 },
      { label: 'Python (automation / data)',           value: 80 },
      { label: 'Digital Design (SystemVerilog/VHDL)',  value: 78 },
      { label: 'Databases (SQL / NoSQL)',              value: 70 },
      { label: 'Dashboards & Monitoring (Grafana)',    value: 68 },
      { label: 'Cloud Fundamentals (Azure)',           value: 55 },
    ],

    expertise: [
      {
        num: '01',
        title: 'Computer Architecture & Digital Design',
        description:
          'Designed an ARM-based processor in SystemVerilog and integrated a VGA driver. Comfortable with ISA, memory hierarchy, and hardware/software co-design.',
      },
      {
        num: '02',
        title: 'Software Engineering & Data Structures',
        description:
          'Hands-on experience building C++ projects using advanced data structures and algorithms—focusing on correctness, performance, and clean code.',
      },
      {
        num: '03',
        title: 'Data & Observability',
        description:
          'Build database-backed applications and dashboards to visualize metrics. Interested in security telemetry and data-driven control validation.',
      },
    ],

    projects: [
      {
        title: 'ARM Processor Design with VGA Driver',
        description:
          'Designed and implemented a custom ARM-based processor in SystemVerilog, including a VGA driver. Executed an assembly application on the designed hardware.',
        stack: ['SystemVerilog', 'Computer Architecture', 'VGA', 'Assembly'],
        repo: 'https://github.com/Fabbbri/FGonzalez_JZheng_JDiaz_JRodriguez_digital_design_lab_2025',
      },
      {
        title: 'F1 Garage Simulator',
        description:
          'Web-based simulator for managing Formula 1 races. Implemented database-backed data management and integrated Grafana dashboards to visualize performance statistics.',
        stack: ['JavaScript', 'Databases', 'SQL', 'Grafana'],
        repo: 'https://github.com/Fabbbri/F1GarageManager',
      },
    ],
  };

  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

  return (
    <div className="App">
      <a className="SkipLink" href="#main">Skip to content</a>

      {/* ── Navbar ── */}
      <nav className={`Navbar${scrolled ? ' Navbar--scrolled' : ''}`} aria-label="Main navigation">
        <a className="NavLogo" href="#hero" aria-label="Home">{initials}</a>
        <ul className="NavLinks">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact" className="NavCta">Contact</a></li>
        </ul>
      </nav>

      <main id="main">

        {/* ── Hero ── */}
        <section
          id="hero"
          className="Hero"
          style={{ backgroundImage: `url(${fondoImg})` }}
          aria-label="Introduction"
        >
          <div className="HeroOverlay" aria-hidden="true" />
          <div className="HeroContent HeroContent--animate">
            <p className="HeroEyebrow" style={{ animationDelay: '0.1s' }}>{profile.eyebrow}</p>
            <h1 className="HeroName" style={{ animationDelay: '0.25s' }}>{profile.name}</h1>
            <p className="HeroRole" style={{ animationDelay: '0.4s' }}>{profile.role}</p>
            <p className="HeroTagline" style={{ animationDelay: '0.55s' }}>{profile.tagline}</p>
            <div className="HeroActions" style={{ animationDelay: '0.7s' }}>
              <a href="#contact" className="HeroBtn">Get in touch</a>
              <a href="#projects" className="HeroBtnOutline">View projects</a>
            </div>
          </div>
          <div className="HeroScroll" aria-hidden="true">
            <span className="HeroScrollLine" />
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="Section">
          <div className="Container">
            <p className="SectionLabel">About me</p>
            <h2 className="SectionHeading">Who I am</h2>
            <div className="AboutGrid">
              <Reveal>
                <p className="Paragraph">{profile.about}</p>
                <div className="AboutActions">
                  <a className="Btn BtnPrimary" href={profile.links.cv} target="_blank" rel="noopener noreferrer">Download CV</a>
                  <a className="Btn" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="BtnIcon" /> GitHub
                  </a>
                  <a className="Btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="BtnIcon" /> LinkedIn
                  </a>
                </div>
              </Reveal>
              <div className="AboutSidebar">
                {profile.info.map((item) => (
                  <div key={item.label} className="InfoCard">
                    <span className="InfoCardLabel">{item.label}</span>
                    <span className="InfoCardValue">{item.value}</span>
                  </div>
                ))}
                <div className="InfoCard">
                  <span className="InfoCardLabel">Email</span>
                  <a className="InfoCardLink" href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="Section Section--alt">
          <div className="Container">
            <p className="SectionLabel">What I know</p>
            <h2 className="SectionHeading">Skills</h2>
            <div className="SkillsGrid">
              {profile.skills.map((skill, i) => (
                <Reveal key={skill.label} delay={i * 60}>
                <div className="SkillItem">
                  <div className="SkillHeader">
                    <span className="SkillLabel">{skill.label}</span>
                    <span className="SkillPct">{skill.value}%</span>
                  </div>
                  <div className="BarTrack" role="progressbar" aria-valuenow={skill.value} aria-valuemin={0} aria-valuemax={100} aria-label={skill.label}>
                    <div className="BarFill" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
            <div className="LangGrid">
              {profile.languages.map((lang) => (
                <div key={lang.label} className="LangCard">
                  <div className="LangValue">{lang.value}%</div>
                  <div className="LangLabel">{lang.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Expertise ── */}
        <section id="expertise" className="Section">
          <div className="Container">
            <p className="SectionLabel">What I do</p>
            <h2 className="SectionHeading">My expertise</h2>
            <div className="Cards3">
              {profile.expertise.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                <article className="ExpertiseCard">
                  <div className="ExpertiseNum">{item.num}</div>
                  <h3 className="ExpertiseTitle">{item.title}</h3>
                  <p className="Paragraph">{item.description}</p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="Section Section--alt">
          <div className="Container">
            <p className="SectionLabel">What I’ve built</p>
            <h2 className="SectionHeading">Projects</h2>
            <div className="ProjectsGrid">
              {profile.projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 100}>
                <article className="ProjectCard">
                  <h3 className="ProjectTitle">{project.title}</h3>
                  <p className="ProjectDesc">{project.description}</p>
                  <div className="ProjectStack">
                    {project.stack.map((tag) => (
                      <span key={tag} className="StackTag">{tag}</span>
                    ))}
                  </div>
                  <div className="ProjectLinks">
                    {project.repo && (
                      <a className="Btn" href={project.repo} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="BtnIcon" /> Repo <ExternalIcon className="BtnIcon" />
                      </a>
                    )}
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="ProjectsNote">
                Showing 2 featured projects.{' '}
                <a
                  className="InlineLink"
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View more on my GitHub profile
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Resume ── */}
        <section id="resume" className="Section">
          <div className="Container">
            <p className="SectionLabel">Download or view</p>
            <h2 className="SectionHeading">Resume</h2>
            <iframe className="PdfFrame" src={cvPdfUrl} title="Resume PDF" />
            <p className="PdfFallback">
              PDF not loading?{' '}
              <a className="InlineLink" href={cvPdfUrl} target="_blank" rel="noopener noreferrer">Open in a new tab</a>.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="Section Section--alt">
          <div className="Container">
            <p className="SectionLabel">Get in touch</p>
            <h2 className="SectionHeading">Contact</h2>
            <div className="ContactInner">
              <p className="Paragraph">
                I’m currently looking for internship opportunities. Whether you have a question or just want to say hi—my inbox is always open.
              </p>
              <a className="ContactEmail" href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="SocialLinks">
                <a className="Btn" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="BtnIcon" /> GitHub
                </a>
                <a className="Btn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="BtnIcon" /> LinkedIn
                </a>
                <a className="Btn BtnPrimary" href={profile.links.cv} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="Footer">
        <div className="FooterInner">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <a className="FooterLink" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            {profile.links.github.replace('https://', '')}
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
