import Link from "next/link";

export default function Home() {

  return (
    <div className="flex bg-white justify-center w-screen h-screen items-center">
      <div className="w-fit px-10 h-fit py-16 shadow-xl rounded-lg bg-[#8EBEBD] text-3xl font-bold flex flex-col justify-center items-center">
        Pick an option
        <div className="space-x-4 mt-10 text-base tracking-tighter text-black">
          <Link prefetch={true} href="/login" className="bg-white p-4 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-150">LOGIN</Link>
          <Link prefetch={true} href="/register" className="bg-white p-4 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-150">REGISTER</Link>
        </div>
      </div>
    </div>
  );
}
