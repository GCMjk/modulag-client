import { useState } from 'react'

import {
  Bars3Icon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { Logo, Menu, Account, AccountBar } from "@/components"

export const TopBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
        {/* Mobile menu */}
        {/* <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex px-4 pt-5 pb-2">
                    <button
                        type="button"
                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    </div>

                    Links
                    <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                            <Tab
                            key={category.name}
                            className={({ selected }) =>
                                classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                )
                            }
                            >
                            {category.name}
                            </Tab>
                        ))}
                        </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured.map((item) => (
                                <div key={item.name} className="group relative">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                </div>
                                <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                    {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                    Shop now
                                </p>
                                </div>
                            ))}
                            </div>
                        </Tab.Panel>
                        ))}
                    </Tab.Panels>
                    </Tab.Group>

                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    {navigation.pages.map((page) => (
                        <div key={page.name} className="flow-root">
                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                            {page.name}
                        </a>
                        </div>
                    ))}
                    </div>

                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                        Create an account
                        </a>
                    </div>
                    <div className="flow-root">
                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                        Sign in
                        </a>
                    </div>
                    </div>
                    
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition.Root> */}

      <header className="relative">
        <nav aria-label="Top">
          
          {/* Account navigation */}
          <AccountBar/>

          {/* Menu navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  
                  <Logo/>

                  <Menu/>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  <Logo lg />

                  <Account/>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    )
}