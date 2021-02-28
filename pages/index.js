import Landing from "../components/Landing";
import Service from "../components/Service";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta />
      <Landing />
      <Service />
      <Showcase />
      <About />
      <Client />
      <Contact />
    </>
  )
}
