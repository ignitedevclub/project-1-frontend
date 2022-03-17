import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head><title>Project 1 front-end</title></Head>

            <main className={styles.main}>
                Hello World
                <br/><br/>
                Let&apos;s Code!
            </main>
        </div>
    )
}

export default Home