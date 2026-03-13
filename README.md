# React Authentication Forms

This project contains a simple **Register Form and Login Form built with React**.

The forms use **React Hook Form** for form state management and **Yup** for validation.

User input is validated and error messages are displayed when fields are invalid.

## Features

### Register Form

* Full Name validation (required, minimum 3 characters)
* Email validation (required, valid email format)
* Password validation (minimum 8 characters and at least 1 number)
* Confirm Password must match Password
* Terms & Conditions checkbox must be checked
* Error messages displayed under each field
* Success message shown after submission
* Form data logged to the console

### Login Form

* Email required
* Password required
* Error messages displayed under fields
* Form reset functionality
* Success message shown after login

## Technologies Used

* React
* React Hook Form
* Yup
* @hookform/resolvers
* CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/elhamatokhi/React-Hook-Form.git
```

Install dependencies:

```bash
npm install
```

Install required form libraries:

```bash
npm install react-hook-form yup @hookform/resolvers
```

Run the development server:

```bash
npm run dev
```

## Usage

* Use the **Register form** to create an account.
* Use the **Login form** to sign in.
* Forms will validate inputs and show error messages if fields are invalid.
* Successful submissions will log data in the browser console.

## Project Structure

```
src/
 ├── components/
 │    ├── RegisterForm.jsx
 │    └── LoginForm.jsx
 │
 ├── validations/
      └── loginSchema.js
 │    └── registerSchema.js
 │
 ├── styles/
 │    ├── register.css
 │    └── login.css
```


## 👤 Author

**Elhama Tokhi**

* GitHub: [@elhamatokhi](https://github.com/elhamatokhi)


## 📄 License

This project is developed for educational purposes as part of a React Router v7 assignment.
