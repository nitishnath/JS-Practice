// Sort an object

const score = {
    Hirak: 70,
    Nitish: 30,
    Aman: 50
}

const sortedScore = Object.fromEntries(
    // Object.entries(score).sort((a, b) => b[1] - a[1]) //{Hirak: 70, Aman: 50, Nitish: 30}
    Object.entries(score).sort((a, b) => a[1] - b[1]) //{Nitish: 30, Aman: 50, Hirak: 70}
)

console.log(sortedScore)

const obj1 = { a: 1, b: 2 }

for (const prop in obj1) {
    console.log(`${prop}: ${obj1[prop]}`)
    Object.setPrototypeOf(obj1, { c: 3 })
}

// Add key value pair in an object...

const company = {
    name: "TechNova",
    location: {
        city: "Bangalore",
        country: "India",
        coordinates: { lat: 12.97, long: 77.59 },
    },
    employees: [
        {
            name: "Nitish",
            role: "Frontend Dev",
            skills: ["React", "TypeScript"],
            contact: { email: "nitish@technova.com", phone: "+91-98765-43210" },
            projects: [
                { title: "AI Dashboard", status: "Ongoing" },
                { title: "UI Revamp", status: "Done" },
            ],
        },
        {
            name: "Aarav",
            role: "Backend Dev",
            skills: ["Node.js", "MongoDB"],
            projects: [{ title: "API Gateway", status: "Done" }],
        },
    ],
    tools: ["Git", "Docker", "VS Code"],
    getActiveProjects() {
        return this.employees.flatMap(emp =>
            emp.projects.filter(p => p.status === "Ongoing").map(p => p.title)
        );
    },
};

for (const [key, value] of Object.entries(company)) {

    if (Array.isArray(value)) {
        // value.map((el) => {
        //     if(el?.contact && !Object.hasOwn(el?.contact, 'name')) {
        //         Object.assign(el.contact, {name: 'Nitish'})
        //         console.log(el?.contact, '1234')
        //     }
        // })

        const containsObjects = value.some(element => typeof element === 'object' && element !== null && !Array.isArray(element));

        if (containsObjects) {
            //console.log(value, 'qwe')
            value.forEach((el) => {
                for (const [key, value] of Object.entries(el)) {
                    if (Array.isArray(value)) {
                        for ([_, val] of Object.entries(value)) {
                            if (typeof val === 'object') {
                                if (Object.hasOwn(val, 'title') && val.title === 'API Gateway') {
                                    val.status = 'On Going'
                                }
                            }
                        }
                    }
                }
            })
        }
    }
}

console.log(company, 'After')

//Reverse keys and values

//Problem: { a:1, b:2 } → { 1:'a', 2:'b' }

const obj2 = { a: 1, b: 2 }

let reverseObj = {}

for (let key in obj2) {
    reverseObj[obj2[key]] = key
}

console.log(reverseObj, 'obj')

//Object.defineProperty

const obj3 = {}

Object.defineProperty(obj3, 'name', {
    value: "nitish",
})

console.log(obj3, 'obj3')

//Remove a specific key from object

const obj4 = { a: 1, b: 2, c: 3 };

console.log(obj4, 'before remove')

function removeKey(obj4, keyToRemove) {
    if (typeof keyToRemove !== 'string') return
    let isKeyFound = false
    for (let key in obj4) {
        if (key === keyToRemove) {
            isKeyFound = !isKeyFound
            delete obj4[key]
            break;
        }
    }
    if (!isKeyFound) console.log('key not found')
}
removeKey(obj4, 'b')

console.log(obj4, 'after remove')
