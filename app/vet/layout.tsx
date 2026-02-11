import Footer from "@/components/vet/Footer";
import Navbar from "@/components/vet/Navbar";

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
