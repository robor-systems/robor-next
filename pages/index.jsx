import { Transition } from "@headlessui/react";
import Head from "next/head";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const [showing, setShowing] = useState(false);
  console.log("SHowing", showing);
  return (
    <div>
      <Head>
        <title>Robor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Transition show={showing} appear> */}
      <ReactVisibilitySensor onChange={(isVisible) => setShowing(isVisible)}>
        <main
          className="
        h-screen 
        flex
        flex-col
        items-center
        justify-center
        gap-6
      "
        >
          <h1 className="font-semibold text-7xl">Welcome to Robor</h1>
          <h4 className="font-normal text-3xl max-w-2xl text-center">
            We specialise at developing web applications that help you build and
            scale your business.
          </h4>
          <button className="btn-primary btn-large mt-4">
            Request Appointment{" "}
          </button>
        </main>
      </ReactVisibilitySensor>
      {/* </Transition> */}
    </div>
  );
};

export default Home;
