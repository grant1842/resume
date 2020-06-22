import Link from 'next/link'

type Props = {
    url: string
    text: string
    active: boolean
}

const SidebarItem = ({ url, text, active }: Props) => {
    return (
        <Link href={url}>
            <a
                className={`font-normal text-lg hover:bg-white hover:rounded-lg border-blue-primary hover:text-blue-primary my-1 px-2 ${
                    active ? 'border-l-2' : ''
                }`}
            >
                {text}
            </a>
        </Link>
    )
}

export default SidebarItem
