const fetchSupervisorsData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/supervisor/list');
    const result = await response.json();
    return result;
} 

export default fetchSupervisorsData;
