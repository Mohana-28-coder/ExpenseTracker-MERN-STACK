import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = () => {
  return (
    <>
    <li className='expense-item'>
        <div className='expense-left'>
            <h3 className='expense-title'>Stationary items</h3>
            <p className='expense-meta'>Bills 04-01-2026</p>
        </div>

        <div className='expense-right'>
            <span className='expense-amount'>₹30</span>
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>
        </div>
    </li>
    </>
  )
}

export default ExpenseItem;