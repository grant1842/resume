import Link from 'next/link'

type Props = {
    title: string
}

const Header = ({ title }: Props) => {
    return (
        <div className={`bg-blue-primary flex justify-center`}>
            <header className={`py-4 mx-6 flex-col md:flex-row flex flex-1 items-center`}>
                <Link href='/'>
                    <a className={'text-white'}>
                        <h1 className='text-white font-normal tracking-tighter leading-tight md:pr-8'>{title}</h1>
                    </a>
                </Link>
            </header>
        </div>
    )
}

export default Header
