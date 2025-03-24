"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



const DropdownButton = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-2 inline-block text-left text-black ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border-none duration-200 ease-in cursor-pointer bg-white border  border-black px-6 py-2 rounded-2xl shadow-sm hover:bg-gray-100 w-40">
        {title}
        <Menu className="w-5 h-5 text-red-500 ml-2 " />
      </button>

      {isOpen && (
        <div className="absolute left-0 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
              onClick={() => setIsOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AdminTable() {
  const users = [
    { id: 1, name: "Orang", email: "bom123@gmail.com", class: "X Sija 2", division: "Web Developer" },
    { id: 2, name: "Orang", email: "bom123@gmail.com", class: "", division: "" },
    { id: 3, name: "Orang", email: "bom123@gmail.com", class: "", division: "" },
    
  
    
  ];

  return (
    <div className="bg-[#F8F2DE] w-full mx-36 mt-[120px] p-4  rounded-3xl">
      <div className="pt-2 w-full px-2">
        <p className="text-2xl text-black font-bold pl-12">Users</p>
        <div className="flex w-full gap-4 ">
          <div className="flex w-7xl ">
            <input
              type="text"
              placeholder="Search..."
              className="text-black bg-white mt-8 w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between ml-12 mt-9">
                <DropdownButton title="Status" items={["Vote", "Not Vote"]}  />
                <DropdownButton title="Filter" items={["ITNSA", "Web Developer", "Cyber Security"]} />
            </div>
            </div>
          </div>

          <div className="container pt-6 px-2">
            <div className="grid grid-cols-5 bg-white/85 text-black p-3 py-2 rounded-lg font-semibold">
              <span>No</span>
              <span>Nama</span>
              <span>Email</span>
              <span>Divisions</span>
              <span>Action</span>
            </div>

          <div className="space-y-5 mt-6 text-black">
            {users.map((user, index) => (
              <div key={user.id} className="grid grid-cols-5 bg-white px-3 py-6 rounded-lg shadow-lg items-center">
                <span className="font-semibold">{index + 1}.</span>
                <span className="font-semibold">{user.name}</span>
                <span>{user.email}</span>
                <div className="flex justify-between items-center">
                  <span>{user.division}</span>
                  <button className="text-red-500">
                    <i className="fas fa-trash-alt text-xl"></i>
                  </button>
                </div>
                <div className="pl-3 text-red-800">
                  <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
            ))}
            <div className="absolute right-44 bottom-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}