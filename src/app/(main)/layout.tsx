import AuthBtn from "@/components/main/reusable/AuthBtn";
import { Separator } from "@/components/ui/separator";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <div className="space-y-4 flex flex-col items-center h-full w-full py-3 bg-slate-950 border-r-2 border-slate-600">
          <div className="bg-stone-700 mx-3 h-[48px] w-[48px] rounded-3xl" />
          <Separator className="h-[2px] bg-stone-300 rounded-md w-10 mx-auto" />
          <div className="grow" />
          <div className="pb-3">
            <AuthBtn />
          </div>
        </div>
      </div>
      <main className="md:pl-[72px] h-full">
        <div className="h-full">
          <div className="fixed inset-y-0 z-20 flex-col hidden h-full md:flex w-60">
            <div className="flex flex-col h-full text-primary w-full bg-slate-900">
              <div className="flex items-center w-full h-12 px-3 border-b-2 border-pink-400 ">
                <div className="bg-stone-700 mx-3 h-6 w-full rounded-3xl" />
                <div className="bg-stone-700 mx-3 h-4 w-6 rounded-3xl" />
              </div>
              <div className="flex-1 px-3 mt-2">
                <div className="flex items-center w-full px-2 py-2 h-6 rounded-3xl group gap-x-2 bg-stone-700" />
              </div>
              <Separator className="my-2 rounded-md bg-stone-300" />
              <div className="grow" />
            </div>
          </div>
          <main className="h-full md:pl-60">
            <div className="flex flex-col h-full ">
              <div className="flex items-center bg-slate-800 h-12 px-3 border-b-2 border-slate-400"></div>
              {children}
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}
