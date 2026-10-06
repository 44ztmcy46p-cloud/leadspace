# LeadSpace — wizja 3

Edytowalny projekt homepage oparty na kierunku prezesa z Wix. Eksport z 2 października 2026. Tylko wizja 3: HTML + Tailwind CSS 4 + Stimulus.js. Bez Django i backendu.

## Dla prezesa: od czego zacząć

1. Rozpakuj ZIP.
2. Otwórz `preview.html` dwuklikiem w przeglądarce. To kompletny podgląd offline z grafikami, ikonami i działającymi oknami demonstracyjnymi.
3. Przekaż całą paczkę Codexowi albo załącz ją do rozmowy ChatGPT obsługującej pliki i edycję kodu.
4. Wklej treść `START_DLA_CODEXA.txt`, a pod nią opisz pierwszą poprawkę.
5. Po zmianach poproś o przebudowę i aktualny `preview.html`. Ten plik jest wynikiem, nie głównym źródłem projektu.

Przykłady poleceń: „Skróć nagłówek w hero”, „Zamień kolejność branż”, „Powiększ tabelę na desktopie”, „Zmień błękit sekcji Jak to działa”, „W sekcji Współpraca skróć opis drugiego kroku”. Wskazuj nazwę sekcji lub ID z dokumentacji. Nie trzeba ponownie opisywać strony na podstawie PNG.

Możliwość osadzenia interaktywnego podglądu wewnątrz czatu zależy od narzędzi dostępnych w danej rozmowie. `preview.html` zawsze pozostaje zwykłym plikiem do otwarcia w przeglądarce.

## Dla Codexa / developera

Wymagane Node.js 20+ i npm. W katalogu projektu:

```sh
npm ci
npm run build
npm start
```

Podgląd: `http://127.0.0.1:4173`. Serwer jest lokalny. Zatrzymanie: Ctrl+C. Po zmianach CSS lub JS uruchom ponownie `npm run build`, potem odśwież stronę. Sam HTML jest edytowany bezpośrednio w `index.html`; przebudowa aktualizuje też przenośny `preview.html`.

Gotowy `index.html` można również otworzyć dwuklikiem: style, obrazy i klasyczny bundle JS używają ścieżek względnych. Pierwszy podgląd nie wymaga npm ani internetu. Instalacja zależności przez `npm ci` wymaga dostępu do rejestru npm.

## Co edytować

| Plik | Zastosowanie |
| --- | --- |
| `index.html` | Główne źródło treści, układu, ID i komentarzy komponentów |
| `src/styles.css` | Tailwind 4, wspólne style podglądu aplikacji, styl wizji 3 i responsive |
| `src/app.js` | Inicjalizacja Stimulus i ikon |
| `src/controllers/modal_controller.js` | Dialog kontaktowy, walidacja, zamknięcie |
| `src/icons.js` | Ikony Lucide i ich inicjalizacja |
| `assets/house.png`, `insurance.png`, `car.png` | Oryginalne ilustracje AI z projektu |
| `assets/styles.css`, `assets/app.js` | Skompilowane pliki; nie edytować ręcznie |
| `preview.html` | Samodzielny podgląd wygenerowany z tych samych źródeł; nie edytować ręcznie |
| `AGENTS.md` | Reguły kontynuacji pracy dla agenta |
| `docs/STRUCTURE.md` | Mapa sekcji i ich odpowiedzialności |
| `docs/COMPONENT_IDS.md` | Wszystkie ID w dokumencie |
| `docs/DJANGO_HANDOFF.md` | Specyfikacja późniejszej integracji |
| `docs/ASSETS_AND_LICENSES.md` | Pochodzenie assetów i noty |

`npm run check` sprawdza unikalność ID, podstawowe komponenty, kotwice, ARIA i ścieżki ilustracji. Build uruchamia tę kontrolę automatycznie. Style wspólne odziedziczone z projektu zawierają także nieużywane reguły pomocnicze; pozostawiono je dla zgodności komponentu tabeli. HTML oraz kod uruchamianych kontrolerów dotyczą tylko wizji 3.

## Zakres i ograniczenia

Formularz nie wysyła i nie zapisuje danych. Tabela jest przykładem, nie połączeniem z CRM. FAQ/funkcje używają natywnych `details/summary`. W pakiecie nie ma kont, sekretów, historii Git, konfiguracji prywatnego hostingu ani node_modules. Usunięto przełącznik prowadzący do trzech innych wizji. Ten eksport nie zmienia istniejącego podglądu w czacie.
