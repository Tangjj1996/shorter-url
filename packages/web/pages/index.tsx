import { getShortUrlAll } from "service/api";
import useRequest from "hooks/useRequest";

function HomePage() {
  const [loading, error, data] = useRequest(getShortUrlAll);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error..{error.message}.</div>;
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
