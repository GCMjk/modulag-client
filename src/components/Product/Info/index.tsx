import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { IViewProduct } from '@/interfaces';
import { Disclosure, RadioGroup } from "@headlessui/react";
import { useState } from "react";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const InfoProduct = ({ details }: { details: IViewProduct['details'] }) => {
    const {
        name,
        description,
        price,
        colors,
        details: characteristics,
        available
    } = details;
    const [selectedColor, setSelectedColor] = useState(colors[0])
    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {name}
            </h1>

            <div className="mt-3">
                <h2 className="sr-only">
                    Product information
                </h2>
                <p className="text-3xl tracking-tight text-gray-900">
                    {price}
                </p>
            </div>

            {/* Reviews
            <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={classNames(
                                product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
            </div> */}

            <div className="mt-6">
                <h3 className="sr-only">
                    Description
                </h3>

                <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>

            <form className="mt-6">
                {/* Colors */}
                {/* <div>
                    <h3 className="text-sm text-gray-600">
                        Colores
                    </h3>

                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                        <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                        <span className="flex items-center space-x-3">
                            {colors.map((color: any) => (
                                <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                        classNames(
                                        color.selectedColor,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                        )}
                                >
                                    <RadioGroup.Label as="span" className="sr-only">
                                        {' '}
                                        {color.name}{' '}
                                    </RadioGroup.Label>
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                        color.bgColor,
                                        ' h-8 w-8 rounded-full border border-black border-opacity-10'
                                        )}
                                    />
                                    </RadioGroup.Option>
                            ))}
                        </span>
                    </RadioGroup>
                </div> */}

                <div className="sm:flex-col1 mt-10 flex">
                    <button
                        disabled={!available}
                        type="submit"
                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full disabled:bg-gray-500 disabled:text-slate-100"
                    >
                        { available ? 'Añadir al carrito' : 'No disponible en linea' }
                    </button>

                    <button
                        disabled={!available}
                        type="button"
                        className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 disabled:opacity-25"
                    >
                        <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                        <span className="sr-only">Añadir a favoritos</span>
                    </button>
                </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                    Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                    {characteristics.map((detail: { name: string, items: Array<string> }) => (
                        <Disclosure as="div" key={detail.name}>
                            {({ open }) => (
                                <>
                                    <h3>
                                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                            <span
                                                className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                            >
                                                {detail.name}
                                            </span>
                                            <span className="ml-6 flex items-center">
                                                {open ? (
                                                    <MinusIcon
                                                        className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                        aria-hidden="true"
                                                    />
                                                    ) : (
                                                    <PlusIcon
                                                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                        <ul role="list">
                                            {detail.items.map((item: string) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </section>
        </div>
    )
}