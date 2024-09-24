

/////////// Delegates or callback 

// Function that performs an operation and then calls the callback function
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' }; // Simulated fetched data
        callback(data);
    }, 2000); // Simulate a delay of 2 seconds
}

// Callback function to handle the fetched data
function handleData(data) {
    console.log("Data received:", data);
    // Perform further operations with the data
}

// Call fetchData and pass the handleData function as a callback
fetchData(handleData);


///////// Dependency Injection

class Repository {
    fetchData() {
        return "data from repository";
    }
}

class Service {
    constructor(repository) {
        this.repository = repository;
    }

    getData() {
        return this.repository.fetchData();
    }
}

// DI Container or framework injecting the dependency
const repository = new Repository();
const service = new Service(repository);

console.log(service.getData()); // Outputs: "data from repository"


