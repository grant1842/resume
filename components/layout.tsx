import Footer from './footer'
import Meta from './meta'
import Head from 'next/head'
import Sidebar from './sidebar/Sidebar'
import PageContent from './PageContent'
import { useRouter } from 'next/router'

type Props = {
    children?: React.ReactNode
    pageTitle?: string
    headChildren?: React.ReactNode
}

const Layout = ({ children, headChildren, pageTitle = 'Grant Fullen - React Resume' }: Props) => {
    const router = useRouter()

    return (
        <>
            <Meta />
            <div className='flex flex-col min-h-screen'>
                {/* <Alert preview={preview} /> */}
                <main className={'flex-1 flex flex-col'}>
                    <Head>
                        <title>{pageTitle}</title>
                        <link
                            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap'
                            rel='stylesheet'
                        />
                        {headChildren}
                    </Head>
                    <div className='flex-1 flex flex-col'>
                        <div className='flex-1 flex flex-col md:flex-row'>
                            {router.isFallback ? (
                                <p>Loading…</p>
                            ) : (
                                <>
                                    <Sidebar />
                                    <PageContent title={pageTitle}>{children}</PageContent>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
