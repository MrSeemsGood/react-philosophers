import { useState } from "react";
import styles from "./Combine.module.css";

import { PhilosopherInfo } from "../components/data/interfaces.tsx";

import philosophers from "../components/data/philosopherList.tsx";
import { Link } from "react-router-dom";

function Combine() {
    const [one, setOne] = useState<string>("");
    const [two, setTwo] = useState<string>("");

    const updatePair = (n : string) => {
        if (one === "") {
            setOne(n);
        } else {
            setTwo(one);
            setOne(n);
        }
    }
    
    // Хранение отсортированного списка философов
    let [sortedPhilosophers, setSortedPhilosophers] = useState<PhilosopherInfo[]>(philosophers);

    // Хранение способа сортировки
    const imgSortAz = "/src/assets/alphabet.png";
    const imgSortDate = "/src/assets/date.png";
    const [selectedSort, setSelectedSort] = useState<string>(imgSortAz);

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
                            className={p.name === one || p.name === two ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => updatePair(p.name)}>
                                {p.name}
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
                    Комбинирование
                </p>
                {
                    one === "" || two == ""
                    ? <p>Выберите двоих философов для поиска общих элементов знания</p>
                    : <>
                    <div style={{ display: 'flex', textAlign: 'center', padding: '1rem', margin: '1rem', border: '1px solid lightblue', fontWeight: 'bold' }}>
                        <p style={{ flex: '2 1 0' }}>{one}</p>
                        <p style={{ flex: '1 1 0' }}>+</p>
                        <p style={{ flex: '2 1 0' }}>{two}</p>
                    </div>
                    </>
                }
            </aside>
        </div>
        </>
    );
}

export default Combine;
