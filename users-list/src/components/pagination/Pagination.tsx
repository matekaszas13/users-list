import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { IUser } from "../../globals/models";
import User from "../users/User";
import { generatePageNumbers } from "./pageNumbers";

interface PaginationProps {
  users: IUser[];
}

const Pagination: React.FC<PaginationProps> = ({ users }: PaginationProps) => {
  const userPerPage: number = 10;
  const maxNumberOfPages: number = Math.ceil(users.length / userPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [currentUsers, setCurrentUsers] = useState<IUser[]>();

  const [pageNumbers, setPageNumbers] = useState<number[]>();

  const [maxPageLimit, setMaxPageLimit] = useState<number>(5);

  const [minPageLimit, setMinPageLimit] = useState<number>(0);

  useEffect(() => {
    const begin = (currentPage - 1) * userPerPage;
    const end = begin + userPerPage;
    const actualUsers = users.slice(begin, end);
    setCurrentUsers(actualUsers);
  }, [currentPage]);

  function handleNext() {
    setCurrentPage((currPage) => currPage + 1);
    setMaxPageLimit((currNum) => currNum + 1);
    setMinPageLimit((currNum) => currNum + 1);
  }

  function handlePrev() {
    setCurrentPage((currPage) => currPage - 1);
    setMaxPageLimit((currNum) => currNum - 1);
    setMinPageLimit((currNum) => currNum - 1);
  }

  function handlePageNumberClick(event: any) {
    const buttonNumber = parseInt(event.target.innerHTML);
    setCurrentPage(buttonNumber);
    const pageNumber: number =
      currentPage > buttonNumber
        ? currentPage - buttonNumber
        : buttonNumber - currentPage;

    buttonNumber > currentPage
      ? incrementMinAndMaxPageLimit(pageNumber)
      : decreaseMinAndMaxPageLimit(pageNumber);
  }

  function incrementMinAndMaxPageLimit(increaseNumber: number) {
    setMaxPageLimit((currNum) => currNum + increaseNumber);
    setMinPageLimit((currNum) => currNum + increaseNumber);
  }

  function decreaseMinAndMaxPageLimit(reducingNumber: number) {
    setMaxPageLimit((currNum) => currNum - reducingNumber);
    setMinPageLimit((currNum) => currNum - reducingNumber);
  }

  useEffect(() => setPageNumbers(generatePageNumbers(maxNumberOfPages)), []);

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center">
        {currentUsers?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-between mb-2">
        <button
          className="pr-2 mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          disabled={currentPage === 1}
          onClick={() => handlePrev()}
        >
          prev
        </button>
        <div className="flex md:flex-row">
          {pageNumbers?.map((pageNumber) => {
            if (pageNumber <= maxPageLimit && pageNumber > minPageLimit) {
              return (
                <li
                  key={pageNumber}
                  onClick={(event) => handlePageNumberClick(event)}
                  className="list-none mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
                >
                  {pageNumber}
                </li>
              );
            }
          })}
        </div>

        <button
          className="mt-2 mr-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
          disabled={currentPage === maxNumberOfPages}
          onClick={() => handleNext()}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
