import { Footer } from '../components/footer';
import { Pulse } from '../components/pulse';
import About from '../components/views/about';
import Contact from '../components/views/contact';
import Home from '../components/views/home';
import Mission from '../components/views/mission';
import Portfolio from '../components/views/portfolio';
import { Proficiencies } from '../components/views/proficiencies';
import Reviews from '../components/views/reviews';
import Services from '../components/views/services';

export default function Page() {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Mission />
            <Pulse />
            <Reviews />
            <Proficiencies />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}
