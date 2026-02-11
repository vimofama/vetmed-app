import Footer from "@/components/comercio/Footer";
import Navbar from "@/components/comercio/Navbar";

export default function VetdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
