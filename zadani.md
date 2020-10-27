## Malá Heureka
Zadání testovacího úkolu v Heurece
Tvým úkolem je vytvořit Malou Heureku. Nemusíš parsovat XML feed od e-shopů, ani párovat produkty do produktové karty, zdrojová data jednoduše načerpáš z připraveného API. Získaná data zobraz na webu. Jak to uděláš, je ve tvých rukou. Ukaž co umíš.
Zdrojová data
API je popsané zde na Apiary: http://docs.catalogue9.apiary.io/. Z této dokumentace by mělo vyplynout všechno, co o něm potřebuješ vědět, včetně hrubého nárysu struktury dat, jenž API poskytuje.

API by mělo fungovat zde: https://heureka-testday.herokuapp.com/ (např. https://heureka-testday.herokuapp.com/categories/)
Web
Na přiloženém wireframu najdeš tři typy stránek:

Na Homepage je vlevo seznam sekcí, na které se dá kliknout. Napravo jsou sekce zobrazeny ještě jednou, uspořádané jako dlaždice. Odkazy ze seznamu a z dlaždic vedou na výpis produktů v dané sekci.

Na stránce výpisu produktů sekce na levé straně zůstává seznam se sekcemi. Zvolená sekce je nějak zvýrazněna. Vpravo je pak řádkový výpis produktů, vždy s obrázkem produktu, jeho popisem a rozsahem cen, za které se prodává. Z tohoto řádku vede odkaz na detail produktu.

Na detailu produktu se zobrazují informace týkající se konkrétního produktu z našeho katalogu. V záhlaví je fotka produktu, pokud jich je víc, můžeš je zobrazit jako galerii. Je to jen na tobě. Následuje celý popis produktu a pod ním výpis všech nabídek patřících k tomuto produktu. Tlačítko Koupit vede do konkrétního e-shopu.
Obrázky a popisky produktů
V databázi není vazba obrázků a popisků přímo na produkty. Ty jsou v databázi u nabídek. Je tedy na tobě, jak vyřešíš výběr obrázku / popisku, který se zobrazí u produktu jako hlavní. Může se stát, že produkt nebude mít obrázek ani popisek, nezapomeň to ošetřit.
Co chceme vidět?
Chceme vidět, co umíš. Takže se soustřeď na tu oblast aplikace, kterou zvládneš.


Jde nám hlavně o získání a vykreslení dat. Základní verzi si představujeme jako obyčejné vypsání dat. Pokud to pro tebe bude brnkačka, přidej CSS či JavaScript. Když zvládneš i tohle, přidej více částí webu a rozdělení do stránek. Kam dál? Co třeba responzivní chování? Vychytané modely v backendu? Kreativitě se meze nekladou. Ukaž co je v tobě!
Technologie
Jsi tu od toho, abys nám ukázal svůj kód. Pokud okopíruješ manuály z internetu nebo použiješ hotové knihovny, nebude to ono. Budeme radši, když kódu, který píšeš, rozumíš.

Navrhni aplikaci, jak nejlépe umíš. Použij technologie, jaké jsou ti blízké.
Odevzdání v pondělí 2.11.
Až budeš mít pocit, že se dá tvůj výtvor prezentovat, nahraj jeho git repozitář na svůj github/gitlab. Pokud se na to necítíš, pošli nám úkol jakkoli uznáš za vhodné. Popiš, co je potřeba udělat pro jeho zprovoznění, na jakém běží prostředí, jaké má zavislosti, apod.

Pokud bys dokázal úkol zprovoznit někde na webu tak, že bys k němu mohl poskytnout veřejnou URL a poslat nám ji, budeme rádi, ale obejdeme se i bez toho, pokud půjde projekt snadno zprovoznit například z onoho git repozitáře.

V pondělí si všichni sedneme a ukážeš nám, jak jsi postupoval, jak aplikace funguje. Celé to projdeme, pokecáme o tom. 
Závěrem
Ptej se! Chyba může být na naší straně a je škoda, když tím spálíš čas. Rádi poradíme a pomůžeme. Třeba na emailu.
Napiš to, jak nejlépe umíš; v jazyce, který ti nejvíce vyhovuje. Nemusíš vytvořit celý web, ale čím více toho zvládneš, tím líp.
Chceme vidět tvůj kód a ne návody z internetu a hotové knihovny. 
