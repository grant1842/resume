import { ReactNode } from 'react'

type Props = {
    className?: string
    children?: ReactNode
}

const Card = ({ className = '', children }: Props) => {
    return <div className={`bg-white rounded-md shadow-md ${className}`}>{children}</div>
}

export default Card
