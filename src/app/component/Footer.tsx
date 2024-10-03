import style from '@/app/style/mainPage.module.css'
export default function Footer() {
    return (
        <>
            <footer className={style.footerBody}>
                {/* <div> */}
                    <div className={style.footerSection}>
                        <div className={style.footerSectionItem}>
                            <h2 className={style.sectionTitle}>Customer Services</h2>
                            <div >
                                <button>Help Center</button>
                            </div>
                            <div>
                                <button>Money Refund</button>
                            </div>
                            <div>
                                <button>Terms and Condition Policy</button>
                            </div>
                            <div>
                                <button>Cancellation Policy</button>
                            </div>
                            <div>
                                <button>Privacy Policy</button>
                            </div>
                        </div>
                        <div className={style.footerSectionItem}>
                            <h2 className={style.sectionTitle}>About</h2>
                            <div>
                                <button>Our History</button>
                            </div>

                            <div>
                                <button>Contact Us</button>
                            </div>
                        </div>
                        <div>
                            <h2 className={style.sectionTitle}>Follow Us</h2>
                        </div>
                    </div>
                {/* </div> */}
                <hr />

                <h5 className={style.heading5}>Copyright @ shopforcows.com</h5>

            </footer>
        </>
    )
}