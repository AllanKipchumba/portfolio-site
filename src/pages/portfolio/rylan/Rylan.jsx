import React from "react";
import "../main.scss";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const Rylan = () => {
  const navigate = useNavigate();
  return (
    <div className="project-container bg-[#212124]">
      <div className="project-heading-rylan">
        <div className="md:ml-16 lg:ml-32">
          <h1>e-shop</h1>
          <p>React/ TypeScript/ Node/ MongoDB </p>
        </div>
      </div>

      <div className="pt-12 max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
        <Fade top>
          <div className="md:col-span-4 bg-[#39393F] rounded-3xl p-5 mb-3">
            <h2 className="capitalize text-[36px] text-[#ffbd39] font-[700] tracking-[0.4px] leading-[75px]">
              Overview
            </h2>
            <p className="text-[#bdc1c6]">
              The Rylan Laundry Services Data Management System User Interface
              is a web application designed to streamline and simplify the
              management of transaction data for a laundry business called
              Rylan. This user interface, developed using the latest
              technologies, provides various components that enable the
              capturing and display of transaction data in a user-friendly
              manner.
              <br />
              <div className={styles.features}>
                Key Features:
                <li>
                  <li>
                    Dashboard: The dashboard component offers a comprehensive
                    overview of transaction data, allowing business owners and
                    managers to quickly assess the performance of their laundry
                    services. It presents key metrics and visualizations for
                    easy analysis.
                  </li>
                  <li>
                    Sales, Expenditure, and Credits Components: These components
                    facilitate the input and display of sales, expenditure, and
                    credits records. They provide intuitive forms for entering
                    transaction details, as well as organized views to review
                    and track historical data.
                  </li>
                  <li>
                    Report Generation: The report component empowers users to
                    generate detailed reports based on the transaction data.
                    These reports offer valuable insights into the financial
                    aspects of the laundry business, aiding in decision-making
                    and performance evaluation.
                  </li>
                  <li>
                    Transaction Input Form: The transaction input form component
                    ensures a seamless and efficient process for entering new
                    transaction data. Users can easily fill in the required
                    information and submit it to the system, ensuring accurate
                    and up-to-date records.
                  </li>
                </li>
              </div>
              <br /> <br />
              The Rylan Laundry Services Data Management System API serves as
              the backbone of the data management system for Rylan Laundry
              Services. This API, developed using robust technologies, enables
              the handling of sales, expenditure, and credits records on a
              monthly basis. It also includes authentication functionality to
              ensure secure access to the system.
              <br />
              <div className={styles.features}>
                Key Features:
                <li>
                  <li>
                    CRUD Operations: The API supports Create, Retrieve, Update,
                    and Delete operations for sales, expenditure, and credits
                    records. This functionality allows authorized users to
                    manage and manipulate transaction data efficiently.
                  </li>
                  <li>
                    Authentication System: To maintain data security, the API
                    incorporates an authentication system. Users must
                    authenticate themselves using secure credentials to access
                    the API's functionalities. This ensures that only authorized
                    individuals can interact with the system.
                  </li>
                  <li>
                    Report Generation: Leveraging the inputted records, the API
                    offers the capability to generate comprehensive reports.
                    These reports provide valuable insights into the financial
                    performance of Rylan Laundry Services, aiding in
                    decision-making and strategic planning.
                  </li>
                </li>
              </div>
              <br /> <br />
              The Rylan Laundry Services Data Management System User Interface
              and API work in tandem to provide a seamless experience for
              managing transaction data in the laundry business. Together, they
              empower business owners and managers to make informed decisions
              and optimize their operations efficiently.
            </p>

            <div className="btn">
              <button>
                <a
                  href="https://dashboard-rylan-laundry-dms.vercel.app/"
                  target="self"
                >
                  demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/AllanKipchumba?tab=repositories"
                  target="self"
                >
                  code
                </a>
              </button>
            </div>
          </div>
        </Fade>
        <div className="mb-4">
          <h3 className="text-[25px] leading-[75px]  text-[#ffbd39] ">
            Technologies
          </h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <button onClick={() => navigate(-1)} className="back-btn">
          back
        </button>
      </div>
    </div>
  );
};
