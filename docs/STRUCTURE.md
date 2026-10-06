# Struktura wizji 3

Dokument `index.html` jest samodzielnym HTML. `data-partial-candidate` oznacza przyszły podział, nie aktywne include. Komentarze BEGIN/END COMPONENT wyznaczają granice.

| ID | Blok | Odpowiedzialność / przyszły partial |
| --- | --- | --- |
| `v3-page` | Body | Wspólny scope Stimulus `modal` |
| `v3-header` | Nagłówek | Logo, linki sekcji, CTA; `vision3/header.html` |
| `v3-main` | Main | Kolejność treści |
| `v3-home` | Hero | Główna obietnica i CTA; `vision3/hero.html` |
| `v3-product` | Podgląd produktu | Obudowa mockupu i opis demonstracyjny |
| `v3-hero-leads-preview` | Podgląd CRM | Toolbar, sidebar, tabela; `mockups/leads_preview.html` |
| `v3-industries` | Branże | Karty Fotowoltaika / Ubezpieczenia / Motoryzacja |
| `v3-how` | Jak to działa | Skróty pięciu funkcji |
| `v3-value` | Korzyści | Leady, CRM, opiekun |
| `v3-start` | Współpraca | Trzy kroki i CTA |
| `v3-features` | Funkcjonalności | Pięć natywnych rozwijanych details |
| `v3-contact` | Końcowe CTA | Zaproszenie do rozmowy |
| `v3-footer` | Stopka | Marka i e-mail |
| `v3-contact-dialog` | Dialog | Wspólny formularz kontaktu |

Karty branż mają ID `v3-industry-1..3`, kroki `v3-step-1..3`, funkcje `v3-feature-0..4`. Pełna lista: COMPONENT_IDS.md.

## Interakcje

CTA ma `data-action="modal#open"`; karty branż dodatkowo `data-category`. Kontroler wypełnia select branży, otwiera natywny dialog, zamyka go przyciskiem, Escape lub kliknięciem poza obszarem. Walidacja używa HTML5 i nie wysyła danych. Zamknięcie przywraca przewijanie body.

Funkcje używają natywnych details/summary; pierwsza jest początkowo otwarta. Tabela nie jest aktywnym CRM. Jej filtry i sidebar są elementami ilustracyjnymi.

## Responsywność i ostrość

Tekst i tabela to HTML, ikony są SVG z Lucide. Podgląd ma własny poziomy scroll na wąskich ekranach; sidebar zależy od szerokości komponentu. Kolumny tabeli pozostają wyrównane. Karty branż układają się pionowo na telefonie. Kroki współpracy przenoszą CTA pod tekst. Zachowuj te reguły podczas modyfikacji.

## Wygląd

Jasne tło, delikatny róż/błękit, czarne CTA, duża centralna typografia. Układ jest adaptacją kierunku Wix, nie jego kopią pixel-perfect. Nie przeniesiono przykładów anglojęzycznych opinii ani niezweryfikowanych zdjęć. Nie dodawaj fikcyjnych referencji ani wyników biznesowych.
