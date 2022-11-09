import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <section className="section">
            <h2>Home Page</h2>
            <Link to="/app-console" className="btn">
                ac
            </Link>
            <Link to="/saas-console" className="btn">
                sc
            </Link>

            <Outlet />
        </section>
    );
};
export default Home;
