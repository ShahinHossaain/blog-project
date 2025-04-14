import React from "react";

const AboutWebsite: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About BlogVibe
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          This is a dynamic blog platform built to empower users to share their
          thoughts, ideas, and stories with the world. Whether you're a writer,
          developer, or just someone who loves to express — this space is for
          you.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              User Authentication
            </h3>
            <p className="text-gray-600">
              Users can sign up, log in securely, and manage their profiles to
              start creating content.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Create & Manage Posts
            </h3>
            <p className="text-gray-600">
              Logged-in users can write blog posts, edit them later, or delete
              them if needed.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Comment System
            </h3>
            <p className="text-gray-600">
              Visitors can engage by leaving comments on posts to share feedback
              or join discussions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Admin Panel
            </h3>
            <p className="text-gray-600">
              Admins have full access to all posts and comments to monitor and
              moderate content.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Fully optimized for mobile, tablet, and desktop — your experience
              is seamless everywhere.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Powered by MERN
            </h3>
            <p className="text-gray-600">
              Built using MongoDB, Express, React, and Node.js — ensuring fast
              performance and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWebsite;
