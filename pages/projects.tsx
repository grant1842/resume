import { useRouter } from 'next/router'
import Layout from '../components/layout'

import Container from '../components/container'

const Projects = () => {
    const router = useRouter()

    return (
        <Layout pageTitle={'Projects'}>
            <Container>
                {router.isFallback ? (
                    <h3>Loading…</h3>
                ) : (
                    <>
                        <div>
                            <p>projects</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default Projects
