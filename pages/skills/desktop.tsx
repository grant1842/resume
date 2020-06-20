import { useRouter } from 'next/router'
import Layout from '../../components/layout'

import Container from '../../components/container'

const Desktop = () => {
    const router = useRouter()

    return (
        <Layout pageTitle={'Desktop Skills'}>
            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <div>
                            <p>skills - desktop</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Desktop
