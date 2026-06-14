const faqDetails = document.querySelectorAll('.faq-details');

faqDetails.forEach(details => {
  const btn = details.querySelector('.faq-question');

  btn.addEventListener('click', () => {
    const isOpen = details.classList.contains('is-open');

    faqDetails.forEach(d => {
      d.classList.remove('is-open');
      d.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      details.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
