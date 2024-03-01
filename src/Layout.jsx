import {AppHeader} from './components/header';
import PropTypes from 'prop-types';
import {useEffect} from "react";

export default function Layout({children}) {

    useEffect(() => {
        const disableScrollClickDrag = (mouseEvent) => {
            if (mouseEvent.button !== 1) {
                return;
            }

            mouseEvent.preventDefault();
            mouseEvent.stopPropagation();
        };

        window.addEventListener("mousedown", disableScrollClickDrag);

        return () =>
            window.removeEventListener("mousedown", disableScrollClickDrag);
    }, []);

    return (
        <div>
            <AppHeader/>
            <main>{children}</main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};