const baseURL = "https://ghibliapi.vercel.app/films"

const loadSingleFilmes = async (id) => {
    try {
        //Faz a requisição da API
        //o id é recebido por parâmetro com função
        const response = await fetch(`${baseURL}/${id}`);

        //Faz a conversão para o objeto
        const movie = await response.json()

        console.log(movie.title);
    } catch (error) {
        console.log("Erro ao carregar o filme:", error)
    }
}

/* loadSingleFilmes("2baf70d1-42bb-4437-b551-e5fed5a87abe") */

//Usar quando todos os dados funcionem
const loadMultipleMoviesAll = async (moivesIds) => {
    try {
        const promises = moivesIds.map(async (id) => {
            const response = await fetch(`${baseURL}/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar filme com id: ${id}`);
            }

            return response.json();
        });

        const movies = await Promise.all(promises);
        console.log(movies);
    } catch (error) {
        console.log("Erro ao carregar o filme:", error)
    }
};

const moivesIds = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
]

/* loadMultipleMoviesAll(moivesIds) */

//Usar quando quer aproveitar oque deu certo e lidar individualmente com os erros
const loadMultipleMoviesAllSettled = async (moivesIds) => {
    try {
        const promises = moivesIds.map(async (id) => {
            const response = await fetch(`${baseURL}/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar filme com id: ${id}`);
            }

            return response.json();
        });

        const movies = await Promise.allSettled(promises);

        console.log("Relatorio final:");
        
        movies.forEach((movies, index) => {
            if (movies.status === "fulfilled") {
                console.log("OK:", movies.value.title);
            } else {
                console.log(`Erro no filme ${moivesIds[index]}`, movies.reason.message);
            }
        });
    } catch (error) {
        console.log("Erro ao carregar o filme:", error)
    }
};

const moivesIdsInvalid = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
    "12cfb892-0ac0-4c5b-94af-521852e46d6a", // Grave of the Fireflies 
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
]

loadMultipleMoviesAllSettled(moivesIdsInvalid)