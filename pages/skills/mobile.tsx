import { useRouter } from 'next/router'
import Layout from '../../components/layout'

import Container from '../../components/container'

const Mobile = () => {
    const router = useRouter()

    return (
        <Layout headerTitle={'Mobile Skills'}>
            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <div>
                            <p>skills - mobile</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Mobile
