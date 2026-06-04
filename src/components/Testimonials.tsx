import { Star } from 'lucide-react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
    // Real WebAdish client reviews. Keep these genuine — do not add fabricated
    // testimonials. New reviews come from the Google review flywheel (see
    // REVIEW_REQUEST_PLAYBOOK.md). UK GBP review link: https://g.page/r/CQS-1nwWqWtFEBM/review
    const testimonials = [
        {
            name: 'Vashishtha Luxury Fashion',
            role: 'Fashion brand · 3+ years with WebAdish',
            content: 'Webadish is undoubtedly the best service provider in today’s digital industry. From the last 3 years we are extremely happy with their prompt and timely services.',
            rating: 5
        },
        {
            name: 'Shivam Autozone',
            role: 'Automotive dealership',
            content: 'We are really impressed with the amazing website. Such a great company to work with and highly recommended to everyone.',
            rating: 5
        },
        {
            name: 'Triton',
            role: 'eCommerce store',
            content: 'Just wanted to thank you for helping us with the website. You did an amazing job guiding me through the whole process.',
            rating: 5
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Trusted by Industry Leaders</h2>
                    <p>Don&apos;t just take our word for it. Here is what our clients have to say.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.info}>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
