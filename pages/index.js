import Head from "next/head";
import Image from "next/image";
import { Element } from "../components/Element";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const displayRazorpay = async () => {
    console.log("here...");
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <div>
      <Head>
        <title>Integrate Payments 🔥</title>
        <meta
          name="description"
          content="Integrate payments in your React and Next.js application with TailwindCSS and Razorpay"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
        <Navbar />
        <Hero onClick={displayRazorpay} />
        <Element className="bottom-10 bg-gradient-to-r from-green-500 to-green-700 antialiased" />
        <Element className="bottom-20 w-[110px] bg-gradient-to-r from-indigo-500 to-indigo-700 antialiased" />
        <Element className="top-40 left-10 w-[150px] bg-gradient-to-r from-purple-500 to-purple-700 antialiased" />
      </main>
    </div>
  );
}

const Hero = ({ onClick }) => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center  max-w-6xl justify-evenly mx-auto">
      <div className="md:w-1/3 mb-20 md:mb-0 mx-10">
        <h1 className=" text-white font-bold text-5xl mb-10">
          Integrate{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            payments
          </span>{" "}
          in less than 10 minutes.
        </h1>
        <p className="text-sm text-gray-300 font-light tracking-wide w-[300px] mb-10">
          Learn how to integrate a Payment Gateway with your Next.js and React
          application.
        </p>
        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
          <button
            onClick={onClick}
            className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
          >
            Purchase Now!
          </button>
        </div>
        <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md">
          <button className="bg-gradient-to-r from-[#1D2328] to-[#1D2328] rounded-md w-full py-4 shadow-sm drop-shadow-sm text-gray-400 font-light">
            Read Blog
          </button>
        </div>
      </div>
      {/* <div className="w-2/3 bg-white flex-shrink-0  relative"> */}
      <img
        className="w-full md:w-[36rem] h-full"
        alt="stripe payment from undraw"
        src="/payments.svg"
      />
      {/* </div> */}
    </div>
  );
};
