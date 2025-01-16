import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ShineBorder } from "@/components/ui/shine-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

// import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/ui/marquee";
// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { Share2Icon } from "lucide-react";
// import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
//
//
// const files = [
//   {
//     name: "bitcoin.pdf",
//     body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
//   },
//   {
//     name: "finances.xlsx",
//     body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
//   },
//   {
//     name: "logo.svg",
//     body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
//   },
//   {
//     name: "keys.gpg",
//     body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
//   },
//   {
//     name: "seed.txt",
//     body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
//   },
// ];
//
//
// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#work",
//     cta: "Learn more",
//     className: "lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-3",
//     background: (
//         <Marquee
//             pauseOnHover
//             className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
//         >
//           {files.map((f, idx) => (
//               <figure
//                   key={idx}
//                   className={cn(
//                       "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//                       "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//                       "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//                       "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
//                   )}
//               >
//                 <div className="flex flex-row items-center gap-2">
//                   <div className="flex flex-col">
//                     <figcaption className="text-sm font-medium dark:text-white ">
//                       {f.name}
//                     </figcaption>
//                   </div>
//                 </div>
//                 <blockquote className="mt-2 text-xs">{f.body}</blockquote>
//               </figure>
//           ))}
//         </Marquee>),
//   },
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#",
//     cta: "Learn more",
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1",
//   },
//   {
//     name: "Location",
//     description: "Sacramento, California.",
//     href: "#",
//     cta: "Learn more",
//     className: "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3",
//   },
//   {
//     Icon: Share2Icon,
//     name: "Integrations",
//     description: "Supports 100+ integrations and counting.",
//     href: "#",
//     cta: "Learn more",
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     href: "#",
//     cta: "Learn more",
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
//   },
// ];

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
                />
                <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl}/>
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/*<BlurFade delay={BLUR_FADE_DELAY * 3}>*/}
        {/*  <BentoGrid>*/}
        {/*    {features.map((feature, idx) => (*/}
        {/*        <BentoCard key={idx} {...feature} />*/}
        {/*    ))}*/}
        {/*  </BentoGrid>*/}
        {/*</BlurFade>*/}

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown
                className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
                <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                  <ResumeCard
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={Array.isArray(work.description) ? [...work.description] : [work.description as unknown as string]}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
                <BlurFade
                    key={education.school}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                      key={education.school}
                      href={education.href}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="awards">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Awards</h2>
            </BlurFade>
            {DATA.awards.map((awards, id) => (
                <BlurFade
                    key={awards.institution}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                      key={awards.institution}
                      href={awards.href}
                      logoUrl={awards.logoUrl}
                      altText={awards.institution}
                      title={awards.institution}
                      awardDesc={awards.description}
                      subtitle={awards.award}
                      period={`${awards.start}`}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="certificates">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Certifications</h2>
            </BlurFade>
            {DATA.certificates.map((certificates, id) => (
                <BlurFade
                    key={certificates.institution}
                    delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                      key={certificates.institution}
                      href={certificates.href}
                      logoUrl={certificates.logoUrl}
                      altText={certificates.institution}
                      title={certificates.institution}
                      subtitle={certificates.certificate}
                      period={`${certificates.start} - ${certificates.end}`}
                  />
                </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple websites to
                    complex web applications. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                  <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                    <ShineBorder
                        className="rounded-lg"
                        color={["#77aaff", "#bbeeff", "#3366ff"]} // Customize gradient colors here
                    >
                      <ProjectCard
                          href={project.href}
                          key={project.title}
                          title={project.title}
                          description={project.description}
                          dates={project.dates}
                          tags={project.technologies}
                          image={project.image}
                          video={project.video}
                          links={project.links}
                      />
                    </ShineBorder>
                  </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. People from around the
                    country would come together and build incredible things in 2-3
                    days. It was eye-opening to see the endless possibilities
                    brought to life by a group of motivated and passionate
                    individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                    <BlurFade
                        key={project.title + project.dates}
                        delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                    >
                      <HackathonCard
                          title={project.title}
                          description={project.description}
                          location={project.location}
                          dates={project.dates}
                          image={project.image}
                          links={project.links}
                      />
                    </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                      href={DATA.contact.social.Resume.url}
                      className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
  );
}