import { ReactNode, MouseEvent } from 'react'
import Header from './header'

type Props = {
    title: string
    onMobileMenuToggle: (e: MouseEvent) => void
    mobileMenuVisible: boolean
    children?: ReactNode
}

const PageContent = ({ title, onMobileMenuToggle, mobileMenuVisible, children }: Props) => {
    return (
        <div className={`${mobileMenuVisible ? 'h-screen flex flex-col' : 'flex-1 flex flex-col'}`}>
            <Header title={title} onMobileMenuToggle={onMobileMenuToggle} mobileMenuVisible={mobileMenuVisible} />
            <div className={'flex-1 flex flex-col bg-gray-100'}>{children}</div>
        </div>
    )
}

export default PageContent
