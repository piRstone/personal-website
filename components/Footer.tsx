import React, { FC } from 'react'

const Footer: FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full py-4">
            <div className="max-w-screen-lg mx-auto">
                <span className="text-sm text-gray-500">
                    ©Pierre Lavalley {currentYear} - Tous droits réservés
                </span>
            </div>
        </footer>
    )
}

export default Footer
