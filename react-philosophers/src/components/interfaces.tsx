// Интерфейс с описанием структуры элемента знания
export interface KnowledgeElement {
    type: string,
    name: string,
    description: string,
    wikilink: string
};

// Интерфейс с описанием структуры информации о философе
export interface PhilosopherInfo {
    name: string,
    birth_year: number,
    death_year: number,
    period: string,
    empirism: boolean,
    info: KnowledgeElement[]
};
