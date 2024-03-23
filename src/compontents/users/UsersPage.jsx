import React from "react";
 import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import BasicTable from "./BasicTable";

const UsersPage = () => {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <h2>Users</h2>
      <BasicTable></BasicTable>
    </div>
  );
};

export default UsersPage;
