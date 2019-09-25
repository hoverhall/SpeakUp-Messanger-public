// module and libs
import React from 'react';

// components
import MessJournal from './messageJournal';
import CompanionShirtInfo from './companionShirtInfo';

export default () => {
    return (
        <div className="top-bar">
            <CompanionShirtInfo />
            <MessJournal />
        </div>
    )
}