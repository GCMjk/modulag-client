import Link from 'next/link'
import AuthLayout from '@/layouts/Auth'
import { Input, Button } from '@/components'

export default function SignUpPage() {
    return (
    <AuthLayout title='Registro' description='Ingrese sus datos para crear una cuenta'>
        <form className="space-y-6">

            <Input
                id='name'
                name='Nombre'
                placeholder='Introduce tu nombre'
                type='text'
            />
            <Input
                id='lastname'
                name='Apellidos'
                placeholder='Introduce tus apellidos'
                type='text'
            />
            <Input
                id='username'
                name='Nombre de usuario'
                placeholder='Introduce tu nombre de usuario'
                type='text'
            />
            <Input
                id='email'
                name='Correo'
                placeholder='Introduce tu correo'
                type='email'
            />
            <Input
                id='password'
                name='Contraseña'
                placeholder='Introduce tu contraseña'
                type='password'
            />

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link href="./sign-in" className="font-medium text-orange-600 hover:text-orange-500">
                        Atrás
                    </Link>
                </div>
            </div>

            <Button text='Registrar' type='submit' />
        </form>
    </AuthLayout>
)}