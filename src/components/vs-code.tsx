"use client";

import { cn } from "@/lib";
import { X } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const VSCode = () => {
  return (
    <div className="rounded-md bg-vs-code-2 ml-14 w-full h-fit overflow-hidden">
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
    <div className="text-white relative overflow-hidden p-2 ml-3 rounded-tr-md rounded-tl-md items-center gap-x-8 flex w-full bg-vs-code-1 font-medium">
      <div className="h-[1px] right-0 left-0 w-full bg-brand absolute top-0" />
      {tabName}
      <X size={16} className="cursor-pointer" />
    </div>
  );
};

const Caret = () => (
  <motion.span
    className="inline-block w-[2px] h-4 bg-brand ml-[2px]"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.8, repeat: Infinity }}
  />
);

const Typewriter = ({
  text,
  speed = 80,
  startDelay = 0,
  onComplete,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
}) => {
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timeoutRef = { current: 0 } as { current: number | null };
    const intervalRef = { current: 0 } as { current: number | null };

    if (text.length === 0) {
      setContent("");
      setIsTyping(false);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      let i = 0;
      setIsTyping(true);
      intervalRef.current = window.setInterval(() => {
        setContent(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          // finished typing
          setIsTyping(false);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }, speed) as unknown as number;
    }, startDelay) as unknown as number;

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsTyping(false);
    };
  }, [text, speed, startDelay]);

  return (
    <span>
      {content}
      {isTyping && <Caret />}
    </span>
  );
};

const CodeLine = ({
  number,
  text,
  delay = 0,
  onComplete,
}: {
  number: number;
  text?: string;
  delay?: number;
  onComplete?: () => void;
}) => {
  return (
    <section className="flex items-center gap-x-4">
      <h1 className="text-vs-code-number">{number}</h1>
      <p className="font-medium whitespace-pre">
        {text && (
          <Typewriter text={text} startDelay={delay} onComplete={onComplete} />
        )}
      </p>
    </section>
  );
};

const BodyVSCode = () => {
  const [codeFinished, setCodeFinished] = useState(false);

  return (
    <>
      <div className="w-full bg-vs-code-1 p-3 font-mono text-sm text-white">
        <CodeLine
          number={1}
          text={`import { elevante_software } from 'concorrentes';`}
          delay={500}
        />
        <CodeLine number={2} text={""} delay={2000} />
        <CodeLine
          number={3}
          text={`console.log(elevante_software);`}
          delay={4500}
          onComplete={() => setCodeFinished(true)}
        />
      </div>
      <TerminalVSCode visible={codeFinished} />
    </>
  );
};

const TerminalVSCode = ({ visible }: { visible: boolean }) => {
  const [commandDone, setCommandDone] = useState(false);

  return (
    <motion.section
      className="px-3 py-2 text-white font-mono text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <header className="flex items-center justify-between">
        <span className="text-sm font-medium">&gt;_ Terminal</span>
        <X className="cursor-pointer" size={14} />
      </header>
      <main className="mt-2 min-h-[40px]">
        {visible && (
          <>
            <Typewriter
              text={`node index.ts`}
              startDelay={500}
              onComplete={() => setCommandDone(true)}
            />
            {commandDone && (
              <motion.p
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {JSON.stringify([
                  "Inovadora",
                  "Eficiente",
                  "Escalável",
                  "Segura",
                ])}
              </motion.p>
            )}
          </>
        )}
      </main>
    </motion.section>
  );
};
