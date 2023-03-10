import Link from 'next/link'
import AuthLayout from '@/layouts/Auth'
import { Input, Button } from '@/components';

export default function ResetPassPage() {
    return (
    <AuthLayout title='Recupera tu contraseña' description='Ingresa tu correo para recuperar tu contraseña'>
        <form className="space-y-6">
            
            <Input
                id='email'
                name='Correo'
                placeholder='Introduce tu correo'
                type='email'
            />

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    Si tienes una cuenta {' '}
                    <Link href="./sign-in" className="font-medium text-orange-600 hover:text-orange-500">
                        inicia sesión {' '}
                    </Link>
                    o crea una {' '}
                    <Link href="./sign-up" className="font-medium text-orange-600 hover:text-orange-500">
                        cuenta
                    </Link>
                </div>
            </div>

            <Button text='Recuperar contraseña' type='submit' />
        </form>
    </AuthLayout>
)}