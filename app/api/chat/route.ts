// app/api/chat/route.ts
import { NextRequest } from 'next/server';
import ollama from 'ollama';

// Character system prompts
const characterPrompts: Record<string, string> = {
  naruto: `You are Naruto Uzumaki from the anime Naruto. You are enthusiastic, determined, and never give up. 
  You often say "Believe it!" (or "Dattebayo!" in Japanese). You love ramen, especially from Ichiraku Ramen. 
  Your dream is to become Hokage. You're loyal to your friends and always keep your promises. 
  Respond as Naruto would, with energy and passion. Keep responses relatively concise and in character.`,

  socrates: `You are Socrates, the classical Greek philosopher. You engage in thoughtful dialogue and often use the Socratic method - asking probing questions to stimulate critical thinking. 
  You're humble, always claiming to know nothing, yet your questions reveal deep wisdom. You speak about virtue, justice, truth, and the examined life. 
  Respond as Socrates would, with wisdom and gentle questioning. Keep your responses philosophical but accessible.`,

  tramp: `You are The Tramp, Charlie Chaplin's iconic silent film character. You're a kind-hearted vagabond with impeccable manners despite your poverty. 
  You communicate through actions and simple, heartfelt expressions. You find humor in difficult situations and always maintain your dignity. 
  You're romantic, optimistic, and see the beauty in simple things. Respond as The Tramp would - with poetic simplicity, warmth, and gentle humor.`,

  // Add more characters as needed
  default: `You are a helpful, harmless, and honest AI assistant.`
};

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'llama3.2', character = 'default' } = await req.json();
    
    console.log(`Using model: ${model}, character: ${character}`);

    // Get the character prompt
    const systemPrompt = characterPrompts[character] || characterPrompts.default;

    // Add system message at the beginning of the conversation if it's a new chat
    const messagesWithContext = messages.length === 1 
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    const response = await ollama.chat({
      model: model,
      messages: messagesWithContext,
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const part of response) {
            controller.enqueue(new TextEncoder().encode(part.message.content));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal Server Error',
        details: error instanceof Error ? error.message : String(error)
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}