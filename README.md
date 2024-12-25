# React Router Dom v6: useNavigate Parameter Error Handling
This repository demonstrates a common error when using the `useNavigate` hook in React Router Dom v6 and provides a solution for handling missing or invalid route parameters.

The bug arises when navigating to a route with parameters without providing the necessary parameters or providing parameters of the incorrect type.  The solution involves adding checks to ensure parameters are valid before navigation.

## Bug
The bug is in `useNavigateBug.js`.  It attempts to navigate to a route requiring an ID without checking if the ID is available. 

## Solution
The solution is provided in `useNavigateBugSolution.js`. It adds checks for the existence and validity of the ID before navigation, preventing the error.