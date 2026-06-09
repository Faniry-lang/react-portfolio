import { EnvelopeIcon, MapPinIcon, PhoneIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Icon } from "@iconify/react"; // Réutilisation d'iconify pour les logos sociaux
import { useTranslation } from "react-i18next";

const socialLinks = [
    { key: 'github', label: "GitHub", icon: "bi:github", href: "https://github.com/Faniry-lang/" },
    { key: 'linkedin', label: "LinkedIn", icon: "bi:linkedin", href: "https://www.linkedin.com/in/faniry-ranaivoson-81b0b53a1/" },
    { key: 'facebook', label: "Facebook", icon: "bi:facebook", href: "https://web.facebook.com/faniry.ranaivoson.18/" },
];

export function Contacts() {
    const { t } = useTranslation('contacts');

    return (
        <footer id="contacts" className="scroll-mt-12 bg-gray-900 text-white font-poppins">
            <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 lg:px-20">
                
                {/* Header Section */}
                <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2 className="mt-3 text-6xl md:text-8xl font-extrabold tracking-tighter">
                            {t('heading')}
                        </h2>
                    </div>
                </div>

                {/* Grid Content */}
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                    
                    {/* Column 1: Social media */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/5 xl:border-t-0">
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40 mb-2">
                            {t('social.title')}
                        </p>
                        <div className="grid gap-4 w-full">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.label} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group flex items-center justify-between border-b border-white/10 pb-3 text-white transition hover:text-green-400"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon icon={social.icon} className="h-5 w-5 text-white/60 group-hover:text-green-400 transition-colors" />
                                        <div>
                                            <span className="block text-lg font-semibold leading-tight">{social.label}</span>
                                            <span className="text-sm text-white/50">{t(`social.${social.key}`)}</span>
                                        </div>
                                    </div>
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Email */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/5 xl:border-t-0">
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40 mb-2">
                            {t('email.title')}
                        </p>
                        <a href="mailto:faniry.ranaivoson167@gmail.com" className="group flex items-start gap-4 text-white transition hover:text-green-400">
                            <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:bg-green-400/10 group-hover:text-green-400 transition-all">
                                <EnvelopeIcon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-lg font-semibold leading-tight break-all">faniry.ranaivoson167@gmail.com</span>
                                <span className="block text-sm text-white/50 leading-relaxed">{t('email.subtitle')}</span>
                            </div>
                        </a>
                    </div>

                    {/* Column 3: Phone */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/5 xl:border-t-0">
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40 mb-2">
                            {t('phone.title')}
                        </p>
                        <a href="tel:+261327702640" className="group flex items-start gap-4 text-white transition hover:text-green-400">
                            <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:bg-green-400/10 group-hover:text-green-400 transition-all">
                                <PhoneIcon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-lg font-semibold leading-tight">+261 32 77 026 40</span>
                                <span className="block text-sm text-white/50 leading-relaxed">{t('phone.subtitle')}</span>
                            </div>
                        </a>
                    </div>

                    {/* Column 4: Location */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-white/5 xl:border-t-0">
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/40 mb-2">
                            {t('location.title')}
                        </p>
                        <div className="flex items-start gap-4 text-white">
                            <div className="p-2 rounded-lg bg-green-400/10 text-green-400">
                                <MapPinIcon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-lg font-semibold leading-tight">Antananarivo, Madagascar</span>
                                <span className="block text-sm text-white/50 leading-relaxed">{t('location.subtitle')}</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Credits */}
                <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-sm text-white/40">
                        {t('credits.name')}
                    </span>
                    <span className="text-sm text-white/40">
                        {t('credits.role')}
                    </span>
                </div>
            </div>
        </footer>
    );
}