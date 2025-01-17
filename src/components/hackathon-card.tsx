import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    dates: string;
    tags: readonly string[];
    image?: string | React.ReactNode;
    links?: readonly {
        icon?: React.ReactNode | string;
        title: string;
        href: string;
    }[];
}

export function HackathonCard({
                                  title,
                                  description,
                                  dates,
                                  tags,
                                  image,
                                  links,
                              }: Props) {
    return (
        <li className="relative ml-10 py-4">
            <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                <Avatar className="border size-12 m-auto flex items-center justify-center">
                    {typeof image === "string" ? (
                        <AvatarImage src={image} alt={title} className="object-contain" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            {image || <AvatarFallback>{title[0]}</AvatarFallback>}
                        </div>
                    )}
                </Avatar>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
                {dates && (
                    <time className="text-xs text-muted-foreground">{dates}</time>
                )}
                <h2 className="font-semibold leading-none">{title}</h2>
                {description && (
                    <span className="prose dark:prose-invert text-sm text-muted-foreground">
                        {description}
                    </span>
                )}
                {tags && tags.length > 0 && (
                    <div className="mt-2 mb-2 flex flex-wrap gap-1">
                        {tags.map((tag) => (
                            <Badge
                                className="px-1 py-0 text-[12px]"
                                variant="secondary"
                                key={tag}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
            {links && links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                    {links.map((link, idx) => (
                        <Link href={link.href} key={idx}>
                            <Badge key={idx} title={link.title} className="flex gap-2">
                                {typeof link.icon === "string" ? (
                                    <img src={link.icon} alt={link.title} className="h-4 w-4" />
                                ) : (
                                    link.icon
                                )}
                                {link.title}
                            </Badge>
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
}