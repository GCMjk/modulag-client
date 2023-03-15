import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MainLayout } from '@/layouts'
import { Category } from '@/api'

const categoryCtrl = new Category();

export default function CategoriesPage() {
    const [category, setCategory] = useState([{
        name: '',
        description: '',
        imageSrc: '',
        imageAlt: '',
        href: ''
    }])

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryCtrl.getAll();
                const category = response.data.map(({ attributes }: any) => {
                    return {
                        name: attributes.title,
                        description: attributes.description,
                        imageSrc: attributes.photo.data.attributes.url,
                        imageAlt: attributes.photo.data.attributes.hash,
                        href: 'category/' + attributes.slug,
                    }
                });
                setCategory(category)
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <MainLayout titlePage='Categorías'>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    {category.map((category: any) => (
                        <div key={category.name} className="group relative mb-6">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={category.imageSrc}
                                    alt={category.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <Link href={category.href}>
                                    <span className="absolute inset-0" />
                                    {category.name}
                                </Link>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
        </MainLayout>
    )
}