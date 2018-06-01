

const firstlight = Object.create({}, {
    business: {
        enumerable:true,
        writable:true,
        value: "Firstlight Arts Academy"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "03-01-2015"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-01-2018"
    },
    pros: {
        enumerable: true,
        writable: false,
        value: "Working with art supplies"
    },
    cons: {
        enumerable: true,
        writable: false,
        value: "working with kids"
    }
})
const ddavis = Object.create({}, {
    business: {
        enumerable:true,
        writable:true,
        value: "Dennis Davis"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "03-01-2015"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-01-2018"
    },
    pros: {
        enumerable: true,
        writable: false,
        value: "Working with websites"
    },
    cons: {
        enumerable: true,
        writable: false,
        value: "working with parents"
    }
})

const market = Object.create({}, {
    business: {
        enumerable:true,
        writable:true,
        value: "The Market"
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: "03-01-2013"
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: "05-01-2014"
    },
    pros: {
        enumerable: true,
        writable: false,
        value: "Working with product"
    },
    cons: {
        enumerable: true,
        writable: false,
        value: "answering phones"
  }
}) 

console.log(firstlight)
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


// ADVANCED CHALLENGE

const jobs = [firstlight, ddavis, market]

for(let i = 0; i < jobs.length; i++) {
    let article = document.createElement("article")
    article.setAttribute("id",jobs[i].business);
    console.log(article)
}