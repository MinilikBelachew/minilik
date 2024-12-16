// pages/index.js
import Head from 'next/head';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skill';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Head>
        <title>Minilik Belachew - Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <div className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}