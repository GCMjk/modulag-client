import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MainLayout } from '@/layouts'
import { Product } from '@/api'

const productCtrl = new Product();

export default function ProductsPage() {
    const [products, setProducts] = useState([{
        id: '',
        name: '',
        href: '',
        price: '',
        material: '',
        description: '',
        imageSrc: '',
        imageAlt: '',
        availableColors: [
            {
                name: '',
                colorBg: ''
            }
        ]
    }])

    console.log(products)

    useEffect(() => {
        (async () => {
            try {
                const response = await productCtrl.getAll();
                const product = response.data.map(({ id, attributes }: any) => {
                    return {
                        id,
                        name: attributes.title,
                        href: 'product/' + id,
                        price: '$ ' + attributes.price,
                        material: attributes.material,
                        description: attributes.summary,
                        imageSrc: attributes.cover.data.attributes.url,
                        imageAlt: attributes.summary,
                        availableColors: attributes.colors.map( ({ name, hex }: { name: string, hex: string }) => {
                            return { 
                                name,
                                colorBg: `bg-[#${hex}]`
                            }
                        })
                    }
                })
                setProducts(product)
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <MainLayout titlePage='Productos'>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                {products.map((product: any) => (
                    <div
                        key={product.id}
                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                            <Image
                                width={1000}
                                height={1000}
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                            />
                        </div>
                        <div className="flex flex-1 flex-col space-y-2 p-4">
                            <h3 className="text-sm font-medium text-gray-900">
                                <Link href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-500">
                                {product.description}
                            </p>
                            <div className="flex flex-1 flex-col justify-end">
                                <ul role="list" className="mt-auto flex items-center justify-center space-x-3 py-3">
                                    {product.availableColors.map((color: any) => (
                                        <li
                                            key={color.name}
                                            className="h-4 w-4 rounded-full border border-black border-opacity-10"
                                            style={{ backgroundColor: color.colorBg }}
                                        >
                                            <span className="sr-only"> {color.name} </span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic text-gray-500">{product.material}</p>
                                <p className="text-base font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </MainLayout>
    )
}