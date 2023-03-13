import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
    lg?: boolean;
}

export const Logo = ({ lg = false }: LogoProps) => {
    return (
        <Link href="/" className={lg ? 'lg:hidden' : 'hidden lg:flex lg:flex-1 lg:items-center'}>
            <span className="sr-only">Modulag</span>
            <Image
                width={100}
                height={100}
                className="h-10 w-auto"
                src="/modulag.png"
                alt="Modulag"
            />
        </Link>
    )
}