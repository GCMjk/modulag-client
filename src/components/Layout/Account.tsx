import { useRouter } from 'next/router'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/hooks'

export const Account = () => {
    const router = useRouter()
    const { user } = useAuth()

    const goToLogIn = () => router.push('/auth/sign-in')
    const goToAccount = () => router.push('/account')

    const goToCart = () => {
        if(!user) goToLogIn()
        else router.push('/cart')
    }

    return (
        <div className="flex flex-1 items-center justify-end">
            <div className="flex items-center lg:ml-8">

                {/* User */}
                <button onClick={user ? goToAccount : goToLogIn} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Cuenta</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                {/* Cart */}
                <div className="flow-root">
                    <button onClick={goToCart} className="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                    </button>
                </div>

            </div>
        </div>
    )
}