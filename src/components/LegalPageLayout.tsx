import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LegalPageLayoutProps {
  content: string;
}

export default function LegalPageLayout({ content }: LegalPageLayoutProps) {
  return (
    <main className="bg-background-light py-16" id="main-content">
      <div className="max-w-3xl mx-auto px-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="font-display italic text-text-main text-3xl md:text-4xl mb-8 pb-4 border-b border-border-soft">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-semibold text-text-main text-base mt-10 mb-3 border-t border-border-soft pt-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-semibold text-text-main text-sm mt-6 mb-2">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-1 mb-4 text-text-secondary text-sm">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="space-y-1 mb-4 text-text-secondary text-sm list-decimal list-inside">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                <span>{children}</span>
              </li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:underline underline-offset-2"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-text-main">{children}</strong>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-primary pl-4 italic text-text-secondary my-4">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-border-soft text-xs">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => <thead className="border-b border-border-soft">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr className="border-b border-border-soft">{children}</tr>,
            th: ({ children }) => (
              <th className="px-4 py-2 text-left text-xs font-semibold text-text-main uppercase tracking-wider">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 text-xs text-text-secondary">{children}</td>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
