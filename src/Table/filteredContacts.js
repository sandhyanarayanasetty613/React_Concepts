const filteredContacts = search.length === 0 ? contacts
: contacts.filter(contact =>                         
 contact.full_name.toLowerCase().includes(search.toLowerCase()))