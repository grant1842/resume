import Link from 'next/link'

type Props = {
    url: string
    text: string
}

const SidebarItem = ({ url, text }: Props) => {
    return (
        <Link href={url}>
            <a className={'text-lg hover:bg-white hover:rounded-lg hover:text-blue-primary px-2 py-1'}>{text}</a>
        </Link>
    )
}

export default SidebarItem
