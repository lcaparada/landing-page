import { cn } from "@/lib";
import { X } from "lucide-react";

export const VSCode = () => {
  return (
    <div className="rounded-md bg-vs-code-2 ml-14 w-full h-64 overflow-hidden">
      <header className="p-5 flex bg-vs-code-1  items-center gap-x-2">
        <ActionButton className="bg-red-brand" />
        <ActionButton className="bg-yellow-brand" />
        <ActionButton className="bg-green-brand" />
      </header>
      <main className="mt-2">
        <TabVSCode tabName="index.ts" />
        <BodyVSCode />
      </main>
    </div>
  );
};

const ActionButton = ({ className }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("size-3 cursor-pointer rounded-full ", className)} />
  );
};

const TabVSCode = ({ tabName }: { tabName: string }) => {
  return (
    <div className="text-white relative overflow-hidden p-2  ml-3 rounded-tr-md rounded-tl-md items-center gap-x-8 flex w-fit  bg-vs-code-1 font-medium">
      <div className="h-[1px] right-0 left-0 w-full bg-brand absolute top-0" />
      {tabName}
      <X size={16} className="cursor-pointer" />
    </div>
  );
};

const BodyVSCode = () => {
  return (
    <div className="w-full bg-vs-code-1 p-3">
      <section className="flex items-center gap-x-4">
        <h1>1</h1>
        <p className="font-medium">
          <span className="text-brand">import</span> {"{elevante_software}"}{" "}
          <span className="text-brand">from</span> &apos;concorrentes&apos; ;
        </p>
      </section>
    </div>
  );
};
