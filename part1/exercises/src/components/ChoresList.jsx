import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
    render() {
        const chores = ["Wash the dishes", "Take out the trash", "Do the laundry"];
        return (
            <div>
                <h3 className={classes.choresHeading}>Chores I Need to Do</h3>
                <ul>
                    <li className={classes.choresText}>{chores[0]}</li>
                    <li className={classes.choresText}>{chores[1]}</li>
                    <li className={classes.choresText}>{chores[2]}</li>
                </ul>
            </div>
        );
    }
}

export default ChoresList;