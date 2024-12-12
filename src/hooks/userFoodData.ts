import axios from "axios";
import { useQuery } from "@tanstack/react-query"; // Certifique-se de instalar `@tanstack/react-query`
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080";

// Função para buscar os dados
const fetchData = async (): Promise<FoodData[]> => {
    const response = await axios.get<FoodData[]>(`${API_URL}/food`);
    return response.data; // Retorne apenas os dados processados
};

// Hook para usar os dados
export function useFoodData() {
    return useQuery({
        queryKey: ["food-data"],
        queryFn: fetchData,
        retry: 2, // Número de tentativas de nova consulta em caso de falha
    });




}
