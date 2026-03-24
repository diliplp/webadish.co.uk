import { generatePageMetadata } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema';
import PageHeader from '@/components/PageHeader';
import TrustSignals from '@/components/TrustSignals';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Hacked Website Recovery UK | Fix a Hacked WordPress Site Fast',
  description:
    'Hacked website recovery for UK businesses. We fix hacked WordPress sites, remove malware, find the root cause, and help recover rankings, trust, and conversions.',
  path: '/hacked-website-recovery-uk',
});

const faqItems = [
  {
    question: 'How quickly can you start recovering my hacked WordPress site?',
    answer:
      'We begin triage quickly because the first priority is containment. For revenue-critical incidents, we can move to an emergency track fast, but we do not promise a superficial cleanup just to hit an arbitrary clock.',
  },
  {
    question: 'How long does hacked WordPress site recovery take?',
    answer:
      'That depends on the depth of compromise and the business constraints around recovery. Containment happens first; full eradication, validation, and relaunch planning can take longer for complex eCommerce, multi-site, or server-level incidents.',
  },
  {
    question: 'My site was hacked before and it came back. Why does this keep happening?',
    answer:
      'Repeat hacks usually mean the previous fix removed visible malware but missed the actual access path or persistence. Backdoors, compromised admin accounts, cron abuse, and unsafe plugins are common reasons low value cleanups fail.',
  },
  {
    question: 'Will I lose any data during the recovery?',
    answer:
      'We work to preserve data and evidence. Before any major changes, we take a forensic baseline so recovery decisions are controlled, documented, and reversible wherever possible.',
  },
  {
    question: 'Can you remove my site from Google blacklists?',
    answer:
      'Yes. Once the site is verified clean and stable, we support review requests and reputation recovery. That said, blacklist removal is the final step, not the first goal.',
  },
  {
    question: 'Do you fix the vulnerability that allowed the hack?',
    answer:
      'Yes. Root-cause remediation is central to the engagement. We close the entry point, remove unsafe components, harden access, and document the changes needed to reduce recurrence risk.',
  },
  {
    question: 'Does a WordPress hack trigger a GDPR breach notification to the ICO?',
    answer:
      'Potentially, yes. If personal data may have been exposed, UK GDPR obligations can apply. We include an incident summary to support internal decision-making and follow-up with legal or compliance stakeholders.',
  },
  {
    question: 'Why are your prices higher than basic malware removal services?',
    answer:
      'Because we are not selling a basic malware sweep. We are handling business-critical incidents where incomplete work can lead to reinfection, lost revenue, compliance exposure, and reputational damage.',
  },
];

export default function HackedWebsiteRecoveryUK() {
  const serviceSchema = generateServiceSchema(
    'Hacked WordPress Site Recovery UK',
    'Premium WordPress incident response for UK businesses. Emergency containment, forensic recovery, root-cause analysis, and security remediation for revenue-critical websites.',
    '/hacked-website-recovery-uk',
    'From £3,000'
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Hacked Website Recovery UK', url: '/hacked-website-recovery-uk' },
  ]);
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <StructuredData schemas={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <PageHeader
        title="Hacked Website Recovery UK <br /><span style='color: #ef4444'>for WordPress Sites Under Attack</span>"
        subtitle="Emergency hacked WordPress site recovery for UK businesses. We remove malware, close backdoors, help with blacklist recovery, and fix the root cause so the infection does not return."
        badge="Emergency Hacked Site Recovery"
      />

      <TrustSignals />

      <section className="section-padding" style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ maxWidth: '920px', margin: '0 auto', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '1rem', padding: '2rem' }}>
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
              <div>
                <h2 style={{ marginBottom: '0.75rem' }}>Need hacked website recovery right now?</h2>
                <p style={{ color: '#d4d4d8', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Start with a quick triage call so we can contain the incident, assess what is at risk, and tell you whether you need fixed-fee cleanup or deeper incident response.
                </p>
                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
                  {[
                    'Initial triage within 30 minutes during active coverage',
                    'Google blacklist, malware, and backdoor remediation support',
                    'Clear next-step recommendation before deeper work begins',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#d4d4d8', fontSize: '0.95rem' }}>
                      <span style={{ color: '#ef4444', flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.9rem', padding: '1.5rem' }}>
                <p style={{ color: '#a1a1aa', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Emergency contact options
                </p>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <a href="tel:+447344540450" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    Call +44 7344 540450
                  </a>
                  <a
                    href="https://wa.me/447344540450?text=My%20website%20has%20been%20hacked%20and%20I%20need%20urgent%20help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                  >
                    WhatsApp for Immediate Triage
                  </a>
                  <a href="#contact-section" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    Request Recovery Assessment
                  </a>
                </div>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', margin: '1rem 0 0' }}>
                  Prefer email? Contact <a href="mailto:sales@webadish.co.uk" style={{ color: '#ef4444' }}>sales@webadish.co.uk</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2>Signs your hacked WordPress site needs urgent recovery</h2>
            <p style={{ color: '#a1a1aa' }}>
              If any of these are happening, your site likely needs more than a quick plugin scan or basic support ticket.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '01', sign: 'Google warnings, blacklist notifications, or browser malware alerts are damaging traffic and trust.' },
              { icon: '02', sign: 'Visitors are being redirected to phishing, spam, or malicious destinations.' },
              { icon: '03', sign: 'Checkout, lead forms, or client-facing functionality is disrupted or behaving abnormally.' },
              { icon: '04', sign: 'Unfamiliar admin users, files, plugins, or cron activity suggest attacker persistence.' },
              { icon: '05', sign: 'A previous cleanup failed and the compromise has returned.' },
              { icon: '06', sign: 'Your hosting provider suspended the site or warned of malicious activity.' },
            ].map((item) => (
              <div key={item.sign} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '2px', color: '#ef4444', fontWeight: 800 }}>{item.icon}</span>
                <span style={{ color: '#d4d4d8', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2>Our hacked website recovery process</h2>
            <p style={{ color: '#a1a1aa' }}>
              Designed for UK businesses that need a proper hacked WordPress site cleanup, not a superficial malware sweep.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Contain', desc: 'We stabilise the environment, preserve evidence, and stop the compromise from spreading into revenue, users, or connected systems.' },
              { step: '02', title: 'Investigate', desc: 'We trace the entry point, attacker persistence, affected components, and operational blind spots behind the breach.' },
              { step: '03', title: 'Eradicate', desc: 'Files, database payloads, cron jobs, rogue users, and hidden backdoors are removed thoroughly, not cosmetically.' },
              { step: '04', title: 'Remediate', desc: 'We close the root cause with patching, hardening, access control cleanup, and environment-level corrections.' },
              { step: '05', title: 'Recover', desc: 'We restore service with validation, blacklist support, and a written incident summary stakeholders can act on.' },
            ].map((item) => (
              <div key={item.step} style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ef4444', marginBottom: '0.75rem' }}>{item.step}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid #ef4444', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
              <h2 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>Recovery pricing and response options</h2>
              <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>
                Start with the right level of response for the incident in front of you. We keep the emergency path clear, then help you move onto stronger protection after recovery.
              </p>
              <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                {[
                  'Fixed-Fee Malware Cleanup: from £1,499 for contained infections that do not require deep forensic investigation',
                  'Incident Recovery: from £3,000 for single-site compromise and forensic cleanup',
                  'Revenue-Critical Response: from £6,000 for WooCommerce, lead-gen, and client-facing production websites',
                  'Major Incident Engagement: £10,000+ for multi-site estates, agency portfolios, or deep persistence and server investigation',
                ].map((tier) => (
                  <div key={tier} style={{ color: '#d4d4d8', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.75rem', padding: '0.9rem 1rem' }}>
                    {tier}
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxWidth: '500px', margin: '0 auto 2rem', textAlign: 'left' }}>
                {[
                  'Emergency containment',
                  'Root-cause analysis',
                  'Backdoor and persistence eradication',
                  'Blacklist support',
                  'Access control review',
                  'Hardening and remediation',
                  'Stakeholder-ready incident reporting',
                  'Post-recovery monitoring window',
                ].map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#d4d4d8' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Need help with a hacked website right now? Call <strong style={{ color: '#fff' }}>+44 7344 540450</strong> or message us on WhatsApp for immediate triage.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+447344540450" className="btn btn-primary" style={{ display: 'inline-block' }}>Call Now</a>
                <a
                  href="https://wa.me/447344540450?text=My%20website%20has%20been%20hacked%20and%20I%20need%20urgent%20help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'inline-block' }}
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <h2>What happens in the first 30 minutes</h2>
            <p style={{ color: '#a1a1aa' }}>
              Emergency visitors need clarity fast. This is the initial triage sequence we use before any deeper engagement starts.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              {
                title: '1. Contain',
                desc: 'We confirm whether the site is actively compromised, what should be frozen, and whether access or hosting action is needed immediately.',
              },
              {
                title: '2. Scope',
                desc: 'We identify whether you are dealing with malware cleanup, repeat compromise, blacklist recovery, or a broader business-critical incident.',
              },
              {
                title: '3. Recommend',
                desc: 'You get a practical next-step recommendation with the right response tier, estimated urgency, and the fastest contact path.',
              },
              {
                title: '4. Escalate',
                desc: 'If the site is revenue-critical, we move into incident recovery and prepare the evidence, remediation, and stakeholder communication plan.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
                <h3 style={{ color: '#ef4444', fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#a1a1aa', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2>Why hacked website recovery needs more than malware removal</h2>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '1rem 0' }}>
                A hacked WordPress site can mean lost transactions, suspended ad
                campaigns, reputational damage, and internal escalation to legal
                or compliance teams. Recovery has to account for those realities.
              </p>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                For UK businesses handling personal data, a compromise may also
                trigger regulatory decisions under UK GDPR. We provide an
                evidence-led account of what happened and what was remediated.
              </p>
              <Link href="https://webadish.com/" style={{ color: '#ef4444', fontSize: '0.95rem' }}>
                → After recovery: continue protection with our maintenance and security plans
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { stat: 'Fast', label: 'Initial triage and containment for urgent business incidents' },
                { stat: 'Deep', label: 'Root-cause analysis, not just visible malware removal' },
                { stat: 'Clear', label: 'Stakeholder-ready reporting for internal decision makers' },
                { stat: 'Premium', label: 'Pricing aligned to business-critical recovery work' },
              ].map((item) => (
                <div key={item.label} style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', minWidth: '90px' }}>{item.stat}</div>
                  <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2rem' }}>
            <h2>Turn a one-off recovery into monthly protection</h2>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '1rem 0' }}>
              Most reinfections happen after a superficial cleanup, when the
              site is put back online without fixing the operational weaknesses
              that let the attacker in. Recovery is only the first phase.
            </p>
            <p style={{ color: '#a1a1aa', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              Recovery clients often move straight onto a monthly retainer so
              the same gap does not reopen next month. If you want ongoing
              monitoring, patch oversight, and a priority escalation path, we
              recommend continuing with a WordPress security retainer.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/wordpress-security-retainer" className="btn btn-primary">
                View Monthly Security Retainers
              </Link>
              <Link href="https://webadish.com/" className="btn btn-secondary">
                View Global Protection Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Further Reading</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/wordpress-site-keeps-getting-hacked" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Site Keeps Getting Hacked? Here&apos;s Why &amp; How to Stop It
            </Link>
            <Link href="/wordpress-malware-removal" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Malware Removal UK — Emergency Cleanup Service
            </Link>
            <Link href="/wordpress-maintenance-uk" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.95rem' }}>
              → WordPress Security Protection UK — Prevent Future Hacks
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA
        title="Escalate before the hacked site costs you more"
        subtitle="Every extra hour of compromise increases revenue loss, SEO damage, blacklist risk, customer distrust, and regulatory exposure."
        btnText="Request Recovery Assessment"
        btnLink="#contact-section"
      />

      <section
        id="contact-section"
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)', padding: '2rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Request Hacked Website Recovery</h2>
            <p style={{ textAlign: 'center', color: '#a1a1aa', marginBottom: '2rem' }}>
              Tell us what is happening, what is at risk, and whether there has
              already been a failed cleanup. We&apos;ll triage the incident and
              advise whether you need fixed-fee cleanup, incident recovery, or
              a longer-term protection plan.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
