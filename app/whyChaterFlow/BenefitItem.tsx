import { HeartHandshake, Layers, LucideIcon, TrendingUp, Zap } from 'lucide-react';
import React from 'react'



type Props = 
{
  icon : LucideIcon
  title: string;
  desc: string;
  tint: string;
}

 export const BENEFITS : Props[]= [
  {
    icon: TrendingUp,
    title: "More Direct Bookings",
    desc: "Own your customers and keep more revenue.",
    tint: "bg-teal-400/15 text-teal-300",
  },
  {
    icon: Zap,
    title: "Less Admin Work",
    desc: "Automate repetitive tasks and stay organized.",
    tint: "bg-amber-400/15 text-amber-300",
  },
  {
    icon: HeartHandshake,
    title: "Smoother Guest Experience",
    desc: "Easy booking, clear communication, and reminders.",
    tint: "bg-rose-400/15 text-rose-300",
  },
  {
    icon: Layers,
    title: "Built for Growth",
    desc: "From solo captains to multi-boat operations.",
    tint: "bg-sky-400/15 text-sky-300",
  },
];

function BenefitItem({icon:Icon, title,desc,tint}:Props) {
  return (
   <div className="benefit flex items-start gap-4 md:opacity-0">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tint}`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <div>
        <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
        <p className="font-body mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default BenefitItem
