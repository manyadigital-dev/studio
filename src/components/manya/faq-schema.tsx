
import Script from 'next/script';

interface Faq {
    question: string;
    answer: string;
}

export function FaqSchema({ faqs }: { faqs: Faq[] }) {
    if (!faqs || faqs.length === 0) return null;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <Script
            id={`faq-schema-${Math.random().toString(36).substr(2, 9)}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
