console.log("Hi");

var obj1 = { name: "Person 1", age: 6 };
var obj2 = { age: 5, name: "Person 1" };

const compareObj = (obj1, obj2) => {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let key in obj1) {
            if (obj1[key] === obj2[key]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

console.log(compareObj(obj1, obj2));
const URL = "https://restcountries.eu/rest/v2/all";
let country = [];

const fetchCountries = async() => {
    try {
        const result = await fetch(URL);

        if (!result.ok) {
            throw new Error("Something went wrong!");
        }
        const data = await result.json();
        //console.log(data);

        data.forEach((el) => {
            console.log(el.flag);
            console.log(
                `Country Name - ${el.name}, Region - ${el.region}, Sub-Region-${el.subregion}, Population - ${el.population}`
            );
        });

        return data;
    } catch (error) {
        console.log(`Something went wrong... ${error}`);
    }
};

console.log(`Displaying Country data`);

const countries = fetchCountries();

console.log(countries);