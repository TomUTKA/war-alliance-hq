
function openTranslateCurrentPage(){const lang=(navigator.language||navigator.userLanguage||'en').split('-')[0];const current=window.location.href;const target=lang==='en'?'es':lang;const url='https://translate.google.com/translate?sl=auto&tl='+encodeURIComponent(target)+'&u='+encodeURIComponent(current);window.open(url,'_blank');}
