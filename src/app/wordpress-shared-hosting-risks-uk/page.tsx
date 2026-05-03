import { generatePageMetadata } from '@/lib/seo';
import BlogPostLayout from '@/components/BlogPostLayout';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'WordPress on Shared Hosting: Security Risks UK Businesses Need to Understand',
  description:
    'Shared hosting is the most common WordPress setup for UK SMEs — and the most misunderstood from a security perspective. Here is what the shared environment actually means for your risk exposure.',
  path: '/wordpress-shared-hosting-risks-uk',
  type: 'article',
  publishedTime: '2026-05-02',
  modifiedTime: '2026-05-02',
});

const faqItems = [
  {
    question: 'Can a compromised site on shared hosting infect my WordPress site?',
    answer:
      'Between different customer accounts on the same physical server, lateral spread is significantly harder — most shared hosting providers implement account-level isolation (suEXEC, PHP-FPM per user) that limits cross-account access. The more common risk is within your own account: if you run multiple WordPress sites under one hosting account, a compromise of one can propagate to all others. Ask your hosting provider specifically whether your account uses process isolation or shared PHP execution.',
  },
  {
    question: 'Is shared hosting safe for a business WordPress site?',
    answer:
      'It depends on what "safe" means for your risk profile. Shared hosting is appropriate for brochure sites and low-traffic properties where a breach has limited financial or data protection consequence. It is increasingly difficult to justify for WooCommerce stores processing real transactions, professional services sites holding client data, or any site where a compromise carries GDPR notification obligations. The marginal cost of entry-level VPS hosting over shared hosting is small relative to the isolation benefit.',
  },
  {
    question: 'My hosting provider says they have server-level malware scanning — does that protect me?',
    answer:
      'Server-level scanning identifies malicious files in your account using signature databases. It catches many common malware variants but misses obfuscated injections, database-level malware, and backdoors in non-standard locations. It also does not monitor your WordPress application layer — plugin vulnerabilities, compromised admin credentials, or injected JavaScript in your database are outside its scope. Server scanning is useful but insufficient on its own.',
  },
  {
    question: 'What should I do immediately if I suspect my shared hosting account has been compromised?',
    answer:
      'Change all account credentials immediately: cPanel or hosting panel password, all FTP/SFTP accounts, and all database passwords. Then contact your hosting provider and request an account-level malware scan. Take a full backup of the current state before cleaning anything — this is your forensic record. If you run multiple WordPress sites in the account, treat all of them as potentially infected until confirmed otherwise.',
  },
];

export default function PostPage() {
  return (
    <BlogPostLayout
      title="WordPress on Shared Hosting: Security Risks UK Businesses Need to Understand"
      lead="Shared hosting is where most UK small business WordPress sites start. The pricing is accessible, the setup is straightforward, and the security model is widely misunderstood. What shared hosting actually means for your risk profile — and what it does not — is worth understanding before an incident makes it concrete."
      datePublished="2026-05-02"
      dateModified="2026-05-02"
      category="WordPress Security"
      slug="wordpress-shared-hosting-risks-uk"
      faqItems={faqItems}
      summaryPoints={[
        'Shared hosting puts multiple WordPress sites under one account — compromise of one often spreads to all',
        'Server-level malware scanning from hosting providers misses database injections, obfuscated code, and application-layer attacks',
        'FTP credential theft is the most common shared hosting entry point and is entirely preventable',
        'UK businesses processing customer data on shared hosting carry the same GDPR obligations as those on dedicated infrastructure',
      ]}
    >
      <h2>What "shared hosting" actually means technically</h2>
      <p>On a shared hosting server, dozens to hundreds of customer accounts run on the same physical machine. The operating system, web server (Apache or Nginx), and PHP runtime are shared infrastructure. Your hosting provider manages all of it — you manage your files and databases through a control panel, typically cPanel.</p>
      <p>Within a well-configured shared hosting environment, customer accounts should be isolated from one another using process isolation techniques: suEXEC or PHP-FPM per user ensures that PHP runs as your account's user rather than a shared server user. This matters because it limits the ability of a compromised neighbouring account to read or write your files.</p>
      <p>The isolation is real but not absolute. Its quality varies significantly between hosting providers and between hosting tiers. Budget shared hosting — plans under £5–10 per month — often uses older, less isolated configurations. Mid-tier and business shared hosting from established UK providers typically has better account isolation. Asking your provider directly whether they use PHP-FPM with per-user pools is a reasonable technical question with a clear answer.</p>

      <h2>The intra-account risk: your own sites infecting each other</h2>
      <p>The more common and more immediate shared hosting risk is not between neighbouring customer accounts — it is within your own account. Many UK small businesses and agencies run multiple WordPress installations under a single hosting account: a main site, a staging environment, a client site, an old project that was never decommissioned.</p>
      <p>Within a single cPanel account, all sites typically run under the same system user. A PHP file with write access to one site's directory can often write to adjacent directories in the same account. Malware that enters through a vulnerable plugin on one site will frequently propagate automatically to every other WordPress installation it can reach — which on a single-account setup means all of them.</p>
      <p>This is not a theoretical risk. It is the standard pattern in shared hosting compromises. A site that was deactivated two years ago and forgotten about runs an outdated, unpatched WordPress installation. Automated scanners find the vulnerability, plant malware, and within hours the infection has spread to the active business site in the same account. The active site shows symptoms; the forgotten site was the entry point.</p>

      <h2>How the hosting provider's security actually works</h2>
      <p>UK shared hosting providers typically market several security features. Understanding what each one does — and does not — prevents the common mistake of assuming the hosting provider's security covers the WordPress application.</p>

      <h3>Server-level malware scanning</h3>
      <p>Tools like Imunify360 and ClamAV scan files in your hosting account for known malware signatures. They identify files that match patterns in their database and flag or quarantine them. What they miss: obfuscated or custom-encoded malware that does not match known signatures, malware injected into your WordPress database rather than into files, and backdoors hidden in non-standard locations. Server-level scanning is useful reactive tooling, not a comprehensive protection layer.</p>

      <h3>ModSecurity WAF</h3>
      <p>ModSecurity is a web application firewall module that runs at the web server level. It applies rules to incoming HTTP requests and can block common attack patterns before they reach PHP. Most UK shared hosts include it. Its limitations: it operates on request patterns, not on your specific WordPress configuration. Rules are generic rather than tuned to your plugin stack. It does not monitor files already on your server or catch attacks that arrive through legitimate-seeming requests — such as a compromised form handler or an authenticated request from a compromised admin account.</p>

      <h3>Daily backups</h3>
      <p>Most shared hosting plans include automated daily backups stored on the same infrastructure. Backups stored on the same server as your site are not recovery-grade backups — a hosting account suspension, a ransomware event affecting the hosting infrastructure, or a billing dispute can make both your site and your backup inaccessible simultaneously. Offsite backups to independent storage (a separate cloud account you control) are a separate requirement from whatever your hosting provider offers.</p>

      <h2>The FTP credential problem</h2>
      <p>FTP credential theft is the most common entry point for shared hosting compromises of UK small business sites. FTP credentials — the username and password used to upload files to your hosting account — are frequently stored in FTP client software on developer or agency machines. When those machines are compromised through unrelated attacks (phishing, malware), stored FTP credentials are among the first things extracted.</p>
      <p>The attacker does not need to find a WordPress vulnerability. They log into your hosting account with valid FTP credentials and upload or modify files directly. There is no brute force, no plugin exploit, no failed login attempt — just a successful FTP connection that looks identical to a legitimate one.</p>
      <p>Mitigation: use SFTP rather than FTP (encrypted connection), do not store credentials in FTP clients, use SSH keys rather than passwords where your hosting supports it, and restrict SFTP access by IP address if your hosting panel allows it. These are hosting-level controls that WordPress plugins cannot address.</p>

      <h2>What shared hosting does not protect against</h2>
      <p>To be specific about the gap your hosting provider's security does not fill:</p>
      <ul>
        <li><strong>Plugin and theme vulnerabilities</strong> — the application running in your account is your responsibility, not your hosting provider's. Outdated plugins with known CVEs are the most common WordPress attack vector and are entirely outside hosting-level security.</li>
        <li><strong>Compromised admin credentials</strong> — if an attacker gains WordPress admin access through brute force, credential stuffing, or phishing, that is an application-layer event. Your hosting provider's server security does not see or prevent it.</li>
        <li><strong>Database-level malware</strong> — JavaScript injected into your WordPress database (post content, widget settings, the options table) is not in a file and is not visible to server-level file scanning. It renders in visitors' browsers as though it were legitimate page content.</li>
        <li><strong>Google Safe Browsing blacklisting</strong> — if your site serves malware to visitors, Google blacklists it. That is your domain's problem, not your hosting provider's server. The hosting provider did not fail; your application security did.</li>
      </ul>

      <h2>GDPR and shared hosting: the compliance dimension</h2>
      <p>UK businesses processing personal data have the same GDPR obligations regardless of their hosting arrangement. A WooCommerce store on shared hosting holds the same customer names, addresses, and payment records as one on a dedicated server. A breach that exposes that data carries the same 72-hour ICO notification obligation and the same potential for enforcement action.</p>
      <p>Shared hosting is not a compliance exemption. "We were on shared hosting" is not a defence to the ICO. The legal obligation to implement appropriate technical measures applies to the data controller — the business — regardless of the infrastructure it runs on. What "appropriate" means in practice depends on the nature and volume of data processed, but for any site handling customer personal data beyond basic contact forms, the hosting security model is part of the technical measures assessment.</p>

      <h2>When to move beyond shared hosting</h2>
      <p>Shared hosting is appropriate when the consequence of a breach is limited and manageable. For most UK small business brochure sites and content blogs, that assessment is reasonable. The calculus changes when:</p>
      <ul>
        <li>The site processes payments or holds payment card data</li>
        <li>The site holds significant volumes of customer personal data (member databases, patient records, client files)</li>
        <li>The site directly generates revenue and downtime has immediate financial impact</li>
        <li>A security incident would carry regulatory notification obligations under UK GDPR or sector-specific rules</li>
        <li>Multiple WordPress sites are consolidated under one hosting account, increasing lateral spread risk</li>
      </ul>
      <p>Entry-level VPS hosting — where each account runs in an isolated virtual machine with dedicated resources — starts from £10–20 per month from UK providers. The isolation benefit is material. Managed WordPress cloud hosting from providers like Kinsta, WP Engine, or Cloudways adds application-layer security controls on top of infrastructure isolation. The question for a UK business is whether the additional cost of better-isolated hosting is proportionate to the risk and the potential consequence of a breach on shared infrastructure.</p>

      <p>If you are assessing your current setup or have concerns about a shared hosting compromise, our <Link href="/wordpress-security-audit">WordPress security audit</Link> covers hosting configuration, account structure, credential hygiene, and application-layer controls as part of a complete risk review.</p>
    </BlogPostLayout>
  );
}
