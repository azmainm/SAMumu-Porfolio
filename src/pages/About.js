const About = () => {
    return (
      <section id="about" className="p-8">
        <h1 className="text-3xl font-bold">Sheza Aini Mumu</h1>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <img src="/profile.jpg" alt="Sheza Aini Mumu" className="w-1/3 rounded-lg" />
          <p className="text-lg">
            This is a big bio paragraph about Sheza Aini Mumu. Write more about your background, 
            skills, and experiences here.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  