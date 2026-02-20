// app/api/chat/route.ts - Enhanced version
import { NextRequest } from 'next/server';
import ollama from 'ollama';

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'llama3.2' } = await req.json(); // Allow model to be passed from frontend
    
    console.log(`Using model: ${model}`);

    const response = await ollama.chat({
      model: model,
      messages: messages,
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