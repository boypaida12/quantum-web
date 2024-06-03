// import { ArrowRight } from "lucide-react"
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div className="min-h-screen font-sans">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center p-4">
            <p className="lg:text-3xl font-bold text-red-500">Quantum</p>
            <Button className="animate-buttonheartbeat ms-auto rounded-md bg-red-500 hover:bg-red-500 px-4 py-1 text-sm font-semibold text-white">
              <img src="/whatsapp-icon.svg" width={24} className="mr-2"/>
              Join Whatsapp Community
            </Button>
          </div>
          <div className="relative flex items-center justify-center p-4 min-h-[80vh]">
            <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tl from-black/70 via-black/50 to-transparent"></div>
            <div className="relative z-20 mx-auto text-center lg:px-32 mt-48">
              <p className="text-6xl font-semibold leading-snug text-white">Supporting your <span className="text-red-500">skincare journey</span></p>
              <p className="tracking-widest text-lg my-4 text-white">Scan, Analyze and Get product recommendations <br/> for your skin</p>
              <div className="flex flex-col items-center gap-4">
                <Input placeholder="mail@johndoe.com" className="w-96"></Input>
                <Button size="sm" className="group tracking-widest bg-red-500 hover:bg-red-500">
                  Join Waitlist
                  <ArrowRight className="w-[16px] ml-2 group-hover:translate-x-1 duration-300"/>
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
              <img src="/quantum.png" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
