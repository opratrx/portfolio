"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string[]; // Changed to array
  awardDesc?: string;
}
export const ResumeCard = ({
                               logoUrl,
                               altText,
                               title,
                               subtitle,
                               href,
                               badges,
                               period,
                               description,
                               awardDesc,
                           }: ResumeCardProps) => {
    return (
        <Link href={href || "#"} className="block cursor-pointer">
            <Card className="flex group">
                <div className="flex-none">
                    <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
                        <AvatarFallback>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-grow ml-4 items-center flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                                {title}
                                {badges && (
                                    <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                        <Badge variant="secondary" className="align-middle text-xs" key={index}>
                            {badge}
                        </Badge>
                    ))}
                  </span>
                                )}
                                <ChevronRightIcon
                                    className={cn(
                                        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                                    )}
                                />
                            </h3>
                            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                {period}
                            </div>
                        </div>
                        {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
                        {awardDesc && <div className="font-sans text-xs italic">{awardDesc}</div>}
                    </CardHeader>
                    {description && (
                        <motion.div className="collapse-description mt-2 text-xs sm:text-sm">
                            {Array.isArray(description) ? (
                                <ul className="list-disc pl-5">
                                    {description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{description}</p>
                            )}
                        </motion.div>
                    )}
                </div>
            </Card>
        </Link>
    );
};