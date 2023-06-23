import React from "react";
import Button from "../components/Button";

const Home = () => {
   return (
      <main className="flex items-center justify-center flex-col h-full bg-slate-800 py-4 font-YsabeauOffice">
         <div className="flex items-center justify-center flex-col p-2">
            <h1 className="text-3xl font-bold text-white p-2">Welcome to Word Whiz</h1>
            <h3 className="text-xl font-bold text-slate-400">
               The ultimate typing game for mastering English spelling!
            </h3>
         </div>
         <div className="flex items-center justify-center flex-col p-2 w-[60%]">
            <p className="text-xl font-normal text-slate-400 text-center">
               Test and improve your typing skills while sharpening your spelling abilities.
               Challenge yourself with a variety of engaging word exercises and see how fast and
               accurately you can type!
            </p>
         </div>
         <div className="mt-8 text-xl">
            <Button value="Start playing now and become a word whiz!" />
         </div>
      </main>
   );
};

export default Home;
