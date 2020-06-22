import { useRouter, NextRouter } from 'next/router'
import Layout from '../components/layout'

import Container from '../components/container'

const Projects = () => {
    const router: NextRouter = useRouter()

    return (
        <Layout headerTitle={'Projects'}>
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
