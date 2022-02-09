import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, add, remove, getUserAsync } from "./listSlice";

const List = () => {
  const user = useSelector(selectUser);
  const [userX, setCurrUser] = useState(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  useEffect(() => {
    setCurrUser(userX);
  }, [userX]);

  console.log(user.user, "user");

  return (
    <div>
      <div className={styles.row}>
        Remove User &nbsp;
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(remove())}
        >
          -
        </button>
        &nbsp; Add User &nbsp;
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(add())}
        >
          +
        </button>
      </div>
      <b>Users:</b>

      {user &&
        user.user.length > 0 &&
        user.user.map((item, key) => {
          return (
            <Card border="primary" key={key}style={{ width: "20rem" }}>
              <Card.Header>{item.name}</Card.Header>
              <Card.Body>
                <Card.Title>{item.username}</Card.Title>
                <Card.Text>
                  email:&nbsp;{item.email}
                  <br />
                  website:&nbsp;{item.website}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default List;
