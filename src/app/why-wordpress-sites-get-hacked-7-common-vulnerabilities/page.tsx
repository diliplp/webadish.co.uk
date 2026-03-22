import { generatePageMetadata } from '@/lib/seo';
import BlogPostLayout from '@/components/BlogPostLayout';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Why WordPress Sites Get Hacked: 7 Most Common Vulnerabilities | WebAdish',
  description:
    'Discover the seven most exploited WordPress vulnerabilities, how attackers find them, and the straightforward fixes that eliminate each risk.',
  path: '/why-wordpress-sites-get-hacked-7-common-vulnerabilities',
  type: 'article',
  publishedTime: '2026-03-03',
  modifiedTime: '2026-03-03',
});

const faqItems = [
  {
    question: 'Is WordPress inherently insecure compared to other CMS platforms?',
    answer:
      'No. WordPress core is actively maintained by a dedicated security team and receives regular patches. The majority of WordPress hacks exploit third-party plugins, weak credentials, or poor hosting configurations rather than the core software itself. Any CMS with the same market share would face comparable attack volumes. The key difference is how well individual site owners maintain their installations.',
  },
  {
    question: 'How quickly do attackers exploit newly discovered vulnerabilities?',
    answer:
      'Exploitation often begins within hours of a vulnerability being publicly disclosed. Automated scanning tools sweep millions of WordPress sites looking for specific plugin versions or known vulnerable endpoints. This is why enabling automatic updates is critical: the window between disclosure and widespread exploitation is shrinking every year.',
  },
  {
    question: 'Can a single vulnerable plugin compromise my entire site?',
    answer:
      'Yes. WordPress plugins run with the same permissions as WordPress core, meaning a vulnerability in one plugin can grant an attacker full access to your database, file system, and administrative functions. This is why removing unused plugins and keeping all active plugins updated is one of the highest-impact security measures you can take.',
  },
  {
    question: 'What should I do if I suspect my site has been compromised?',
    answer:
      'Act immediately. Take a full backup for forensic purposes, then put the site into maintenance mode to prevent further damage. Change all passwords, including WordPress admin, database, FTP, and hosting panel credentials. Then either investigate the infection yourself if you have the expertise, or contact a professional recovery service to handle the cleanup.',
  },
  {
    question: 'How often should I audit my WordPress site for vulnerabilities?',
    answer:
      'Automated security scans should run daily. A thorough manual audit covering plugins, user accounts, file permissions, and server configuration should be conducted at least quarterly. After any significant change, such as installing a new plugin or migrating hosts, run an immediate security review.',
  },
];

export default function WhyWordPressSitesGetHackedPage() {
  return (
    <BlogPostLayout
      title="Why WordPress Sites Get Hacked: 7 Most Common Vulnerabilities"
      lead="Discover the seven most exploited WordPress vulnerabilities, how attackers find them, and the straightforward fixes that eliminate each risk."
      datePublished="2024-10-22"
      dateModified="2026-03-03"
      author="WebAdish"
      category="WordPress Security"
      slug="why-wordpress-sites-get-hacked-7-common-vulnerabilities"
      faqItems={faqItems}
      summaryPoints={[
        'Outdated plugins and themes are responsible for the majority of WordPress compromises.',
        'Weak passwords without two-factor authentication are the easiest entry point for attackers.',
        'Most attacks are automated and opportunistic, not targeted at your specific business.',
        'Each vulnerability has a straightforward fix that does not require advanced technical skill.',
        'A layered security approach addresses all seven vulnerabilities simultaneously.',
      ]}
    >
      <p>
        WordPress is the most popular content management system in the world, powering over 40% of all websites. That popularity makes it the single largest target for automated attacks. Every day, bots scan millions of WordPress installations looking for known vulnerabilities, weak credentials, and misconfigured servers.
      </p>
      <p>
        The good news is that the vast majority of successful attacks exploit a small number of well-understood vulnerabilities. Fix these seven issues, and you eliminate the entry points that account for over 95% of WordPress compromises. This is not theoretical advice; these are the exact vulnerabilities we encounter repeatedly in our <Link href="/hacked-website-recovery-uk">hacked website recovery</Link> work for UK businesses.
      </p>

      <h2>1. Outdated Plugins and Themes: The Number One Attack Vector</h2>
      <h3>How It Works</h3>
      <p>
        Plugins and themes are third-party code that runs with the same permissions as WordPress core. When a security vulnerability is discovered in a plugin, the developer issues a patch and publishes an update. At the same moment, the vulnerability details become public knowledge, and automated exploit tools are updated within hours.
      </p>
      <p>
        If your site is still running the vulnerable version when those scanning tools arrive, the attack is automated and instant. There is no human attacker sitting at a keyboard; it is a bot that has already scanned thousands of sites and will exploit every one it finds.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        Many site owners install plugins and forget about them. Plugins that are no longer actively maintained stop receiving security patches entirely, but they remain installed and active on thousands of sites. The average WordPress site runs between 20 and 30 plugins. Each one is a potential entry point.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Enable automatic updates</strong> for all plugins and themes. WordPress supports this natively from version 5.5 onward.</li>
        <li><strong>Remove every plugin you are not actively using.</strong> Deactivated plugins can still be exploited if the vulnerable files exist on the server.</li>
        <li><strong>Audit plugins quarterly.</strong> Check the last update date for each plugin. If a plugin has not been updated in 12 months, find an alternative that is actively maintained.</li>
        <li><strong>Subscribe to a vulnerability alert service</strong> like WPScan or Patchstack to receive immediate notifications when a plugin you use is affected.</li>
      </ul>

      <h2>2. Weak Passwords and Lack of Two-Factor Authentication</h2>
      <h3>How It Works</h3>
      <p>
        Credential-based attacks come in two forms. Brute-force attacks systematically try password combinations against your login page. Credential stuffing uses username-password pairs leaked from breaches on other platforms, banking on the fact that many people reuse passwords across services.
      </p>
      <p>
        Both attacks are fully automated. A brute-force bot can attempt thousands of password combinations per minute against a standard WordPress login page. If your admin password is anything common, short, or reused from another site, it will eventually be guessed.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        Despite years of security awareness campaigns, weak passwords remain endemic. Common patterns include using the business name, the word &quot;admin&quot;, or simple combinations like &quot;Password123&quot;. The default WordPress username of &quot;admin&quot; makes the problem worse by giving attackers half the credential pair for free.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Enforce passwords of at least 16 characters</strong> with a mix of character types. Use a password manager to generate and store them.</li>
        <li><strong>Mandate two-factor authentication (2FA)</strong> for every account with editor-level access or above. TOTP-based apps like Google Authenticator are more secure than SMS codes.</li>
        <li><strong>Never use &quot;admin&quot; as a username.</strong> Create a unique administrative username and delete the default admin account.</li>
        <li><strong>Limit login attempts</strong> to five per ten-minute window. This stops brute-force attacks without affecting legitimate users.</li>
        <li><strong>Change the default login URL.</strong> Moving <code>/wp-login.php</code> to a custom path dramatically reduces automated bot traffic.</li>
      </ul>

      <h2>3. Insecure Hosting Environments</h2>
      <h3>How It Works</h3>
      <p>
        Your hosting environment is the foundation your WordPress site sits on. If the server is misconfigured, running outdated software, or sharing resources with compromised neighbour sites, no amount of WordPress-level security will protect you.
      </p>
      <p>
        On low value shared hosting, a vulnerability in one site on the server can allow an attacker to traverse to other accounts. Outdated PHP versions (anything below 8.1 in 2026) contain known security vulnerabilities that are no longer patched. Missing server-level protections like a web application firewall leave your site exposed to attacks that could be blocked before they reach WordPress.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        Hosting is often chosen on price alone. The low valueest shared hosting plans pack hundreds of sites onto a single server with minimal isolation between accounts. Site owners rarely check their PHP version, server software versions, or hosting security configuration after the initial setup.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Choose managed WordPress hosting</strong> from a provider that offers account isolation, automated backups, server-level firewalls, and malware scanning.</li>
        <li><strong>Ensure PHP 8.2 or later is active.</strong> Check your hosting panel and upgrade if necessary. If your host does not support modern PHP, it is time to migrate.</li>
        <li><strong>Verify server-level security features:</strong> WAF, DDoS protection, automatic OS patching, and intrusion detection should all be included or configurable.</li>
        <li><strong>Use SFTP instead of FTP</strong> for file transfers. FTP transmits credentials in plain text, making them trivial to intercept.</li>
      </ul>

      <h2>4. Brute-Force Login Attacks</h2>
      <h3>How It Works</h3>
      <p>
        Brute-force attacks specifically target the WordPress login mechanism. Standard bots hit <code>/wp-login.php</code> and <code>/xmlrpc.php</code> with high-volume login attempts. XML-RPC is particularly dangerous because the <code>system.multicall</code> method allows an attacker to try hundreds of passwords in a single HTTP request, bypassing many login-limiting protections.
      </p>
      <p>
        Even when brute-force attacks do not succeed in gaining access, the volume of requests can overwhelm your server, causing performance degradation or downtime that affects legitimate visitors.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        The WordPress login page is at a predictable URL on every installation. Bots do not need to discover it; they already know where it is. XML-RPC is enabled by default on WordPress, providing a powerful amplification vector that many site owners are unaware of.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Disable XML-RPC entirely</strong> unless you specifically need it for the WordPress mobile app or Jetpack. Block it at the server level via <code>.htaccess</code> for maximum effectiveness.</li>
        <li><strong>Implement rate limiting</strong> at both the server and application level. Fail2ban or similar tools at the server level, combined with a WordPress security plugin, provide layered protection.</li>
        <li><strong>Use a web application firewall</strong> that identifies and blocks brute-force patterns before requests reach your server.</li>
        <li><strong>Add CAPTCHA or bot detection</strong> to the login page. Modern CAPTCHA solutions add minimal friction for legitimate users while effectively blocking automated attempts.</li>
        <li><strong>Consider IP-based allowlisting</strong> for the admin area if your team accesses the dashboard from predictable locations.</li>
      </ul>

      <h2>5. SQL Injection Vulnerabilities</h2>
      <h3>How It Works</h3>
      <p>
        SQL injection occurs when an attacker inserts malicious database commands into input fields, URL parameters, or other data that the site passes directly to a database query without proper sanitisation. A successful SQL injection can extract the entire contents of your database, including user credentials, customer data, and content. It can also modify data, create new administrator accounts, or inject malicious content into your posts and pages.
      </p>
      <p>
        WordPress core is well-protected against SQL injection through its prepared statements and sanitisation functions. However, plugins and custom themes frequently fail to sanitise database inputs correctly, creating injection points.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        Many plugin developers are not security specialists. They build features that work but do not follow security best practices for database interactions. Contact form plugins, search features, custom query builders, and any plugin that accepts and processes user input are common injection points.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Keep all plugins updated.</strong> SQL injection vulnerabilities in popular plugins are quickly patched once discovered.</li>
        <li><strong>Use a WAF with SQL injection rules.</strong> A web application firewall can detect and block injection attempts in real time, protecting against both known and zero-day attacks.</li>
        <li><strong>If you develop custom plugins or themes,</strong> always use WordPress&apos;s <code>$wpdb-&gt;prepare()</code> method for all database queries. Never concatenate user input directly into SQL strings.</li>
        <li><strong>Restrict database user permissions.</strong> The WordPress database user should only have the minimum permissions required. It should never have access to other databases on the same server.</li>
        <li><strong>Regularly audit your database</strong> for unexpected administrator accounts, suspicious content injections, or modified options that could indicate a past or ongoing attack.</li>
      </ul>

      <h2>6. Cross-Site Scripting (XSS) in Themes and Plugins</h2>
      <h3>How It Works</h3>
      <p>
        Cross-site scripting attacks inject malicious JavaScript into your web pages. When a visitor loads the affected page, the script executes in their browser with full access to the page content, including cookies, session tokens, and form data.
      </p>
      <p>
        There are two primary types. Stored XSS injects the script into your database (through a comment field, form submission, or vulnerable plugin), where it persists and affects every subsequent visitor. Reflected XSS embeds the script in a crafted URL that, when clicked, executes in the victim&apos;s browser.
      </p>
      <p>
        XSS attacks can steal admin session cookies (granting the attacker full dashboard access), redirect visitors to phishing pages, inject crypto-mining scripts, or modify the visible content of your site.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        XSS vulnerabilities arise from failing to sanitise output, meaning any data displayed on a page that originally came from user input. This includes comments, search results, form field values, URL parameters, and even post titles if they accept unfiltered HTML. Themes with page builders, form plugins, and social features are frequent sources.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Implement Content Security Policy (CSP) headers.</strong> CSP tells browsers which scripts are allowed to execute, blocking injected scripts even if they make it into your page markup.</li>
        <li><strong>Keep themes and plugins updated.</strong> XSS vulnerabilities are among the most frequently patched issues in the WordPress ecosystem.</li>
        <li><strong>Use WordPress escaping functions</strong> in any custom development: <code>esc_html()</code>, <code>esc_attr()</code>, <code>esc_url()</code>, and <code>wp_kses()</code> should be applied to all output.</li>
        <li><strong>Disable HTML in comments</strong> or use a plugin that strips potentially dangerous markup.</li>
        <li><strong>Deploy a WAF</strong> with XSS detection rules to block malicious payloads before they reach your application.</li>
      </ul>

      <h2>7. File Inclusion and Upload Vulnerabilities</h2>
      <h3>How It Works</h3>
      <p>
        File inclusion vulnerabilities allow an attacker to include external files, such as a malicious PHP script hosted on their own server, into your WordPress execution flow. Local File Inclusion (LFI) lets them access files on your server, such as <code>wp-config.php</code>, which contains your database credentials. Remote File Inclusion (RFI) lets them execute arbitrary code from an external source.
      </p>
      <p>
        Upload vulnerabilities exploit media upload functionality, contact form file attachment features, or any plugin that accepts file uploads. If the upload handler does not properly validate file types, an attacker can upload a PHP shell disguised as an image, then access it directly to execute commands on your server.
      </p>
      <h3>Why It Is So Common</h3>
      <p>
        WordPress is designed to let users upload media, and many plugins extend this with document uploads, CSV imports, and file attachment features. Each upload point is a potential vulnerability if the plugin does not rigorously validate file types, check MIME types, and prevent direct execution of uploaded files.
      </p>
      <h3>The Fix</h3>
      <ul>
        <li><strong>Disable PHP execution in the uploads directory.</strong> Add a <code>.htaccess</code> rule or Nginx configuration to prevent any PHP files from running within <code>/wp-content/uploads/</code>.</li>
        <li><strong>Restrict allowed upload file types.</strong> WordPress filters uploads by default, but some plugins override these restrictions. Audit your upload configuration to ensure only necessary file types are permitted.</li>
        <li><strong>Disable <code>allow_url_include</code> in PHP configuration.</strong> This server-level setting prevents remote file inclusion attacks entirely.</li>
        <li><strong>Set proper file permissions.</strong> Uploaded files should never be executable. Directories should be 755 and files 644 at most.</li>
        <li><strong>Monitor the uploads directory</strong> for unexpected PHP, JavaScript, or executable files. Automated file integrity monitoring catches malicious uploads quickly.</li>
      </ul>

      <h2>Bringing It All Together: A Layered Defence Strategy</h2>
      <p>
        No single measure addresses all seven vulnerabilities. Effective WordPress security requires a layered approach where each defence compensates for potential gaps in the others.
      </p>
      <ol>
        <li><strong>Update everything.</strong> Plugins, themes, and WordPress core should update automatically or be updated within 24 hours of a new release.</li>
        <li><strong>Enforce strong authentication.</strong> Complex passwords plus 2FA on all administrative accounts.</li>
        <li><strong>Choose quality hosting.</strong> Managed WordPress hosting with server-level security features.</li>
        <li><strong>Deploy a WAF.</strong> Block common attack patterns before they reach your application.</li>
        <li><strong>Monitor continuously.</strong> Daily malware scans, file integrity monitoring, and uptime checks.</li>
        <li><strong>Maintain backups.</strong> Automated daily backups stored off-site and tested regularly.</li>
        <li><strong>Audit periodically.</strong> A professional <Link href="/wordpress-security-audit">WordPress security audit</Link> catches issues that automated tools miss.</li>
      </ol>
      <p>
        If you are unsure where your site stands on any of these vulnerabilities, a professional audit is the most efficient starting point. Our <Link href="/wordpress-security-audit">security audit service</Link> systematically evaluates every layer of your WordPress installation and provides a prioritised remediation plan.
      </p>

      <h2>What to Do If You Have Already Been Hacked</h2>
      <p>
        If your site is already compromised, the priority shifts from prevention to containment and recovery. Do not attempt to simply patch the vulnerability that was exploited; once an attacker has access, they typically install multiple backdoors to maintain persistence.
      </p>
      <ul>
        <li>Take a full backup immediately for forensic purposes.</li>
        <li>Put the site into maintenance mode to protect visitors and prevent further damage.</li>
        <li>Change all credentials: WordPress admin, database, FTP, hosting panel, and any connected services.</li>
        <li>Engage a professional <Link href="/hacked-website-recovery-uk">hacked website recovery service</Link> to perform a thorough cleanup, or use our dedicated <Link href="/wordpress-malware-removal">malware removal service</Link> for a guaranteed, fixed-fee resolution.</li>
      </ul>
      <p>
        Once recovery is complete, implement the preventive measures described above and consider a <Link href="/wordpress-security-retainer">security retainer</Link> that provides ongoing monitoring and rapid response to future threats.
      </p>

      <FAQ items={faqItems} />
    </BlogPostLayout>
  );
}
