import { generatePageMetadata } from '@/lib/seo';
import BlogPostLayout from '@/components/BlogPostLayout';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'WordPress Hacked: What To Do Right Now | Webadish',
  description:
    'Your WordPress site has been hacked. Here is what to do in the first hour — contain the damage, protect your data, and decide whether you can fix it yourself.',
  path: '/wordpress-hacked-what-to-do',
  ogImage: '/og-wordpress-hacked-what-to-do.png',
  type: 'article',
  publishedTime: '2026-04-17',
  modifiedTime: '2026-04-17',
});

const faqItems = [
  {
    question: 'How do I know if my WordPress site has been hacked?',
    answer:
      'The most common signs are: visitors being redirected to spam or phishing sites, Google showing a "This site may be hacked" warning, your hosting provider suspending the account, unfamiliar admin users appearing in WordPress, or your site being blacklisted in Google Search Console. Some hacks are designed to be invisible to site owners — spam links injected into pages, for example, are often hidden from logged-in admins but visible to search engines and visitors.',
  },
  {
    question: 'Should I take my WordPress site offline if it has been hacked?',
    answer:
      'In most cases, yes — temporarily. Taking the site offline or putting it into maintenance mode prevents visitors from being exposed to malware, stops the hack from damaging your Google rankings further, and protects you from potential GDPR liability if customer data is being accessed. A few minutes of intentional downtime is far less damaging than leaving an actively compromised site running.',
  },
  {
    question: 'How long does WordPress hack recovery take?',
    answer:
      'A contained infection with no prior cleanup attempts typically takes 1–3 working days for a professional to resolve: initial containment, full forensic cleanup, root-cause remediation, hardening, and blacklist removal request. DIY recovery on a simple infection can take a similar amount of time if you are methodical. Complex situations — repeat hacks, WooCommerce sites, server-level access, or multi-site estates — take longer and almost always require professional involvement.',
  },
  {
    question: 'Does a hacked WordPress site affect Google rankings?',
    answer:
      'Yes, significantly. Google actively crawls for malware and will label infected sites in search results with warnings that deter clicks. A site can be removed from Google\'s index entirely if the infection is severe. Even after cleanup, recovering rankings takes time — typically 2–6 weeks after Google re-crawls and confirms the site is clean. The faster you act, the less ranking damage you absorb.',
  },
  {
    question: 'Do I need to tell my customers if my WordPress site has been hacked?',
    answer:
      'Possibly — if your site processes or stores personal data and that data may have been accessed or exposed. Under UK GDPR, you have 72 hours from becoming aware of a breach to notify the ICO if it is likely to result in a risk to individuals. Customer notification may also be required if the risk is high. You should treat any hack involving customer data as a potential notifiable breach until a forensic review confirms otherwise.',
  },
  {
    question: 'How much does professional WordPress hack recovery cost in the UK?',
    answer:
      'Professional recovery in the UK starts around £1,499 for a contained, straightforward infection. More complex incidents — repeat hacks, WooCommerce, multi-site, or deep persistence — typically start from £3,000–£6,000. The cost of not fixing it properly (reinfection, continued blacklisting, potential GDPR fines, lost revenue) almost always exceeds the cost of doing it right the first time.',
  },
];

export default function WordPressHackedWhatToDoPage() {
  return (
    <BlogPostLayout
      title="WordPress Hacked: What To Do Right Now"
      lead="You have just discovered your WordPress site has been hacked. Every minute counts. This guide walks you through the right sequence — contain first, investigate second, clean third — so you do not make the situation worse before you make it better."
      datePublished="2026-04-17"
      dateModified="2026-04-17"
      category="Recovery"
      slug="wordpress-hacked-what-to-do"
      summaryPoints={[
        'Contain first, investigate second — acting in the wrong order destroys evidence and extends the damage',
        'Most DIY cleanups miss backdoors; surface-clean sites are typically reinfected within days',
        'UK businesses may have a 72-hour window to notify the ICO if customer data was exposed',
        'The first 60 minutes determine how expensive the next 30 days will be',
      ]}
      faqItems={faqItems}
    >
      <h2>First: confirm your WordPress site has actually been hacked</h2>
      <p>
        Before taking any drastic action, spend five minutes confirming you are dealing with a genuine
        compromise rather than a plugin conflict, a hosting outage, or a false alert from a security scanner.
      </p>
      <p>The most reliable confirmation signals are:</p>
      <ul>
        <li>
          <strong>Redirects to unfamiliar sites</strong> — visitors (especially those arriving from Google)
          are sent to spam, phishing, or adult content. This is a near-certain sign of a hack, not a plugin issue.
        </li>
        <li>
          <strong>Google warnings</strong> — search results showing &quot;This site may be hacked&quot; or
          &quot;Deceptive site ahead&quot; browser warnings. Check{' '}
          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Console
          </a>{' '}
          for security issues and manual actions.
        </li>
        <li>
          <strong>Hosting suspension or warning</strong> — your hosting provider has flagged or suspended the
          account for malicious activity or outbound spam.
        </li>
        <li>
          <strong>Unfamiliar admin accounts</strong> — users in your WordPress admin you did not create, often
          with administrator privileges and email addresses you do not recognise.
        </li>
        <li>
          <strong>Spam content in your pages</strong> — search Google for{' '}
          <code>site:yourdomain.co.uk</code> and look for results containing pharmaceutical spam, gambling links,
          or foreign-language pages you never created.
        </li>
        <li>
          <strong>Your site sends emails you did not write</strong> — customers or contacts receive phishing or
          spam emails appearing to come from your domain.
        </li>
      </ul>
      <p>
        If you see any of the above, treat it as confirmed. Do not wait for multiple signals before acting —
        one is enough.
      </p>

      <h2>Step 1 — Contain the damage immediately</h2>
      <p>
        The most important principle in the first 15 minutes is containment. Your goal is not to fix the site
        yet — it is to stop the situation from getting worse.
      </p>

      <h3>Put the site into maintenance mode or take it offline</h3>
      <p>
        If you can still access WordPress admin, activate a maintenance mode plugin or set your site to
        &quot;Coming Soon&quot; mode. If you cannot access the dashboard, ask your hosting provider to
        temporarily take the site offline or password-protect the root directory. This protects your visitors
        from being exposed to malware and limits further damage to your SEO and reputation while you work.
      </p>
      <p>
        A few hours of intentional downtime is far less damaging than leaving a compromised site live and
        actively harming visitors.
      </p>

      <h3>Change your WordPress admin password immediately</h3>
      <p>
        Log into WordPress and change your admin password to something long, unique, and randomly generated
        (use a password manager). Do this for every admin account on the site, not just your own. If you cannot
        log in, reset your password via the hosting panel or directly in the database through phpMyAdmin.
      </p>

      <h3>Revoke access for unfamiliar admin users</h3>
      <p>
        In WordPress admin, go to Users and look for accounts you do not recognise — especially any with
        Administrator role. Delete them immediately, but screenshot the user list first. That evidence matters
        for your post-incident review and potentially for GDPR reporting.
      </p>

      <h3>Contact your hosting provider</h3>
      <p>
        Notify your host that the site is compromised. They can confirm whether the infection extends beyond
        WordPress to server-level files, check for outbound malicious traffic, and may have access logs that
        help trace the entry point. Many hosts have a security team that can assist with initial containment.
      </p>

      <h2>Step 2 — Assess what has been exposed</h2>
      <p>
        Once the site is contained, your next task is understanding the scope — not because you need a complete
        answer right now, but because the scope determines how you respond, who you need to tell, and whether
        regulatory obligations apply.
      </p>
      <p>Work through these questions quickly:</p>
      <ul>
        <li>
          <strong>Does your site store or process personal data?</strong> — customer names, email addresses,
          payment information, order history, membership data. If yes, a potential data breach is now on the
          table.
        </li>
        <li>
          <strong>Is this a revenue-generating site?</strong> — WooCommerce store, lead generation, booking
          system, membership platform. If yes, every hour of downtime has a direct financial cost. Escalate
          accordingly.
        </li>
        <li>
          <strong>Has this happened before?</strong> — a previous hack that was &quot;cleaned&quot; and came
          back is almost certainly a missed backdoor situation. That changes the response approach significantly.
          See our guide on{' '}
          <Link href="/wordpress-site-keeps-getting-hacked">why WordPress sites keep getting hacked</Link> for
          the full explanation.
        </li>
        <li>
          <strong>Are other sites on the same hosting account?</strong> — shared hosting means a compromised
          site can spread malware laterally to other sites in the same account. All sites on the account need to
          be checked.
        </li>
      </ul>
      <p>
        You do not need precise answers yet. But knowing whether personal data is involved and whether revenue
        is affected determines the urgency and the regulatory path.
      </p>

      <h2>Step 3 — Document before you clean</h2>
      <p>
        This step is routinely skipped and almost always regretted. Before removing anything, take screenshots
        and notes of:
      </p>
      <ul>
        <li>Any unfamiliar admin users (name, email, role, registration date)</li>
        <li>Error messages, redirects, or symptoms you observed</li>
        <li>Hosting provider alerts or suspension notices (forward these to yourself)</li>
        <li>Google Search Console security issues screenshots</li>
        <li>Your file manager or FTP, noting any recently modified files</li>
      </ul>
      <p>
        This documentation serves two purposes. First, it helps with the forensic investigation — knowing
        which files changed when narrows down the entry point considerably. Second, if personal data was
        exposed and UK GDPR applies, you will need a written record of when you discovered the breach, what
        you found, and what you did. Without it, you are reconstructing from memory under pressure.
      </p>

      <h2>Step 4 — Clean up in the right order</h2>
      <p>
        Most hacked WordPress guides jump straight to &quot;install Wordfence and run a scan.&quot; That is
        the wrong starting point. Clean-up in the wrong order either destroys evidence or misses the actual
        problem. Here is the correct sequence:
      </p>

      <h3>1. Rotate every credential — before touching the files</h3>
      <p>Change all of the following before you start removing malware:</p>
      <ul>
        <li>All WordPress admin passwords</li>
        <li>FTP / SFTP credentials</li>
        <li>Hosting panel (cPanel, Plesk, or your host&apos;s dashboard) password</li>
        <li>Database password — and update <code>wp-config.php</code> to match</li>
        <li>Any email accounts tied to the domain, particularly those used for WordPress recovery emails</li>
      </ul>
      <p>
        If attackers still have valid credentials to your hosting panel or database, cleaning the WordPress
        files is pointless — they will reinfect the site within hours.
      </p>

      <h3>2. Back up the compromised site before removing anything</h3>
      <p>
        This sounds counterintuitive, but take a backup of the infected site before cleaning. A compressed
        archive of the infected files gives you a forensic baseline to return to if something goes wrong during
        cleanup, and it preserves the evidence needed to trace the entry point. Do not rely on this backup to
        restore from — only to investigate from.
      </p>

      <h3>3. Run a thorough file-level scan</h3>
      <p>
        Free scanners like Wordfence or the Sucuri SiteCheck tool are a starting point, but they work by
        comparing file signatures against known malware patterns. Custom backdoors, obfuscated PHP, and
        malicious code injected into otherwise legitimate files are frequently missed. A proper scan checks
        every file on the server — not just the WordPress install directory — and decodes obfuscated code to
        analyse what it actually does.
      </p>
      <p>
        Pay particular attention to:
      </p>
      <ul>
        <li>
          <strong>wp-content/uploads</strong> — this folder is writable by WordPress, so attackers commonly
          plant PHP backdoor files here disguised as images or alongside real uploads
        </li>
        <li>
          <strong>Recently modified files</strong> — sort by modification date in your file manager. Files
          changed on the day of the hack or shortly before are prime suspects
        </li>
        <li>
          <strong>WordPress core file replacements</strong> — compare your wp-includes and wp-admin files
          against official WordPress release checksums
        </li>
        <li>
          <strong>Database content</strong> — injected JavaScript in post content, widget settings, or theme
          options will not show up in a file scan
        </li>
      </ul>

      <h3>4. Remove malware and close the entry point</h3>
      <p>
        Remove infected files, restore clean versions of core WordPress files from official releases, and
        identify the vulnerability that allowed the entry — whether that is an outdated plugin, a compromised
        credential, or a nulled theme. Update or remove the vulnerable component before bringing the site back
        online. Cleaning the malware without closing the entry point means the infection will return, often
        within 48 hours.
      </p>

      <h3>5. Harden before going live again</h3>
      <p>Before restoring public access, apply these baseline hardening steps:</p>
      <ul>
        <li>Delete every unused plugin and theme — inactive plugins retain their vulnerabilities</li>
        <li>Enable two-factor authentication on all admin accounts</li>
        <li>Disable XML-RPC if you do not use it (a common brute-force and DDoS vector)</li>
        <li>Block PHP execution in the uploads directory via <code>.htaccess</code></li>
        <li>Set correct file permissions: 755 for directories, 644 for files, 600 for wp-config.php</li>
        <li>Enable a Web Application Firewall (Cloudflare or Wordfence Premium)</li>
      </ul>

      <h3>6. Request blacklist removal</h3>
      <p>
        Once the site is clean and hardened, submit a review request through Google Search Console if your
        site was flagged. This process typically takes 1–3 days once submitted. Do not request a review before
        the site is genuinely clean — a failed review adds delay and signals to Google that the site is still
        a problem.
      </p>

      <h2>Can you fix a hacked WordPress site yourself?</h2>
      <p>
        Honestly: sometimes yes, often no — and it depends entirely on the type and depth of the compromise.
      </p>
      <p>
        DIY cleanup works reasonably well when the hack is a single infected plugin on a simple site with no
        customer data, the site has not been hacked before, and you are technically comfortable working in file
        managers, phpMyAdmin, and FTP. Following the steps above methodically gives you a reasonable chance of
        a clean result.
      </p>
      <p>
        DIY cleanup is likely to fail when:
      </p>
      <ul>
        <li>The site has been &quot;cleaned&quot; before and the infection returned — this almost always means a
          missed backdoor that basic tools do not detect</li>
        <li>The site runs WooCommerce, a membership platform, or any system processing personal data</li>
        <li>The infection involves server-level access rather than just WordPress files</li>
        <li>You find unfamiliar admin accounts or signs of ongoing attacker access</li>
        <li>The site&apos;s income means downtime or reinfection has a direct financial cost</li>
      </ul>
      <p>
        The practical risk of a partial DIY cleanup is a surface-clean site with a missed backdoor still active.
        The site looks clean, you go live, and within days or weeks the infection returns — often worse than
        before because the attacker has had more time to embed persistence. At that point you are paying for
        a professional cleanup on top of the DIY time already spent.
      </p>
      <p>
        If any of the above apply, the most cost-effective path is professional recovery from the start. Our{' '}
        <Link href="/hacked-website-recovery-uk">hacked website recovery UK</Link> service is built around
        forensic-level cleanup — not a surface scan — precisely because surface scans are where repeat hacks
        originate.
      </p>

      <h2>UK businesses: GDPR and the ICO&apos;s 72-hour clock</h2>
      <p>
        If your WordPress site handles personal data — customer names, email addresses, order history, payment
        details, enquiry form submissions — a hack is a potential data breach under UK GDPR, and that triggers
        specific obligations.
      </p>
      <p>
        Under UK GDPR Article 33, you have <strong>72 hours from becoming aware of a breach</strong> to notify
        the ICO if the breach is likely to result in a risk to individuals. The clock starts when you first
        become aware — not when the investigation is complete.
      </p>
      <p>
        What this means in practice:
      </p>
      <ul>
        <li>
          <strong>You do not need to wait for certainty.</strong> If you discover your site is compromised and
          it stores personal data, start your internal breach assessment immediately. Document what you found,
          when you found it, what data may be affected, and what actions you have taken.
        </li>
        <li>
          <strong>Not every hack requires ICO notification.</strong> If the breach is unlikely to result in a
          risk to individuals — for example, a simple malware injection with no evidence of data access — you
          may not need to notify. But you do need to document your reasoning.
        </li>
        <li>
          <strong>Customer notification may also be required.</strong> If the risk to individuals is high,
          you must notify affected individuals without undue delay.
        </li>
      </ul>
      <p>
        Our <Link href="/do-you-need-to-report-a-hacked-website-to-the-ico">full guide on ICO breach
        reporting for hacked websites</Link> covers the assessment framework in detail. For clients using our
        recovery service, we provide a written incident summary that supports your internal decision-making and
        any follow-up with legal or compliance teams.
      </p>

      <h2>What happens if you rush or skip steps</h2>
      <p>
        The most expensive outcome from a WordPress hack is not the initial compromise — it is a failed cleanup
        that leads to reinfection. Here is what typically goes wrong when steps are skipped:
      </p>
      <ul>
        <li>
          <strong>Cleaning without rotating credentials</strong> → attacker re-enters via still-valid FTP or
          hosting credentials within hours
        </li>
        <li>
          <strong>Surface scan only</strong> → backdoor in uploads folder or obfuscated in a plugin file is
          missed, reinfection within days
        </li>
        <li>
          <strong>Fixing malware without closing the entry point</strong> → same plugin vulnerability exploited
          again by automated bots within the week
        </li>
        <li>
          <strong>Requesting Google review before the site is clean</strong> → failed review, additional delay
          in blacklist removal, continued ranking damage
        </li>
        <li>
          <strong>Skipping the documentation step</strong> → if personal data was exposed, you are now
          reconstructing a breach timeline under pressure with no written record
        </li>
      </ul>
      <p>
        If you have already attempted a cleanup and the infection has returned, the most important thing to
        accept is that a missed backdoor is almost certainly present. Read our guide on{' '}
        <Link href="/wordpress-site-keeps-getting-hacked">why WordPress sites keep getting hacked</Link> to
        understand exactly where backdoors hide and why basic tools miss them. At that point, a{' '}
        <Link href="/wordpress-malware-removal">professional malware removal</Link> that includes forensic-level
        file inspection is the right next step — not another DIY scan.
      </p>
    </BlogPostLayout>
  );
}
