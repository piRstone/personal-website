import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: FC = () => {
    const { pathname } = useRouter()

    const blogActive = pathname.split('/')[1] === 'blog' ? 'underline' : ''

    return (
        <header className="py-4 sm:sticky top-0 bg-white dark:bg-gray-900 text-black dark:text-gray-300 z-50">
            <div className="max-w-screen-md mx-auto px-4 md:px-0">
                <div className="flex flex-1 flex-row items-center justify-between">
                    <Link href="/">
                        <a className="uppercase font-black tracking-wider text-lg">
                            Pierre Lavalley
                        </a>
                    </Link>
                    <nav className="font-bold">
                        <ul className="flex flex-row items-center">
                            <li className="py-1 px-3">
                                <Link href="/blog">
                                    <a className={blogActive}>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
