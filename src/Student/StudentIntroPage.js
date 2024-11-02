import React from 'react';

const StudentIntro = () => {
  return (
    <div className="p-4 h-[60vh] rounded-lg shadow-md text-lg px-10">
      <h2 className="text-2xl mx-auto font-semibold bg-slate-200 rounded-md px-3 mb-16 py-2 max-w-[700px]">
        Welcome to the Student Section on Librohub!
      </h2>
      <p className="mb-4">
        You have access to a variety of tools to explore and manage book interactions within the library. Discover available books, check borrowed books, and stay updated on any penalties or dues.
      </p>
      <h3 className="text-xl font-semibold mb-1">Student Features:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>📖 View the list of all available books and their details</li>
        <li>🔍 Find Student to see books currently assigned</li>
        <li>📅 Check due dates for borrowed books to avoid late returns</li>
        <li>💸 Track any penalties or dues for overdue books</li>
        <li>📚 View a detailed record of book borrowing history</li>
      </ul>
      <p>
       Enjoy exploring and happy reading!
      </p>
    </div>
  );
};

export default StudentIntro;
