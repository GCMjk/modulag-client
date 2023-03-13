import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MainLayout } from '@/layouts'
import { Category } from '@/api'

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
]

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
        <MainLayout>
            <div className="mx-auto max-w-2xl py-2 sm:py-24 lg:max-w-none lg:py-10">
                <h2 className="text-2xl font-bold text-gray-900">
                    Categorías
                </h2>

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
            </div>
        </MainLayout>
    )
}