import Footer from './footer'
import Meta from './meta'
import Head from 'next/head'
import Sidebar from './sidebar/Sidebar'
import PageContent from './PageContent'
import { useRouter } from 'next/router'
import { useState, MouseEvent } from 'react'

type Props = {
    children?: React.ReactNode
    pageTitle?: string
    headChildren?: React.ReactNode
}

const Layout = ({ children, headChildren, pageTitle = 'Grant Fullen - React Resume' }: Props) => {
    const router = useRouter()

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const toggleMobileMenu = (e: MouseEvent) => {
        setMobileMenuVisible(!mobileMenuVisible)
    }

    return (
        <>
            <Meta />
            <main className={`flex-1 flex flex-col ${mobileMenuVisible ? 'h-screen' : 'min-h-screen'}`}>
                {/* <main className={`${mobileMenuVisible ? 'flex flex-col' : 'flex-1 flex flex-col min-h-screen'} `}> */}
                <Head>
                    <title>{pageTitle}</title>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'
                        rel='stylesheet'
                    />
                    {headChildren}
                </Head>
                {/* <div className='flex-1 flex flex-col'> */}
                <div
                    className={`flex-1 flex flex-row relative ${mobileMenuVisible ? 'h-screen' : ''}`}
                    // className={`${
                    //     mobileMenuVisible ? 'relative flex flex-col h-screen' : 'flex-1 flex flex-row'
                    // }`}
                >
                    {router.isFallback ? (
                        <p>Loading…</p>
                    ) : (
                        <>
                            {/* <div
                                className={`flex flex-col ${mobileMenuVisible ? 'absolute left-0 h-screen' : 'hidden'}`}
                                // className={`${
                                //     mobileMenuVisible ? 'flex flex-col absolute left-0 inset-y-0' : 'hidden'
                                // } `}
                            > */}
                            <Sidebar mobileMenuVisible={mobileMenuVisible} />
                            {/* </div> */}
                            <PageContent
                                title={pageTitle}
                                onMobileMenuToggle={toggleMobileMenu}
                                mobileMenuVisible={mobileMenuVisible}
                            >
                                {children}
                            </PageContent>
                        </>
                    )}
                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
