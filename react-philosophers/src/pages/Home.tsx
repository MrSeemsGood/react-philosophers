import { useState } from "react";
import styles from "./Home.module.css";

import { KnowledgeElement, PhilosopherInfo } from "../components/data/interfaces.tsx";

import philosophers from "../components/data/philosopherList.tsx";
import { Link } from "react-router-dom";

function Home() {
    // Хранение текущего (выбранного) философа
    const [ph, setPh] = useState<PhilosopherInfo>({
        name: "",
        period: "",
        info: [],
        birth_year: 0,
        death_year: 0
    });
    
    // Хранение отсортированного списка философов
    let [sortedPhilosophers, setSortedPhilosophers] = useState<PhilosopherInfo[]>(philosophers);

    // Хранение текущего (выбранного) элемента
    const [ke, setKe] = useState<KnowledgeElement>({
        type: "",
        name: "",
        description: "",
        wikilink: ""
    });

    // Хранение способа сортировки
    const imgSortAz = "/src/assets/alphabet.png";
    const imgSortDate = "/src/assets/date.png";
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
                <p style={{ textAlign: 'center', margin: '1rem', fontWeight: 'bold' }}>{period}</p>
                <ul className={styles["list-group"]}>
                    {sortedPhilosophers.filter((p) => (
                        p.period === period
                    )).map((p) => (
                        <li
                            className={ph.name === p.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => setPh(p)}>
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
                <p style={{ textAlign: 'center', margin: '1rem', fontWeight: 'bold' }}>
                    {eType === "book" ? "Труды" : eType === "term" ? "Термины" : "Направления"}
                </p>
                <ul className={styles["list-group"]}>
                    {ph.info.filter((k) => (
                        k.type === eType
                    )).map((k) => (
                        <li
                            className={ke.name === k.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => setKe(k)}>
                                {k.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <>
        <div className={styles["ui-grid"]}>
            <header className={styles["header-container"]}>
                <p>
                    Философы
                </p>
                <nav style={{ display: 'flex', padding: '5px', placeItems: 'center' }}>
                    <Link to={"/"} style={{ padding: '5px'}}>Главная</Link>
                    <Link to={"/Combine"} style={{ padding: '5px' }}>Комбинирование</Link>
                </nav>
                <div style={{ display: 'flex', padding: '5px', placeItems: 'center' }}>
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
                        <img style={{ height: '1.5em' }} src={selectedSort} alt="buttonpng" />
                    </button>
                    <p style={{ margin: '0px 0px 0px 5px' }}>Сортировка</p>
                </div>
                <p>
                    Сделано в React TS: https://react.dev/
                </p>
            </header>

            <main className={styles["main-container"]}>
                {generatePhListContainer("Античность")}
                {generatePhListContainer("Средние века")}
                {generatePhListContainer("Современность")}              
            </main>

            <aside className={styles["sidebar-container"]}>
                <p style={{ textAlign: 'center', margin: '1rem', fontWeight: 'bold' }}>
                    Информация о философе
                </p>
                {
                    ph.name === ""
                    ? <p>Выберите философа для отображения информации и элементов знания</p>
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
                    ? <p>Выберите элемент знания (направление, труд или термин) для отображения информации</p>
                    : <>
                        <p style={{margin: '1rem 0rem', fontStyle: 'italic' }}>
                            {ke.name}
                        </p>
                        <p>
                            {ke.description}
                        </p>
                        <p>
                            Узнать подробнее: <a href={ke.wikilink}>Wikipedia</a>
                        </p>
                    </>
                }
            </aside>
        </div>
        </>
    );
}

export default Home;
