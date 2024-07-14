import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/slices/userSlice";

const GetAll = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <>
      <div className="container m-5 flex justify-end w-full gap-5">
        <a
          href="/create"
          className="my-5 border-green-900 border px-4 py-2 rounded-full bg-green-800 text-white"
        >
          Add Products
        </a>
      </div>
      <div className="container mx-auto ">
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                S.No
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Name
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Email
              </th>

              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={index}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto text-center p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                  {index + 1}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  {user.name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  {user.email}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <Link
                    to={`/update/${user.id}`}
                    className="rounded-full bg-blue-400 py-1 px-3 text-md mx-2 text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="rounded-full bg-red-400 py-1 px-3 text-md mx-2 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Toaster position="bottom-right" /> */}
    </>
  );
};

export default GetAll;
