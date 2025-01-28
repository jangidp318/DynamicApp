export const getQuizes = async () => {
    try {
        const response = await fetch('https://som.teachersofbihar.org/wp-json/wp/v2/qsm_quiz');
        const data = await response.json();

        return data;

    } catch (error) {
        console.log("error => ", error)
    }
}