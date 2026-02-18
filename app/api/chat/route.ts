export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2:3b",
        prompt: message,
        stream: false,
      }),
    });

    const text = await response.text();
    console.log("OLLAMA RAW RESPONSE:", text);

    const data = JSON.parse(text);

    return Response.json({ reply: data.response });
  } catch (err) {
    console.error("OLLAMA ERROR:", err);
    return Response.json({ reply: "Backend error" }, { status: 500 });
  }
}
