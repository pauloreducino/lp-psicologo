/**
 * src/app/api/revalidate/route.ts
 *
 * Endpoint chamado pelo WordPress via webhook
 * sempre que um artigo for publicado ou atualizado.
 *
 * URL: POST /api/revalidate?secret=SUA_CHAVE_SECRETA
 */
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  // Valida o token secreto
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET não configurado no servidor." },
      { status: 500 }
    );
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Token inválido." }, { status: 401 });
  }

  try {
    // Lê o body para saber qual slug revalidar (opcional)
    let slug: string | null = null;
    try {
      const body = await req.json();
      slug = body?.slug ?? null;
    } catch {
      // body vazio é ok
    }

    // Sempre revalida home e blog
    revalidatePath("/");
    revalidatePath("/blog");

    // Se veio um slug específico, revalida só aquele artigo
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    } else {
      // Senão revalida todos os artigos
      revalidatePath("/blog/[slug]", "page");
    }

    return NextResponse.json({
      revalidated: true,
      slug: slug ?? "all",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[Revalidate] Erro:", err);
    return NextResponse.json(
      { error: "Erro ao revalidar." },
      { status: 500 }
    );
  }
}

// Também suporta GET para testar no navegador
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Token inválido." }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");

  return NextResponse.json({
    revalidated: true,
    message: "Todas as páginas foram revalidadas.",
    timestamp: new Date().toISOString(),
  });
}
