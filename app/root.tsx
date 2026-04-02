import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";

import "./app.css";
import { AlertCircle, Home } from "lucide-react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const status = is404 ? "404" : "Error";
  const message = is404 ? "ページが見つかりませんでした。" : "予期しないエラーが発生しました。";
  const details = is404
    ? "お探しのページは見つかりませんでした。URLが間違っているか、ページが移動または削除された可能性があります。"
    : "予期しないエラーが発生しました。時間をおいて再度お試しください。";

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8">
        <AlertCircle className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tighter mb-4">{status}</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{message}</h2>
      <p className="text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">{details}</p>
      <a
        href="/"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-sm"
      >
        <Home className="w-5 h-5" /> トップページに戻る
      </a>
    </main>
  );
}
