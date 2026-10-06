# Weryfikacja eksportu

2 października 2026:

- Build Tailwind 4 i bundle Stimulus zakończony poprawnie.
- Sprawdzone 46 unikalnych ID, kotwice, ARIA i ścieżki ilustracji.
- `index.html` oraz `preview.html` otwarto lokalnie przez file://.
- Sprawdzone renderowanie ikon, otwarcie dialogu, przekazanie branży Ubezpieczenia, zamknięcie Escape i rozwijanie funkcji.
- Sprawdzone szerokości 1440 i 390 px: brak rozszerzania całej strony poza viewport.
- Układ desktopowy i mobilny obejrzano na zrzutach.
- Testowano przeglądarkę Chromium; innych silników przeglądarek nie testowano.
- Nie testowano wysyłki formularza, bo nie ma backendu. Podgląd CRM jest ilustracyjny.

Eksport ma usunięty przełącznik wersji 1/2/4 i korzysta ze względnych ścieżek. JS skompilowano jako klasyczny skrypt, aby działał również bez serwera. Wersje zależności zachowuje package-lock.json.
