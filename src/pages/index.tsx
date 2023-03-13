import Link from 'next/link'

import { useAuth } from '@/hooks'
import { MainLayout } from '@/layouts'

export default function Home() {
  const {user, logOut} = useAuth();
  return (
    <MainLayout>
      { user ? ( 
        <div> 
          Hola
          <button onClick={logOut}>Cerrar sesión</button>
        </div> 
      ) : ( 
        <div>
          <Link href='/auth/sign-in'>
            Iniciar sesión
          </Link>
        </div>
      ) }
    </MainLayout>
  )
}
