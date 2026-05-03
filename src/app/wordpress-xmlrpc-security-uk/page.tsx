import { generatePageMetadata } from '@/lib/seo';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata = generatePageMetadata({
  title: 'WordPress XML-RPC: The Attack Vector UK Business Sites Should Close',
  description:
    'XML-RPC is enabled by default on every WordPress site and almost no UK business needs it. Here is how attackers exploit it, how to confirm your exposure, and how to disable it safely.',
  path: '/wordpress-xmlrpc-security-uk',
  type: 'article',
  publishedTime: '2026-04-24',
  modifiedTime: '2026-04-24',
});

const faqItems = [
  {
    question: 'Will disabling XML-RPC break my WordPress site?',
    answer:
      'For the vast majority of UK business sites, no. The only legitimate uses still relying on XML-RPC are older Jetpack installations, legacy desktop publishing clients, and custom integrations built before the REST API. Disable it, monitor for 48 hours, and restore if something breaks. In practice, almost nothing breaks — and the security benefit is immediate.',
  },
  {
    question: 'Does Wordfence or another security plugin protect against XML-RPC attacks?',
    answer:
      'Not by default. Most WordPress security plugins apply rate limiting and login protection at wp-login.php but leave XML-RPC unprotected unless explicitly configured. Wordfence has a specific XML-RPC setting under Brute Force Protection that must be manually enabled. Do not assume login protection at the standard login page extends to XML-RPC.',
  },
  {
    question: 'Can I see if XML-RPC is being attacked on my site?',
    answer:
      'Yes — search your server access logs for POST requests to /xmlrpc.php. On most exposed WordPress sites you will find multiple attempts per day. On actively targeted sites, hundreds or thousands per hour. Your hosting control panel (cPanel, Plesk) typically provides access to raw access logs where you can check this directly.',
  },
  {
    question: 'Is XML-RPC the same as the WordPress REST API?',
    answer:
      'No. XML-RPC is an older protocol that predates the REST API. The WordPress REST API (introduced in WordPress 4.7) is the modern replacement and is significantly better designed from a security standpoint. Disabling XML-RPC has no effect on the REST API. They are separate systems.',
  },
];

export default function PostPage() {
  return (
    <BlogPostLayout
      title="WordPress XML-RPC: The Attack Vector UK Business Sites Should Close"
      lead="XML-RPC is a legacy WordPress feature that predates the REST API. It is enabled on every WordPress installation by default, almost no UK business site needs it in 2026, and it remains one of the most actively exploited attack vectors against WordPress. Closing it takes five minutes."
      datePublished="2026-04-24"
      dateModified="2026-04-24"
      category="WordPress Security"
      slug="wordpress-xmlrpc-security-uk"
      faqItems={faqItems}
      summaryPoints={[
        'XML-RPC is enabled by default on every WordPress site but is needed by almost none',
        'Attackers use it to brute-force credentials at scale, bypassing most login protection plugins',
        'It can also be exploited for DDoS amplification — turning your site into a tool used against others',
        'Disabling it at the server level closes the vector entirely with no effect on normal site operation',
      ]}
    >
      <h2>What XML-RPC is and why it still exists</h2>
      <p>XML-RPC (<code>xmlrpc.php</code>) was WordPress's original remote interface — a protocol that allowed external applications to publish posts, upload media, and manage comments without using the admin dashboard. It was how the WordPress mobile app communicated with self-hosted sites before the REST API existed. Desktop blogging clients like Windows Live Writer used it. Third-party services used it for automated publishing.</p>
      <p>WordPress replaced XML-RPC with the REST API in version 4.7 (2016). The mobile app moved to the REST API in 2019. Most legitimate integrations that used XML-RPC have since been updated. WordPress has kept XML-RPC active for backwards compatibility — but it remains the site operator's responsibility to disable it if it is not needed, which for most UK business sites, it is not.</p>

      <h2>How attackers exploit XML-RPC against UK WordPress sites</h2>

      <h3>Brute force login amplification</h3>
      <p>The most exploited XML-RPC vulnerability uses the <code>system.multicall</code> method, which allows multiple authentication requests to be bundled into a single HTTP POST. An attacker can test hundreds of username and password combinations in one request — making XML-RPC an efficient credential testing tool that operates at a scale no rate-limited login page allows.</p>
      <p>The critical problem for UK sites: most WordPress security plugins, including Wordfence, apply login attempt limits at <code>wp-login.php</code>. Unless XML-RPC protection is explicitly enabled, the XML-RPC endpoint is unguarded. An attacker can test thousands of credential combinations through XML-RPC while the standard login page is fully protected. This is a common attack pattern on UK business sites and consistently bypasses standard login security setups.</p>

      <h3>DDoS amplification using your site as a weapon</h3>
      <p>XML-RPC includes a pingback feature that causes WordPress to send HTTP requests to third-party URLs. Attackers who have compromised a network of WordPress sites — or who can trigger pingbacks without authentication — can direct thousands of WordPress installations to simultaneously send requests to a target URL. The traffic appears to originate from legitimate WordPress sites on ordinary hosting, making it difficult to filter.</p>
      <p>Your site becomes a participant in a distributed attack against another organisation. Beyond the ethical dimension, this generates excessive outbound traffic that hosting providers may penalise, and your domain's IP reputation can be affected by association with the attack traffic.</p>

      <h3>Server-side request forgery</h3>
      <p>The pingback mechanism can be used to instruct your WordPress server to fetch internal URLs — addresses that are not publicly accessible but that your hosting server can reach. On certain hosting configurations, this can expose internal services, admin interfaces running on non-standard ports, or other resources on the hosting network. This is a server-side request forgery (SSRF) vector that requires XML-RPC to be exposed.</p>

      <h2>How to confirm XML-RPC is exposed on your site</h2>
      <p>Visit <code>https://yoursite.co.uk/xmlrpc.php</code> directly in a browser. If the response is a message saying "XML-RPC server accepts POST requests only," the endpoint is live and accessible. If you receive a 403 Forbidden or 404 Not Found, it has been blocked or disabled.</p>
      <p>To check whether it is being actively targeted, access your server's access logs (available in cPanel under Logs, or from your hosting provider) and search for <code>POST /xmlrpc.php</code>. Any volume above a few entries per week warrants immediate action.</p>

      <h2>How to disable XML-RPC safely</h2>

      <h3>Option 1: Block at server level via .htaccess (recommended for Apache hosting)</h3>
      <p>Add the following to your <code>.htaccess</code> file in your WordPress root directory:</p>
      <pre><code>{`<Files xmlrpc.php>
  Order Deny,Allow
  Deny from all
</Files>`}</code></pre>
      <p>This blocks access to the file at the web server level before PHP executes. It is the most complete mitigation — no request reaches the WordPress application at all.</p>

      <h3>Option 2: Block via Nginx configuration</h3>
      <p>If your hosting uses Nginx (common on cloud and VPS hosting), add to your server block:</p>
      <pre><code>{`location = /xmlrpc.php {
    deny all;
    access_log off;
    log_not_found off;
}`}</code></pre>

      <h3>Option 3: Disable via security plugin</h3>
      <p>If you do not have direct server configuration access, security plugins can disable XML-RPC at the application level. In Wordfence: Tools → All Options → Brute Force Protection → Disable WordPress XML-RPC authentication. The dedicated <strong>Disable XML-RPC</strong> plugin provides a simple toggle. Note that plugin-level blocking is less robust than server-level blocking — the request still reaches PHP — but it is significantly better than leaving XML-RPC fully open.</p>

      <h3>Option 4: Disable via functions.php</h3>
      <p>Adding <code>add_filter('xmlrpc_enabled', '__return_false');</code> to your child theme's <code>functions.php</code> disables XML-RPC authentication but does not block all pingback functionality and still allows the file to receive HTTP requests. This is the weakest mitigation and should only be used where server-level access is not available and no security plugin is installed.</p>

      <h2>When XML-RPC might still be legitimately needed</h2>
      <p>Before disabling, verify nothing in your setup still relies on XML-RPC:</p>
      <ul>
        <li><strong>Jetpack</strong> — some older Jetpack features used XML-RPC. Current Jetpack versions use the REST API, but if you are running an older version, check before disabling.</li>
        <li><strong>Third-party publishing tools</strong> — desktop blogging clients or content scheduling tools built before 2016 may still use XML-RPC. These are increasingly rare in UK business environments but worth checking if you use any third-party publishing workflow.</li>
        <li><strong>Custom integrations</strong> — bespoke integrations built specifically against the XML-RPC endpoint. If in doubt, disable and monitor — a broken integration will be immediately apparent.</li>
      </ul>
      <p>In our experience across UK client sites, fewer than 5% of business WordPress installations have any legitimate dependency on XML-RPC. The remainder can disable it immediately.</p>

      <h2>XML-RPC in the context of UK GDPR obligations</h2>
      <p>If an attacker successfully compromises admin credentials via an XML-RPC brute force and then accesses customer data — order history, contact details, payment information — the resulting data breach carries UK GDPR notification obligations. The ICO must be notified within 72 hours if the breach is likely to result in a risk to individuals' rights and freedoms. Admin access to a WooCommerce or membership site typically meets that threshold.</p>
      <p>Disabling XML-RPC eliminates one specific credential attack vector. It does not eliminate all vectors — strong passwords and two-factor authentication remain essential — but it removes an exposure that is straightforwardly closed with no downside for almost all UK business sites.</p>
    </BlogPostLayout>
  );
}
