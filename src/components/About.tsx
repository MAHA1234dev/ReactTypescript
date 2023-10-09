import { useState } from 'react';
import Children from './children';

function About() {
    return (
        <div>
            About
            <Children>
                <span>
                    This is the content for the react children which can be accessed from
                    the Card component
                </span>
                <p>
                    This is the content for the react children which can be accessed from
                    the Card component
                </p>
            </Children>.
            <Children>
                <span>
                    This is the content for the react children which can be accessed from
                    the Card component
                </span>
                <p>
                    This is the content for the react children which can be accessed from
                    the Card component
                </p>
            </Children>
            <Children>
                <span>
                    This is the content for the react children which can be accessed from
                    the Card component
                </span>
                <p>
                    This is the content for the react children which can be accessed from
                    the Card component
                </p>
            </Children>
        </div>
    )
}

export default About;