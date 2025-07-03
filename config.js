

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
  if (!localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", "_self");
  }
  return localStorage.getItem("apiKey");
}

function cleanContacts(contacts) {
  const seen = new Set();
  return contacts
    .filter(c => c.firstname || c.lastname || c.mobile || c.email)
    .filter(c => {
      const key = `${c.firstname.toLowerCase()}-${c.lastname.toLowerCase()}-${c.mobile}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .filter(c => !["why", "test", "vision", "luc"].includes(c.firstname.toLowerCase()))
    .sort((a, b) => a.firstname.localeCompare(b.firstname));
}
