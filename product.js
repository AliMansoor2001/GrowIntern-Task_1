// Load the JSON File //

// async function loadTranslations(language) {
//     const response = await fetch(`${language}.json`);
//     const translations = await response.json();
//     return translations;
// }


// // Apply translation to the page //

// async function changeLanguage() {
//     const selectedLanguage = document.getElementById('language').value; 
//     const translations = await loadTranslations(selectedLanguage);


// // Update the page content //

// document.querySelector('.heading1').textContent = translations.heading1;
// document.querySelector('#log_in').textContent = translations.log_in;
// document.querySelector('.description').textContent = translations.description;
// document.querySelector('.month').textContent = translations.month;
// document.querySelector('.sentence').textContent = translations.sentence;
// document.querySelector('.experience').textContent = translations.experience;
// document.querySelector('.tvoption').textContent = translations.tvoption;
// document.querySelector('.parent_option').textContent = translations.parent_option;
// document.querySelector('.inst_para').textContent = translations.inst_para;
// document.querySelector('.watch').textContent = translations.watch;
// document.querySelector('.discover').textContent = translations.discover;
// document.querySelector('.exclusive').textContent = translations.exclusive;
// document.querySelector('.lists').textContent = translations.lists;
// document.querySelector('.device_heading').textContent = translations.device_heading;
// document.querySelector('.faqs_heading').textContent = translations.faqs_heading;
// document.querySelector('.qna1').textContent = translations.qna1;
// document.querySelector('.qna1_answer').textContent = translations.qna1_answer;
// document.querySelector('.qna2').textContent = translations.qna2;
// document.querySelector('.qna2_answer').textContent = translations.qna2_answer;
// document.querySelector('.qna3').textContent = translations.qna3;
// document.querySelector('.qna3_answer').textContent = translations.qna3_answer;
// document.querySelector('.qna4').textContent = translations.qna4;
// document.querySelector('.qna4_answer').textContent = translations.qna4_answer;
// document.querySelector('.qna5').textContent = translations.qna5;
// document.querySelector('.qna5_answer').textContent = translations.qna5_answer;
// document.querySelector('.company_heading').textContent = translations.company_heading;
// document.querySelector('.view_opt').textContent = translations.view_opt;
// document.querySelector('.help').textContent = translations.help;
// document.querySelector('.connecting').textContent = translations.connecting;
// document.querySelector('.rights_para').textContent = translations.rights_para;
// document.querySelector('.pri_policy').textContent = translations.pri_policy;
// document.querySelector('.coo_policy').textContent = translations.coo_policy;
// document.querySelector('.sub_agreement').textContent = translations.sub_agreement;
// document.querySelector('.privacy_rights').textContent = translations.privacy_rights;
// document.querySelector('.manager').textContent = translations.manager;

// // change text direction for arabic//

// if (selectedLanguage === 'ar') {
//     document.body.classList.add('rtl');
// } else {
//     document.body.classList.remove('rtl')
// }

// }

// window.onload = () => changeLanguage();







document.getElementById('log_in').addEventListener('click', function() {
    console.log('Button is Clicked');

window.location.href = 'signin.html';
})

document.getElementById('signup_form').addEventListener('click', function() {
    console.log('Button is Clicked');

window.location.href = 'signin.html';
})