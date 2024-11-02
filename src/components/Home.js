import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 max-w-[1550px] mx-auto">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-800">Welcome to Librohub</h2>
          <p className="mt-4 text-xl text-gray-700">
            Your all-in-one library management solution. Simplify library organization and boost user experience!
          </p>
          <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            <Link  to="/login">
            Get Started
            </Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 ">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 text-center">Features</h3>
          <p className="mt-4 text-center text-gray-600">
            Everything you need to manage your library efficiently.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Catalog Management</h4>
              <p className="mt-2 text-gray-600">
                Easily organize and manage your library's collection with a simple and efficient interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Membership Management</h4>
              <p className="mt-2 text-gray-600">
                Track members, registrations, and renewals with ease using our powerful tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Circulation Control</h4>
              <p className="mt-2 text-gray-600">
                Manage checkouts, due dates, and fines to keep your library running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Section */}
      <section id="admin" className="py-20 bg-gray-100 max-w-[1550px] mx-auto">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Admin Features</h3>
          <p className="mt-4 text-gray-600">
            Manage library resources and user accounts with full control.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Book Assignment & Management</h4>
              <p className="mt-2 text-gray-600">
                Assign, renew, and delete books with ease. Ensure that the right resources are available for the right users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Inventory Management</h4>
              <p className="mt-2 text-gray-600">
                Add new books, update existing entries, and maintain accurate inventory records for all library items.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">User Access Control</h4>
              <p className="mt-2 text-gray-600">
                Manage student accounts, set privileges, and control library access to ensure smooth operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Detailed Reporting</h4>
              <p className="mt-2 text-gray-600">
                Generate comprehensive reports on book circulation, overdue items, and membership trends to gain actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Section */}
      <section id="student" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Student Features</h3>
          <p className="mt-4 text-gray-600">
            Discover available resources and manage your library account seamlessly.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Book Search & Availability</h4>
              <p className="mt-2 text-gray-600">
                Search the library catalog to find available books and see who has checked out specific titles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Account Management</h4>
              <p className="mt-2 text-gray-600">
                View assigned books, due dates, and track your borrowing history to manage your account effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Personalized Recommendations</h4>
              <p className="mt-2 text-gray-600">
                Receive personalized book recommendations based on your reading history and interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-blue-800">Request Books</h4>
              <p className="mt-2 text-gray-600">
                Submit requests for new books or titles currently checked out, and get notified when they're available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Get in Touch</h3>
          <p className="mt-4">Have questions? Contact us at <a href="mailto:contact@librohub.com" className="underline">contact@librohub.com</a></p>
          <p className="mt-2">or visit our support center for assistance.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Librohub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
