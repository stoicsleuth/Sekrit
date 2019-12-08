const createProfile = ({ firestore }, todo) => {
  return (dispatch) => {
    firestore
      .collection("todos")
      .add(todo)
      .then(() => {
        console.log("Then it was done");
        dispatch({ type: 'CREATE_PROFILE', todo });
      })
      .catch(err => {
        console.log(err)
      });
  };
}

export default createProfile