import Link from 'next/link'
import AuthLayout from '@/layouts/Auth'
import { Input, Button } from '@/components'

export default function SignInPage() {
    return (
    <AuthLayout title='Inicio de sesion' description='Ingrese sus datos para iniciar sesión'>
        <form className="space-y-6">

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
                type='email'
            />

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link href="./reset-pass" className="font-medium text-orange-600 hover:text-orange-500">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
            </div>

            <Button text='Iniciar sesión' type='submit' />

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    Crea una cuenta {' '}
                    <Link href="./sign-up" className="font-medium text-orange-600 hover:text-orange-500">
                        aquí
                    </Link>
                </div>
            </div>
        </form>
    </AuthLayout>
)}
  
