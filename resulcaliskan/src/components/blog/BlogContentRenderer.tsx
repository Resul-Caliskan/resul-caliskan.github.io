import React from 'react';
import ReactMarkdown from 'react-markdown';
import { slugifyHeader } from '../../services/blogRepository';

interface BlogContentRendererProps {
  content: string;
}

export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ content }) => {
  return (
    <article className="blog-markdown-content">
      <ReactMarkdown
        components={{
          h2: ({ children, ...props }) => {
            const text = React.Children.toArray(children).join('');
            const id = slugifyHeader(text);
            return (
              <h2 id={id} className="blog-heading-2" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const text = React.Children.toArray(children).join('');
            const id = slugifyHeader(text);
            return (
              <h3 id={id} className="blog-heading-3" {...props}>
                {children}
              </h3>
            );
          },
          blockquote: ({ children, ...props }) => (
            <blockquote className="blog-blockquote" {...props}>
              {children}
            </blockquote>
          ),
          a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                className="blog-link"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
              </a>
            );
          },
          ul: ({ children, ...props }) => (
            <ul className="blog-ul" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="blog-ol" {...props}>
              {children}
            </ol>
          ),
          code: ({ className, children, ...props }) => (
            <code className="blog-inline-code" {...props}>
              {children}
            </code>
          ),
          pre: ({ children, ...props }) => (
            <pre className="blog-pre-code" {...props}>
              {children}
            </pre>
          ),
          p: ({ children, ...props }) => (
            <p className="blog-paragraph" {...props}>
              {children}
            </p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
