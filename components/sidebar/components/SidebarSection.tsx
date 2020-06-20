import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
}

const SidebarSection = ({ children, title }: Props) => {
    return (
        <div className={'flex flex-col items-start my-3'}>
            {title && <h3 className={'font-normal'}>{title}</h3>}
            <div className={`flex flex-col ${title ? 'ml-2' : ''}`}>{children}</div>
        </div>
    )
}

export default SidebarSection
