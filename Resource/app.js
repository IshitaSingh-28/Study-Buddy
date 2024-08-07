document.addEventListener('DOMContentLoaded', () => {
    const subjects = [
        { name: 'Engineering Chemistry', code: 'BCHY101L', credits: 3, modules: 8 },
        { name: 'Computer Programming: Python', code: 'BCSE101E', credits: 3, modules: 8 },
        { name: 'Basic Electrical Engineering', code: 'BEEE101L', credits: 2, modules: 8 },
        { name: 'Calculus', code: 'BMAT101L', credits: 3, modules: 8 },
        { name: 'Structured and Object-Oriented Programming', code: 'BCSE102L', credits: 2, modules: 8 },
        { name: 'Basic Electronics', code: 'BECE101L', credits: 2, modules: 8 },
        { name: 'Engineering Physics', code: 'BPHY101L', credits: 3, modules: 8 },
        { name: 'Computer Programming: Java', code: 'BCSE103E', credits: 3, modules: 8 },
        { name: 'Differential Equations and Transforms', code: 'BMAT102L', credits: 4, modules: 8 },
        { name: 'Data Structures and Algorithms', code: 'BCSE202L', credits: 3, modules: 8 },
        { name: 'Complex Variables and Linear Algebra', code: 'BMAT201L', credits: 4, modules: 8 },
        { name: 'Design and Analysis of Algorithms', code: 'BCSE204L', credits: 3, modules: 8 },
        { name: 'Computer Architecture and Organization', code: 'BCSE205L', credits: 3, modules: 8 },
        { name: 'Theory of Computation', code: 'BCSE304L', credits: 3, modules: 8 },
        { name: 'Digital Systems Design', code: 'BECE102L', credits: 3, modules: 8 },
        { name: 'Probability and Statistics', code: 'BMAT202L', credits: 3, modules: 8 },
        { name: 'Discrete Mathematics and Graph Theory', code: 'BMAT205L', credits: 4, modules: 8 },
        { name: 'Essence of Traditional Knowledge', code: 'BSSC101N', credits: 2, modules: 8 },
        { name: 'Database Systems', code: 'BCSE302L', credits: 3, modules: 8 },
        { name: 'Operating Systems', code: 'BCSE303L', credits: 3, modules: 8 },
        { name: 'Compiler Design', code: 'BCSE307L', credits: 3, modules: 8 },
        { name: 'Computer Networks', code: 'BCSE308L', credits: 3, modules: 8 },
        { name: 'Information Security Analysis and Audit', code: 'BCSE353E', credits: 2, modules: 8 },
        { name: 'Software Engineering', code: 'BCSE301L', credits: 3, modules: 8 },
        { name: 'Embedded Systems', code: 'BCSE305L', credits: 3, modules: 8 },
        { name: 'Artificial Intelligence', code: 'BCSE306L', credits: 3, modules: 8 },
        { name: 'Cryptography and Network Security', code: 'BCSE309L', credits: 3, modules: 8 },
        { name: 'Information Security Management', code: 'BCSE354E', credits: 2, modules: 8 }
    ];

    const cardContainer = document.querySelector('.card-container');
    const searchBar = document.getElementById('search-bar');
    const suggestions = document.getElementById('suggestions');

    // Function to create a card
    function createCard(subject) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${subject.name}</h2>
            <div class="details">
                <p>Course Code: ${subject.code}</p>
                <p>Credits: ${subject.credits}</p>
                <p>Modules: ${subject.modules}</p>
            </div>
            <a href="${subject.code.toLowerCase()}.html" class="course-link">See Detailed Description</a>
        `;
        cardContainer.appendChild(card);
    }

    // Display all cards initially
    subjects.forEach(subject => createCard(subject));

    // Function to filter suggestions based on input
    function filterSuggestions(query) {
        suggestions.innerHTML = ''; // Clear previous suggestions
        const filteredSubjects = subjects.filter(subject =>
            subject.name.toLowerCase().includes(query.toLowerCase())
        );
        filteredSubjects.forEach(subject => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = subject.name;
            suggestionItem.addEventListener('click', () => {
                searchBar.value = subject.name;
                suggestions.innerHTML = '';
                showCard(subject);
            });
            suggestions.appendChild(suggestionItem);
        });
    }

    // Function to show the card of the selected subject
    function showCard(subject) {
        cardContainer.innerHTML = ''; // Clear previous cards
        createCard(subject);
    }

    // Event listener for the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim(); // Trim whitespace from input

        if (query) {
            filterSuggestions(query);
        } else {
            suggestions.innerHTML = ''; // Clear suggestions when query is empty
            cardContainer.innerHTML = ''; // Clear previous cards
            subjects.forEach(subject => createCard(subject)); // Append all cards
        }
    });
});
