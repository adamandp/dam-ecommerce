import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col h-full">{children}</div>
      <Footer />
    </main>
  );
}
