import React, { useState } from 'react';
import Bar from './Bar';

import data from '../data.json';

function MainCard() {

    const [today] = useState(new Date().toLocaleDateString('en-US', {
        weekday: 'short',
    }).toLowerCase())

    console.log(today)

    const bars = data.map(item => <Bar today={today} day={item.day} value={item.amount} />)

    return (
        <div className="main-container">
            <header>
                <h1>Spending - Last 7 days</h1>
            </header>
            <main>
                {bars}
            </main>
            <hr />
            <footer>
                <div className="total-spent">
                    <p>Total this month</p>
                    <p className="amount-spent">$478.33</p>
                </div>
                <div className="last-month-change">
                    <p className='lastmonth-delta'>+2.4%</p>
                    <p>from last month</p>
                </div>
            </footer>
        </div>
    )
}

export default MainCard;
