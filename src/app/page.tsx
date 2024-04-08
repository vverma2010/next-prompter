import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>

      <p className="desc text-center">
        Adipisicing sint aliquip nisi fugiat consequat officia sint. Ullamco culpa ea magna sit. Ipsum irure officia ex aute et elit cillum tempor nisi.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
