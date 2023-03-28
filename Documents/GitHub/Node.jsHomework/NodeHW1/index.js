const {listContacts,
    getContactById,
    removeContact,  
    addContact,} = require('./contacts');
    const { Command } = require("commander");
    const program = new Command();
    program
      .option("-a, --action <type>", "choose action")
      .option("-i, --id <type>", "user id")
      .option("-n, --name <type>", "user name")
      .option("-e, --email <type>", "user email")
      .option("-p, --phone <type>", "user phone");
    
    program.parse(process.argv);
    
    const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        console.table(await listContacts());
      break;

    case "get":
        console.log( await getContactById(id));
      break;

    case "add":
        console.log(await addContact(name,email,phone));
      break;

    case "remove":
        console.log(await removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);

// invokeAction({action:'list'});
// invokeAction({action:'get',id:"z9-uSDsRG7Me4Jp3dIoeO"})
// invokeAction({action:'add',name:'Hanry',email:"asf@gmail.com",phone:1231323})
// invokeAction({action:'remove',id:"5A9V_cjPukabtU67DEhzz"})
// # Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
// node index.js --action="list"

// # Отримуємо контакт по id
// node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

// # Додаємо контакт
// node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

// # Видаляємо контакт
// node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH


