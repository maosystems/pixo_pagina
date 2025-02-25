
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/Features";

const AppPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Features />
        <section className="bg-[rgba(35,164,222,0.1)] py-20 px-4 mt-10">
          <div className="max-w-[1014px] mx-auto text-center">
            <h2 className="text-4xl font-bold text-[rgba(42,42,42,1)] mb-8">
              Descarga nuestra aplicación
            </h2>
            <p className="text-lg mb-10">
              Disponible para iOS y Android. Descarga{" "}
              <span className="font-bold text-[rgba(51,222,179,1)]">
                PIXO spa
              </span>{" "}
              y comienza a disfrutar de nuestros servicios.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/1ed60dc50ed5705681f711c0dca028b6b3b4cb394688c7c17a5e8fbf660b1ede?placeholderIfAbsent=true"
                alt="App Store"
                className="h-12 object-contain cursor-pointer"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/2d532f68fefaecedab54ce0c94e759ae1351332b342ad343574b74c734d2b505?placeholderIfAbsent=true"
                alt="Play Store"
                className="h-12 object-contain cursor-pointer"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppPage;
