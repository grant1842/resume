import Container from '../components/container'
import Layout from '../components/layout'
import { faGlobe, faMobile, faDesktop, faFolder, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import HomeFeatureCard from '../components/pages/home/HomeFeatureCard'

type Props = {}

const Index = ({}: Props) => {
    const router = useRouter()

    return (
        <>
            <Layout headerTitle={'Dashboard'}>
                <Container>
                    {router.isFallback ? (
                        <p>Loading…</p>
                    ) : (
                        <>
                            <div className={'mb-8'}>
                                <h2 className={'text-gray-900'}>Welcome to My Portfolio</h2>
                                <p className={'text-gray-900'}>
                                    I built this website using React. It is served by server-side rendering via{' '}
                                    <span>
                                        <a href='https://nextjs.org' target={'_blank'} className={'text-orange-500'}>
                                            Next.js
                                        </a>
                                    </span>
                                    . The styling is applied using{' '}
                                    <span>
                                        <a
                                            href='https://tailwindcss.com'
                                            target={'_blank'}
                                            className={'text-orange-500'}
                                        >
                                            Tailwind CSS
                                        </a>
                                    </span>
                                </p>

                                <p className={'text-gray-900'}>
                                    This site is hosted at{' '}
                                    <span>
                                        <a href='https://vercel.com' target={'_blank'} className={'text-orange-500'}>
                                            Vercel
                                        </a>
                                    </span>
                                    , and is updated when I pull the updated code into the master branch on my GitHub
                                    account. The public repository can be found{' '}
                                    <span>
                                        <a
                                            href='https://github.com/grant1842/resume'
                                            target={'_blank'}
                                            className={'text-orange-500'}
                                        >
                                            here
                                        </a>
                                    </span>
                                    .
                                </p>
                            </div>

                            <div className={'text-center sm:text-left mb-2'}>
                                <p className={'mb-0'}>You can browse my skills here:</p>
                            </div>

                            <div className='sm:grid sm:grid-cols-3 sm:col-gap-6 mb-6'>
                                <HomeFeatureCard icon={faGlobe} text={'Web'} link={'/skills/web'} />
                                <HomeFeatureCard icon={faDesktop} text={'Desktop'} link={'/skills/desktop'} />
                                <HomeFeatureCard icon={faMobile} text={'Mobile'} link={'/skills/mobile'} />
                            </div>

                            <div className={'text-center sm:text-left mb-2'}>
                                <p className={'mb-0'}>You can also:</p>
                            </div>

                            <div className={'sm:grid sm:grid-cols-2 sm:col-gap-6 mb-6'}>
                                <HomeFeatureCard icon={faFolder} text={'View My Projects'} link={'/projects'} />
                                <HomeFeatureCard icon={faIdCard} text={'Contact Me'} link={'/contact'} />
                            </div>
                        </>
                    )}
                </Container>
            </Layout>
        </>
    )
}

export default Index
