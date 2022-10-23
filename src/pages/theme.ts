import { APIContext } from "astro";

export async function post({ params, request }: APIContext) {
  const theme = new URL(request.url).searchParams.get("t");
  return new Response(null, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `theme=${theme}`,
    },
  });
}
