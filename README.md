# Beer Project
## Instruktioner
Utse en gruppledare som forkar det här repot och bjuder in de andra som collaborators.

## Punk API
Ni ska bygga en öl-wiki som använder sig av data från Punk API:et (https://punkapi.com/documentation/v2). Hemsidan ska bestå av tre olika vyer (sidor)(se nedan för information om de olika sidorna). Förutom de krav som specificeras nedan har ni fria händer (exempelvis gällande design).

## Kravspecifikation

### G-krav
#### Landing Page (Random beer)
* Användaren ska kunna slumpa fram en öl genom att trycka på en knapp.
* Namnet och bilden på den slumpade ölen ska man se i ett “card” (se nedan för exempel).

![alt text](https://github.com/niklaszocom/beer-project/blob/main/Namnl%C3%B6s.jpg)

* Användaren ska kunna trycka på "See More" för att komma till "Beer Info Page" (Se längre ner för info).


#### Search Page
* Användare ska kunna söka på en öl med hjälp av dess namn.
* Sidan ska använda sig av ett formulär.
* Resultatet av sökningen ska visas i en lista (endast namnen på ölen). 
* Listan får innehålla max 10 resultat. Om fler än 10 sökresultat finns ska listan vara paginerad.


#### Beer Info Page
* Denna sida ska bara gå att vi någon av de sidorna som beskrivs ovan.
* På denna sida ska användaren kunna få detaljerad information om en specifik öl.
* Sidan ska minst innehålla:
** Description
** Image
** Alcohol by volume 
** Volume
** Ingredients
** Hops 
** Food pairing
** Brewers tips

Bonus (VG-uppgifter)
		Formuläret ska innehålla:
Fält för att kunna söka på en öl baserat på deras namn, humle (hops), eller malt (detta kan vara 3 olika fält).
Fälten “Brewed before” och “Brewed after” som låter användaren söka på öl baserat på när de bryggdes. Dessa fält ska ta ett år och en månad. Exempelvis 02-2020. Man får använda sig av en datepicker här om man vill.
Fälten “ABV greater than” och “ABV less than”. Fälten ska ta en siffra och låter användaren söka på en öl baserat på dess Alcohol by volume (Alkohol per volym).
Formuläret ska låta användaren söka på en kombination av flera sökkriterier, exempel: name=ipa, hops=Ahtanum, Brewed before = 02-2020.

Sökformuläret ska inkludera enkel validering:
“Brewed before” ska inte kunna vara ett datum efter “Brewed after” om båda fälten är angivna.
Man ska endast kunna ange numeriska värden för fälten “ABV greater than” och  “ABV less than”.
