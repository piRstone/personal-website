import Link from 'next/link'
import React, { FC } from 'react'
import { categories } from '../types'

type CategoryTagProps = {
    className?: string
    categoryName: string
}

const CategoryTag: FC<CategoryTagProps> = ({ className, categoryName }) => {
    const category = categories[categoryName]

    if (!category) return null

    return (
        <div className={className}>
            <Link href={`/blog/categories/${category.slug}`} passHref legacyBehavior>
                <a
                    className={`bg-gradient-to-r from-${category.colorFrom} to-${category.colorTo} text-${category.textColor} py-2 px-3 rounded-md font-bold`}
                >
                    {category.name}
                </a>
            </Link>
        </div>
    )
}

export default CategoryTag
