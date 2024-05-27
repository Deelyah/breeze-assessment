import { redirectToLogin } from "@/hocs/redirect";

 const Home = () => {
  return <div></div>;
}

export default redirectToLogin('/login')(Home)