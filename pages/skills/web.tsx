import { useRouter } from 'next/router'
import Layout from '../../components/layout'

import Container from '../../components/container'

const Web = () => {
    const router = useRouter()

    return (
        <Layout headerTitle={'Web Skills'}>
            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <div>
                            <p>skills - web</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Web
