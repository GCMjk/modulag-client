import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { MainLayout } from '@/layouts'
import { Product } from '@/api'
import { ViewOfProduct } from '@/components'
import { IViewProduct } from '@/interfaces';

const iProduct = new Product();

export default function ProductPage () {
    const { query } = useRouter()
    const [product, setProduct] = useState({
        images: [{
            id: 0,
            name: '',
            src: '',
            alt: ''
        }],
        details: {
            name: '',
            description: '',
            price: '$ 0.00',
            rating: 1,
            colors: [{
                name: '',
                bgColor: 'bg-[#fff]',
                selectedColor: 'ring-[#fff]'
            }],
            details: [{
                name: '',
                items: ['']
            }],
            available: false
        }
    })
    console.log('product', product)
    useEffect(() => {
        (async () => {
            try {
                const response = await iProduct.getOne(`${query.id}`);
                const data = response.data.attributes;
                setProduct({
                    images: data.images.data.map(({ id, attributes }: {id: number, attributes: any}) => {
                        return {
                            id,
                            name: attributes.name,
                            alt: attributes.name,
                            src: attributes.url
                        }
                    }),
                    details: {
                        name: data.title,
                        description: data.summary,
                        price: `$ ${data.price}`,
                        rating: 1,
                        colors: data.colors.map(({ name, hex }: { name: string, hex: string; }) => {
                            return {
                                name,
                                bgColor: `bg-[#${hex}]`,
                                selectedColor: `ring-[#${hex}]`
                            }
                        }),
                        details: [{
                            name: 'Características',
                            items: [
                                `Alto: ${data.height} cm`,
                                `Ancho: ${data.width} cm`,
                                `Largo: ${data.length} cm`,
                                `Volumen: ${data.volume} L`,
                                `Material: ${data.material}`
                            ]
                        }],
                        available: data.available
                    }
                })
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <MainLayout titlePage='Producto'>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <ViewOfProduct product={product as IViewProduct} />
            </div>
        </MainLayout>
    )
}