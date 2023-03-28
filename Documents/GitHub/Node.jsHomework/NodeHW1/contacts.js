const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("db", "contacts.json");
// const contactsPath = path.join(__dirname,"db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8", (e, d) => {
      if (e) {
        console.log("error", e);
      }
      console.log("data", d);
    });
    return JSON.parse(contacts);
  } catch {
    (error) => console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find((contact) => contact.id === contactId);
    return contactById || null;
  } catch {
    (error) => console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const deleteContact = contacts.findIndex((contact) => contact.id === contactId);
      console.log('Contact deleted succefull',contacts[deleteContact])
      contacts.splice(deleteContact, 1);
      await fs.writeFile(contactsPath,JSON.stringify(contacts,null,2));
      return contacts;
   
  
   
  } catch {
    (error) => console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath,JSON.stringify(contacts,null,2))
    return newContact;
  } catch {
    (error) => console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Andriii888/CLI-app.git
// git push -u origin main