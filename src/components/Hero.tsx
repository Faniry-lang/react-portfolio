import { ChevronRightIcon, UserPlusIcon } from "@heroicons/react/16/solid";
import { SkillsGrid } from "./SkillsGrid";
import DotField from "./DotField";
import { useTranslation } from "react-i18next";

export function Hero() {
    const { t } = useTranslation('hero');

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-50 pt-20 scroll-mt-12">
            <div className="absolute inset-0 pointer-events-none">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={14}
                    bulgeStrength={67}
                    glowRadius={160}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={500}
                    cursorForce={0.1}
                    bulgeOnly
                    gradientFrom="#A855F7"
                    gradientTo="#B497CF"
                    glowColor="transparent"
                />
            </div>

            <div className="relative z-10 grid h-full min-h-0 grid-cols-1 md:grid-cols-2">
                <div className="flex min-h-0 flex-col justify-center px-12 py-8 md:px-20 lg:px-24">
                    <div className="flex flex-col gap-4 mb-10 lg:mb-12">
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-950">
                            {t('name.first')}<br />
                            {t('name.last')}
                        </h1>
                        <p className="font-mono text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-green-400">
                            {t('title.line1')}<br />
                            {t('title.line2')}
                        </p>
                    </div>

                    <div className="max-w-xl text-xl md:text-2xl text-slate-700 leading-relaxed">
                        {t('description')}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="mt-8 flex items-center gap-6 self-start bg-green-400 cursor-pointer px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white lg:mt-10">
                            <span>
                                {t('cta.projects')}
                            </span>
                            <div className="">
                                <ChevronRightIcon className="h-5 w-5" />
                            </div>
                        </a>
                        <a href="#contacts" className="mt-8 flex items-center gap-6 self-start bg-green-400 cursor-pointer px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white lg:mt-10">
                            <span>
                                {t('cta.contact')}
                            </span>
                            <div className="">
                                <UserPlusIcon className="h-5 w-5" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex min-h-0 flex-col items-center justify-center px-12 py-8 md:px-20">
                    <h3 className="block md:hidden text-4xl font-bold tracking-tight text-slate-900 my-20 font-poppins text-center">
                        {t('skillsTitle')}
                    </h3>
                    <div className="relative flex h-fit w-full max-w-136 items-center justify-center min-h-0">
                        <SkillsGrid />
                    </div>
                </div>
            </div>
      </section>
    )
}