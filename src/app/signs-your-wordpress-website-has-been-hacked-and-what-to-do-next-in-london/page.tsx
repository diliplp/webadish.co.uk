import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata = generatePageMetadata({
  title: 'How to Know If Your WordPress Site Has Been Hacked: 10 Signs to Check',
  description: 'Learn how to tell if your WordPress site has been hacked, the 10 warning signs to check, and what UK businesses should do in the first hour after discovery.',
  path: '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london',
  type: 'article',
  publishedTime: '2025-06-15',
  modifiedTime: '2026-03-08',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Signs Your WordPress Site Has Been Hacked', url: '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london' },
]);

const articleSchema = generateArticleSchema(
  'How to Know If Your WordPress Site Has Been Hacked: 10 Signs to Check',
  'Learn how to tell if your WordPress site has been hacked, the 10 warning signs to check, and what UK businesses should do in the first hour after discovery.',
  '2025-06-15',
  '2026-03-08',
  '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london'
);

const faqSchema = generateFAQSchema([
  {
    question: 'How do I know if my WordPress site has been hacked?',
    answer: 'Common signs include: unexpected redirects to spam sites, Google showing a "This site may be hacked" warning, unknown admin users appearing, sudden drop in Google rankings, visitors reporting malware warnings, and your hosting provider suspending your account.',
  },
  {
    question: 'How do I fix a hacked WordPress site in the UK?',
    answer: 'Steps to fix a hacked WordPress site: 1) Take your site offline or put it in maintenance mode. 2) Take a full backup. 3) Reset all admin passwords. 4) Scan for malware using a security plugin. 5) Remove malicious files and backdoors. 6) Update all plugins, themes and WordPress core. 7) Request Google to review your site after cleanup. Or contact a professional recovery service for same-day help.',
  },
  {
    question: 'How long does WordPress hack recovery take?',
    answer: 'Most WordPress hacks can be cleaned within 4-24 hours by a professional. DIY recovery can take longer, especially if backdoors have been planted. The WebAdish emergency recovery service restores most sites within 4-12 hours.',
  },
  {
    question: 'Will I lose my content if my WordPress site is hacked?',
    answer: 'Not necessarily. In most cases, hackers inject malicious code rather than deleting content. A professional recovery service will take a backup first, then clean the files, preserving your pages, posts and media.',
  },
  {
    question: 'How much does it cost to fix a hacked WordPress site in the UK?',
    answer: 'Professional WordPress hack recovery in the UK typically costs between £500-£2,000 depending on the severity. WebAdish charges a fixed fee of £1,499 which includes complete malware removal, blacklist removal and a 30-day guarantee.',
  },
]);

export default function PostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogPostLayout
        title="How to Know If Your WordPress Site Has Been Hacked"
        lead="If your WordPress site is behaving strangely, it may already be compromised. These are the 10 signs to check first, plus what to do in the first hour to limit damage."
        datePublished="2024-09-10"
        dateModified="2026-03-08"
        category="Recovery"
        slug="signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london"
        summaryPoints={[
          'Hackers often stay hidden for weeks — your site can look normal while spreading malware',
          'Google blacklisting can kill your traffic overnight and damage customer trust',
          'Most UK businesses can have their site fully recovered within 4-24 hours',
        ]}
      >
        <h2>Why WordPress sites get hacked</h2>
        <p>WordPress powers over 40% of the web, which makes it the most targeted CMS by attackers. The most common entry points are outdated plugins, weak admin passwords, nulled themes, and insecure hosting environments. UK businesses are targeted just as frequently as any other market — and the consequences of a breach are serious: lost revenue, damaged SEO rankings, GDPR exposure, and customer trust erosion.</p>

        <h2>10 warning signs your WordPress site has been hacked</h2>
        <p>Many hacks are designed to be invisible to site owners while actively harming visitors or exploiting your server. Watch for these signs:</p>
        <ol>
          <li><strong>Unexpected redirects</strong> — Visitors are sent to spam, gambling or adult sites instead of your pages.</li>
          <li><strong>Google Safe Browsing warning</strong> — A red warning screen appears before your site saying &quot;This site may harm your computer.&quot;</li>
          <li><strong>&quot;This site may be hacked&quot;</strong> — Google shows this message beneath your listing in search results.</li>
          <li><strong>Unknown admin users</strong> — New WordPress administrator accounts appear that you did not create.</li>
          <li><strong>Sudden SEO ranking drop</strong> — Your positions fall sharply overnight without any site changes.</li>
          <li><strong>Hosting account suspended</strong> — Your host has taken the site offline due to malware or spam activity.</li>
          <li><strong>Spam emails being sent</strong> — Contacts report receiving spam that appears to come from your domain.</li>
          <li><strong>Injected links or content</strong> — Hidden links to third-party sites appear in your footer, posts or source code.</li>
          <li><strong>New or modified files</strong> — Files in wp-admin, wp-includes or your theme folder have been recently changed without your knowledge.</li>
          <li><strong>Site loading slowly or crashing</strong> — Malicious scripts using your server resources cause performance issues.</li>
        </ol>

        <h2>Immediate actions — what to do in the first hour</h2>
        <p>If you suspect your site has been hacked, act fast. Every hour increases the damage to your SEO, your visitors and your GDPR standing.</p>
        <ol>
          <li><strong>Take a full backup immediately</strong> — Even a hacked backup is useful. Use your hosting control panel or a plugin to snapshot the current state.</li>
          <li><strong>Put the site in maintenance mode or take it offline</strong> — Prevent visitors from being exposed to malware while you investigate.</li>
          <li><strong>Change all passwords</strong> — Reset WordPress admin, FTP/SFTP, cPanel, and your database password. Use unique, strong passwords for each.</li>
          <li><strong>Revoke suspicious admin accounts</strong> — Delete any user accounts you do not recognise in WordPress &rsaquo; Users.</li>
          <li><strong>Notify your hosting provider</strong> — They can scan at the server level and may have clean backups you can restore from.</li>
          <li><strong>Scan for malware</strong> — Use Wordfence, MalCare or Sucuri to run a file scan and identify infected files.</li>
          <li><strong>Remove malicious files and backdoors</strong> — This is the hardest step — backdoors are often hidden in legitimate-looking files and will re-infect your site if missed.</li>
          <li><strong>Update everything</strong> — WordPress core, all plugins, all themes. Remove any you are not using.</li>
          <li><strong>Request Google review</strong> — Once clean, submit your site in Google Search Console under Security Issues to request removal of the &quot;hacked&quot; label.</li>
        </ol>

        <h2>Why DIY recovery often fails</h2>
        <p>The most dangerous part of a WordPress hack is the backdoor — a hidden piece of code that allows attackers to re-enter even after you think you have cleaned the site. Backdoors are frequently placed in multiple locations: inside image directories, disguised as plugin files, encoded in database entries, or embedded in legitimate WordPress core files. If even one is missed, your site will be reinfected within days.</p>
        <p>Professional recovery services know exactly where to look. They also handle Google blacklist removal, which requires specific steps and can take 1-3 days if done correctly — or weeks if done wrong.</p>

        <h2>How to fix a hacked WordPress site in the UK — professional recovery</h2>
        <p>If you need your site back online quickly, professional recovery is the most reliable option. A specialist service will:</p>
        <ul>
          <li>Take a forensic backup before touching anything</li>
          <li>Identify all malware, injected code and backdoors</li>
          <li>Clean every infected file without deleting your content</li>
          <li>Harden your WordPress configuration against future attacks</li>
          <li>Remove your domain from Google, McAfee and other blacklists</li>
          <li>Provide a post-recovery report with the root cause</li>
        </ul>
        <p>WebAdish offers a fixed-fee emergency recovery service for UK businesses — most sites are restored within 4-12 hours. The service includes a 30-day guarantee: if your site is reinfected within 30 days, we clean it again at no charge.</p>

        <h2>After recovery — how to prevent being hacked again</h2>
        <ul>
          <li>Enable two-factor authentication on all admin accounts</li>
          <li>Use a Web Application Firewall (WAF) such as Cloudflare or Sucuri</li>
          <li>Keep WordPress, plugins and themes updated — ideally with automated updates</li>
          <li>Run monthly security audits to catch vulnerabilities before attackers do</li>
          <li>Use a security retainer service for ongoing monitoring and peace of mind</li>
        </ul>
        <p>
          If you already know the site is compromised, move straight to our <a href="/hacked-website-recovery-uk">hacked website recovery UK</a> service page. If the malware keeps returning after cleanup, read <a href="/wordpress-site-keeps-getting-hacked">why WordPress sites keep getting hacked</a> to diagnose the likely backdoor or access path still being missed.
        </p>
      </BlogPostLayout>
    </>
  );
}
