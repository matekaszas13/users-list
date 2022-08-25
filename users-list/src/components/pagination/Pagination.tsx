import React, { useEffect, useState } from "react";
import User from "../users/User";

type User = {
  id: number;
  last_name: string;
  first_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  url: string;
};

interface paginationProps {
  users: User[];
}

const Pagination: React.FC<paginationProps> = ({ users }: paginationProps) => {
  const userPerPage: number = 10;
  const maxNumberOfPages: number = Math.ceil(users.length / userPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [currentUsers, setCurrentUsers] = useState<User[]>();

  useEffect(() => {
    const begin = (currentPage - 1) * userPerPage;
    const end = begin + userPerPage;
    const actualUsers = users.slice(begin, end);
    setCurrentUsers(actualUsers);
  }, [currentPage, users]);

  function handleNext() {
    setCurrentPage((currPage) => currPage + 1);
  }

  function handlePrev() {
    setCurrentPage((currPage) => currPage - 1);
  }

  return (
    <div>
      <div className=" flex flex-row flex-wrap justify-center">
        {currentUsers?.map((user) => (
          <User
            id={user.id}
            key={user.id}
            last_name={user.last_name}
            first_name={user.first_name}
            created_at={user.created_at}
            status={user.status}
          />
        ))}
      </div>
      <div className="flex justify-between">
      <button
        className="pr-2 mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        disabled={currentPage === 1 ? true : false}
        onClick={() => handlePrev()}
      >
        prev
      </button>
      <button
      className="mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        disabled={currentPage === maxNumberOfPages ? true : false}
        onClick={() => handleNext()}
      >
        next
      </button>
      </div>
    </div>
  );
};

export default Pagination;
