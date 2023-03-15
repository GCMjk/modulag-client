import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { GaleryProps } from './galery.props'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const Selector = ({ image }: { image: GaleryProps }) => {
    const { id, name, src, alt } = image;
    return (
        <Tab
            key={id}
            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
        >
            {({ selected }) => (
                <>
                    <span className="sr-only">
                        {name}
                    </span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image
                            height={1200}
                            width={1200}
                            src={src}
                            alt={alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </span>
                    <span
                        className={classNames(
                        selected ? 'ring-indigo-500' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                        )}
                        aria-hidden="true"
                    />
                </>
            )}
        </Tab>
    )
}