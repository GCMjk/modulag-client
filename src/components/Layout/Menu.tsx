import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Popover, Transition } from '@headlessui/react'
import { Category } from '@/api'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const categoryCtrl = new Category();

export const Menu = () => {
    const [category, setCategory] = useState([{
        name: '',
        href: '',
        imageSrc: '',
        imageAlt: '' 
    }])
    const navigation = {
        categories: [
            {
                name: 'Categorias',
                featured: category
            }
        ],
        pages: [
          { name: 'Productos', href: '/products' },
        ],
    }

    console.log(navigation)

    useEffect(() => {
      (async () => {
        try {
            const response = await categoryCtrl.getAll();
            const category = response.data.map(({ attributes }: any) => {
                return {
                    name: attributes.title,
                    href: 'category/' + attributes.slug,
                    imageSrc: attributes.photo.data.attributes.url,
                    imageAlt: attributes.photo.data.attributes.hash,
                }
            });
            setCategory(category)
        } catch (error) {
            console.log(error)
        }
      })()
    }, [])
    
    return(
        <div className="hidden h-full lg:flex">
            <Popover.Group className="inset-x-0 bottom-0 px-4">
                <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category:any) => (
                        <Popover key={category.name} className="flex">
                            {({ open }) => (
                                <>
                                    <div className="relative flex">
                                        <Popover.Button
                                            className={classNames(
                                            open
                                                ? 'border-indigo-600 text-indigo-600'
                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                            'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                            )}
                                        >
                                            {category.name}
                                        </Popover.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl px-8">
                                                    <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                                        {category.featured?.map((item:any) => (
                                                            <div key={item.name} className="group relative">
                                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                    <Image
                                                                        width={1000}
                                                                        height={1000}
                                                                        src={item.imageSrc}
                                                                        alt={item.imageAlt}
                                                                        className="object-cover object-center"
                                                                    />
                                                                </div>
                                                                <Link href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                    {item.name}
                                                                </Link>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Ver ahora
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                        <Link
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>
            </Popover.Group>
        </div>
    )
}