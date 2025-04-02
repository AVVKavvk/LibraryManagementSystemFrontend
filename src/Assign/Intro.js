import React from "react";

const Intro = () => {
  return (
    <div className="p-4 h-[60vh] rounded-lg shadow-md text-lg px-10">
      <h2 className="text-2xl mx-auto text-center font-semibold bg-slate-200 rounded-md px-3 mt-10 py-2 max-w-[700px]">
        Search and Manage Assigned Books
      </h2>
      <p className="mb-4 mt-4">
        This section allows you to search and manage all assigned books
        efficiently. You can track issued books, check due dates, and monitor
        expired books.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>📋 View all assigned books</li>
        <li>🔍 Search books by MIS or Book ID</li>
        <li>⏳ Track overdue books</li>
        <li>⚠️ Identify expired books</li>
      </ul>
      <p>
        Use these features to ensure proper monitoring and timely returns of
        library books.
      </p>
    </div>
  );
};

export default Intro;
