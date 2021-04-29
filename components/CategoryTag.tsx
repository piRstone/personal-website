import Link from 'next/link'
import React, { FC } from 'react'
import { categories } from '../types'

type CategoryTagProps = {
    categoryName: string
}

const CategoryTag: FC<CategoryTagProps> = ({ categoryName }) => {
    const category = categories[categoryName]

    if (!category) return null

    return (
        <Link href={`/blog/categories/${category.slug}`}>
            <a
                className={`bg-gradient-to-r from-${category.colorFrom} to-${category.colorTo} text-${category.textColor} py-1 px-3 rounded-md font-bold`}
            >
                {category.name}
            </a>
        </Link>
    )
}

export default CategoryTag
