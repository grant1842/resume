import { useRouter } from 'next/router'
import Layout from '../components/layout'

import Container from '../components/container'

const Contact = () => {
    const router = useRouter()

    return (
        <Layout headerTitle={'Contact Me'}>
            <Container>
                {router.isFallback ? (
                    <h3>Loading…</h3>
                ) : (
                    <>
                        <div>
                            <p>contact</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Contact
