import MainLayout1 from '../layouts/MainLayout1';
import Head from 'next/head';
import Header1 from '../components/Header1';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Know who we are</title>
            </Head>
            <MainLayout1>
                <main>
                    <Header1
                        title={'About Us'}
                        subTitle={'This is the about page'}
                    />
                </main>
            </MainLayout1>
        </>
    );
};

export default AboutPage;
