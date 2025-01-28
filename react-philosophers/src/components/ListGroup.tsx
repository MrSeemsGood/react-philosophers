import { useEffect, useState } from "react";
import styles from "./ListGroup.module.css";

interface KnowledgeElement {
    type: string,
    name: string,
    description: string,
    wikilink: string
}

interface PhilosopherInfo {
    name: string,
    birth_year: number,
    death_year: number,
    period: string,
    info: KnowledgeElement[]
}

function ListGroup() {
    // Список из всех философов с информацией
    let philosophers: PhilosopherInfo[] = [
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
            name: "Бэкон",
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
    ]

    // Хранение текущего (выбранного) философа
    const [ph, setPh] = useState<PhilosopherInfo>({
        name: "",
        period: "",
        info: [],
        birth_year: 0,
        death_year: 0
    });

    // Хранение текущего (выбранного) элемента
    const [ke, setKe] = useState<KnowledgeElement>({
        type: "",
        name: "",
        description: "",
        wikilink: ""
    });

    // Хранение отсортированного списка философов
    let [sortedPhilosophers, setSortedPhilosophers] = useState<PhilosopherInfo[]>([]);
    //sortedPhilosophers = philosophers;

    // Хранение способа сортировки
    const imgSortAz = "/src/assets/alphabet.png";
    const imgSortDate = "/src/assets/date.png"
    const sortMethods = [imgSortAz, imgSortDate];
    const [selectedSort, setSelectedSort] = useState(imgSortAz);

    const sortPhilosophers = (type: string) => {
        if (type === "alphabet") {
            setSortedPhilosophers(philosophers.sort((a, b) => a.name.localeCompare(b.name)));
        } else if (type === "date") {
            setSortedPhilosophers(philosophers.sort((a, b) => a.birth_year - b.birth_year));
        }
    };

    // Сгенерировать список философов в заданном периоде с заголовком
    const generatePhListContainer = (period: string) => {
        return (
            <div>
                <p>{period}</p>
                <ul className={styles["list-group"]}>
                    {sortedPhilosophers.filter((p) => (
                        p.period === period
                    )).map((p) => (
                        <li
                            className={ph.name === p.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => setPh(p)}
                            key={p.name.toString()}>
                                {p.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const generateKnowledgeElementInfo = (eType: string) => {
        return (
            <div>
                <p>{eType === "book" ? "Книги" : eType === "term" ? "Термины" : "Направления"}</p>
                <ul className={styles["list-group"]}>
                    {ph.info.filter((k) => (
                        k.type === eType
                    )).map((k) => (
                        <li
                            className={ke.name === k.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => setKe(k)}
                            key={k.name.toString()}>
                                {k.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <>
        <h1 className={styles["ui"]}>Философы</h1>
        <button type="submit" onClick={
            () => {
                if (selectedSort == imgSortDate) {
                    sortPhilosophers("date");
                    setSelectedSort(imgSortAz);
                } else {
                    sortPhilosophers("alphabet");
                    setSelectedSort(imgSortDate);
                }
            }
        }>
            <img src={selectedSort} alt="buttonpng" />
        </button>
        <div className={styles["ui-grid"]}>

            <main className={styles["main-container"]}>
                {generatePhListContainer("Античность")}
                {generatePhListContainer("Средние века")}
                {generatePhListContainer("Современность")}              
            </main>

            <aside className={styles["sidebar-container"]}>
                {
                    ph.name === ""
                    ? <p>Выберите философа, чтобы отобразить о нём информацию</p>
                    : <>
                        <p>Имя: {ph.name}</p>
                        <p>Годы жизни: {ph.birth_year < 0 ? (-ph.birth_year + " до н. э.") : ph.birth_year} - {ph.death_year < 0 ? (-ph.death_year + " до н. э.") : ph.death_year}</p>
                        <p>Период: {ph.period}</p>
                    </>
                }
                <div className={styles["info-container"]}>
                    {generateKnowledgeElementInfo("book")}
                    {generateKnowledgeElementInfo("term")}
                    {generateKnowledgeElementInfo("school")}
                </div>
                {
                    ke.name === ""
                    ? <p>Выберите элемент (направление, труд или термин), чтобы отобразить информацию</p>
                    : <>
                        <p>{ke.name}</p>
                        <p>{ke.description}</p>
                        <p>Узнать подробнее: <a href={ke.wikilink}>Wikipedia</a></p>
                    </>
                }
            </aside>
            
        </div>
        <p className={styles["ui"]}>
            Сделано в React TS: https://react.dev/
        </p>
        </>
    );
}

export default ListGroup;