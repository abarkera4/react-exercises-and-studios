export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://imgs.search.brave.com/L9ky7BYyyPXyaywJZAYU5N-hAT08p9wD--EqhaU-bD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFKUWFWY3V2bUwu/anBn";
   let book2 = "https://imgs.search.brave.com/8Qwzmbu-nAqTcQVJPo38h6VY6C6qgZS7obrPVesAtZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxblY2eDJleTRM/LmpwZw";
   let book3 = "https://imgs.search.brave.com/gmqot_nV0B5lHLXKm-cSo17fzH3lc9kFJm3JYOD1Oz0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFUUpaTzBvd0wu/anBn";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height={200} width={200} alt="Darkly Dreaming Dexter by Jeff Lindsay" />
         <img src={book2} height={200} width={200} alt="The Lord of the Rings by J.R.R Tolkien" />
         <img src={book3} height={200} width={200} alt="Helsreach by Aaron Dembski-Bowden" />
      </div>      
   );
}