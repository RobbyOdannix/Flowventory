import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <p className="logo">Dashboard</p>
        <Link href={"/adminpanel"}></Link>
      </nav>
      <main>
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="">Search: <input type="text" className="dashboard-search" /></label>
          </div>
        </div>
        <div className="itemDisplay"></div>
      </main>
    </div>
  );
}
