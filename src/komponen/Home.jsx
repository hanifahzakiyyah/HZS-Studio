import { useEffect, useState } from 'react';
import Hero from './Hero.jsx'
import Porto from './Porto.jsx'
import Navbar from './Navbar';

export default function Home(){

    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
      document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    }, [scrollEnabled]);


    return (<>
        {scrollEnabled && <Navbar />}
        <Hero setScrollEnabled={setScrollEnabled}/>
        <Porto />
    </>
    )
}