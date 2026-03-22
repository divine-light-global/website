import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://divinelightglobalpathway.com"),
    title: {
        default:
            "Divine Light Global Education Pathways | IELTS, PTE & Study Abroad Consultancy",
        template: "%s | Divine Light Global Education Pathways",
    },
    description:
        "Divine Light Global Education Pathways Pvt. Ltd. — Nepal's trusted IELTS & PTE preparation center and study abroad consultancy. Expert visa guidance, scholarship advice, and university placement for UK, USA, Canada, Australia, New Zealand & Europe.",
    keywords: [
        "IELTS preparation Nepal",
        "PTE preparation Nepal",
        "study abroad consultancy Nepal",
        "visa guidance Nepal",
        "university consultancy Nepal",
        "scholarship advice Nepal",
        "student visa Nepal",
        "study in Australia",
        "study in UK",
        "study in Canada",
        "study in USA",
        "pre-departure support",
        "Japanese language classes Nepal",
        "Divine Light Global Education Pathways",
    ],
    authors: [{ name: "Divine Light Global Education Pathways Pvt. Ltd." }],
    creator: "Divine Light Global Education Pathways Pvt. Ltd.",
    publisher: "Divine Light Global Education Pathways Pvt. Ltd.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://divinelightglobalpathway.com",
        siteName: "Divine Light Global Education Pathways",
        title:
            "Divine Light Global Education Pathways | IELTS, PTE & Study Abroad Consultancy",
        description:
            "Trusted IELTS & PTE preparation and study abroad consultancy in Nepal. We guide students from exam prep to visa success for UK, USA, Canada, Australia & more.",
        images: [
            {
                url: "/images/hero/hero-slide-01.png",
                width: 1200,
                height: 630,
                alt: "Divine Light Global Education Pathways — Your Future, Without Borders",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Divine Light Global Education Pathways | IELTS, PTE & Study Abroad",
        description:
            "Trusted study abroad consultancy & IELTS/PTE prep in Nepal. Expert visa guidance, scholarship advice, university placement.",
        images: ["/images/hero/hero-slide-01.png"],
    },
    alternates: {
        canonical: "https://divinelightglobalpathway.com",
    },
    icons: {
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico",
    },
};

// Root server layout — owns <html> and <body> so the metadata export applies.
// Site-specific providers (ThemeProvider, Header, Footer, etc.) live inside
// the (site)/layout.tsx client component which is nested inside this.
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
