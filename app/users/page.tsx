import React from "react";

interface User {
  id: number;
  name: string;
}

//page.tsx files are conventions which next.js looks for; thus is the only file than can be seen as a page
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
