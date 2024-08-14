import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
    render() {
        const HobbyLinks = ["https://www.nexusmods.com/", "https://store.steampowered.com/" ]
        return (
            <div>
                <h3 className={classes.hobbyHeading}>Hobby Links</h3>
                <ul>
                    <li className={classes.hobbyText}><a href={HobbyLinks[0]}>Nexus Mods</a></li>
                    <li className={classes.hobbyText}><a href={HobbyLinks[1]}>Steam</a></li>
                </ul>
            </div>
        );
    }
}

export default HobbyLinks;