# TIN
Projekt końcowy z przedmiotu Technologie Internetu

## Technologie
* Node.js
* React
* MySQL

## Instrukcja uruchomienia projektu

### Rozpakownaie archiwum z kodem źródłowym

### Informacje o załączonych plikach dotyczących bazy danych
1. `final_proj_tin_db.sql` - plik inicjalizujący bazę danych 
2. `final_proj_tin_sample_data.sql` - plik z przykładowymi danymi do bazy danych

### Uruchomienie serwera MySQL
1. Przejść do katalogu głównego `final_project_tin_s22086` z kodem źródłowym
2. Otworzyć plik `compose.yml`
3. Uruchomić skrypt bazy danych (`docker-compose up`)

### Uruchomienie backendu
1. Przejść do katalogu głównego `final_project_tin_s22086/package.json`
2. W tym folderze należy zainstalować wszystkie zależności skryptem `npm install`
3. **Włączyć skrypt `start` (zwykły tryb)** lub `start-dev` (tryb deweloperski)

### Uruchomienie frontendu
1. Przejść do `final_project_tin_s22086/public/package.json`
2. W tym folderze należy zainstalować wszystkie zależności skryptem `npm install`
3. Zbudować projekt skryptem `build`
4. Włączyć projekt skryptem `start`

## Diagram schematu bazy danych
![img.png](img.png)

## Opis projektu i funkcjonalności
Projekt realizuje witrynę internetowego sklepu zoologicznego.
Użytkownik może bez potrzeby logowania, ale z wykorzytaniem adresu email, dodać produkty do koszyka, a następnie złożyć zamówienie.

Dodawanie, aktualizacja, usuwanie rekordów do bazy danych realizowane jest w sekcji komentarzy do produktu. Jak również wyświetlanie widoków szczegółowych kokretnych produktów.
![img_6.png](img_6.png)

Wyświetlanie listy wszystkich rekordów dla każdej tabeli realizowane jest na stronie głównej (zakładka `STRONA GŁÓWNA`)
![img_5.png](img_5.png)

Produkty skatalogowane są w dwóch sekcjach zlokalizowanych w palenlu głównym:

1. `PRODUKTY` 
   * `SMACZKI` 
   * `KARMA`
   * `ZABAWKI`

![img_20.png](img_20.png)

2. `ZWIERZĘTA` 
   * `PIES`
   * `KOT`
   
  ![img_21.png](img_21.png)
   
   
Widoki poszczególnych kategorii produktów:

`KARMA`
![img_12.png](img_12.png)

`SMACZKI`
![img_13.png](img_13.png)

`ZABAWKI`
![img_14.png](img_14.png)

Widoki poszczególnych kategorii zwierząt:

`PIES`
![img_15.png](img_15.png)

`KOT`
![img_16.png](img_16.png)

Ponaciśnięciu przycisku z koszykiem, można przejśćdo widoku koszyka. Ikonka pojawią się tylko wtedy, gdy w koszyku znajdują się produkty. Cyfra obok ikonki oznacza ilość produktów w koszyku.

![img_19.png](img_19.png)

Widok koszyka z zamówieniem:
![img_8.png](img_8.png)

Podsumowanie zamówienia:
![img_9.png](img_9.png)

Widok wszystkich zamówień:
![img_10.png](img_10.png)

Widok szczegółowy konkretnego zamówienia (dostępny po klinięciu w przycisk z konkretnym `ID ZAMÓWIENIA`):
![img_11.png](img_11.png)

Widok sekcji `O NAS`:
![img_17.png](img_17.png)

Widok sekcji `KONTAKT`:
![img_18.png](img_18.png)








