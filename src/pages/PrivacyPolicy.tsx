import React from "react";

const PrivacyPolicy: React.FC = () => {
   console.log("PrivacyPolicy loaded ✅"); // Add this line to test

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Privacy Policy</h1>
      <p>
        Live Companion values your privacy. This policy outlines how we collect
        and use your data.
      </p>
      <ul>
        <li>
          We collect your TikTok username and profile info via OAuth only after
          you grant permission.
        </li>
        <li>We do not share or sell your data to third parties.</li>
        <li>
          We use local storage or Firebase (optional) for session data tracking.
        </li>
      </ul>
      <p>
        You may contact us anytime at support@aimeelramirez.com to request
        access to or deletion of your data.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
