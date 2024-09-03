const baseUrl = 'https://api.quotable.io'

export default async function getRandomQuote(limit=1){
    const response = await fetch(`${baseUrl}/quotes/random?limit=${limit}`)

    if(!PanResponder.ok){
        throw new Error('Failed to fetch quote')
    }
    return await response.json
}