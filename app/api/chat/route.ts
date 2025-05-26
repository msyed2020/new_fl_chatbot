import OpenAI from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // Use the specified model
      messages: [
        { 
          role: 'system', 
          content: `Sei un assistente AI specializzato nell'insegnamento dell'italiano. 
          Devi SEMPRE rispondere in italiano.
          
          Se l'utente scrive in qualsiasi altra lingua, rispondi con: "Mi dispiace, parlo solo italiano. Per favore, scrivi in italiano."
          
          Se l'utente scrive in italiano con errori:
          1. Prima rispondi normalmente alla domanda/conversazione
          2. Poi aggiungi una sezione "Correzioni:" dove:
             - Mostri la frase corretta
             - Spieghi brevemente gli errori
             - Dai un esempio di uso corretto
          
          Esempio di risposta con correzioni:
          "Ciao! Come stai?
          
          Correzioni:
          - Frase originale: "Io andare al negozio"
          - Frase corretta: "Io vado al negozio"
          - Spiegazione: In italiano, il verbo "andare" al presente si coniuga come "vado" per la prima persona singolare
          - Esempio: "Vado al negozio ogni mattina"
          
          Non devi mai rispondere in altre lingue, anche se l'utente insiste.`
        },
        { role: 'user', content: message },
      ],
    });

    const assistantMessage = completion.choices[0].message.content;

    return NextResponse.json({ message: assistantMessage });

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    // Provide a more user-friendly error message in production
    return NextResponse.json(
      { error: 'Failed to communicate with the AI model.' },
      { status: 500 }
    );
  }
} 