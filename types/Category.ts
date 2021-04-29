type Category = {
    name: string
    slug: string
    textColor: string
    colorFrom: string
    colorTo: string
}

export const categories: Record<string, Category> = {
    domotique: {
        name: 'Domotique',
        slug: 'domotique',
        textColor: 'yellow-600',
        colorFrom: 'yellow-300',
        colorTo: 'yellow-400',
    },
}

export default Category
