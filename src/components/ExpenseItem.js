import React, { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {

    // let title = props.title;

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Text updated");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );

}

export default ExpenseItem;