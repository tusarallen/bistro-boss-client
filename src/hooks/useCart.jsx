/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = (item) => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  // const { refetch, data: cart = [] } = useQuery({
  //   queryKey: ["carts", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/carts?email=${user?.email}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${token}`,
  //         },
  //       }
  //     );
  //     return res.json();
  //   },
  // });
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled:!!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
