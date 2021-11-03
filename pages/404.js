import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout footer={false}>
    <div className="text-center">
      <h1>404</h1>
      <p>Page not found. Please go back <Link href="/">
        <a>home</a>
      </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;