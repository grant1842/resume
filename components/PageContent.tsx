import { ReactNode } from 'react'
import Header from './header'

type Props = {
    title: string
    children?: ReactNode
}

const PageContent = ({ title, children }: Props) => {
    return (
        <div className={'flex-1 flex flex-col'}>
            <Header title={title} />
            <div className={'flex-1 flex flex-col bg-gray-100'}>{children}</div>
        </div>
    )
}

export default PageContent
