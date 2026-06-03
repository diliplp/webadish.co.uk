import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

export default function ScannerCTA() {
  return (
    <section style={{ padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(49,46,129,0.28))',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '18px',
            padding: '2.5rem 2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 56, height: 56, borderRadius: 14, margin: '0 auto 1.2rem',
              background: 'rgba(99,102,241,0.18)', border: '1px solid rgba(99,102,241,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Search size={26} color="#818cf8" />
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: '0.7rem' }}>
            Not sure if your site is actually hacked?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '34rem', margin: '0 auto 1.6rem', lineHeight: 1.6 }}>
            Run a free instant security scan — check for malware, Google blacklisting, spam injections and security
            gaps in seconds. No signup needed to see your result.
          </p>
          <Link
            href="/wordpress-security-scanner"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Scan My Site Free <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
