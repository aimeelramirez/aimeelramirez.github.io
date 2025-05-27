import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Terms of Service</h1>
      <p>
        By using Live Companion, you agree to comply with and be bound by the
        following terms. If you do not agree to these terms, please do not use
        the application.
      </p>
      <ul>
        <li>You must be 13 years or older to use this app.</li>
        <li>
          You may not use the app for any illegal or unauthorized purpose.
        </li>
        <li>
          All content generated remains property of its respective owners.
        </li>
      </ul>
      <p>
        We reserve the right to modify these terms at any time. Continued use
        indicates your acceptance of any changes.
      </p>
    </div>
  );
};

export default TermsOfService;
