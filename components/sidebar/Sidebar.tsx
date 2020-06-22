import SidebarItem from './components/SidebarItem'
import SidebarSection from './components/SidebarSection'
import Avatar from '../avatar'
import { NextRouter, useRouter } from 'next/router'

type Props = {
    mobileMenuVisible: boolean
}

const Sidebar = ({ mobileMenuVisible }: Props) => {
    const router: NextRouter = useRouter()
    const route: string = router.route
    console.log('Sidebar -> route', route)

    return (
        <nav
            className={`${
                mobileMenuVisible ? 'absolute h-screen' : 'hidden md:flex flex-col'
            } items-start bg-gray-primary shadow-2xl font-light text-white px-6 py-4`}
        >
            <SidebarSection>
                <Avatar name={'Grant Fullen'} picture={'/assets/profile-picture.jpg'} />
            </SidebarSection>
            <SidebarSection>
                <SidebarItem url={'/'} text={'Home'} active={route === '/'} />
                <SidebarItem url={'/skills'} text={'Skills'} active={route === '/skills'} />
                <SidebarItem url={'/projects'} text={'Projects'} active={route === '/projects'} />
                <SidebarItem url={'/contact'} text={'Contact Me'} active={route === '/contact'} />
            </SidebarSection>
        </nav>
    )
}

export default Sidebar
