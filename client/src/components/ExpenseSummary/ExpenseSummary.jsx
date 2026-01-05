import React from 'react'
import "./ExpenseSummary.css"

const ExpenseSummary = () => {
  return (
    <>
    <section className='expense-summary-section'>
        <div className='summary-card'>
            <h3>Total Expenses</h3>
            <p className='summary-amount'>₹1000</p>
        </div>

        <div className='summary-card'>
            <h3>This Month</h3>
            <p className='summary-amount'>₹25000</p>
        </div>
    </section>
    </>
  )
}

export default ExpenseSummary;