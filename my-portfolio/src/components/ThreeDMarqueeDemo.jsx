"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import chess from '../assets/C.jpeg';
import FC from '../assets/FC.png';
import idnH from '../assets/idnHome.jpeg';
import idnA from '../assets/idnAbout.jpeg';
import idnOne from '../assets/idnS1.jpeg';
import idnTwo from '../assets/idnS2.jpeg';
import portfolio from '../assets/Port.png';
import Sum from '../assets/Sum.png';
import Voter from '../assets/V.png';

export function ThreeDMarqueeDemo() {
  const images = [
    chess,
    FC,
    idnH,
    idnA,
    idnOne,
    idnTwo,
    portfolio,
    Sum,
    Voter,
    chess,
    FC,
    idnH,
    idnA,
    idnOne,
    idnTwo,
    portfolio,
    Sum,
    Voter,
    chess,
    FC,
    idnH,
    idnA,
    idnOne,
    idnTwo,
    portfolio,
    Voter,
    chess,
    FC,
    idnH,
    idnA,
    idnOne,
    idnTwo,
    portfolio,
    Sum,
    Voter,
  ];
  return (
    <div
      className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2
        className="relative z-20 mx-auto max-w-4xl text-center text-5xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
            Projects
      </h2>
      <p
        className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        A collection of my projects, showcasing my skills and creativity.
      </p>
      <div
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">

      </div>
      {/* overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-black/65 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images} />
    </div>
  );
}
