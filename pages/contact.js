import MainLayout1 from '../layouts/MainLayout1';
import Header1 from '../components/Header1';

const ContactPage = () => {
    return (
        <MainLayout1>
            <main>
                <Header1
                    title={'Contact Us'}
                    subTitle={'This is the contact page'}
                />
            </main>
        </MainLayout1>
    );
};

export default ContactPage;
