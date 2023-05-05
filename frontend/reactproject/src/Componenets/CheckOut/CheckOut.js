import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  // const { title } = useLoaderData();
  const url = `http://localhost:5000/services/${id}`;

  const { data: checkout = [] } = useQuery({
    queryKey: ["checkout"],
    queryFn: async () => {
      const result = await fetch(url);
      const data = await result.json();
      return data;
    }
  });

  const { _id, title, price } = checkout;
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName;

    const email = user?.email;
    const message = e.target.form.value;
    const phone = e.target.phone.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      message: message,
      phone: phone
    };

    const url = "http://localhost:5000/checkoutData";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }; // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  return (
    <div>
      Id:{_id}
      <h3>You Re About to Order {title}</h3>
      <p>Price:{price}</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <form
          action="
    "
          onSubmit={handleSubmit}
        >
          <div>
            {" "}
            <input
              type="text"
              placeholder="Your First Name"
              name="fname"
              value={user?.displayName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />{" "}
            <input
              type="email"
              placeholder="Type Email"
              value={user?.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <textarea name="form" id="" cols="30" rows="10"></textarea>
          <br />
          <button className="btn btn-primary" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
