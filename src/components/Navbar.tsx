export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold">MR Fuels</h1>
      <div className="space-x-6 text-sm font-medium">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <button className="rounded-full border px-5 py-2">Login</button>
      </div>
    </nav>
  );
}
