import { useCallback, useEffect, useState } from "react";
import getRandomQuote from "../http/quoteManager";

export default function Quote(){
    const [quote, setQuote] = useState({
        content: 'It must be', 
        author: 'Turing'
    })
    // Pega a frase da API
    useEffect(async()=>{
        const quote = await getRandomQuote()
        console.log(quote[0])
        setQuote({
            content: quote[0].content, 
        author: quote[0].author
        })
    })

    return(
        <View> 
            <Text>{quote.content}</Text>
            <Text>{quote.author}</Text>
        </View>
    )
}
