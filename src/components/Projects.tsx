import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Carousel, { type CarouselHandle } from "./Carousel";
import { useTranslation } from "react-i18next";
import MyGitHubGrid from "./MyGitHubGrid";

type ProjectCarouselItem = {
    id: number;
    title: string;
    category: string;
    period: string;
    description: string;
    technologies: string[];
    highlights: string[];
    image: string;
    accentFrom: string;
    accentTo: string;
};

export function Projects() {
    const carouselRef = useRef<CarouselHandle | null>(null);
    const { t } = useTranslation('projects');
    const [viewport, setViewport] = useState(() => ({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    }));

    useEffect(() => {
        const updateViewport = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };

        updateViewport();
        window.addEventListener("resize", updateViewport);

        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const projectItems = t('items', { returnObjects: true }) as ProjectCarouselItem[];
    const controls = t('controls', { returnObjects: true }) as { previous: string; next: string };

    return (
        <section id="projects" className="relative flex flex-col w-screen items-center justify-center overflow-hidden bg-slate-50 pt-10 scroll-mt-12">
            <div className="px-16 w-full">
                <MyGitHubGrid/>
            </div>
            <div className="px-16 flex flex-col gap-4 mb-10 w-full">
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-sm uppercase tracking-[0.35em] text-green-500">
                    {t('eyebrow')}
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tighter text-slate-950 md:text-4xl">
                    {t('header')}
                    </h2>
                </div>
                <p className="max-w-2xl text-base font-light leading-8 md:text-lg">
                    {t('description')}
                </p>
            </div>
            <div className="relative w-full">
                <Carousel
                    ref={carouselRef}
                    items={projectItems}
                    baseWidth={viewport.width}
                    baseHeight={Math.max(viewport.height - 40, 0)}
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={false}
                    loop={false}
                    round={false}
                />
                <button
                    type="button"
                    aria-label={controls.previous}
                    onClick={() => carouselRef.current?.prev()}
                    className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center cursor-pointer bg-white/50 text-slate-900 transition hover:bg-slate-50"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    type="button"
                    aria-label={controls.next}
                    onClick={() => carouselRef.current?.next()}
                    className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center cursor-pointer bg-white/50 text-slate-900 transition hover:bg-slate-50"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
        </section>
    )
}