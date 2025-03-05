import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PIXELBOT!',
  description: 'O melhor Bot de todos os tempos! rsrs >.>',
  author: 'Pixelon K3321',
  keywords: 'bot, pixelbot, inteligência artificial',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="icon" href="/favicon.ico" />
        {/* Opcional: Adicionar uma fonte externa ou ícone */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} layout-body`}>
        <header className="layout-header">
          <h1 className="header-title">PIXELBOT!</h1>
          <p className="header-subtitle">O melhor Bot de todos os tempos! 😄</p>
        </header>
        <main className="layout-main">{children}</main>
        <footer className="layout-footer">
          <p>- Feito por <span className="footer-author">{metadata.author}</span></p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
          </div>
        </footer>
      </body>
    </html>
  );
}