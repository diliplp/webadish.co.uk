import { Handshake, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Partner Programme — Earn 20% Referring Hacked-Site Recovery | WebAdish',
  description:
    'UK agencies, freelancers & hosts: refer hacked WordPress clients to our recovery team and earn 20% commission. We do the work, you carry zero risk, your client stays yours. Free to join.',
  path: '/partners',
});

const WA = 'https://wa.me/447344540450?text=I%27d%20like%20to%20join%20the%20WebAdish%20partner%20programme.';

const audience = [
  { title: 'Web Agencies', desc: 'Offer emergency recovery without hiring a security team. Say “yes, we’ll handle it” and keep the account.' },
  { title: 'Freelance Developers', desc: 'A hacked client is out of scope and high-stress. Refer it, stay the hero, and earn on the side.' },
  { title: 'Hosting & Resellers', desc: 'You suspend hacked accounts regularly. Refer owners to a cleanup partner instead of just shutting them off.' },
];

const steps = [
  { n: '1', title: 'Refer the client', desc: 'Email or WhatsApp us the hacked site’s URL and a one-line intro. That’s your entire job.' },
  { n: '2', title: 'We recover it', desc: 'Free diagnosis, fixed quote, then full cleanup, hardening and Google blacklist removal — with our 30-day reinfection guarantee. You stay cc’d or step back.' },
  { n: '3', title: 'You get paid', desc: 'Once the client settles, you earn 20% of the job. Your client returns to you, secure and grateful.' },
];

const commission = [
  { job: '£1,499', you: '£300' },
  { job: '£2,500', you: '£500' },
  { job: '£5,000', you: '£1,000' },
];

const faqItems = [
  { question: 'How much commission do I earn?', answer: 'You earn 20% of every recovery you refer that converts into a paid job, paid after the client settles their invoice. On a typical £1,499–£5,000 recovery that is £300–£1,000 per referral, for an introduction that takes two minutes.' },
  { question: 'Do I have to do any of the technical work?', answer: 'No. You make the introduction; we handle diagnosis, cleanup, hardening, Google blacklist removal and client communication end to end. You carry zero technical risk and never touch the infected site.' },
  { question: 'Will you take my client from me?', answer: 'Never. We are a specialist recovery sub-contractor, not a competitor for design, hosting or retainers. Once the emergency is resolved we hand the relationship straight back to you. Many partners keep the client on their own maintenance plan afterwards.' },
  { question: 'Can I white-label or mark up instead of taking commission?', answer: 'Yes. If you would rather bill your client directly, we can work at a discounted wholesale rate and stay completely behind the scenes. Tell us which model you prefer when you sign up.' },
  { question: 'Who is this best for?', answer: 'UK web design agencies, freelance developers and hosting resellers — anyone whose clients run WordPress and occasionally get hacked. If you do not offer in-house security, partnering means you can say “yes, we will handle it” instead of losing the client to panic.' },
  { question: 'How do I refer a client?', answer: 'Email or WhatsApp us the site URL and a one-line intro. We respond fast, assess for free and quote. You can stay cc’d on everything or step back — your choice. We track every referral against you for commission.' },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', background: 'linear-gradient(180deg, rgba(99,102,241,0.1) 0%, transparent 100%)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc', fontSize: '0.85rem', fontWeight: 600, padding: '0.4rem 0.9rem', borderRadius: '999px', marginBottom: '1.5rem' }}>
            <Handshake size={15} /> Partner Programme
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Your Client Got Hacked.<br /><span style={{ color: '#818cf8' }}>Refer It. Earn 20%. Zero Risk.</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '36rem', margin: '0 auto 2rem' }}>
            When a UK agency, freelancer or host hits a hacked WordPress client with no in-house security team — send it to us. We recover it fast, you earn 20% of the job, and your client stays yours.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Become a Partner <ArrowRight size={18} /></a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">WhatsApp Us</a>
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.8rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            {['20% referral commission', 'We do all the technical work', 'Your client stays yours', 'Free to join'].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><Check size={15} color="#34d399" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.8rem' }}>Built for People Who Have Clients, Not Security Teams</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '36rem', margin: '0 auto' }}>If your clients run WordPress, some will get hacked. Instead of scrambling — or losing them — hand the emergency to specialists and get paid for it.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
            {audience.map((a) => (
              <div key={a.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '3.5rem 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.8rem' }}>How the Partner Programme Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Three steps. Two minutes of your time per referral.</p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.3rem' }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '0.3rem' }}>{s.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#818cf8', marginBottom: '0.6rem' }}>What you earn</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.8rem' }}>20% of Every Recovery You Refer</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '34rem', margin: '0 auto 2rem' }}>A two-minute introduction, no technical work, no risk. Here’s what that looks like per job.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.2rem' }}>
            {commission.map((r) => (
              <div key={r.job} style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Recovery job</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.8rem' }}>{r.job}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>You earn</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>{r.you}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1.8rem' }}>Prefer to bill your client yourself? Ask us about white-label wholesale pricing instead.</p>
        </div>
      </section>

      {/* Join */}
      <section id="join" style={{ padding: '3.5rem 0', background: 'linear-gradient(135deg, #4338ca, #312e81)' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '0.8rem' }}>Join the Partner Programme</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '34rem', margin: '0 auto 2rem' }}>Free to join, no commitment, no minimums. Send us a message and we’ll set you up — so you’re ready the next time a client’s site goes down.</p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: '#22c55e', color: '#fff', fontWeight: 700, textDecoration: 'none', padding: '0.8rem 1.6rem', borderRadius: 12 }}>WhatsApp to Join</a>
            <a href="mailto:sales@webadish.co.uk?subject=Partner%20Programme%20signup" style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', fontWeight: 700, textDecoration: 'none', padding: '0.8rem 1.6rem', borderRadius: 12 }}>Email Us</a>
            <Link href="/contact" style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', fontWeight: 700, textDecoration: 'none', padding: '0.8rem 1.6rem', borderRadius: 12 }}>Contact Form</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
