const Expense = require("../models/expenseModel");

// POST - create new expense
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    const userId = req.user.id; // comes from JWT/session middleware

    const expense = new Expense({
      title,
      amount,
      category,
      date,
      user_id: userId,
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error creating expense", error });
  }
};

// GET - get all expenses for logged-in user
const getExpenses = async (req, res) => {
  try {
    const userId = req.user.id;
    const expenses = await Expense.find({ user_id: userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

// GET - get expense by ID (only if it belongs to user)
const getExpenseById = async (req, res) => {
  try {
    const userId = req.user.id;
    const expense = await Expense.findOne({ _id: req.params.id, user_id: userId });
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

// PUT - update expense by ID (only if it belongs to user)
const updateExpense = async (req, res) => {
  try {
    const userId = req.user.id;
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user_id: userId },
      req.body,
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error });
  }
};

// DELETE - delete expense by ID (only if it belongs to user)
const deleteExpense = async (req, res) => {
  try {
    const userId = req.user.id;
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, user_id: userId });
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
