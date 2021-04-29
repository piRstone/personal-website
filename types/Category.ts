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
}

export default Category
