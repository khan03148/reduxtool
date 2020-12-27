// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slice";

// export const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     e.preventDefault();
//     dispatch(
//       login({
//         name: name,
//         email: email,
//         password: password,
//         islogin: true,
//       })
//     );
//   };
//   return (
//     <>
//       <form className="form" onSubmit={(e) => handleChange(e)}>
//         <h1>Login Form !!</h1>
//         <br />
//         <input
//           name="name"
//           type="input"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           name="email"
//           type="input"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="btn-login">
//           Login
//         </button>
//       </form>
//     </>
//   );
// };

import React, { useState } from "react";
import { login } from "../redux/slice";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name1,
        email,
        password,
        islogin: true,
      })
    );
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={(e) => handleChange(e)}>
        <input
          type="text"
          name="name1"
          placeholder="name"
          value={name1}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
