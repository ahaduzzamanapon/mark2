
window.init_i18next = () => {
    return new Promise(async (resolve, reject) => {
        const EN = await fetch(SITE_URL+'/locales/EN.json');
        const BN = await fetch(SITE_URL+'/locales/BN.json');
        resolve({
            lng: 'bn', // if you're using a language detector, do not define the lng option
            fallbackLng: 'en',
            debug: false,
            resources: {
                en: {
                    translation: await EN.json()
                },
                bn: {
                    translation: await BN.json()
                }
            }
        });
    });
}

window.i18nTranslate = (html = document) => {
    html.querySelectorAll('[data-i18n], [place-i18n], i18n').forEach(e => {
        const data = e.getAttribute('data-i18n');
        if(!(data === 'number' || data === 'date' || data === 'time')){
            if(e.tagName === 'INPUT' || e.tagName === 'TEXTAREA'){
                if(data?.length > 0){
                    if(e.tagName === 'INPUT') e.value = i18next.t(data);
                    else if(e.tagName === 'TEXTAREA') e.innerText = i18next.t(data);
                    else if(e.tagName === 'SELECT') e.value = data;
                }
                const placeholder = e?.getAttribute('place-i18n')?.trim();
                if(placeholder?.length > 0) e.placeholder = i18next.t(placeholder);
            } else {
                e.innerText = i18next.t(data);
            }
        }
    });
}



window.reloadTranslations = async () => {
    await i18next.init(await window?.init_i18next());
    i18nTranslate();
}
document.addEventListener("DOMContentLoaded", event => { 
    reloadTranslations();
});