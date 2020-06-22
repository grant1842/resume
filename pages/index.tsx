import Container from '../components/container'
import Layout from '../components/layout'
import { faGlobe, faMobile, faDesktop, faFolder, faIdCard, faBrain } from '@fortawesome/free-solid-svg-icons'
import { useRouter, NextRouter } from 'next/router'
import HomeFeatureCard from '../components/pages/home/HomeFeatureCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const Index = ({}: Props) => {
    const router: NextRouter = useRouter()

    return (
        <>
            <Layout headerTitle={'Welcome to My Portfolio'}>
                <Container>
                    {router.isFallback ? (
                        <p>Loading…</p>
                    ) : (
                        <>
                            <h2 className={'text-center font-bold text-gray-900'}>
                                I built this website with the following technologies:
                            </h2>

                            <div className='p-0'>
                                <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 my-6'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <a href='https://reactjs.org' target={'_blank'}>
                                            <div className='flex items-center justify-center rounded-full w-24 h-24 bg-gray-900 mb-3 cursor-pointer hover:bg-gray-700'>
                                                <FontAwesomeIcon
                                                    className={'flex text-white'}
                                                    size={'3x'}
                                                    icon={faGlobe}
                                                />
                                            </div>
                                            <div>
                                                <p className={'text-center font-medium mb-0'}>React</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <a href='https://nextjs.org' target={'_blank'}>
                                            <div className='flex items-center justify-center rounded-full w-24 h-24 bg-blue-primary mb-3 cursor-pointer hover:bg-gray-700'>
                                                <FontAwesomeIcon
                                                    className={'flex text-white'}
                                                    size={'3x'}
                                                    icon={faGlobe}
                                                />
                                            </div>
                                            <div>
                                                <p className={'text-center font-medium mb-0'}>Next.js</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <a href='https://tailwindcss.com' target={'_blank'}>
                                            <div className='flex items-center justify-center rounded-full w-24 h-24 bg-peach-primary mb-3 cursor-pointer hover:bg-gray-700'>
                                                <FontAwesomeIcon
                                                    className={'flex text-white'}
                                                    size={'3x'}
                                                    icon={faGlobe}
                                                />
                                            </div>
                                            <div>
                                                <p className={'text-center font-medium mb-0'}>TailwindCSS</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <a href='https://github.com' target={'_blank'}>
                                            <div className='flex items-center justify-center rounded-full w-24 h-24 bg-gray-600 mb-3 cursor-pointer hover:bg-gray-700'>
                                                <FontAwesomeIcon
                                                    className={'flex text-white'}
                                                    size={'3x'}
                                                    icon={faGlobe}
                                                />
                                            </div>
                                            <div>
                                                <p className={'text-center font-medium mb-0'}>GitHub</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className={'text-gray-900'}>
                                The frontend library of choice was React. It is served by server-side rendering via{' '}
                                <span>
                                    <a
                                        href='https://nextjs.org'
                                        target={'_blank'}
                                        className={'text-peach-primary font-medium'}
                                    >
                                        Next.js
                                    </a>
                                </span>
                                . The styling is applied using{' '}
                                <span>
                                    <a
                                        href='https://tailwindcss.com'
                                        target={'_blank'}
                                        className={'text-peach-primary font-medium'}
                                    >
                                        Tailwind CSS
                                    </a>
                                </span>
                                .
                            </p>

                            <p className={'text-gray-900'}>
                                This site is hosted at{' '}
                                <span>
                                    <a
                                        href='https://vercel.com'
                                        target={'_blank'}
                                        className={'text-peach-primary font-medium'}
                                    >
                                        Vercel
                                    </a>
                                </span>
                                , and is recompiled when I pull the updated code into the master branch on my GitHub
                                account. The public repository can be found{' '}
                                <span>
                                    <a
                                        href='https://github.com/grant1842/resume'
                                        target={'_blank'}
                                        className={'text-peach-primary font-medium'}
                                    >
                                        here
                                    </a>
                                </span>
                                .
                            </p>

                            <div className='sm:grid sm:grid-cols-3 sm:gap-6 mb-6'>
                                <HomeFeatureCard icon={faBrain} text={'Skills'} link={'/skills'} />
                                <HomeFeatureCard icon={faFolder} text={'Projects'} link={'/projects'} />
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
