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
            <div className={`flex flex-col ${mobileMenuVisible ? ' h-screen overflow-hidden' : 'min-h-screen'}`}>
                {/* <Alert preview={preview} /> */}
                <main className={`${mobileMenuVisible ? '' : 'flex-1'} flex flex-col`}>
                    <Head>
                        <title>{pageTitle}</title>
                        <link
                            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'
                            rel='stylesheet'
                        />
                        {headChildren}
                    </Head>
                    {/* <div className='flex-1 flex flex-col'> */}
                    <div className={`flex flex-row ${mobileMenuVisible ? 'h-screen overflow-hidden' : 'flex-1 '}`}>
                        {router.isFallback ? (
                            <p>Loading…</p>
                        ) : (
                            <>
                                <div
                                    className={`${
                                        mobileMenuVisible ? 'flex absolute left-0 inset-y-0' : 'hidden'
                                    } md:flex md:relative`}
                                >
                                    <Sidebar />
                                </div>
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
                    {/* </div> */}
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
