const sequelize = require('./db/connection')
const randomProfile = require('random-profile-generator');
const { QueryTypes } = require('sequelize')

async function showPeople() {
    const [results, metadata] = await sequelize.query(`SELECT * FROM voodoopeople`);

    console.log(results);
    console.log(metadata);
}

// showPeople()


async function createPeople(num) {
    for (let i = 0; i < num; i++) {
        const name = randomProfile.name();
        const age = randomProfile.age();

        await sequelize.query(`INSERT INTO voodoopeople (name, age) VALUES (?, ?);`,
            {
                // replacements: { name, age }
                replacements: [name, age]
            }
        );
    }
}

// createPeople(50)

async function findPeople(age) {
    const results = await sequelize.query(`SELECT * FROM voodoopeople WHERE age = ?;`,
        {
            replacements: [age],
            type: QueryTypes.SELECT
        });

    console.log(results);
}

// findPeople(30)



async function createPets(arr) {
    for (let i = 0; i < arr; i++) {
        const name = randomProfile.name();

        await sequelize.query(`INSERT INTO pets (name, owner) VALUES (?, ?);`,
            {
                replacements: [name, i + 1]
            }
        );
    }
}

// createPets(5)

async function showPeopleWithPets() {
    const results = await sequelize.query(`SELECT voodoopeople.name, pets.name as pet FROM voodoopeople JOIN pets ON voodoopeople.id = pets.owner;`,
        {
            type: QueryTypes.SELECT
        })

    console.log(results);
}

showPeopleWithPets()