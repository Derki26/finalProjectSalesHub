import { Header } from "./ui/Header";

export const Certificate = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="img/hombre-certificado.avif"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-blue-500 text-5xl font-bold">
            Change your life in months, not years!
          </h1>
          <p
            className="py-6"
            style={{
              fontFamily: "Avant Garde",
              fontWeight: 400,
              height: "109.438px",
            }}
          >
            At SalesforceHub, we are proud to be recognized as a top-performing
            Salesforce consulting partner. This prestigious designation, awarded
            to only the top 10% of partners globally, reflects our unwavering
            commitment to customer satisfaction and exceeding expectations.
          </p>

          <Header
            name="Grow your education with"
            imgSrc="img/1651585.webp"
            visit="/courses"
            btnName="Get Started"
          />
        </div>
      </div>
    </div>
  );
};
