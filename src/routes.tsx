import { Outlet, createBrowserRouter } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";

function Layout() {
    return (
        <>
            <Navbar/>
            <div className="w-full overflow-x-clip bg-slate-50 min-h-screen">
                <Outlet/>
            </div>
        </>
    )
}

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Hero/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/about",
                element: <AboutMe/>
            }
        ]
    }
])