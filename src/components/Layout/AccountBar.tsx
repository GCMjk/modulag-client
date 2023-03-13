import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth';

export const AccountBar = () => {
    const { user } = useAuth();

    return (
        <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <div className="hidden lg:block lg:flex-1"></div>

                <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                    Obtenga envío gratuito en pedidos superiores a $1,000 MXN
                </p>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    { !user ? <>
                        <Link href="/auth/sign-up" className="text-sm font-medium text-white hover:text-gray-100">
                            Crear cuenta
                        </Link>
                        <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                        <Link href="/auth/sign-in" className="text-sm font-medium text-white hover:text-gray-100">
                            Iniciar sesión
                        </Link>
                    </> : null }
                </div>
                
            </div>
        </div>
    )
}