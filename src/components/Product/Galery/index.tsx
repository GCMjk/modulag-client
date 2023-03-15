import { Tab } from '@headlessui/react'

import { IViewProduct, IViewProductImage } from '@/interfaces';
import { Images } from './Images';
import { Selector } from './Selector';

export const GaleryProduct = ({ images }: { images: IViewProduct['images'] }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    { images.map( ( image: IViewProductImage ) => (
                        <Selector key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>

            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                { images.map( (image: IViewProductImage) => (
                    <Images key={image.id} image={image} />
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}