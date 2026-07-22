import './App.css';
import cvPdfUrl from './CV_Fabricio_Gonzalez.pdf';

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function App() {
  const profile = {
    name: 'Fabricio González Cerdas',
    role: 'Computer Engineering Student • Software + Hardware Design',
    headlineTop: 'Hi — welcome to my portfolio!',
    headline:
      'I build reliable software and design digital hardware systems, from low-level architecture to data-driven applications.',
    location: 'Guadalupe, Cartago, Costa Rica',
    email: 'fabriglez.contact@gmail.com',
    residence: 'Costa Rica',
    city: 'Guadalupe, Cartago',
    age: '22',
    links: {
      github:   'https://github.com/Fabbbri',
      linkedin: 'https://www.linkedin.com/in/fabricio-gonz%C3%A1lez-cerdas-312844374',
      cv:       cvPdfUrl,
    },
    about:
      "I’m a Computer Engineering student at Instituto Tecnológico de Costa Rica (expected graduation: 2028). I enjoy building solutions that connect software and hardware, with strong interests in computer architecture, digital design, and data-driven applications. I’m also passionate about software development, especially creating scalable applications, APIs, and systems that solve real-world problems. I’m currently looking for internship opportunities where I can contribute to engineering teams working on embedded systems, security, cloud computing, data platforms, and modern software development.",

    stats: [
      { label: 'Main Focus',  value: 'HW/SW Systems'              },
      { label: 'Top Stack',   value: 'C++ · Python · SV' },
      { label: 'Dashboards',  value: 'Grafana'                    },
      { label: 'Cloud',       value: 'Azure (Basics)'             },
    ],

    languages: [
      { label: 'Spanish (Native)', value: 100 },
      { label: 'English (B2)',     value: 80  },
    ],

    skills: [
      { label: 'Systems Programming (C/C++)',         value: 85 },
      { label: 'Python (automation / data)',          value: 80 },
      { label: 'Digital Design (SystemVerilog/VHDL)', value: 78 },
      { label: 'Databases (SQL / NoSQL)',             value: 70 },
      { label: 'Dashboards & Monitoring (Grafana)',   value: 68 },
      { label: 'Cloud Fundamentals (Azure)',          value: 55 },
    ],

    expertise: [
      {
        title: 'Computer Architecture & Digital Design',
        description:
          'Designed an ARM-based processor in SystemVerilog and integrated a VGA driver. Comfortable with low-level concepts: ISA, memory hierarchy, and hardware/software co-design.',
      },
      {
        title: 'Software Engineering & Data Structures',
        description:
          'Hands-on experience building C++ projects with advanced data structures and algorithms, focusing on correctness, performance, and clean code.',
      },
      {
        title: 'Data & Observability',
        description:
          'Build database-backed applications and dashboards to visualize metrics and performance. Interested in security telemetry and data-driven control validation.',
      },
    ],

    projects: [
      {
        title: 'ARM Processor Design with VGA Driver',
        description:
          'Designed and implemented a custom ARM-based processor in SystemVerilog, including a VGA driver. Executed an assembly application on the designed hardware, integrating digital design with low-level software.',
        stack: ['SystemVerilog', 'Computer Architecture', 'VGA', 'Assembly'],
        repo: 'https://github.com/Fabbbri',
        demo: '',
      },
      {
        title: 'F1 Garage Simulator (Web + Databases + Grafana)',
        description:
          'Developed a web-based simulator for managing and maintaining Formula 1 races. Implemented database-backed data management and integrated Grafana dashboards to visualize performance statistics and system metrics.',
        stack: ['JavaScript', 'Databases', 'SQL', 'Grafana'],
        repo: 'https://github.com/Fabbbri',
        demo: '',
      },
      {
        title: 'Eigenvalue-Based PCA (Numerical Analysis)',
        description:
          'Applied eigenvalue/eigenvector techniques to implement Principal Component Analysis for dimensionality reduction, highlighting its relevance to AI and data analysis workflows.',
        stack: ['Python', 'Linear Algebra', 'PCA', 'Numerical Methods'],
        repo: 'https://github.com/Fabbbri',
        demo: '',
      },
      {
        title: 'RAID Storage Application',
        description:
          'Created a file storage application implementing RAID levels to ensure redundancy and fault tolerance, applying concepts of data management and system reliability.',
        stack: ['C++', 'File Systems', 'RAID', 'Reliability'],
        repo: 'https://github.com/Fabbbri',
        demo: '',
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
      <a className="SkipLink" href="#content">Skip to content</a>

      <div className="Layout">

        {/* ── Sidebar ──────────────────────────────── */}
        <aside className="Sidebar" aria-label="Profile">
          <div className="SidebarCard">

            <div className="ProfileRow">
              <div className="Avatar" aria-hidden="true">{initials || 'FG'}</div>
              <div>
                <div className="ProfileName">{profile.name}</div>
                <div className="ProfileRole">{profile.role}</div>
              </div>
            </div>

            <div className="Divider" />

            <dl className="KeyValues" aria-label="Basic info">
              <div className="KeyValue"><dt>Residence</dt><dd>{profile.residence}</dd></div>
              <div className="KeyValue"><dt>City</dt><dd>{profile.city}</dd></div>
              <div className="KeyValue"><dt>Age</dt><dd>{profile.age}</dd></div>
            </dl>

            <div className="Divider" />

            <div className="Block">
              <div className="BlockTitle">Languages</div>
              <div className="MiniGrid">
                {profile.languages.map((lang) => (
                  <div key={lang.label} className="MiniStat">
                    <div className="MiniStatValue">{lang.value}%</div>
                    <div className="MiniStatLabel">{lang.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Divider" />

            <div className="Block">
              <div className="BlockTitle">Skills</div>
              <div className="Bars" aria-label="Skills">
                {profile.skills.map((skill) => (
                  <div key={skill.label} className="Bar">
                    <div className="BarTop">
                      <span>{skill.label}</span>
                      <span className="Muted">{skill.value}%</span>
                    </div>
                    <div
                      className="BarTrack"
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.label}
                    >
                      <div className="BarFill" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Divider" />

            <div className="Actions ActionsSidebar">
              <a className="Button" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <GitHubIcon className="ButtonIcon" />
              </a>
              {profile.links.linkedin && (
                <a className="Button" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <LinkedInIcon className="ButtonIcon" />
                </a>
              )}
              {profile.links.cv && (
                <a className="Button ButtonPrimary" href={profile.links.cv} target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              )}
            </div>

          </div>
        </aside>

        {/* ── Main ─────────────────────────────────── */}
        <main id="content" className="Content" role="main">

          <header className="Topbar" aria-label="Navigation">
            <nav className="Nav" aria-label="Sections">
              <a className="NavLink" href="#about">About</a>
              <a className="NavLink" href="#expertise">Expertise</a>
              <a className="NavLink" href="#projects">Projects</a>
              <a className="NavLink" href="#resume">Resume</a>
              <a className="NavLink" href="#contact">Contact</a>
            </nav>
          </header>

          <section className="HeroCard" aria-label="Introduction">
            <div className="HeroLeft">
              <div className="HeroTitle">{profile.headlineTop}</div>
              <div className="HeroSubtitle">
                {profile.headline}{' '}
                <span className="Accent">{profile.location}</span>
              </div>
            </div>
            <div className="HeroRight" aria-hidden="true">
              <div className="HeroBadge">{initials || 'FG'}</div>
            </div>
          </section>

          <section className="Stats" aria-label="Quick stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="Stat">
                <div className="StatValue">{s.value}</div>
                <div className="StatLabel">{s.label}</div>
              </div>
            ))}
          </section>

          <section id="about" className="Section">
            <h2 className="SectionTitle">About</h2>
            <p className="Paragraph">{profile.about}</p>
          </section>

          <section id="expertise" className="Section">
            <h2 className="SectionTitle">My Expertise</h2>
            <div className="Cards3">
              {profile.expertise.map((item) => (
                <article key={item.title} className="Card">
                  <h3 className="CardTitle">{item.title}</h3>
                  <p className="Paragraph">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="Section">
            <h2 className="SectionTitle">Projects</h2>
            <div className="Grid">
              {profile.projects.map((project) => (
                <article key={project.title} className="Card">
                  <h3 className="CardTitle">{project.title}</h3>
                  <p className="Paragraph">{project.description}</p>
                  <p className="Meta">
                    <span className="MetaLabel">Stack:</span>{' '}
                    {project.stack.join(' · ')}
                  </p>
                  <div className="Actions ActionsCompact">
                    {project.repo && (
                      <a className="Button" href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                    )}
                    {project.demo && (
                      <a className="Button" href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="resume" className="Section">
            <h2 className="SectionTitle">Resume</h2>
            <div className="Card PdfCard">
              <iframe className="PdfFrame" src={cvPdfUrl} title="Resume PDF" />
              <p className="Meta PdfFallback">
                If the PDF doesn&apos;t display,{' '}
                <a className="InlineLink" href={cvPdfUrl} target="_blank" rel="noopener noreferrer">open it in a new tab</a>.
              </p>
            </div>
          </section>

          <section id="contact" className="Section">
            <h2 className="SectionTitle">Contact</h2>
            <p className="Paragraph">
              If you&apos;d like to get in touch, email me at{' '}
              <a className="InlineLink" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          </section>

          <footer className="Footer">
            <div className="FooterInner">
              <span>&copy; {new Date().getFullYear()} {profile.name}</span>
              <a className="FooterLink" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                {profile.links.github.replace('https://', '')}
              </a>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default App;
