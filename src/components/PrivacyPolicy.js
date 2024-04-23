import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <main>
        <section>
          <h2>1. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
        </section>
        <section>
          <h2>2. Log Data</h2>
          <p>We want to inform you that whenever you visit our service, we collect information that your browser sends to us that is called Log Data.</p>
        </section>
        <section>
          <h2>3. Cookies</h2>
          <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.</p>
        </section>
        <section>
          <h2>4. Third Party Services</h2>
          <p>We may employ third-party companies and individuals due to the following reasons: to facilitate our service; to provide the service on our behalf; to perform service-related services; or to assist us in analyzing how our service is used.</p>
        </section>
        <section>
          <h2>5. Security</h2>
          <p>We value your trust in providing us with your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer>
        <p>Last updated: 23/04/2024</p>
        <p>Contact: snehil.1278@gmail.com</p>
      </footer>
      <style jsx>{`
        .privacy-policy-container {
          font-family: Arial, sans-serif;
        }

        header {
          background-color: #f0f0f0;
          padding: 20px;
          text-align: center;
        }

        h1 {
          margin: 0;
          font-size: 2em;
        }

        main {
          padding: 20px;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          color: #333;
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        p {
            margin-left: 30px;
          color: #666;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }

        footer p {
          margin: 5px 0;
        }

        /* Responsive Styles */
        @media only screen and (max-width: 768px) {
          h1 {
            font-size: 1.5em;
          }

          h2 {
            font-size: 1.2em;
          }

          main {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
