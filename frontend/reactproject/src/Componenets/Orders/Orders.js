import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "react-query";
import SingleOrder from "./SingleOrder";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const { data: order = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const url = `http://localhost:5000/orders?email=${user?.email}`;

      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  });

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm("Are you Sure You Want To Delete");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            return (
              <progress
                className="progress progress-secondary w-56"
                value="100"
                max="100"
              ></progress>
            );
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {order.map((x) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {" "}
                      <h1>
                        {x?.serviceName}
                        {/* {console.log(x)} */}
                      </h1>
                    </div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
                <h1>{x?.email}</h1>
                <br />
                <span className="badge badge-ghost badge-sm">
                  <h1>{x?.price}</h1>
                </span>
              </td>
              <td>
                {" "}
                <h1>{x?.price}</h1>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(x._id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}

          {/* row 3 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default Orders;
