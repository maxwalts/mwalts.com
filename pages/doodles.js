import styles from '../styles/Home.module.css'
import Instagram from "instagram-web-api"


// empty array of instagram posts is being
// passed as a prop into the Index component
export default function Index({ instagramPosts }) {
    return <div className={styles.grid}>{/*Other Page Content*/}</div>
  }
  
  export async function getStaticProps(context) {
    // set posts to an empty array as a placeholder
    let posts = []
    return {
      props: {
        // return the posts as the prop instagramPosts
        // for the Index function to use
        instagramPosts: posts,
      },
    }
  }
//   Setup Instagram Client Authentication
//   Before we can retrieve data from Instagram we should set up authentication instagram-web-api in getStaticProps() to be able to fetch data from Instagram. We can accomplish this by setting up a new Instagram client with new Instagram({username: IG_USERNAME, password: IG_PASSWORD}) and attempting to log in with await client.login()
  
  export async function getStaticProps(context) {
    // create a new client to communicate with  Instagram
    // this service requires authentication
    //with username and password parameters
    const client = new Instagram({
      username: process.env.IG_USERNAME,
      password: process.env.IG_PASSWORD,
    })
  
    let images = []
    try {
      // attempt to log in to Instagram
      await client.login()
    } catch (err) {
      // throw an error if login to Instagram fails
      console.log("Something went wrong while logging into Instagram", err)
    }
  
    return {
      props: {
        instagramPosts: images,
      },
    }
  }