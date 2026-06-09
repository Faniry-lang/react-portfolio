import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";

type NavLink = {
    endpoint: string,
    link: string
}

const links: Array<NavLink & { key: 'about' | 'projects' | 'contacts' }> = [
    {
        key: "about",
        endpoint: "#about",
        link: "About me"
    },
    {
        key: "projects",
        endpoint: "#projects",
        link: "My projects"
    },
    {
        key: "contacts",
        endpoint: "#contacts",
        link: "Contacts"
    }, 
]

export function Navbar() {
    const { t, i18n } = useTranslation('navbar');
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language ?? 'en';
    const targetLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLanguageToggle = () => {
        void i18n.changeLanguage(targetLanguage);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSectionClick = () => {
        closeMobileMenu();
    };

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <div className="fixed inset-x-0 top-0 z-100 flex h-10 items-center justify-between gap-4 bg-gray-100 px-4 md:px-0">
                <div className="pl-3 md:px-20">
                    <a href="#hero">
                        <span className="font-semibold">Faniry Ranaivoson</span> | <span className="font-mono">{t('brand.role')}</span>    
                    </a> 
                </div>
                <div className="hidden gap-4 justify-around md:flex">
                    {
                        links.map((item, index) => (
                            <a key={index} href={item.endpoint} onClick={handleSectionClick}>
                                {t(`links.${item.key}`)}
                            </a>
                        ))
                    }
                </div>
                <div className="flex h-full items-center gap-2 md:gap-3">
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((current) => !current)}
                        className="flex h-full items-center justify-center px-4 text-gray-900 transition hover:text-green-500 md:hidden"
                    >
                        {isMobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
                    </button>
                    <div className="hidden h-full items-center gap-3 md:flex">
                        <a href="#contacts" className="flex h-full cursor-pointer items-center border border-gray-900 bg-gray-900 px-10 font-semibold text-white transition hover:bg-transparent hover:text-gray-900">
                            {t('workWithMe')}
                        </a>
                        <button
                            type="button"
                            aria-label={t('toggleAria')}
                            onClick={handleLanguageToggle}
                            className="flex gap-2 h-full cursor-pointer items-center px-4 font-mono text-sm font-semibold text-gray-900 transition border border-transparent hover:border-gray-900"
                        >
                            {
                                targetLanguage == 'fr' ? (
                                    <>
                                        <Icon icon="flagpack:fr" className="w-8 h-8" />
                                    </>
                                ) : (
                                    <>
                                        <Icon icon="flagpack:us" className="w-8 h-8" />
                                    </>
                                )
                            }
                            {targetLanguage.toUpperCase()}
                        </button>
                    </div>
                </div>
            </div>

                    {isMobileMenuOpen ? (
                        <div className="fixed inset-0 z-90 flex flex-col bg-gray-900 text-white md:hidden">
                            <div className="flex h-10 items-center justify-between border-b border-white/10 px-4">
                                <a href="#hero" onClick={handleSectionClick}>
                                    <span className="font-semibold">Faniry Ranaivoson</span>
                                </a>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={closeMobileMenu}
                                    className="flex items-center justify-center text-white"
                                >
                                    <XMarkIcon className="h-7 w-7" />
                                </button>
                            </div>

                            <div className="flex flex-1 flex-col justify-between px-6 py-8">
                                <nav className="flex flex-col gap-6 text-3xl font-semibold tracking-tight">
                                    {
                                        links.map((item) => (
                                            <a key={item.key} href={item.endpoint} onClick={handleSectionClick} className="transition hover:text-green-400">
                                                {t(`links.${item.key}`)}
                                            </a>
                                        ))
                                    }
                                </nav>

                                <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                                    <a href="#contacts" onClick={handleSectionClick} className="flex w-full items-center justify-center border border-white bg-white px-6 py-4 font-semibold text-gray-900 transition hover:bg-transparent hover:text-white">
                                        {t('workWithMe')}
                                    </a>
                                    <button
                                        type="button"
                                        aria-label={t('toggleAria')}
                                        onClick={handleLanguageToggle}
                                        className="flex w-full items-center justify-center gap-3 border border-white/20 px-6 py-4 font-mono text-sm font-semibold text-white transition hover:border-green-400 hover:text-green-400"
                                    >
                                        {targetLanguage.toUpperCase()}
                                        <Icon icon={targetLanguage === 'fr' ? 'flagpack:fr' : 'flagpack:us'} className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
        </>
    )
}