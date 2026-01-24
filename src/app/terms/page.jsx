import React from 'react';

export const metadata = {
  title: "Terms & Conditions | Rahnimo Interior Design Studio Bangladesh",
  description: "Terms and conditions governing the use of Rahnimo's interior design services in Bangladesh and website. Read our policies on service agreements, intellectual property, and user responsibilities.",
  keywords: [
    "terms and conditions Bangladesh",
    "service agreement Bangladesh",
    "interior design terms Bangladesh",
    "user agreement Bangladesh",
    "design contract Bangladesh",
    "intellectual property Bangladesh",
    "service terms Bangladesh",
    "legal terms Bangladesh",
    "design studio terms Bangladesh",
    "contract terms Bangladesh"
  ],
  openGraph: {
    title: "Terms & Conditions | Rahnimo Interior Design Studio Bangladesh",
    description: "Terms and conditions governing the use of Rahnimo's interior design services in Bangladesh and website. Read our policies on service agreements, intellectual property, and user responsibilities.",
    type: "website",
    url: "https://rahnimo.com/terms",
    images: [
      {
        url: "/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - Rahnimo Interior Design Studio Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Rahnimo Interior Design Studio Bangladesh",
    description: "Read our policies on service agreements, intellectual property, and user responsibilities in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/terms",
  },
};

const TermsPage = () => {
    return (
        <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 24, 2026</p>

            <div className="space-y-8 text-foreground/90 leading-relaxed text-lg">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                    <p>
                        Welcome to Rahnimo ("we," "our," or "us"). By accessing or using our website, services, and products, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services</h2>
                    <p>
                        Rahnimo provides design and development services, including but not limited to web design, branding, and digital product creation. The specific details of the services to be provided will be set forth in a separate agreement or statement of work.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Intellectual Property</h2>
                    <p>
                        Unless otherwise stated, Rahnimo and/or its licensors own the intellectual property rights for all material on Rahnimo. All intellectual property rights are reserved. You may access this from Rahnimo for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>You must not republish material from Rahnimo.</li>
                        <li>You must not sell, rent, or sub-license material from Rahnimo.</li>
                        <li>You must not reproduce, duplicate, or copy material from Rahnimo.</li>
                        <li>You must not redistribute content from Rahnimo.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User Responsibilities</h2>
                    <p>
                        When using our services, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Rahnimo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Rahnimo operates, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:rahnimodesigns@gmail.com" className="text-primary hover:underline">rahnimodesigns@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
