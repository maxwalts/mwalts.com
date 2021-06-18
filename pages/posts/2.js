import styles from '../../styles/Home.module.css'


export default function Post1() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    My first summer alone
                </h1>
                <p className={styles.description}>
                    Perspective of my time at Michigan as of June 2021.
                </p>

                <p className={styles.body}>
                It’s already June 2021. Time feels like it’s flying by faster and faster. Last year was unlike any other, but I overcame the challenges and am entering this next year with many lessons learned. This upcoming fall, I will continue to work toward my LSA degree with a complement of a business degree from the Ross school of business. It has been a difficult path and I still have three years ahead of me, but I am confident that I have chosen the right course of study for my interests. There’s nowhere else I would rather be completing my degree than here at the University of Michigan and I have many people to thank for supporting me this far.
                </p>
                <p className={styles.body}>
                Last winter along with my business core classes, I took a challenging theoretical course on the foundations of computer science. The weekly homework assignments bent and stretched my brain in ways I have never experienced, but I enjoyed the challenges and the friendships I made along the way in my homework group. I also found myself using a logic proof framework to work though the cases we discussed in my business strategy class, which was an awesome interdisciplinary experience for me, representing the unique nature of the degrees LSA offers.
                </p>
                <p className={styles.body}>
                This year, I hope to learn more about finance and management. I hope to challenge myself to code more with side projects and contribute to more startups here at Michigan. I also hope to connect with recruiters of companies that I am interested in working with once I graduate in 2024. I am interested in investment banking as a first career, but I would like to find an employer that gives me the opportunity to apply the computer science education I have received here at Michigan.
                </p>
                <p className={styles.body}>
                I’m excited to get back into the classroom and meet my professors and peers in-person. I believe that the greatest assets Michigan has to offer are the incredible students and inspiring staff, so I expect to have an experience quite different from that of last fall and winter.
                </p>
                
                
            </main>

            <footer className={styles.footer}>
                <a href="/blog">&larr; Go back</a>
            </footer>
        </div>
    )
};