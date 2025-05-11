export interface KnowledgeElement {
    type: string,
    name: string,
    description: string,
    wikilink: string
};

export interface PhilosopherInfo {
    name: string,
    birth_year: number,
    death_year: number,
    period: string,
    empirism: boolean,
    info: KnowledgeElement[]
};
