import Head from 'next/head'
import classNames from 'classnames';

import { TopBar, Footer } from '@/components';

interface MainLayoutProps {
    titlePage: string;
    isOpenSearch?: boolean;
    isContainer?: boolean;
    relative?: boolean;
    children: React.ReactNode;
}

export const MainLayout = ({ children, titlePage, isOpenSearch = false, isContainer = false, relative = false }: MainLayoutProps) => {
    return (
        <>
            <Head>
                <title>Modulag</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <TopBar/>
                <div className={classNames({ ['pt-16']: relative }) + ' mx-auto max-w-full px-4 py-6 sm:px-8 sm:py-8 lg:px-10'}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {titlePage}
                    </h2>
                    { isContainer ? 
                        <div className="mx-auto max-w-3xl">
                            {children}
                        </div>
                    : <> { children } </> }
                 </div>
                 <Footer/>
            </main>
        </>
    )
}