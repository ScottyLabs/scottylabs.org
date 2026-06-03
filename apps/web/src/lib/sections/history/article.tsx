import { ExternalLink } from "lucide-react";
import type { ArticleBlock } from "../../data/history";

export const HistoryArticle: React.FC<{ article: ArticleBlock }> = ({
  article,
}) => {
  const display = article.title ?? article.url;
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        color: "#819AFF",
        textDecoration: "none",
        fontFamily: "Satoshi, sans-serif",
        fontSize: "14px",
        wordBreak: "break-all",
      }}
    >
      <ExternalLink size={14} style={{ flexShrink: 0 }} />
      <span>{display}</span>
    </a>
  );
};
