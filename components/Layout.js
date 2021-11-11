import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Classnames from "classnames";

const Layout = ({children, footer = true, dark = false, title }) => {

  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = (url) => url => {
      console.log(url)
      NProgress.start();
    }

    router.events.on('routeChangeStart', handleRouteChange)


    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, []);

  return (
    <div className={Classnames({'bg-primary': dark, 'bg-light': !dark})}>
      <Navbar />

      <main className="container py-4">
        {title && (
          <h1 className="text-center text-dark">
            {title}
          </h1>
        )}
        {children}
      </main>

      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Emanuel Axel Romero López Portfolio</h1>
              <p>2021-{new Date().getFullYear()}</p>
              <p>All rights Reserved.</p>
            </div>
          </footer>
        )
      }

    </div>
  )
}

export default Layout;