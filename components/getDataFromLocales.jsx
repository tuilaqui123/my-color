import VI from "@/data/locales/VI";
import EN from "@/data/locales/EN";

const getDataForLocales = (locale) => {
    switch (locale) {
        case 'vi':
            return VI;
        case 'en':
            return EN;
        default:
            return {}; // Default to an empty object or handle error cases
    }
};

export default getDataForLocales;
