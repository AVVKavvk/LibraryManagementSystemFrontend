import React from 'react';

const Intro = () => {
  return (
    <div className="p-4 h-[60vh] rounded-lg shadow-md text-lg px-10">
      <h2 className="text-2xl mx-auto font-semibold  bg-slate-200 rounded-md px-3 mb-16 py-2 max-w-[700px]">Welcome to the Book Management Section of Librohub!</h2>
      <p className="mb-4">
        In this section, you can manage all aspects of your library's book collection. Librohub provides the tools you need to efficiently manage your library.
      </p>
      <h3 className="text-xl font-semibold mb-1">Key Management Features:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>📚 Add new books to the catalog</li>
        <li>🔄 Edit existing book information</li>
        <li>🗑️ Remove books from the collection</li>
        <li>🔍 Search and filter books by various criteria</li>
        <li>📊 Track borrowing history and statistics</li>
      </ul>
      <p>
        Explore the features available in this section to maintain an organized and efficient library. Click on the buttons in the sidebar to manage books, authors, and reviews.
      </p>
    </div>
  );
};

export default Intro;
