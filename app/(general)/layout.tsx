import { Navbar } from "@/components";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1 className="text-lg">Hola mundo</h1>
        {children}
      </main>
    </>
  );
}
