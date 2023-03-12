import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import AuthLayout from '@/layouts/Auth'
import { Button } from '@/components';

export default function ResetPassPage() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required()
        }),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log('VALID', formValue)
        }
    })
    return (
    <AuthLayout title='Recupera tu contraseña' description='Ingresa tu correo para recuperar tu contraseña'>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
            
            <div>
                <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">
                    Correo
                </label>
                <div className="mt-2">
                    <input
                        id='email'
                        name='email'
                        placeholder='Introduce tu correo'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    Si tienes una cuenta {' '}
                    <Link href="/auth/sign-in" className="font-medium text-orange-600 hover:text-orange-500">
                        inicia sesión {' '}
                    </Link>
                    o crea una {' '}
                    <Link href="/auth/sign-up" className="font-medium text-orange-600 hover:text-orange-500">
                        cuenta
                    </Link>
                </div>
            </div>

            <Button text='Recuperar contraseña' type='submit' loading={formik.isSubmitting} />
        </form>
    </AuthLayout>
)}