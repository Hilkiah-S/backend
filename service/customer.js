const customerModel = require("../model/customer.model")


async function create(customername,
    phone,
    site,
    email,
    approved) {

    const result = await customerModel.create({
        customername,
        phone,
        site,
        email,
        approved
    })
    if (!result)
        return false;

    return result;
}

async function getAll() {
    const result = await customerModel.find({});
    return result.map(e => e.toJSON())
}

async function changeStatus(id, approved) {

    const customer = await customerModel.findById(id)
    customer.approved = approved;
    await customer.save()
    return customer;

}

module.exports = { create, getAll, changeStatus }