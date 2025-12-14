import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function LanguageSelector({ className = "" }) {
    const { locale } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    const languages = {
        es: "ESPAÑOL",
        en: "ENGLISH",
        fr: "FRANÇAIS",
    };

    const changeLanguage = (lang) => {
        if (locale === lang) {
            setIsOpen(false);
            return;
        }

        setIsOpen(false);

        router.get(
            `/language/${lang}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                only: ["locale", "translations"],
            }
        );
    };

    return (
        <div className={`relative ${className} z-50`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-white text-sm hover:text-primary transition-colors uppercase font-medium focus:outline-none"
            >
                <span className="text-lg">✪</span>
                Idiom : {languages[locale] || "ESPAÑOL"}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-dark-card border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden">
                        {Object.keys(languages).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => changeLanguage(lang)}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 transition-colors ${
                                    locale === lang
                                        ? "text-primary font-bold"
                                        : "text-white"
                                }`}
                            >
                                {languages[lang]}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
