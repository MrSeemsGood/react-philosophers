import { PhilosopherInfo } from "./interfaces.tsx";

// Список из всех философов с информацией
const philosophers: PhilosopherInfo[] = [
    {
        name: "Платон",
        period: "Античность",
        info: [
            {
                type: "book",
                name: "Теэтет",
                description: "Сократический диалог Платона, посвящённый природе знания. Написан приблизительно в 369 до н. э.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%8D%D1%82%D0%B5%D1%82_(%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)"
            },
            {
                type: "term",
                name: "Диалектика",
                description: "Метод аргументации в философии, а также форма и способ рефлексивного теоретического мышления, исследующие противоречия, обнаруживаемые в мыслимом содержании этого мышления.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%BB%D0%B5%D0%BA%D1%82%D0%B8%D0%BA%D0%B0"
            },
            {
                type: "school",
                name: "Платонизм",
                description: "Философское учение Платона и его последователей, утверждающее абсолютную реальность идей и бессмертие души.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%B8%D0%B7%D0%BC"
            }
        ],
        birth_year: -428,
        death_year: -348
    },
    {
        name: "Аристотель",
        period: "Античность",
        info: [
            {
                type: "book",
                name: "Метафизика",
                description: "Известнейший сборник сочинений Аристотеля и первая основополагающая работа одноимённого раздела философии.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D1%84%D0%B8%D0%B7%D0%B8%D0%BA%D0%B0_(%D0%90%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B5%D0%BB%D1%8C)"
            },
            {
                type: "term",
                name: "Риторика",
                description: "Филологическая дисциплина, изучающая искусство речи, правила построения художественной речи, ораторское искусство, мировоззрение и красноречие.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0#%D0%A0%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0_%D0%90%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B5%D0%BB%D1%8F"
            }
        ],
        birth_year: -384,
        death_year: -322
    },
    {
        name: "Фрэнсис Бэкон",
        period: "Средние века",
        info: [
            {
                type: "book",
                name: "Новый Органон",
                description: "Трактат на латинском языке английского философа, основоположника эмпиризма Фрэнсиса Бэкона, излагающий новое понимание сути науки. Издан в 1620 году в двух книгах. Является второй частью задуманного Бэконом труда «Великое восстановление наук» и самой известной из работ Бэкона.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D0%BE%D0%BD"
            }
        ],
        birth_year: 1561,
        death_year: 1626
    },
    {
        name: "Иммануил Кант",
        period: "Современность",
        info: [
            {
                type: "term",
                name: "Диалектика",
                description: "Способ разрушения иллюзий человеческого разума, который, стремясь к цельному и абсолютному знанию, неминуемо запутывается в противоречиях.",
                wikilink: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%BB%D0%B5%D0%BA%D1%82%D0%B8%D0%BA%D0%B0"
            }
        ],
        birth_year: 1724,
        death_year: 1804
    },
];

export default philosophers;
