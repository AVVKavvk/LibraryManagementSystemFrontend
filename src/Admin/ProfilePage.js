import React from 'react';

const ProfileIntro = () => {
  return (
    <div className="p-4 h-[60vh] rounded-lg shadow-md text-lg px-10">
      <h2 className="text-2xl mx-auto font-semibold bg-slate-200 rounded-md px-3 mb-16 py-2 max-w-[700px]">
        Welcome to Your Profile on Librohub!
      </h2>
      <p className="mb-4">
        Manage your account settings, personal information, and admin permissions here. You have full control over your profile and account security.
      </p>
      <h3 className="text-xl font-semibold mb-1">Account Management Features:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>✏️ Update your personal information, such as name and phone number</li>
        <li>🔒 Change your password to keep your account secure</li>
        <li>🗑️ Delete your account if you no longer need it</li>
        <li>👥 View the total number of admins currently in the system</li>
        <li>➕ Create new admin accounts with specific permissions</li>
      </ul>
      <p>
        Use the options provided to keep your account and team organized. Click on the available buttons to make changes or explore your account and admin options.
      </p>
    </div>
  );
};

export default ProfileIntro;
