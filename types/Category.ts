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
        textColor: 'white',
        colorFrom: 'yellow-300',
        colorTo: 'yellow-500',
    },
    raspberry: {
        name: 'Raspberry Pi',
        slug: 'raspberry',
        textColor: 'white',
        colorFrom: 'red-500',
        colorTo: 'red-700',
    },
}

export default Category
