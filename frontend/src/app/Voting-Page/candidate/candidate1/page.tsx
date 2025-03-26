"use client";

import { useState } from "react";
import BiodataCard from "@/components/Card";
import Menu from "@/components/Navigation";
import Tabs from "@/components/Tab";
import ProfileCard from "@/components/Profile";
import Pagination from "@/components/Pagination";
import { link } from "fs";

const Candidates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='h-screen '>
      <Menu />
      <div className=' mt-12 flex items-center gap-30 justify-center'>
        <div>
          <BiodataCard
            name='John Anderson'
            className='XII RPL 1'
            division='Web Development'
          />
          <Tabs
            visi='menciptakan lingkungan pembelajaran yang inovatif dan inklusif dengan memanfaatkan teknologi modern untuk meningkatkan kualitas pendidikan di sekolah kita'
            misi='biarkan tuhan mau memberi jodoh orang mana, asal jangan orang israel, PAHAM!!!'
          />
        </div>
        <div className='mt-7'>
          <ProfileCard
            imageUrl='/assets/fahri.svg'
            name='John Anderson'
            className='XII RPL 1'
            division='Web Development'
          />
        </div>
      </div>
      <div className='place-items-center mt-12'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Candidates;
