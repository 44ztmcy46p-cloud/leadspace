# Specyfikacja przyszłego handoffu Django

Teraz nie uruchamiamy Django. Ten dokument opisuje późniejsze wdrożenie przez lokalnego Codexa. Wybrana wizja 3 jest jedyną stroną paczki.

## Podział

- `leadspace/base.html`: head, meta, assety, bloki content/scripts.
- `leadspace/landing.html`: kolejność include sekcji z STRUCTURE.md.
- `leadspace/vision3/header.html`, `hero.html`, `industries.html`, `how.html`, `value.html`, `start.html`, `features.html`, `contact.html`, `footer.html`.
- `leadspace/mockups/leads_preview.html`: tabela, bez zależności od prawdziwej bazy CRM.
- `leadspace/partials/contact_dialog.html`: parametr `id_prefix`, domyślnie `v3`.
- Powtarzalne elementy: karta branży, krok, feature details. ID przekazuj jako jawne dane, nie wyliczaj ze zmiennej treści.

Zachowaj wszystkie obecne ID. Nie generuj zduplikowanych ID przy wielokrotnym include. Body albo wspólny rodzic musi obejmować CTA i dialog kontrolerem `modal`.

## Dane do kontekstu

`industries`: id, title, description, image, category.
`steps`: id, title, body, secondary_body.
`features`: id, title, subtitle, description, lucide_icon, initially_open.
`demo_leads`: display_name, industry, status, style_key; wyraźnie dane demonstracyjne.
`company`: zweryfikowana nazwa, e-mail, dane stopki.
`hero`: eyebrow, heading, lead, CTA labels.

Używaj domyślnego escapingu Django. Dla danych JSON używaj `json_script`; nie wstrzykuj treści przez `innerHTML`. Nazwy ikon i klas ogranicz do kontrolowanych wartości.

## Statyczne pliki

Przenieś assets do namespace `static/leadspace/`. Użyj `{% load static %}` i `{% static 'leadspace/...' %}` zamiast ścieżek względnych. Zastąp linki aplikacyjne `{% url %}`. Tailwind skanuje rzeczywiste template HTML po przeniesieniu; nie składaj dynamicznie fragmentów klas, których kompilator nie zobaczy.

## Formularz

Obecny modal tylko waliduje i wyświetla informację o demonstracji. Backend musi otrzymać osobny endpoint i kontrakt: name, email, category. Wymagane serwerowe sprawdzenie danych, CSRF, obsługa błędów i stanów wysyłania/sukcesu; komunikat sukcesu dopiero po potwierdzeniu zapisu. Ustal politykę danych i ewentualne zgody przed podłączeniem. Nie zmieniaj samego tekstu demonstracji na „wysłano” bez implementacji endpointu.

Natywny dialog powinien nadal obsługiwać Escape, focus i blokadę przewijania. Przy zastąpieniu kontrolera zachowaj dostępność etykiet i błędów.

## Kryteria odbioru

Ta sama treść i układ w desktop/mobile; komplet assetów; brak powielonych ID; poprawne ARIA; działające CTA i details; ostra tabela z lokalnym scrollowaniem; poprawna walidacja klient/serwer; brak wysyłki danych przed zleceniem integracji. Nie przenoś kluczy ani konfiguracji prywatnego podglądu — paczka ich nie zawiera.
