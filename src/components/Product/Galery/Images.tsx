import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { GaleryProps } from './galery.props'

export const Images = ({ image }: { image: GaleryProps }) => {
    const { id, name, src, alt } = image;
    return (
        <Tab.Panel key={id}>
            <Image
                height={1200}
                width={1200}
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-center sm:rounded-lg"
            />
        </Tab.Panel>
    )
}