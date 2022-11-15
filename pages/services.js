import MainLayout1 from '../layouts/MainLayout1';
import Head from 'next/head';
import Header1 from '../components/Header1';

const ServicesPage = () => {
    return (
        <>
            <Head>
                <title>Our services</title>
            </Head>
            <MainLayout1>
                <main>
                    <Header1
                        title={'Our Services'}
                        subTitle={'This is the services page'}
                    />
                </main>
            </MainLayout1>
        </>
    );
};

export default ServicesPage;
