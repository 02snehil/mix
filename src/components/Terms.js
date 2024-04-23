import React from "react";

const Terms = () => {
  return (
    <div className="terms-container">
      <header>
        <h1>Terms and Conditions</h1>
      </header>
      <main>
        <section>
          <h2>1. Introduction</h2>
          <p>These terms and conditions govern your use of our website. By using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
        </section>
        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
        </section>
        <section>
          <h2>3. Restrictions</h2>
          <p>You are restricted from all of the following: publishing any website material in any other media; selling, sublicensing and/or otherwise commercializing any website material; publicly performing and/or showing any website material; using this website in any way that is or may be damaging to this website; using this website in any way that impacts user access to this website; using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
      <footer>
        <p>Last updated: 23/04/2024</p>
        <p>Contact: snehil.1278@gmail.com</p>
      </footer>
      <style jsx>{`
        .terms-container {
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
          color: #666;
          margin-left:30px
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

export default Terms;
