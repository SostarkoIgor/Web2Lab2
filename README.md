# Projekt za Drugu Laboratorijsku Vježbu

Ovaj projekt predstavlja rješenje za drugu laboratorijsku vježbu iz kolegija **Napredni razvoj programske potpore za web**. Implementiran je koristeći **Vite + React** za frontend i **ASP.NET Core** za backend.

## Opis Projekta

U ovom projektu demonstriraju se primjeri sigurnosnih ranjivosti s naglaskom na:

- **DOM-based XSS** (Cross-Site Scripting) napade
- Nedovoljnu **kontrolu pristupa** u aplikaciji

Ove ranjivosti prikazane su s ciljem boljeg razumijevanja sigurnosnih izazova u razvoju web aplikacija.

## Pristup Projektu

Aplikacija je dostupna na sljedećem linku: [web2lab2-l3fi.onrender.com](https://web2lab2-l3fi.onrender.com/)

## Tekst zadatka
Potrebno je izraditi web-aplikaciju koja omogućuje potencijalnim napadačima korištenje dvije različite tehnike sigurnosnih napada, odnosno dvije ranjivosti web-aplikacija, iz dolje navedenih kategorija.

Za svaku ranjivost potrebno je implementirati:

- Funkcionalnost kojom se omogućuje ranjivost.
- Funkcionalnost kojom se onemogućuje ranjivost.

Npr. napraviti "prekidač" (checkbox, tipka, ili padajući izbornik) kojim se ranjivost po želji uključuje i isključuje.

### Ugrađene Ranjivosti

Ranjivosti (sigurnosne nedostatke), s njima povezane napadačke tehnike i implementirane funkcionalnosti moraju biti dostupne kroz korisničko sučelje web-aplikacije tako da:

- Napadi se mogu pokrenuti kroz sučelje web-aplikacije.
- Učinak napada bude vidljiv u korisničkom sučelju (npr. ispisom niza izvršenih akcija, ispisom izmijenjenog sadržaja baze podataka, prikazom `javascript:alert` dijaloga s podacima o korisničkoj sjednici `document.cookie`, itd.).

Za eventualno slanje ili primanje e-mail poruka s malicioznim linkom koristiti neki od servisa s privremenim poštanskim sandučićima (npr. [Mailinator](https://www.mailinator.com/)).

### Postavljanje Aplikacije u Oblačni Servis

Web-aplikaciju je potrebno postaviti u oblak. Ako zbog određenih ograničenja nećete moći izvesti ranjivost u cloud instalaciji (npr. sustav blokira brute-force napad ili odabrani radni okvir onemogućuje SQL umetanje), trebate napisati kratke i jasne upute kako instalirati i pokrenuti sustav lokalno, po mogućstvu što jednostavnije (npr. `npm i && npm run server`).

### Ranjivosti i Kategorije

#### Prva Kategorija (odabirete prema formuli: 1 + JMBAG % 2)

Odaberite jednu ranjivost iz prve kategorije:

- **SQL umetanje (SQL Injection)** - Implementirati barem tautologiju.
- **Cross-Site Scripting (XSS)** - Jedan tip XSS napada po izboru.

#### Druga Kategorija (odabirete prema formuli: 1 + JMBAG % 4)

Odaberite jednu ranjivost iz druge kategorije:

- **Loša autentifikacija (Broken Authentication)**
- **Loša kontrola pristupa (Broken Access Control)**
- **Lažiranje zahtjeva na drugom sjedištu (Cross Site Request Forgery, CSRF)**
- **Nesigurna pohrana osjetljivih podataka (Sensitive Data Exposure)**

### Isporuka

Za predaju projekta potrebno je isporučiti:

1. **Adresu Git repozitorija** s web-aplikacijom. Repozitorij može biti privatni, ali omogućite pristup nastavnicima. Korisnički računi nastavnika za GitHub i GitLab su: `mekterovic`, `mhorvat`, i `boris612`.
2. **Adresu web-aplikacije** koja je postavljena u oblak.
3. **Popis implementiranih ranjivosti** - kratka lista od maksimalno 2 ranjivosti.
4. **Napomene** (npr. "sve je uspješno implementirano", ili "nisam uspio/-la implementirati", itd.).
5. **Kratke upute kako pokrenuti i isprobati aplikaciju** (ako je potrebno, navedite korisnička imena potrebna za testiranje).
