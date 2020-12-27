import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";

export const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <div className="logout-form">
        <h1>
          Welcome <span>{user.name1}</span>
        </h1>
        <button className="btn-Logout" onClick={(e) => handleChange(e)}>
          Logout
        </button>
      </div>
    </>
  );
};
