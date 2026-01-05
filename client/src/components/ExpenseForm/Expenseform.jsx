import React from "react";
import "./ExpenseForm.css";
import { IoBagAdd } from "react-icons/io5";

const ExpenseForm = () => {
    return (
        <section className="expense-form-section">
            <form className="expense-form">
                
                <div className="title">
                    <IoBagAdd className="add-icon" />
                    <h2>Add New Expense</h2>
                </div>

                <div className="form-control">
                    <label>Title</label>
                    <input type="text" />
                </div>

                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" />
                </div>

                <div className="form-control">
                    <label>Category</label>
                    <select>
                        <option value="">Select</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                    </select>
                </div>

                <div className="form-control">
                    <label>Date</label>
                    <input type="date" />
                </div>

                <button type="submit" className="btn-primary">
                    Add Expense
                </button>

            </form>
        </section>
    );
};

export default ExpenseForm;
