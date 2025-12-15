import ekiti_logo from "/ekiti_logo.png";
import { Link } from "react-router-dom";

const popStyle = `
  @keyframes popEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
  .pop-button:active {
    animation: popEffect 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @media (max-width: 1024px) {
    .header-title {
      font-size: 1.25rem !important;
    }
    .header-button {
      padding: 0.5rem 0.75rem !important;
      font-size: 0.875rem !important;
    }
  }
  @media (max-width: 768px) {
    .header-logo {
      width: 50px !important;
    }
    .header-title {
      font-size: 1rem !important;
      margin-left: 0.75rem !important;
    }
    .header-button {
      padding: 0.4rem 0.6rem !important;
      font-size: 0.75rem !important;
    }
  }
  @media (max-width: 480px) {
    .header-logo {
      width: 40px !important;
    }
    .header-title {
      font-size: 0.875rem !important;
      margin-left: 0.5rem !important;
    }
    .header-container {
      flex-direction: column !important;
      gap: 0.75rem !important;
      padding: 0.75rem !important;
    }
    .header-buttons {
      flex-wrap: wrap !important;
      gap: 0.5rem !important;
    }
    .header-button {
      padding: 0.35rem 0.5rem !important;
      font-size: 0.65rem !important;
    }
  }
`;

function Header() {
  return (
    <>
      <style>{popStyle}</style>
      <div
        className="shadow-2xl"
        style={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="header-container flex justify-between items-center md:items-start lg:items-center p-2 md:p-3 lg:p-4 bg-[rgb(214,71,0)] gap-2 md:gap-0">
          <Link
            to="/">
          <div className="flex items-center flex-1 p-2">
            <img
              src={ekiti_logo}
              alt="ekiti_logo"
              className="header-logo w-20 md:w-24 lg:w-25"
            />

            <h1 className="header-title text-white font-extrabold text-xl md:text-2xl lg:text-2xl ml-2 md:ml-4 lg:ml-5 whitespace-nowrap">
              EKITI MSME ICT HUB
            </h1>
          </div>
          </Link>
          <div className="header-buttons flex space-x-2 md:space-x-3 lg:space-x-4 font-extrabold flex-wrap justify-end">
            <button className="header-button bg-yellow-400 border-none border rounded px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 pop-button">Enroll</button>
            <button className="header-button bg-yellow-400 border-none border rounded px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 pop-button">
              Mark Attendance
            </button>
            <div
              className="self-center border-l-2 border-white border-dotted h-10 mx-2"
              aria-hidden="true"
            ></div>

            <Link to="/signin">
              <button className="header-button bg-yellow-400 border-none border rounded px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 pop-button ml-4">
                Admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
