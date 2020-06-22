import { useRouter, NextRouter } from 'next/router'
import Layout from '../../components/layout'

import Container from '../../components/container'

const SkillsIndex = () => {
    const router: NextRouter = useRouter()

    return (
        <Layout headerTitle={'Skills'}>
            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <div>
                            <p>skills page</p>
                        </div>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default SkillsIndex
