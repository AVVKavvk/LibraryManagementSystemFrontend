import React from "react";

const Intro = () => {
  return (
    <div className="p-4 h-[60vh] rounded-lg shadow-md text-lg px-10">
      <h2 className="text-2xl mx-auto text-center font-semibold bg-slate-200 rounded-md px-3 mt-10 py-2 max-w-[700px]">
        Assign and Manage Student Books
      </h2>
      <p className="mb-4 mt-4">
        In this section, you can assign books to students and manage their
        borrowing records. Ensure a smooth lending process with the following
        features:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>📖 Assign books to students</li>
        <li>❌ Remove assigned books from students</li>
        <li>📅 Track due dates and return history</li>
      </ul>
      <p>
        Use the options in this section to keep track of issued books and
        maintain accountability within the library.
      </p>
    </div>
  );
};

export default Intro;
