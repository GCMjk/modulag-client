import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Auth } from '@/api'
import AuthLayout from '@/layouts/Auth'
import { Button } from '@/components'

const auth = new Auth();

export default function SignUpPage() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required()
        }),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {

                await auth.register(formValue);
                router.push('/auth/sign-in');

            } catch (error) {
                console.error(error);
            }
        }
    })
    return (
    <AuthLayout title='Registro' description='Ingrese sus datos para crear una cuenta'>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor='firstname' className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre
                </label>
                <div className="mt-2">
                    <input
                        id='firstname'
                        name='firstname'
                        placeholder='Introduce tu nombre'
                        type='text'
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor='lastname' className="block text-sm font-medium leading-6 text-gray-900">
                    Apellidos
                </label>
                <div className="mt-2">
                    <input
                        id='lastname'
                        name='lastname'
                        placeholder='Introduce tus apellidos'
                        type='text'
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor='username' className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre de usuario
                </label>
                <div className="mt-2">
                    <input
                        id='username'
                        name='username'
                        placeholder='Introduce un nombre de usuario'
                        type='text'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] placeholder:ml-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

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
                    <Link href="/auth/sign-in" className="font-medium text-orange-600 hover:text-orange-500">
                        Atrás
                    </Link>
                </div>
            </div>

            <Button text='Registrar' type='submit' loading={formik.isSubmitting} />
        </form>
    </AuthLayout>
)}