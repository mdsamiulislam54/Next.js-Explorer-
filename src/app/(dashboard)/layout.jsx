import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-3 bg-gray-200 text-black p-4">
          <h1>Dashboard Layout</h1>
          <ul>
            <li>
              <a href="/dashboard/overview">Overview</a>
            </li>
            <li>
              <a href="/dashboard/settings">Settings</a>
            </li>
            <li>
              <a href="/dashboard/profile">Profile</a>
            </li>
            <li>
              <a href="/dashboard/reports">Reports</a>
            </li>
            <li>
              <a href="/dashboard/analytics">Analytics</a>
            </li>
            <li>
              <a href="/dashboard/help">Help</a>
            </li>
            <li>
              <a href="/dashboard/logout">Logout</a>
            </li>
            <li>
              <a href="/dashboard/notifications">Notifications</a>
            </li>
            <li>
              <a href="/dashboard/messages">Messages</a>
            </li>
            <li>
              <a href="/dashboard/feedback">Feedback</a>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
