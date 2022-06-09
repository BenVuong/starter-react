import React from 'react';
import './ExpenseItem.css';
function ExpenseItem() {
    return (
    <div className="expense-item">
        <div className="expense-item h2 ">
            <h2> Item Title: </h2>
        </div>
        <div className="expense-item__description">
            TV
        </div>
    
    </div>
    );

}

export default ExpenseItem;