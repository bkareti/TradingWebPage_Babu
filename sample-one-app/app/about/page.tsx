import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: "About Us - Alpha5academy",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <AboutUs />
      </div>

      <Footer />
    </main>
  );
}
