import React, { useState } from "react";
import { TextField, Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { conductTransaction } from "../actions/blockchain";
import { useHistory } from 'react-router-dom'
import useStyles from "./styles";

let initialState = {
  recipient: "",
  amount: 0,
};

const Form = () => {
  const [transactionData, setTransactionData] = useState(initialState);

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  // Clears form and sets currentId to null
  const clear = () => {
    setTransactionData(initialState);
  };

  // on change, saving data in initialState form state object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData((e) => ({ ...e, [name]: value }));
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(transactionData)
    dispatch(conductTransaction({...transactionData}));
    alert('success')
    clear();
    history.push('/transaction-pool')
  };

  // destructured values from transaction
  const { recipient, amount } = transactionData;

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          name="recipient"
          variant="outlined"
          label="Recipient"
          fullWidth
          value={recipient}
          onChange={handleChange}
        />
        <TextField
          name="amount"
          variant="outlined"
          label="amount"
          fullWidth
          value={amount}
          onChange={handleChange}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={classes.buttonClear}
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
