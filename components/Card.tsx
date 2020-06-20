import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

const Card = ({ children }: Props) => {
    return <div className={'bg-white rounded-md shadow-md p-4 mb-4'}>{children}</div>
}

export default Card
