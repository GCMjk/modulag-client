import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Auth } from '@/api'
import { useAuth } from '@/hooks'
import { AuthLayout } from '@/layouts'
import { Button } from '@/components'

const authCtrl = new Auth();

export default function SignInPage() {
    console.log(useAuth())
    const { logIn } = useAuth();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required(),
            password: Yup.string().required()
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authCtrl.logIn(formValue);
                logIn(response.jwt);
                router.push('/');
            } catch(error) {
                console.error(error);
            }
        }
    })
    return (
    <AuthLayout title='Inicio de sesion' description='Ingrese sus datos para iniciar sesión'>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor='identifier' className="block text-sm font-medium leading-6 text-gray-900">
                    Correo o nombre de usuario
                </label>
                <div className="mt-2">
                    <input
                        id='identifier'
                        name='identifier'
                        placeholder='Introduce tu correo o nombre de usuario'
                        type='text'
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor='password' className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                </label>
                <div className="mt-2">
                    <input
                        id='password'
                        name='password'
                        placeholder='Introduce una contraseña'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link href="/auth/reset-pass" className="font-medium text-orange-600 hover:text-orange-500">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
            </div>

            <Button text='Iniciar sesión' type='submit' loading={formik.isSubmitting} />

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    Crea una cuenta {' '}
                    <Link href="/auth/sign-up" className="font-medium text-orange-600 hover:text-orange-500">
                        aquí
                    </Link>
                </div>
            </div>
        </form>
    </AuthLayout>
)}
  
