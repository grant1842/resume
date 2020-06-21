import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MouseEvent } from 'react'

type Props = {
    title: string
    onMobileMenuToggle: (e: MouseEvent) => void
}

const Header = ({ title, onMobileMenuToggle }: Props) => {
    return (
        <div className={`bg-gray-primary md:bg-blue-primary flex items-center`}>
            <header className={`flex-1 flex flex-col md:flex-row items-between py-4 mx-6`}>
                <Link href='/'>
                    <a className={'text-white'}>
                        <h1 className='text-white font-normal tracking-tighter leading-tight md:pr-8'>{title}</h1>
                    </a>
                </Link>
            </header>
            <div className={'text-white cursor-pointer md:hidden mr-6 my-4'} onClick={onMobileMenuToggle}>
                <FontAwesomeIcon size={'2x'} icon={faBars} />
            </div>
        </div>
    )
}

export default Header
