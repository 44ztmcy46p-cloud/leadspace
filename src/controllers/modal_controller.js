import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
  static targets = ['dialog', 'title', 'description', 'form', 'notice', 'submit', 'category'];
  open(event) {
    const { title, description, category, mode } = event.currentTarget.dataset;
    this.titleTarget.textContent = title || 'Umów spotkanie';
    this.descriptionTarget.textContent = description || 'Porozmawiajmy o leadach dla Twojej firmy.';
    this.formTarget.reset();
    this.noticeTarget.hidden = true;
    this.noticeTarget.textContent = '';
    this.submitTarget.hidden = false;
    this.submitTarget.textContent = mode === 'login' ? 'Sprawdź dostęp' : 'Przygotuj zgłoszenie';
    this.formTarget.dataset.mode = mode || 'contact';
    this.categoryTarget.value = category || '';
    this.dialogTarget.showModal();
    document.body.style.overflow = 'hidden';
  }
  close() { this.dialogTarget.close(); }
  restore() { document.body.style.overflow = ''; }
  backdrop(event) {
    if (event.target !== this.dialogTarget) return;
    const r = this.dialogTarget.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) this.close();
  }
  submit(event) {
    event.preventDefault();
    if (!this.formTarget.reportValidity()) return;
    this.noticeTarget.hidden = false;
    this.noticeTarget.textContent = this.formTarget.dataset.mode === 'login'
      ? 'To podgląd strony. Logowanie do systemu CRM nie zostało jeszcze podłączone.'
      : 'Formularz jest poprawnie wypełniony. To wersja demonstracyjna — zgłoszenie nie zostało wysłane.';
  }
}
