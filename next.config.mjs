/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'export' только для продакшен-сборки (Render) — там backend раздаётся
  // отдельно. В dev-режиме output не задаём, иначе Next.js отключает
  // rewrites() ниже, и voice-assistant перестаёт открываться на том же порту.
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  // По умолчанию Next.js обрезает завершающий слэш (/voice-assistant/ -> /voice-assistant),
  // из-за чего относительные пути к style.css/app.js в index.html резолвятся неверно.
  // trailingSlash: true оставляет URL с "/", и это же рекомендуемая настройка для static export.
  trailingSlash: true,
  // Локальная разработка: проксируем дауыстық көмекші (FastAPI, port 8422)
  // на тот же порт, что и Next.js, чтобы всё открывалось по одной ссылке.
  // Не действует в статическом экспорте (output: 'export') — там backend
  // должен обслуживаться отдельно.
  async rewrites() {
    return [
      { source: '/voice-assistant/:path*', destination: 'http://localhost:8422/:path*' },
      { source: '/api/:path*', destination: 'http://localhost:8422/api/:path*' },
      { source: '/static/:path*', destination: 'http://localhost:8422/static/:path*' },
      { source: '/media/:path*', destination: 'http://localhost:8422/media/:path*' },
    ];
  },
};

export default nextConfig;
