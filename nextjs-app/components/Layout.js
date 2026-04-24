import Header from './Header';
import Footer from './Footer';
import Animations from './Animations';

export default function Layout({ children }) {
  return (
    <>
      <Animations />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
