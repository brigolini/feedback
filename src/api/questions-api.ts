import axios from "axios";

export interface Question {
    id: string;
    label: string;
    required: boolean;
    type: 'text' | 'multipleChoice' | 'scale'
    options?: Option
}

interface Option {
    value: number;
    label: string
}

export const getQuestions = async () => {
    try {
        const response = await axios.get('https://frontend-exercise-api.netlify.app/.netlify/functions/server/questions');
        return response.data;
    } catch (error) {
        throw error(error.status)
    }
}

