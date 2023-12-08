import { Header } from "../Components/ui/Header";

const Home = () => {
  return (
    <>
      <Header
        name="Grow your education with       "
        imgSrc="img/1651585.webp"
        visit="/courses"
        btnName="Get Started"
      />
      <div className="container flex justify-center mx-auto md:flex items-center">
        <h1 className="text-blue-500 text-5xl font-bold">
          Change your life in months, not years!
        </h1>
      </div>
    </>
  );
};

export { Home };
