import FooterStyles from './footer-styles.module.css'

const Footer = () => {
    return (
        <footer className={`flex justify-center border-t`}>
            <div
                className={`${FooterStyles['footer-content']} flex-1 flex flex-col md:flex-row items-center py-6`}
            >
                <div className='flex-1 flex flex-col items-center mb-4 md:mb-0'>
                    <h5 className='mb-2 text-lg text-white tracking-tighter leading-tight text-center md:w-1/2'>
                        2020 © UniPro Foodservice, Inc.
                        <br />
                        All Rights Reserved.
                    </h5>
                    <a href={`mailto:marketing@greatmenusstarthere.com`} className='mx-3 hover:underline text-white'>
                        Contact Us
                    </a>
                </div>
                <div className='flex-1 flex flex-col md:flex-row justify-center items-center md:px-4 md:w-1/2'>
                    <img src={'/assets/footer-logo.png'} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
