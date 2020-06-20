import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
}

const SidebarSection = ({ children, title }: Props) => {
    return (
        <div className={'flex flex-col items-start my-3'}>
            {title && <h3 className={'font-normal font-sans px-2 py-1'}>{title}</h3>}
            <div className={`flex flex-col items-start ${title ? 'ml-2' : ''}`}>{children}</div>
        </div>
    )
}

export default SidebarSection
