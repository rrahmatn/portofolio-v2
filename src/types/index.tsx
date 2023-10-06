export interface CardProps {
    title: string
    description: string
    picture: string
}
export interface ChatResponse {
    text: string;
    response: string | string[];
}

export interface ChatQuestion {
    question: string;
    options: {
        text: string;
        response: string | string[];
    }[];
}

export interface ChatData {
    greetings: string[];
    conversations: {
        question: string;
        options: {
            text: string;
            response: string | string[];
        }[];
    }[];
}
