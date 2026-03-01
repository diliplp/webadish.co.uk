import { Star } from 'lucide-react';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'Marketing Director, TechGrowth UK',
            content: 'Webadish saved our agency site after a severe malware attack. They restored everything within 4 hours and secured it against future threats. Absolutely invaluable service.',
            rating: 5
        },
        {
            name: 'Michael Clarke',
            role: 'Founder, Clarke Digital Australia',
            content: 'The ongoing maintenance plans give me complete peace of mind. I no longer worry about updates breaking my client sites. fast, professional, and reliable.',
            rating: 5
        },
        {
            name: 'Emma Thompson',
            role: 'CEO, Creative London',
            content: 'Their security review was an eye-opener. We implemented all recommendations and site speed improved by 40% as a bonus. Highly recommended for any serious business.',
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
