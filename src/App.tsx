import './App.css';
import SearchComponent from './components/Search';

function App() {
    const apiKey = import.meta.env.VITE_USDA_API_KEY;
    console.log(apiKey);
    const query = 'chicken breast';

    fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`,
    )
        .then((response) => response.json())
        .then((data) => {
            const allMatches = data.foods.filter(
                (foods: any) => foods.dataType === 'Foundation',
            );
            console.table(allMatches);
        });

    return (
        <>
            <h3>Macros</h3>
            <SearchComponent />
        </>
    );
}

export default App;
