"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  index: number;
}

export function ProjectCard({
  slug,
  title,
  description,
  tech,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/projects/${slug}`} className="group block">
        <article className="relative border-b border-border py-6 sm:py-8 transition-colors duration-300 hover:bg-muted/30">
          <div className="flex items-start justify-between gap-6">
            {/* Left: content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent truncate">
                  {title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1 mb-3 pl-8">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5 pl-8">
                {tech.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono text-muted-foreground/70"
                  >
                    {item}
                    {item !== tech.slice(0, 4).at(-1) && (
                      <span className="ml-1.5 text-border">/</span>
                    )}
                  </span>
                ))}
                {tech.length > 4 && (
                  <span className="text-[11px] font-mono text-muted-foreground/50">
                    +{tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Right: arrow */}
            <div className="flex items-center shrink-0 pt-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent transition-all duration-300 group-hover:border-border group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

