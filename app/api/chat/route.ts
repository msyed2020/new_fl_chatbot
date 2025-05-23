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
        { role: 'system', content: 'You are a helpful AI assistant.' },
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