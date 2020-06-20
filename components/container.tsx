import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const Container = ({ children }: Props) => {
    return <div className={'flex-1 p-8'}>{children}</div>
}

export default Container
