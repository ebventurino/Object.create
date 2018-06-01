const Firstlight = Object.create({}, {
    business: {
        value: "Firstlight Arts Academy"
    },
    employmentStart: {
        value: "03-01-2015"
    },
    employmentEnd: {
        value: "05-01-2018"
    },
    pros: {
        value: "Working with art supplies"
    },
    cons: {
        value: "working with kids"
    }
})

// CHALLENGE


const JobMaker = (business,employmentStart,employmentEnd) => {
    const theObjectYouBuilt = Object.create(null, {
        job: {
                enumerable: true,
                writable: false,
                value: business
            },
        start: {
                enumerable: true,
                writable: false,
                value: employmentStart
            },
        end: {
                enumerable: true,
                writable: false,
                value:employmentEnd
            }

    }) 
    return (console.log(theObjectYouBuilt))
    
    
}

JobMaker("teacher","03-01-2015","05-01-2018")
