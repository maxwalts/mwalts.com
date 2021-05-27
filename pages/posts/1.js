import styles from '../../styles/Home.module.css'


export default function Post1() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    The first one
                </h1>
                <p className={styles.description}>
                    What I'm up to this summer, and why I'm starting this blog.
                </p>

                <p className={styles.body}>
                    There are many reasons to start a blog; some being more compelling than others. I would like to think that my work
                    has had an impact on the world, but the harsh reality is that I have a lot more to learn before I start to make an 
                    impact. I suffer from hobby-attention-deficit-disorder which has prevented me from making significant progress in any
                    one area. I don't want to remain a jack of all trades but master of none... hopefully this space for documenting my 
                    experiences will help me focus and achieve more cool things that align with my long-term values.
                </p>
                <p className={styles.body}>
                    Who am I? Well, my friends call me Max. I'm just a college student who is trying to get his bearings as he prepares to begin his 
                    career. I've recently completed my second year at the University of Michigan and now am on summer break.
                    Unfortunately, it doesn't really feel like break since I'm now working full-time at a computer lab and 
                    campus is completely dead relative to any non-covid affected summer. 
                </p>
                <p className={styles.body}>
                    Part of me wishes that I applied for an investment banking internship this summer since that is the career
                    path I have committed to pursue, but I liked that my
                    job offer as a laboratory assistant on campus guaranteed in-person work every day of the week and let 
                    me play with computers and chemicals all day. My degree will take 5 years to finish anyway, so I see this as
                    an opportunity to do some work that interests me before rushing into work that I feel like I "should" be doing.
                </p>
                <p className={styles.body}>
                    Fortunately, I'm getting more operational experience than I 
                    expected to since I manage purchasing and incoming inventory, lab store, and chemical stocking.
                    It's a real grind to stay consistent with the work since I'm working full 40-hour weeks on my feet and 
                    commuting by blue bus in the bipolar Michigan spring (I got caught in the rain three times this week after
                    scorching dry afternoons...) but I am committed to following through with this job until the end of the summer.
                </p>
                <p className={styles.body}>
                    With no more daily assignments and exams, I've had the time to read more and challenge myself to more difficult runs.
                    You can hear about some of the books I'm reading over on the Pod page (mwalts.com/pod), but I expect to write about some of
                    the texts here as well, since I've already burned through a few dozen of the books I wanted to read this spring.
                </p>
                
                
            </main>

            <footer className={styles.footer}>
                <a href="/blog">&larr; Go back</a>
            </footer>
        </div>
    )
};