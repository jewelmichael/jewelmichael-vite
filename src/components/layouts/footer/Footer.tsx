import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <>
      <section className={`${styles.Wrapper}`}>
        <span className='fw-light'>Let's Create Something</span>
        <div className={`${styles.withButton} gap-column-base`}>
          <span className='text-black-xlightest'>Together</span>
          <span className="line flex1"></span>
          <button type="button" className="btn btn-clear">Connect</button>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className='mb-none'>© {new Date().getFullYear()} Jewel Michael. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer