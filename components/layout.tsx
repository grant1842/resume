import Footer from './footer'
import Meta from './meta'
import Head from 'next/head'
import Sidebar from './sidebar/Sidebar'
import PageContent from './PageContent'
import { useRouter } from 'next/router'
import { useState, MouseEvent } from 'react'

type Props = {
    children?: React.ReactNode
    headerTitle?: string
    headChildren?: React.ReactNode
}

const Layout = ({ children, headChildren, headerTitle = 'Grant Fullen - React Portfolio' }: Props) => {
    const router = useRouter()

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const toggleMobileMenu = (e: MouseEvent) => {
        setMobileMenuVisible(!mobileMenuVisible)
    }

    return (
        <>
            <Meta />
            <main className={`flex-1 flex flex-col ${mobileMenuVisible ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
                <Head>
                    <title>Grant Fullen - Portfolio</title>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'
                        rel='stylesheet'
                    />
                    {headChildren}
                </Head>
                <div className={`flex-1 flex flex-row relative ${mobileMenuVisible ? 'h-screen' : ''}`}>
                    {router.isFallback ? (
                        <p>Loading…</p>
                    ) : (
                        <>
                            <Sidebar mobileMenuVisible={mobileMenuVisible} />
                            <PageContent title={headerTitle} onMobileMenuToggle={toggleMobileMenu}>
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
