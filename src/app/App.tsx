import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Experience } from "./components/Experience";
import { OrgExperience } from "./components/OrgExperience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <OrgExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
