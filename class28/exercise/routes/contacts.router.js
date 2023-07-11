import { Router } from "express";
// import Contacts from "../dao/memory/contact.memory.js";
// import Contacts from "../dao/mongo/contact.mongo.js";
import Contacts from "../dao/factory.js";
import ContactDto from "../dao/DTOs/contact.dto.js";
import ContactRepository from "../repositories/contacts.repository.js";

const router =  Router();

const contacts = new Contacts();
const contactsRepository = new ContactRepository();

router.get('/', async (req, res) => {
    // const data = await contacts.get();
    const data = await contactsRepository.getContacts();
    res.json(data);
});

router.post('/', async (req, res) => {
    const {name, last_name, phone} = req.body;
    // const contact = new ContactDto({name, last_name, phone})
    // const result = await contacts.create(contact);
    const result = await contactsRepository.createContact({name, last_name, phone});
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const {name, last_name, phone} = req.body;
    // const result = await contacts.modify(req.params.id, {name, phone});
    const result = await contactsRepository.modifyContact(id, {name, last_name, phone});
    res.json(result);
});

router.delete('/', async (req, res) => {
    // const result = await contacts.delete(req.params.id);
    const result = await contactsRepository.deleteContact(req.params.id);
    res.json(result);
});

export default router;