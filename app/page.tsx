import { Inter } from '@next/font/google';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Portfolio from '../components/Portfolio/Portfolio';
import MySkills from '../components/Skills/Skills';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <MySkills />
      <Portfolio />
      <Contact />
    </main>
  );
}
