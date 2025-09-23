import React from "react";
import UserTable from "./UserTable";

//page.tsx files are conventions which next.js looks for; thus is the only file than can be seen as a page
const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;
