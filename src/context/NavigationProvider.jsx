import {useRef} from 'react';
import NavigationContext from './NavigationContext.jsx';

const NavigationProvider = ({children}) => {
    const homeRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    const navItems = [
        {name: 'Home', ref: homeRef},
        {name: 'Experience', ref: experienceRef},
        {name: 'Contact Me', ref: contactRef},
    ];

    return (
        <NavigationContext.Provider value={navItems}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationProvider;