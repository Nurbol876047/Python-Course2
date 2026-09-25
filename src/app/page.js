import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
        Қазақша бағдарламалау сабақтары
      </h1>
      <p style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Next.js платформасына қош келдіңіз. Төмендегі курстардың бірін таңдаңыз:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <Link href="/python-omirde" style={{
          display: 'block', padding: '2rem', borderRadius: '12px', background: 'linear-gradient(135deg, #f6f8fd 0%, #f1f5f9 100%)',
          textDecoration: 'none', color: 'inherit', border: '1px solid #e2e8f0', transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2b6cb0', marginBottom: '0.5rem' }}>Python Өмірде 🐍</h2>
          <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
            Python бағдарламалау тілінің негіздерін өмірлік мысалдар арқылы үйреніңіз.
          </p>
        </Link>
      </div>
    </div>
  );
}
