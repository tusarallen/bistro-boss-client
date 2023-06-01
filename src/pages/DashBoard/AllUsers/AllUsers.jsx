import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };

  const handleRemoveAdmin = (user) => {
    axiosSecure
      .put(`/users/admin/${user._id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is remove from admin now!`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
      });
  };
  const handleDelete = (user) => {};

  return (
    <div className="w-full ml-12">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-2xl font-bold mb-5">Total Users: {users.length}</h3>
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="font-bold btn-warning text-xl rounded-md p-1"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>
                      <FaUserShield style={{ fontSize: "33px" }} />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-sm hover:bg-black bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
