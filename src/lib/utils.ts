export const WA_NUMBER = "5511999999999";
export const WA_MESSAGE = "Olá, gostaria de agendar uma consulta!";
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export function getShareUrl(platform: string, url: string, title: string) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  switch (platform) {
    case "whatsapp":
      return `https://wa.me/?text=${encodedTitle}%20${encoded}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encoded}`;
    default:
      return "#";
  }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
