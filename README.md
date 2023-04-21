# Opis zadania:
Stwórz aplikację webową do wpisywania i wizualizacji danych. W poszczególnych obszarach aplikacja powinna zawierać:

Routing:
– Dwie strony (/main, /views).
– nawigację strony (menu-header), która nie wymaga przeładowania.
Dodatkowo nieprawidłowy adres URL powinien zwrócić stronę 404.

Tłumaczenie:
– dodanie do menu „select”, który zmienia język strony (dwa języki: angielski, polski)
– tłumaczone powinny być wszystkie słowa znajdujące się na stronach
Na stronie głównej (/main) powinny się znajdować:
- Tabelka z:
paginacją
zmianą ilości elementów w tabeli (10,20,50)
checkboxem w każdym rzędzie do grupowego usuwania elementów oraz przyciskiem delete pod tabelą (w tabeli powinna być również kolumna „Akcja”, a w niej przyciski: delete, który usuwa ten rekord oraz edycja, który umożliwia zmianę w formularzu)
kolumnami tabeli: imię, wiek, data urodzenia, życiorys (odpowiednio skrócony np. Ellipsis) + dodatkowe kolumny potrzebne do realizacji zadania
- Formularz do wprowadzenia/edycji danych w których będzie można uzupełnić następujące dane:
Imię (ciąg znaków, wymagane)
Wiek (liczba całkowita, wymagane)
Data urodzenia – date picker (data, wymagane)
Życiorys (dłuższy tekst max. 250 znaków – text area, opcjonalne)
Dane wprowadzone do formularza powinny być walidowane przy pomocy biblioteki yup. Dodatkowo wprowadzane dane powinny znaleźć się w tabeli i powinny być zapisywane w store’a Reduxa.

Na drugiej stronie
(/views) zaprojektuj i zaimplementuj generyczny (reużywalny) komponent, który wyświetlałby dane pobrane ze store’a z Reduxa stosując układ siatki (po 4 komponenty w rzędzie).

# Wymagane technologie:
React 17.0.1
Material UI/ Ant Design
React Router
React Hook Form
React Redux
Yup
SCSS
TypeScript