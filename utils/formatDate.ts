function formatDate(date: string, locale = 'fr-FR') {
    const options = { day: '2-digit', month: 'long', year: 'numeric' } as const
    return new Date(date).toLocaleDateString(locale, options)
}

export default formatDate
