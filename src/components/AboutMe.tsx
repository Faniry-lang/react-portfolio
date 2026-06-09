import { useTranslation } from "react-i18next";

export function AboutMe() {
    const { t } = useTranslation('about');
    const sections = t('sections', { returnObjects: true }) as Array<{ title: string; body: string }>;

    return (
        <section id="about" className="min-h-screen scroll-mt-12 px-12 py-12 pt-16 md:px-12 lg:px-20 lg:pt-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between">
                <div className="flex flex-1 flex-col justify-center lg:max-w-3xl">
                    <div className="mb-8 flex flex-col gap-3">
                        <span className="font-mono text-sm uppercase tracking-[0.35em] text-green-500">
                            {t('eyebrow')}
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-950 md:text-5xl lg:text-6xl">
                            {t('headline')}
                        </h1>
                    </div>

                    <div className="grid gap-8 text-slate-800">
                        {sections.map((section) => (
                            <div key={section.title} className="space-y-3">
                                <h2 className="text-xl font-semibold text-slate-950 md:text-2xl">
                                    {section.title}
                                </h2>
                                <p className="max-w-2xl text-base leading-8 md:text-lg">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-112 flex-1 overflow-hidden border border-slate-900/10 bg-slate-900 lg:max-w-xl">
                    <img
                        src="/assets/profil.png"
                        alt={t('portraitAlt')}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/25 to-transparent" />
                </div>
            </div>
        </section>
    );
}