import { usePage } from "@inertiajs/react";

export default function useTranslation() {
    const { translations } = usePage().props;

    const t = (key) => {
        if (!translations || !translations[key]) {
            return key;
        }
        return translations[key];
    };

    return { t };
}
