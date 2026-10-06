# Zasady pracy nad tym projektem

## Cel

Kontynuuj istniejącą wizję 3 LeadSpace jako edytowalny kod. Prezes opisuje poprawki zwykłym językiem; przekładaj je na zmiany w istniejących komponentach.

## Kontrakt techniczny

- Canonical HTML: `index.html`. Canonical CSS: `src/styles.css`. Stimulus: `src/app.js`, `src/controllers/`.
- Zachowaj Tailwind CSS 4, Stimulus i semantyczny HTML. Nie dodawaj Reacta, Vue ani Django bez osobnego zlecenia.
- `preview.html` i `assets/styles.css`, `assets/app.js` to pliki generowane.
- Zachowaj istniejące ID, powiązania ARIA, kotwice, komentarze BEGIN/END COMPONENT i `data-partial-candidate`.
- Większy nowy komponent wymaga unikalnego ID i opisu w docs.
- Mockup tabeli pozostaje HTML. Nie zastępuj tekstu ani tabel obrazem.
- Używaj istniejącego Lucide, zachowując licencje. Grafiki AI z assets są dostępne do dalszej pracy; nie kopiuj dodatkowych obrazów z Wix bez sprawdzenia praw.
- Przy zmianie zależności aktualizuj package-lock.json. Bez potrzeby nie zmieniaj wersji.
- Formularz pozostaje demonstracyjny. Nigdy nie deklaruj wysyłki, jeśli jej nie wykonano.

## Po zmianie

1. Uruchom `npm run check` i `npm run build`.
2. Sprawdź użyte ścieżki, responsywność, modal i details; zakres testowania dopasuj do zmiany.
3. Uaktualnij dokumentację, jeśli zmienił się kontrakt komponentu.
4. Zwróć aktualny podgląd i krótką informację o zmianie. W ChatGPT bez środowiska wykonawczego nie twierdź, że uruchomiono testy.

## Przyszły Django

Podział na partiale jest planem, nie obecnym runtime. Kieruj się `docs/DJANGO_HANDOFF.md` dopiero przy zleconej integracji.
