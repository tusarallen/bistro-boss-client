import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-full m-5">
      <h2 className="text-3xl mx-auto">Welcome Back, <span className="font-bold text-[green]">{user?.displayName}</span></h2>
    </div>
  );
};

export default AdminHome;
