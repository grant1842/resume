import Container from '../components/container'
import Layout from '../components/layout'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMobile, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

type Props = {}

const Index = ({}: Props) => {
    const router = useRouter()

    return (
        <>
            <Layout pageTitle={'Dashboard'}>
                <Container>
                    {router.isFallback ? (
                        <p>Loading…</p>
                    ) : (
                        <>
                            <div className={'mb-6'}>
                                <h2 className={'text-gray-900'}>Welcome</h2>
                                <p className={'text-gray-900'}>
                                    I created this website to represent my resume. It is built using React and
                                    server-side rendering, via{' '}
                                    <span>
                                        <a href='https://nextjs.org' target={'_blank'} className={'text-orange-500'}>
                                            Next.js
                                        </a>
                                    </span>
                                    . The styling is done via{' '}
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
                                            Vercel.com
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

                            <div className={'mb-2'}>
                                <p className={'mb-0'}>You can browse my skills here:</p>
                            </div>

                            <div className='md:grid md:grid-cols-3 md:col-gap-6 mb-6'>
                                <div className='flex-1'>
                                    <Card>
                                        <p>
                                            <FontAwesomeIcon icon={faGlobe} /> Web
                                        </p>
                                    </Card>
                                </div>
                                <div className='flex-1'>
                                    <Card>
                                        <p>
                                            <FontAwesomeIcon icon={faMobile} /> Mobile
                                        </p>
                                    </Card>
                                </div>
                                <div className='flex-1'>
                                    <Card>
                                        <p>
                                            <FontAwesomeIcon icon={faDesktop} /> Desktop
                                        </p>
                                    </Card>
                                </div>
                            </div>

                            <div className={'mb-2'}>
                                <p className={'mb-0'}>Check out my projects:</p>
                            </div>

                            <div className={'mb-6'}>
                                <Card>
                                    <p>Projects</p>
                                </Card>
                            </div>
                        </>
                    )}
                </Container>
            </Layout>
        </>
    )
}

export default Index
