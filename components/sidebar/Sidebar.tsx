import SidebarItem from './components/SidebarItem'
import SidebarSection from './components/SidebarSection'
import Avatar from '../avatar'

type Props = {
    mobileMenuVisible: boolean
}

const Sidebar = ({ mobileMenuVisible }: Props) => {
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
                <SidebarItem url={'/'} text={'Dashboard'} />
            </SidebarSection>
            <SidebarSection title={'Skills'}>
                <SidebarItem url={'/skills/web'} text={'Web'} />
                <SidebarItem url={'/skills/mobile'} text={'Mobile'} />
                <SidebarItem url={'/skills/desktop'} text={'Desktop'} />
            </SidebarSection>
            <SidebarSection>
                <SidebarItem url={'/projects'} text={'Projects'} />
                <SidebarItem url={'/contact'} text={'Contact Me'} />
            </SidebarSection>
        </nav>
    )
}

export default Sidebar
