import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '@/hooks'

interface AuthLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function SignUpPage({ title, description, children }: AuthLayoutProps) {
    const { user } = useAuth();
    const router = useRouter();
    if(user){
        router.push('/')
        return null;
    }
    return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 border">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Link href="/">
                <Image
                    width={200}
                    height={200}
                    className="mx-auto h-20 w-auto"
                    src="/modulag.png"
                    alt="Modulag Ecommerce"
                />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                { title }
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                { description }
            </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                { children }
            </div>
        </div>
    </div>
)}