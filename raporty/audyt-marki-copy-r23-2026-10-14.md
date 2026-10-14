# Audyt marketingu, copywritingu i spójności Leadspace

Stan: pełna wersja offline r23, 14.10.2026. Raport według przesłanego MASTER PROMPT. Audyt nie zmienia plików strony.

## Zakres i mapa witryny

Marka: Leadspace. Rynek: Polska, język polski. Oferta: sklep z weryfikowanymi leadami dla nieruchomości, OZE i ubezpieczeń. Odbiorcy: firmy i specjaliści prowadzący sprzedaż; przeznaczenie B2B jest również zapisane w regulaminie. Cel konwersji: rejestracja, następnie doładowanie i zakup kontaktów. Kontakt jest celem pomocniczym. Brak osobnego brandbooka; tone of voice odtworzono z aktualnych tekstów i decyzji właściciela w rozmowie.

Adres produkcyjny wskazany w projekcie: https://www.leadspace.pl/. Dostęp podczas audytu zwrócił błąd proxy „Tunnel connection failed: 403 Forbidden”. Nie oceniono bieżącej wersji online. Poniższe adresy to rzeczywiste ścieżki w eksporcie, nie deklaracja tras produkcyjnych.

| Ścieżka eksportu | Język | Główny komunikat | Główne CTA | Cel biznesowy |
|---|---|---|---|---|
| pages/index.html | PL | Weryfikacja i kontrola przed dostępnością kontaktu w sklepie | Wybierz swoją branżę; Zarejestruj się | Zrozumienie oferty i przejście do kategorii/rejestracji |
| pages/nieruchomosci.html | PL | Wymagania i zakres danych leadów nieruchomości | Sprawdź, jakie dane otrzymasz | Ocena dopasowania oferty |
| pages/oze.html | PL | Leady dla fotowoltaiki i magazynów energii | Sprawdź, jakie dane otrzymasz | Ocena dopasowania oferty |
| pages/ubezpieczenia.html | PL | Leady komunikacyjne, na życie i majątkowe | Sprawdź, jakie dane otrzymasz | Ocena dopasowania oferty |
| pages/cennik.html — Pakiety | PL | Dowolne doładowanie lub pakiety z bonusem | Wybierz → /accounts/signup/ | Przejście do rejestracji i finansowania zakupów |
| pages/o-nas.html | PL | Misja i sposób współpracy sklepu z klientem | Zarejestruj się | Zaufanie do marki |
| pages/kontakt.html | PL | Kontakt mailowy, telefoniczny i formularz | Wyślij wiadomość | Obsługa pytań i zapytań o współpracę |
| pages/regulamin.html | PL | Warunki korzystania, płatności, zakupów i reklamacji | Linki informacyjne; wspólny CTA rejestracji | Informacja o zasadach usługi |
| pages/polityka-prywatnosci.html | PL | Cele, podstawy i zasady przetwarzania danych | Linki informacyjne; wspólny CTA rejestracji | Informacja o przetwarzaniu danych |

Nie ma osobnej strony FAQ, bloga ani dodatkowych landing pages w dostarczonej paczce. Jedno pytanie o okres wykorzystania leada występuje na Pakietach. Wspólne menu, stopka i modal kontaktowy zostały uwzględnione. Zgodnie z decyzją właściciela raport nie rozwija komunikacji o wyłączności ani nie proponuje jej dodania.

## A. Executive Summary

**Wniosek:** oferta jest spójna i zrozumiała po przeczytaniu opisu oraz procesu. Największa przewaga — ankieta telefoniczna i kontrola jakości — jest widoczna. Nie ma podstaw do kolejnego przepisywania całej witryny. Potrzebna jest krótka runda redakcyjna i potwierdzenie ścieżki rejestracji w aplikacji.

Mocne strony:
- konkretne wymagania kwalifikacyjne i listy otrzymywanych danych na stronach branżowych;
- kwoty netto, brutto, bonus i środki do wykorzystania jasno pokazane na Pakietach; wartości są arytmetycznie zgodne;
- jednolite „Ty”, „Twojej”, „Zarejestruj się”, „Kontakt”, „Wyślij wiadomość”;
- brak obietnic CRM, gwarantowanej sprzedaży czy niepotwierdzonych wyników liczbowych w głównych tekstach oferty;
- formalność dokumentów prawnych jest właściwym dostosowaniem do kontekstu, nie problemem brand voice.

Pięć rekomendacji strategicznych:
1. W pierwszym opisie na stronie głównej powiedzieć wprost, że użytkownik **kupuje i pobiera leady**, a nie zamawia kampanię lub obsługę sprzedaży.
2. Rozdzielić „klienta sklepu” od „osoby zainteresowanej usługą” w opisach kwalifikacji. Obecne słowo „klient” odnosi się do obu stron transakcji.
3. Wyjaśnić przejście „Wybierz” → rejestracja, bez obiecywania automatycznego zachowania wyboru pakietu, dopóki nie potwierdzi go programista.
4. Pokazać praktyczne potwierdzenie weryfikacji: zakres ankiety już jest dobry; warto dodać autentyczny, zanonimizowany przykład otrzymywanego pliku lub opisu leada, jeżeli można go udostępnić.
5. Uzgodnić checklistę publikacji: aktualne liczniki, działająca rejestracja, wysyłka kontaktu, metadane z eksportu, canonical i dane strukturalne generowane przez aplikację. Nie oceniać tych elementów na podstawie samego ZIP-a.

Brak problemów P0 stwierdzonych w badanym materiale. P1 dotyczy jasności oferty i spraw do potwierdzenia przed publikacją, nie awarii produkcyjnych.

## B. Scorecard

Oceny są ekspercką oceną treści r23, nie wynikiem badań użytkowników ani prognozą sprzedaży. Wyższa liczba oznacza mniej istotnych problemów w badanym zakresie.

| Obszar i wymagana waga | Ocena | Uzasadnienie i dowód |
|---|---:|---|
| Język i redakcja — 20% | 86/100 | Naturalna polszczyzna, poprawiona pisownia marki, „Liczba pokoi” i „Telefon weryfikacyjny”. Pozostają „kontrola jakości poprzez jedną z metod”, niejasny „klient” i powtórzenia w opisach metod. |
| Spójność marki — 20% | 88/100 | Ujednolicona marka i CTA. „Lead Space” w mockupie jest świadomym odwzorowaniem logo sklepu. „Sklep/platforma” nie są jeszcze stosowane z całkowitą konsekwencją. |
| Skuteczność marketingowa — 20% | 78/100 | Konkretna przewaga procesu, jawne dane branżowe i bonusy. Hero „Lead to dopiero początek” nie wyjaśnia samodzielnie produktu; brakuje udokumentowanego przykładu wyniku procesu. To ocena przekazu, nie skuteczności kampanii. |
| UX i konwersja — 15% | N/O | Lokalny układ i etykiety można ocenić, lecz nie ma dostępu do rejestracji, płatności, zachowania wyboru pakietu, analityki ani testów użytkowników. Nie nadaję liczby sugerującej ocenę całego lejka. |
| SEO i GEO — 15% | 81/100* | *Ocena wyłącznie dostępnej warstwy treści: unikalne title/meta, jeden H1 na każdej stronie, konkretne H1 kategorii, linkowanie do usług i jasne odpowiedzi. Brak H2 przed H3 mockupu na homepage. Indeksacja, widoczność, canonical i schema produkcyjne: N/O. |
| Spójność między podstronami — 10% | 86/100 | Powtarzalny proces, wspólne nazwy konta i CTA, zgodne kwoty. Słowo „klient”, mieszanie sklepu/platformy i kilka powtórzeń nadal wymagają porządku. |

Nie podaję pełnej średniej ważonej: jedna kategoria jest N/O, a zakres SEO/GEO jest częściowy. Nie badano skuteczności pozyskania klientów ani obecności marki w odpowiedziach AI.

## C. Issue Register

P1 — przed publikacją lub najbliższą rundą treści; P2 — istotna poprawka redakcyjna; P3 — opcjonalne dopracowanie. „Fakt” oznacza cytat/obserwację z plików; wpływ i zalecenia pozostają oceną lub hipotezą.

| ID / priorytet | Ścieżka | Dokładny cytat / obserwacja | Rodzaj | Wpływ | Proponowana poprawka i uzasadnienie |
|---|---|---|---|---|---|
| I01 / P1 | pages/index.html | „Lead to dopiero początek.” oraz „Ty otrzymujesz kontakt opisany danymi istotnymi dla Twojej branży.” | Jasność oferty | Fakt: opis nie mówi wprost o kupowaniu i pobieraniu. Hipoteza: część odbiorców może pomylić sklep z usługą kampanii na zamówienie. | Zachować zaakceptowany H1, dopisać zakup i pobieranie w opisie hero. Wyjaśnić model produktu bez zmiany stylistyki. |
| I02 / P1 | pages/cennik.html | Cztery „Wybierz” mają identyczny href /accounts/signup/, bez identyfikatora pakietu w URL. | Oczekiwanie po CTA | Nie ma dowodu, że wybór jest zapamiętany lub inicjuje doładowanie. Nie jest to dowód błędu backendu. | Mikrocopy: „Po kliknięciu «Wybierz» przejdziesz do rejestracji.” Sprawdzić zachowanie wyboru z programistą. |
| I03 / P1 | pages/index.html | „Aktualna dostępność w sklepie” oraz licznik „—”. | Gotowość komunikatu do publikacji | W eksporcie to celowy placeholder, nie działający licznik. | Podłączyć dane przed publikacją albo ukryć wartość, gdy nie jest dostępna. Nie zastępować jej wymyśloną liczbą. |
| I04 / P2 | pages/nieruchomosci.html, pages/oze.html, pages/ubezpieczenia.html | „Klient deklaruje…”, równolegle w pages/o-nas.html „Ty wybierasz leady w sklepie…” | Terminologia | „Klient” to zarówno kupujący leady, jak i osoba opisana w leadzie. | W kryteriach stosować „Osoba zainteresowana…”; „klient” pozostawić dla użytkownika sklepu. Nie zmieniać znaczenia warunków kwalifikacji. |
| I05 / P2 | pages/index.html | „Doładuj konto dowolną kwotą lub wybierz pakiet” i zaraz „Zacznij od dowolnej kwoty albo wybierz pakiet z dodatkowym bonusem.” | Powtórzenie | Nagłówek i opis przekazują prawie identyczną informację. | Skrócić nagłówek do „Doładuj konto”, zachować opis opcji. |
| I06 / P2 | Strony branżowe | „Weryfikacja telefoniczna i przeprowadzenie ankiety” | Redakcja | Długi, urzędowy nagłówek w serwisie o prostym tonie. | „Weryfikacja i ankieta telefoniczna”. Te same czynności, mniej słów. |
| I07 / P2 | Strony branżowe | „Telefon weryfikacyjny” / „Dodatkowy telefon weryfikacyjny.” | Powtórzenie | Opis nie tłumaczy, na czym polega metoda. | „Dodatkowa rozmowa sprawdzająca zainteresowanie usługą.” Potwierdzić zgodność z procedurą. |
| I08 / P2 | Strony branżowe | „Potwierdzenie chęci kontaktu przez SMS” / „Potwierdzenie chęci kontaktu.” | Powtórzenie | Drugi tekst nie dodaje informacji. | Krótszy tytuł „Potwierdzenie przez SMS”, opis „Osoba zainteresowana potwierdza, że chce kontaktu w sprawie usługi.” |
| I09 / P2 | Strony branżowe | „Każdy lead podlega dodatkowej kontroli jakości poprzez jedną z poniższych metod.” | Naturalność języka | „Podlega… poprzez” brzmi administracyjnie. | „Każdy lead sprawdzamy dodatkowo jedną z poniższych metod.” Zachować informację o jednej metodzie, nie obiecywać wszystkich trzech. |
| I10 / P2 | pages/kontakt.html | „działania platformy” we wprowadzeniu; „Korzystanie ze sklepu” w tematach; „Pomoc w korzystaniu z platformy” w formularzu | Nazewnictwo produktu | Nie jest to sprzeczność funkcjonalna, ale mniej konsekwentny język dla odbiorcy. | W marketingu używać „sklep”; w formularzu „Pomoc w korzystaniu ze sklepu”. W dokumentach prawnych pozostawić zdefiniowaną „Platformę”. |
| I11 / P2 | pages/index.html | „Pokazano 1–5 z 16”, lecz w przeglądarce widoczne 3 wiersze; „16 leadów dostępnych w pionie” | Mockup / jasność języka | Odtworzony obraz może wyglądać jak aktywny katalog z aktualnym stanem. „Pion” jest terminem wewnętrznym. | „Podgląd przykładowych leadów” oraz „Kategoria: Nieruchomości”. Poprawić podpis, nie przedstawiać stanu mockupu jako live. |
| I12 / P3 | pages/cennik.html | „Wybierz swój następny kontakt.” | Naturalność | Lekko sztuczne sformułowanie; nie jest błędem. | Opcjonalnie „Wybierz kolejne leady.” To poprawka stylistyczna, nie priorytet. |
| I13 / P2 | pages/index.html | Kolejność HTML nagłówków: H1 → H3 „Wszystkie leady” → H2 procesu | Hierarchia treści | Nagłówek ilustracji sklepu wchodzi w semantyczną strukturę dokumentu. | Oznaczyć nazwę ekranu jako zwykły tekst wyróżniony zamiast H3, zachowując ID i wygląd. Nie jest to gwarancja poprawy rankingu. |
| I14 / P1, potwierdzenie | Strony branżowe | „Każdy lead przechodzi ankietę telefoniczną i kontrolę jakości.” | Dowód obietnicy | Obietnica jest konkretna i dobra, ale pliki nie zawierają danych pozwalających zweryfikować wykonanie procesu dla całego katalogu. | Potwierdzić zakres z operacjami i rozważyć autentyczny zanonimizowany przykład danych z ankiety. Nie zastępować tego fikcyjnymi liczbami lub opiniami. |

Nie traktuję identycznych opisów procesu na trzech podstronach jako błędu samego w sobie: każda może być pierwszym wejściem użytkownika. Powtórzenie jest uzasadnione tam, gdzie pomaga zrozumieć usługę; zbędne wtedy, gdy drugi tekst obok pierwszego nie dodaje informacji.

## D. Copywriting Before / After

To propozycje do oceny, nie wykonane zmiany. Warianty opisujące procedury wymagają zgodności z rzeczywistą pracą konsultantów.

| Ścieżka | Przed — dokładny fragment | Po — propozycja |
|---|---|---|
| index.html | „Ty otrzymujesz kontakt opisany danymi istotnymi dla Twojej branży.” | „W sklepie kupujesz zweryfikowane leady i pobierasz dane potrzebne do przygotowania oferty.” |
| index.html | „Leady dla Twojej branży. Informacje dla Twojej sprzedaży.” | „Zweryfikowane kontakty dla Twojej firmy.” |
| index.html | „Doładuj konto dowolną kwotą lub wybierz pakiet” | „Doładuj konto” — opis poniżej wyjaśnia obie opcje. |
| nieruchomosci.html | „Klient deklaruje zainteresowanie zakupem nieruchomości oraz wskazuje przynajmniej rodzaj poszukiwanej nieruchomości i lokalizację.” | „Osoba zainteresowana zakupem wskazuje co najmniej rodzaj poszukiwanej nieruchomości i lokalizację.” |
| ubezpieczenia.html | „Klient deklaruje, że polisa kończy się w ciągu najbliższych 60 dni.” | „Osoba zainteresowana ubezpieczeniem deklaruje, że jej polisa kończy się w ciągu najbliższych 60 dni.” |
| Strony branżowe | „Weryfikacja telefoniczna i przeprowadzenie ankiety” | „Weryfikacja i ankieta telefoniczna” |
| Strony branżowe | „Każdy lead podlega dodatkowej kontroli jakości poprzez jedną z poniższych metod.” | „Każdy lead sprawdzamy dodatkowo jedną z poniższych metod.” |
| Strony branżowe | „Dodatkowy telefon weryfikacyjny.” | „Dodatkowa rozmowa sprawdzająca zainteresowanie usługą.” |
| Strony branżowe | „Potwierdzenie chęci kontaktu przez SMS” / „Potwierdzenie chęci kontaktu.” | „Potwierdzenie przez SMS” / „Osoba zainteresowana potwierdza, że chce kontaktu w sprawie usługi.” |
| kontakt.html | „Pomoc w korzystaniu z platformy” | „Pomoc w korzystaniu ze sklepu” — zmiana widocznej etykiety, nie wartości pola. |
| index.html, mockup | „16 leadów dostępnych w pionie” | „Kategoria: Nieruchomości” |
| cennik.html | „Wybierz swój następny kontakt.” | „Wybierz kolejne leady.” — opcjonalne. |

Przy Pakietach zamiast wydłużać sam przycisk „Wybierz”, dodać jedno zdanie obok wprowadzenia: „Po kliknięciu «Wybierz» przejdziesz do rejestracji.” Pozwala zachować przyjęty wygląd przycisków.

## E. Brand Voice Guide

Domniemany ton na podstawie aktualnej witryny: rzeczowy, prosty, partnerski, nastawiony na konkretny kolejny krok. To rekonstrukcja, nie formalnie zatwierdzony brandbook.

Zasady:
1. Pisz do jednej osoby: Ty, Twoja firma, Twoja oferta. Bez przechodzenia na Państwo lub Wy w marketingu.
2. Stosuj Leadspace w zwykłych tekstach. Nie zmieniaj automatycznie nazwy w logo, domenie, danych firmy ani dokumentach prawnych.
3. Najpierw wyjaśnij produkt i działanie, następnie korzyść. „Kupujesz lead i pobierasz dane” jest konkretniejsze niż „maksymalizujemy efekty”.
4. Opisuj przeprowadzone czynności: ankieta, kryteria, kontrola. Nie utożsamiaj weryfikacji z gwarancją odebrania telefonu lub sprzedaży.
5. Dodatkowy akapit powinien wnosić nową informację. Nie powtarzaj tytułu innymi słowami.
6. Krótkie nagłówki; opisy bez urzędowych „w ramach realizacji”, „podlega poprzez”, jeśli można napisać „sprawdzamy”.
7. Na stronach ofertowych: „sklep”. „Platforma” może pozostać w formalnych definicjach i kontekście technicznym.
8. CTA określa następną czynność: Zarejestruj się; Sprawdź dane; Zobacz pakiety; Kontakt; Wyślij wiadomość.
9. Zachowuj identyczne kryteria liczbowe i nazwy pól w całym serwisie. Redakcja nie zmienia warunków kwalifikacji.
10. W dokumentach prawnych formalność i wielkie litery zdefiniowanych pojęć mogą być celowe. To nie ten sam rejestr co hero.

| Termin preferowany | Unikać / nie używać bez uzasadnienia |
|---|---|
| Leadspace | LeadSpace, Lead Space w zwykłym copy; wyjątek: odwzorowanie logo |
| zweryfikowany lead | gwarantowany klient, gwarantowana sprzedaż |
| osoba zainteresowana usługą | klient, jeśli nie wiadomo, czy chodzi o kupującego czy osobę w leadzie |
| sklep z leadami | CRM, system zarządzania sprzedażą jako opis oferowanej klientowi funkcji |
| ankieta telefoniczna | nieopisany proces kwalifikacyjny jako jedyne wyjaśnienie |
| telefon weryfikacyjny | verification call |
| bonus / dodatkowe środki | rabat, jeśli nie chodzi o obniżenie ceny |
| dane do pobrania | nieograniczone wykorzystanie danych |
| liczba pokoi | ilość pokoi |
| udokumentowany rezultat | najlepsze leady na rynku, 100% konwersji bez dowodów |

Przykład dobry: „Przed udostępnieniem leada przeprowadzamy ankietę telefoniczną i kontrolę jakości.”
Przykład do unikania: „Dostarczamy klientów, którzy na pewno kupią Twoją usługę.” Drugi przykład jest wymyślonym kontrprzykładem do guide, nie cytatem znalezionym na stronie.

## F. Plan wdrożenia

### Quick wins
- I04–I10: słownik klient/osoba zainteresowana, skrócenie powtarzanych opisów, naturalne nazwy etapów i jednolite etykiety sklepu.
- I11–I13: jasny podpis ilustracji i uporządkowanie jej semantyki; nie zmieniać prawdziwego katalogu aplikacji w ramach copy publicznego.
- I01: jeden konkretny dopisek o kupowaniu i pobieraniu w hero. Zachować zaakceptowany H1 i układ.
- I12 jest opcjonalne. Nie poprawiać zaakceptowanego tekstu tylko dla różnicy stylistycznej.

### W ciągu 30 dni
- Potwierdzić /accounts/signup/, przejście z wyboru pakietu, dane liczników, wysyłkę formularzy i warunki płatności w aplikacji.
- Zatwierdzić krótki słownik i przetestować rozumienie pierwszego ekranu z kilkoma przedstawicielami branż. Pytać: co można tu kupić, co otrzymujesz, co dzieje się po rejestracji.
- Dodać rzeczywisty, zanonimizowany przykład przekazywanych danych, jeśli jest dostępny i zatwierdzony do publikacji.
- Uzupełnić krótkie pytania o zakres danych, zakup pojedynczych kontaktów i pobieranie plików na podstawie faktycznej funkcjonalności.
- Sprawdzić produkcyjne title/meta, canonical, indexability i schema; brak tych elementów w eksporcie nie dowodzi ich braku w aplikacji.

### W ciągu 90 dni
- Po zebraniu danych porównać rejestracje i pierwsze zakupy dla wersji tekstów; nie obiecywać wzrostu przed pomiarem.
- Rozwijać strony kategorii zgodnie z rzeczywistym popytem i ofertą, nie tworzyć seryjnie podobnych landing pages bez odrębnej wartości.
- Jeśli dostępne: publikować autentyczne przykłady zastosowania i wyniki opisane wraz z okresem, próbą oraz sposobem pomiaru.
- Wprowadzić cykliczny przegląd zgodności opisów z katalogiem, kryteriami i procedurami konsultantów.

## G. Ograniczenia

1. Zbadano dziewięć dostarczonych stron r23. Nie zbadano bieżącego serwisu online: proxy zwróciło 403. Ten błąd nie jest ustaleniem o niedostępności witryny dla klientów.
2. Nie zbadano rejestracji, logowania, panelu klienta, płatności, faktycznego sklepu, reklamacji po zalogowaniu ani działania API kontaktu.
3. Nie dostarczono bloga, innych landing pages, osobnego FAQ, brandbooka, analityki, wyników A/B, danych Search Console ani badań użytkowników. Nie ustalono, czy takie materiały istnieją poza eksportem.
4. Render wszystkich dziewięciu stron sprawdzono w lokalnym Chromium przy 1440 px: jeden H1, wspólny CTA i brak poziomego przewijania. To walidacja podglądu, nie pełny audyt dostępności, zgodności wszystkich przeglądarek czy funkcjonalności produkcyjnej.
5. W eksporcie nie ma canonical ani JSON-LD; komentarze APP wskazują, że generuje je aplikacja. Ich stan produkcyjny pozostaje N/O. Nie oceniono robots.txt, sitemap.xml, indeksacji, prędkości, profilu linków i widoczności w wyszukiwarce lub odpowiedziach AI.
6. Oceny przekazu i hipotezy CRO nie dowodzą wzrostu konwersji. Oferta oraz kryteria pochodzą z treści właściciela; nie zweryfikowano dokumentów procesu dla konkretnych leadów.
7. Dokumenty prawne uwzględniono jako kontekst produktu i nazewnictwa. Raport nie rozstrzyga ich zgodności z prawem ani nie proponuje zmian uprawnień lub zasad usługi.
8. Do pełniejszego audytu potrzebne są: dostępna wersja produkcyjna, potwierdzone trasy i zachowanie rejestracji, prawdziwe liczniki, zakres eksportu leadów, zasady naliczania bonusu i minimalnego doładowania, rzeczywiste pytania klientów, dane lejka i materiały potwierdzające proces weryfikacji.

**Rekomendacja wykonawcza:** następna runda powinna objąć kilka zmian P2 oraz doprecyzowanie opisu hero. Nie zmieniać zatwierdzonej architektury ani projektować kolejnej wersji całej witryny na podstawie samej oceny copy.
