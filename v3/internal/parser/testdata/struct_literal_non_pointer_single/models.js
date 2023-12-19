// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// Defining the main namespace
export const main = {};

main.Person = class {
    /**
     * Creates a new Person instance.
     * @constructor
     * @param {Object} source - The source object to create the Person.
     * @param {string} source.Name
     * @param {main.Person} source.Parent
     * @param {main.anon1} source.Details
     */
    constructor(source = {}) {
        const { name = "", parent = null, details = null } = source;        
        this.name = name;
        this.parent = parent;
        this.details = details;
    }

    /**
     * Creates a new Person instance from a string or object.
     * @param {string|object} source - The source data to create a Person instance from.
     * @returns main.Person A new Person instance.
     */
    static createFrom(source = {}) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new main.Person(parsedSource);
    }
};
main.anon1 = class {
    /**
     * Creates a new anon1 instance.
     * @constructor
     * @param {Object} source - The source object to create the anon1.
     * @param {number} source.Age
     * @param {main.anon2} source.Address
     */
    constructor(source = {}) {
        const { age = 0, address = null } = source;        
        this.age = age;
        this.address = address;
    }

    /**
     * Creates a new anon1 instance from a string or object.
     * @param {string|object} source - The source data to create a anon1 instance from.
     * @returns main.anon1 A new anon1 instance.
     */
    static createFrom(source = {}) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new main.anon1(parsedSource);
    }
};
main.anon2 = class {
    /**
     * Creates a new anon2 instance.
     * @constructor
     * @param {Object} source - The source object to create the anon2.
     * @param {string} source.Street
     */
    constructor(source = {}) {
        const { street = "" } = source;        
        this.street = street;
    }

    /**
     * Creates a new anon2 instance from a string or object.
     * @param {string|object} source - The source data to create a anon2 instance from.
     * @returns main.anon2 A new anon2 instance.
     */
    static createFrom(source = {}) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new main.anon2(parsedSource);
    }
};
