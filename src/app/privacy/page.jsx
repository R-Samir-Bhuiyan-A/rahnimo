import React from 'react';

export const metadata = {
  title: "Privacy Policy | Rahnimo Interior Design Bangladesh",
  description: "Rahnimo's privacy policy outlining how we collect, use, and protect your personal information when you use our interior design services in Bangladesh and website.",
  keywords: [
    "privacy policy Bangladesh",
    "data protection Bangladesh",
    "information collection Bangladesh",
    "user privacy Bangladesh",
    "interior design privacy Bangladesh",
    "data security Bangladesh",
    "personal information Bangladesh",
    "cookie policy Bangladesh",
    "gdpr compliance Bangladesh",
    "privacy notice Bangladesh"
  ],
  openGraph: {
    title: "Privacy Policy | Rahnimo Interior Design Bangladesh",
    description: "Rahnimo's privacy policy outlining how we collect, use, and protect your personal information when you use our interior design services in Bangladesh and website.",
    type: "website",
    url: "https://rahnimo.com/privacy",
    images: [
      {
        url: "/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Rahnimo Interior Design Studio Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Rahnimo Interior Design Bangladesh",
    description: "Learn how we collect, use, and protect your personal information in Bangladesh.",
  },
  alternates: {
    canonical: "https://rahnimo.com/privacy",
  },
};

const PrivacyPage = () => {
    return (
        <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: January 24, 2026</p>

            <div className="space-y-8 text-foreground/90 leading-relaxed text-lg">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                    <p>
                        At Rahnimo, accessible from rahnimo.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rahnimo and how we use it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                    <p>
                        We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                    </p>
                    <p className="mt-4">
                        The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Name and Contact Data (Email address, phone number, etc.)</li>
                        <li>Project details and requirements provided via forms.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                    <p>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Log Files</h2>
                    <p>
                        Rahnimo follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third Party Privacy Policies</h2>
                    <p>
                        Rahnimo's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Security</h2>
                    <p>
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:rahnimodesigns@gmail.com" className="text-primary hover:underline">rahnimodesigns@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPage;
