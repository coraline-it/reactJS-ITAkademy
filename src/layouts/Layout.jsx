import { Navbar } from "./../components/layout/Navbar";
import { Footer } from "./../components/layout/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-1 br-color" />

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
          <div className="mx-auto max-w-3xl text-center">
            <h1 >
            </h1>
            {children}
          </div>
        </div>
      </section>

      <div className="h-1 br-color" />
      <Footer />
    </div>

  )
} 