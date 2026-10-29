/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

function checkOddEven(num) {
    if (num % 2 === 0) { // Sjekker om tallet er partall ved å dele på 2 og sjekke om resten er 0.
        return "Partall";
    } else { // Hvis tallet ikke er partall, må det være oddetall.
        return "Oddetall";
    }
}

console.log(checkOddEven(124)); // Tester funksjonen med et tall.

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

const kultText = (text) => { // Arrow funksjon som tar inn en string som parameter.
    return text.toUpperCase() + "!"; // Gjør om stringen til store bokstaver ved å bruke toUpperCase method og legger til utropstegn.
}

console.log(kultText("Dette er store bokstaver")); // Tester funksjonen med en string.

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function message(name, hour) { // Funksjon som tar inn navn og time som parametere.
    if (hour === undefined) { // Sjekker om timeverdien er undefined.
        return "Error, ingen timeverdi mottatt";
    } else if (hour < 0 || hour > 23) { // Hvis ikke undefined så sjekker vi alle andre tilfeller med else if frem til vi finner riktig timerverdi.
        return "Ugyldig tid";
    } else if (hour >= 0 && hour <= 5) {
        return `God natt ${name}`;
    } else if (hour >= 6 && hour <= 11) {
        return `God morgen ${name}`;
    } else if (hour >= 12 && hour <= 17) {
        return `God dag ${name}`;
    } else if (hour >= 18 && hour <= 23) {
        return `God kveld ${name}`;
    }
}

console.log(message("Hans", 18)); // Tester funksjonen med navn of time.


/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const equipment = ["Bok", "Viskelær", "Penn", "Notatbok"];

const removeFirst = equipment.shift();

console.log(equipment); // Logger array etter bok er fjernet.

const replace = equipment.splice(0, 1, "Linjal");

console.log(equipment); // Logger array etter viskelær erstatter linjal.

const removePennNotat = equipment.splice(1, 2, "Markeringspenn");

console.log(equipment); // Logger array etter pen og notatbok er fjernet og erstattet med markeringspenn.

const combined = equipment.join(" | ");

console.log(combined); // Logger array når elementene er kombinert.



//Ekstra, lager et nytt array.

const newArray = ["Bok", "Viskelær", "Penn", "Notatbok", "Markeringspenn", "Linjal", "Genser", "Tusj"];

const onlyE = newArray.filter(item => item.includes("e")); // Filterer elementer som inneholder bokstaven e.

console.log(onlyE); // Logger array med kun elementer som inneholder bokstaven e.

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her