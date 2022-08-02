import { APIContext } from "astro";

export async function post({ params, request }: APIContext) {
  const theme = new URL(request.url).searchParams.get("t");
  const t = request.body;
  console.log(t)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `theme=${theme}`,
    },
  });
}
