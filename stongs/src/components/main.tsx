export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      {children}
    </main>
  );
}
