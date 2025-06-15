import style from './Home.module.scss'
import heroImage from '@/assets/images/photo-01.jpg'

const Home = () => {
  const experienceCount = Math.floor(
    (Date.now() - new Date('2016-02-08').getTime()) / (1000 * 60 * 60 * 24 * 365)
  )

  return (
    <main>
      {/* Hero Section */}
      <section className={`is-light-colored ${style.withPhoto}`}>
        <div className={style.MainJumbotron}>
          <div className={style.flex1}>
            <div className={style.content}>
              <h1>
                Hi, I'm <span>Jewel</span>
              </h1>
              <p className="mb-l">
                Experience Designer based in Kochi, Kerala. Design IT since 2016.
              </p>
              <div className={style.actions}>
                <button type="button" className="btn btn-solid btn-primary">
                  <span className='letter'>Get CV</span>
                </button>
                <button type="button" className="btn btn-clear">
                  <span className='letter'>Connect</span>
                </button>
              </div>
            </div>
          </div>
          <div className={`${style.flex1} ${style.right}`}>
            <img src={heroImage} alt="Preview of Jewel Michael" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="container">
          <article className={style.about}>
            <div className={style.left}>
              <hgroup>
                <span className="section_intro">Nice to meet you here!</span>
                <div className={style.profile_basic}>
                  <div className={style.profile_name}>Jewel Michael</div>
                  <div className={style.profile_role}>Web designer & Developer</div>
                </div>
              </hgroup>
              <button type="button" className="btn btn-clear">Got a Project?</button>
            </div>
            <div className={style.right}>
              <p>
                Hello there! My name is{' '}
                <span className="text-highlight">Jewel Michael</span>. I am a web designer & developer, and I'm very passionate and dedicated to my work.
              </p>
              <p>
                With {experienceCount}+ years experience as a professional UI Designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
              </p>
              <div className={style.profile_highlights}>
                <div className={style.profile_highlight}>
                  <span className={style.profile_highlight_title}>Email</span>
                  <p>jeweltmichael@gmail.com</p>
                </div>
                <div className={style.profile_highlight}>
                  <span className={style.profile_highlight_title}>Phone</span>
                  <p>+91 9037 3637 92</p>
                </div>
              </div>
            </div>
          </article>

          <article className={`about display-flex align-items-stretch justify-content-center ${style.highlights}`}>
            {[{
              title: 'years of experience',
              value: `${experienceCount}+`,
            }, {
              title: 'projects completed',
              value: '22',
            }, {
              title: 'happy clients',
              value: '30+',
            }].map((item, idx) => (
              <div className={style.highlight_item} key={idx}>
                <span className="font-display font-bold">{item.value}</span>
                <h3>{item.title}</h3>
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`is-primary-colored ${style.experience}`}>
        <div className="container">
          <hgroup>
            <div className="section_intro">EXPERIENCE</div>
            <h2>Everything about me!</h2>
          </hgroup>
          <div className={`flexCards cards column2 ${style.cards}`}>
            {[
              { role: 'Analyst', company: 'Factweavers', years: '2021 - present' },
              { role: 'UI Developer', company: 'Global infonet', years: '2019 - 2021' },
              { role: 'UI Developer', company: '2Hatslogic', years: '2018 - 2019' },
              { role: 'UI Developer', company: 'Veristics', years: '2016 - 2018' },
            ].map((job, idx) => (
              <div className="flexItem" key={idx}>
                <div className={`carditem ${style.carditem}`}>
                  <header className="display-flex justify-content-between mb-s lh-1">
                    <div className="subtitle flex0">{job.role}</div>
                    <div className="subtitle text-secondary">{job.years}</div>
                  </header>
                  <h3 className="text-primary">{job.company}</h3>
                  <p>Website development is the process of building, programming, coding and maintaining websites and web applications.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <hgroup>
            <div className="section_intro">services</div>
            <h2>My Services</h2>
          </hgroup>
          <div className="flexCards cards card-outline column3 noShrink">
            {[1, 2, 3, 4, 5].map((n) => (
              <div className="flexItem" key={n}>
                <div className="carditem">
                  <header>
                    <div className="lh-1 mb-s text-black-lightest">{`0${n}`}</div>
                    <div className="fw-semibold mb-base">Web Design</div>
                  </header>
                  <p className="textEllipsis my-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem necessitatibus asperiores exercitationem odit...
                  </p>
                  <a href="/">read more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home