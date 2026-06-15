import type { Metadata } from 'next'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mahoro Boutique Hotel, Vlorë, Albania.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: 'var(--bark)', padding: 'calc(var(--nav-h) + 4rem) var(--gutter) 3.5rem' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Reveal><SectionLabel light>Legal</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,5vw,3.5rem)] mt-4" style={{ color: 'var(--white)' }}>Privacy Policy</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-[0.85rem]" style={{ color: 'rgba(212,196,168,0.6)' }}>Last updated: January 2025</p>
          </Reveal>
        </div>
      </section>

      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto prose-style" style={{ maxWidth: 760 }}>
          {[
            {
              title: '1. Who We Are',
              body: 'Mahoro Boutique Hotel is located at Rruga Egnatia, Lungomare, Vlorë, Albania. This privacy policy explains how we collect, use, and protect your personal data when you interact with our website, make a booking, or contact us.'
            },
            {
              title: '2. What Data We Collect',
              body: 'We collect the following personal data: your name, email address, phone number, and any information you voluntarily provide through our booking form or enquiry forms. We may also collect non-personal data such as browser type and pages visited through standard server logging and analytics tools.'
            },
            {
              title: '3. How We Use Your Data',
              body: 'We use the data you provide to: process and confirm your booking or reservation request; contact you about your stay; respond to enquiries; and, where you have consented, send you relevant updates or offers about the hotel. We do not sell, rent, or share your personal data with third parties except where required by law or by the direct necessity of fulfilling your booking (e.g., processing payments via a secure third-party provider).'
            },
            {
              title: '4. Legal Basis for Processing',
              body: 'We process your personal data on the basis of: (a) contractual necessity — to fulfil your booking; (b) legitimate interests — to manage our business and communicate with guests; (c) consent — where you have explicitly opted in to communications. You may withdraw consent at any time by contacting us.'
            },
            {
              title: '5. Data Retention',
              body: 'We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Booking records are retained for a minimum of 5 years for financial and tax compliance purposes.'
            },
            {
              title: '6. Cookies',
              body: 'Our website may use cookies to improve your browsing experience and to understand how the site is used. These are standard, non-intrusive cookies. You can disable cookies in your browser settings, though this may affect functionality.'
            },
            {
              title: '7. Your Rights',
              body: 'You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data where no legal obligation requires us to retain it; object to processing; and to data portability. To exercise any of these rights, please contact us at info@mahoroboutique.al.'
            },
            {
              title: '8. Security',
              body: 'We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. All data transmitted through our booking form is encrypted.'
            },
            {
              title: '9. Third-Party Links',
              body: 'Our website may contain links to third-party websites (such as Booking.com or Google Maps). We are not responsible for the privacy practices of those sites and encourage you to read their own privacy policies.'
            },
            {
              title: '10. Contact',
              body: 'For any questions about this privacy policy or how we handle your data, please contact us at: info@mahoroboutique.al, or by post at: Mahoro Boutique Hotel, Rruga Egnatia, Lungomare, Vlorë 9401, Albania.'
            },
          ].map((section) => (
            <Reveal key={section.title}>
              <div className="mb-10">
                <h2 className="font-[family-name:var(--font-head)] italic text-[1.2rem] mb-3" style={{ color: 'var(--bark)' }}>{section.title}</h2>
                <p className="text-[0.88rem] leading-[1.9]" style={{ color: 'var(--ink-mid)' }}>{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
