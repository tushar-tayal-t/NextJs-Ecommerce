import Navbar from "@/components/navigation/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0C0C0C]">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
