import { generatePageMetadata } from '@/lib/seo';
import BlogPostLayout from '@/components/BlogPostLayout';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Do You Need to Report a Hacked Website to the ICO? | WebAdish',
  description:
    'When a hacked WordPress website may trigger ICO breach reporting, what the 72-hour rule really means, and how UK businesses should think about incident readiness.',
  path: '/do-you-need-to-report-a-hacked-website-to-the-ico',
  type: 'article',
  publishedTime: '2026-03-31',
  modifiedTime: '2026-03-31',
});

const faqItems = [
  {
    question: 'Does every hacked website need to be reported to the ICO?',
    answer:
      'No. A hack does not automatically mean a report is required. The key question is whether a personal data breach has occurred and whether it is likely to result in a risk to individuals’ rights and freedoms. If so, the ICO expects notification without undue delay and, where feasible, within 72 hours.',
  },
  {
    question: 'What counts as a personal data breach on a WordPress site?',
    answer:
      'A personal data breach can include unauthorised access to customer or lead data, exposure of form submissions, leaked account data, malware that gives access to stored personal information, or attacker access to systems containing personal data. A simple defacement with no data exposure may not be notifiable, but it still requires investigation.',
  },
  {
    question: 'When does the 72-hour timer start?',
    answer:
      'The clock starts when you become aware of the breach with a reasonable degree of certainty, not when the attacker first gained access. This is why fast detection, logging, and incident review matter so much.',
  },
  {
    question: 'Can WebAdish decide whether we must report to the ICO?',
    answer:
      'WebAdish helps with the technical investigation, evidence preservation, breach-readiness, and incident summary. Final legal and regulatory reporting decisions should involve your internal leadership, legal advisor, or data protection lead.',
  },
];

export default function ReportToIcoPage() {
  return (
    <BlogPostLayout
      title="Do You Need to Report a Hacked Website to the ICO?"
      lead="A hacked website is not automatically an ICO-reportable breach. But if personal data may have been exposed, UK businesses may have reporting obligations within 72 hours of becoming aware."
      datePublished="2026-03-31"
      dateModified="2026-03-31"
      author="WebAdish"
      category="Guides"
      slug="do-you-need-to-report-a-hacked-website-to-the-ico"
      faqItems={faqItems}
      summaryPoints={[
        'A website hack is not automatically an ICO-reportable event, but any likely personal data exposure changes the picture quickly.',
        'The 72-hour reporting window starts when the organisation becomes aware with reasonable certainty that a personal data breach occurred.',
        'Fast technical investigation matters because breach decisions depend on what systems, data, and user records were actually exposed.',
        'WordPress businesses should prepare incident logging, evidence preservation, and escalation workflows before an incident happens.',
      ]}
    >
      <h2>The short answer</h2>
      <p>
        Not every hacked website must be reported to the ICO. But every hacked website should be assessed quickly to determine
        whether a <strong>personal data breach</strong> has occurred. If personal data may have been exposed, altered, stolen, or
        made unavailable in a way that creates a risk to individuals, the ICO expects notification without undue delay and, where
        feasible, within 72 hours of awareness.
      </p>
      <p>
        This is where many UK businesses get stuck. They know the website is compromised, but they do not yet know whether customer,
        lead, staff, or account data was accessed. The technical investigation is what supports the reporting decision.
      </p>

      <h2>What the ICO actually cares about</h2>
      <p>
        The ICO’s threshold is not “your website was hacked.” The threshold is whether the incident created a risk to the rights and
        freedoms of individuals because personal data was affected. That means the practical questions become:
      </p>
      <ul>
        <li>Did the attacker access or export personal data from the site, CRM, or connected services?</li>
        <li>Did contact forms, customer records, or user account data become accessible?</li>
        <li>Did malware alter the integrity or availability of personal data?</li>
        <li>Can you confidently rule out data exposure, or are there gaps in visibility?</li>
      </ul>
      <p>
        If your WordPress site stores enquiry forms, WooCommerce customer records, user accounts, or marketing data, a hack is not
        just a website issue. It can become a data-protection incident very quickly.
      </p>

      <h2>Examples that often trigger deeper review</h2>
      <ul>
        <li>Attackers create new admin accounts and browse customer or lead data.</li>
        <li>Form plugins store submissions in the WordPress database and the site is compromised.</li>
        <li>WooCommerce or membership data may have been accessed.</li>
        <li>Attackers install backdoors and maintain access for an unknown period.</li>
        <li>Hosting, email, or control-panel credentials are compromised alongside the site.</li>
      </ul>
      <p>
        In all of these cases, you should assume the need for a structured incident review rather than a simple cosmetic cleanup.
      </p>

      <h2>What the 72-hour rule really means</h2>
      <p>
        The ICO states that organisations must report a notifiable personal data breach without undue delay and, where feasible,
        within 72 hours of becoming aware. That does not mean you need every fact in hand before you act. It means you need enough
        certainty to recognise that a personal data breach has likely occurred, then escalate quickly.
      </p>
      <p>
        For WordPress businesses, that makes <Link href="/hacked-website-recovery-uk">incident triage and forensic review</Link>
        much more than a technical exercise. Without logs, access review, file integrity review, and evidence preservation, you may
        not be able to tell what happened in time to make a good reporting decision.
      </p>

      <h2>Why cheap cleanup creates regulatory risk</h2>
      <p>
        A cheap malware cleanup often focuses on visible symptoms: malicious files removed, homepage restored, maybe a plugin scan
        run. That does not answer the questions that matter for a breach assessment:
      </p>
      <ul>
        <li>How did the attacker get in?</li>
        <li>How long were they inside?</li>
        <li>What data or admin surfaces could they access?</li>
        <li>Were form records, customer records, or integrations exposed?</li>
      </ul>
      <p>
        If you cannot answer those questions, you may have a reporting problem as well as a security problem. This is why
        post-hack forensic review matters for UK businesses that process personal data.
      </p>

      <h2>What to do in the first 24 hours</h2>
      <ol>
        <li><strong>Contain the incident carefully.</strong> Preserve evidence before making destructive changes where possible.</li>
        <li><strong>Identify what systems touch personal data.</strong> Forms, WooCommerce, CRMs, email tools, and user accounts all matter.</li>
        <li><strong>Review logs and access.</strong> Look for suspicious users, plugin abuse, hosting access, cron activity, and outbound data indicators.</li>
        <li><strong>Escalate internally.</strong> Bring in whoever owns legal, compliance, customer communication, and technical response.</li>
        <li><strong>Document what you know.</strong> Even partial clarity is better than guessing later under pressure.</li>
      </ol>

      <h2>How WebAdish helps</h2>
      <p>
        WebAdish is not a law firm, and we do not replace your legal decision-maker. What we do provide is the technical side of the
        response: investigation, evidence-aware recovery, root-cause review, access cleanup, and a clearer picture of whether data
        exposure is plausible. That makes it easier for your internal team or advisor to make the right reporting decision quickly.
      </p>
      <p>
        If your site is already compromised, start with our <Link href="/hacked-website-recovery-uk">hacked website recovery UK</Link>{' '}
        service. If you want to reduce risk before an incident happens, a <Link href="/wordpress-security-retainer">security
        retainer</Link> gives you faster detection, cleaner logs, and a better response posture.
      </p>

      <FAQ items={faqItems} />
    </BlogPostLayout>
  );
}
