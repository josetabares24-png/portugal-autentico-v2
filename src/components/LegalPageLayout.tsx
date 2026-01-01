import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LegalPageLayoutProps {
  content: string;
}

export default function LegalPageLayout({ content }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8 prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="ml-4">{children}</li>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-800 underline"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-50">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
              ),
              tr: ({ children }) => <tr>{children}</tr>,
              th: ({ children }) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 text-sm text-gray-700">{children}</td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
