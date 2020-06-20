import React from 'react'
import Card from '../../Card'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type Props = {
    icon: IconProp
    text: string
    link: string
}

const HomeFeatureCard = ({ icon, text, link }: Props) => {
    return (
        <div className='flex-1 mx-12 sm:mx-0 mb-6 sm:mb-0'>
            <Card className={'bg-light-gray-primary hover:bg-peach-primary text-gray-600 hover:text-white'}>
                <Link href={link}>
                    <div className={'cursor-pointer'}>
                        <a className={'p-4'}>
                            <div className={'flex flex-col items-center justify-center my-4'}>
                                <div className={'mb-3'}>
                                    <FontAwesomeIcon size={'3x'} icon={icon} />
                                </div>
                                <div>
                                    <p className={'mb-0'}>{text}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default HomeFeatureCard
