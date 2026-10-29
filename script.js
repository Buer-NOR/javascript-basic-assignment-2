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

console.log(message("Hans", 18)); // Tester funksjonen med navn og tid.

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

function arrayRemoveFirstLast(list) { // Funksjon som tar inn arrray som parameter.
    list.shift(); // Fjerner første elementet.
    list.pop(); // Fjerner siste elementet.
    return list;
}

console.log(arrayRemoveFirstLast(["Elg", "Hund", "Katt", "Mus", "Hest", "Gris", "Skilpadde"])) // Logger array med første og siste element fjernet.

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function changeString(javascriptText) {
    return javascriptText.replace("vanskelig", "gøy").trim(); // Endrer ordet vanskelig til gøy og "trimmer" start og slutten av stringen.
}

console.log(changeString("  Javascript er vanskelig  "));

/******************************************************************************)
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

items.shift(); // Fjerner første elementet "Bok".

items.splice(4, 1, "Linjal"); // Erstatter "Viskelær" med "Linjal".

items.splice(1, 2, "Markeringspenn"); // Fjerner "Penn" og "Notatbok" og legger til "Markeringspenn".

console.log(items);

//Ekstra, lager et nytt array.

const newArray = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

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

const colors = ["Red", "Green", "Blue"];

function checkArray(arr, str) { // Funksjon som tar inn en array og string som parametere.
    if (arr.includes(str)) { // Sjekker om array inneholder stringen.
        const index = arr.indexOf(str); // Finner indexen til str.
        arr.splice(index, 1); // Fjerner string fra array med splice.
        return arr; // Returnerer oppdatert array.
    } else { // Hvis array ikke inneholder stringen.
        arr.push(str); // legger til string på slutten av array.
        return arr; // Returnerer oppdatert array.
    }
}

console.log(checkArray(colors, "Green"));

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

function checkType(para) { // Funksjon som tar inn ett parameter.
    if (typeof para === "string") { // Sjekker om parameter er en string.
        return `😎${para}😎`;
    } else if (typeof para === "number") { // Sjekker om parameter er et tall.
        return `😎${(para * 2).toString()}😎`; // Dobler verdien og konverterer til string.
    } else if (typeof para === "boolean") { // Sjekker om parameter er en boolean.
        return para ? "😎Ja😎" : "😎Slapp av😎"; // Returnerer Ja hvis true, slapp av hvis false.
    }
    else { // Hvis parameter er en annen datatype.
        return "😎Kun primitive verdier😎";
    }
}

console.log(checkType("Dette er en string"));