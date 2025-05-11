import { useState } from "react";
import styles from "./Combine.module.css";

import { PhilosopherInfo } from "../components/interfaces.tsx";

import philosophers from "../components/philosopherList.tsx";
import { Link } from "react-router-dom";

function Combine() {
    // Хранение выбранной пары философов для отображения общих элементов знания 
    const [firstPhilosopher, setFirstPhilosopher] = useState<string>("");
    const [secondPhilosopher, setSecondPhilosopher] = useState<string>("");
    const [commonKE, setCommonKE] = useState<string[]>();

    const updatePair = (n : string) => {
        setSecondPhilosopher(firstPhilosopher);
        setFirstPhilosopher(n);
        for (var c of philosophers) {
            if (c.name == n) {
                for (var i of c.info) {
                    console.log(i.name)
                }
            }
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
                            className={p.name === firstPhilosopher || p.name === secondPhilosopher ? styles["list-group-item-active"] : styles["list-group-item"]}
                            onClick={() => {
                                updatePair(p.name);
                            }
                            }>
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
                    firstPhilosopher === "" || secondPhilosopher == ""
                    ? <p>Выберите двоих философов для поиска общих элементов знания</p>
                    : <>
                    <div style={{ display: 'flex', textAlign: 'center', padding: '1rem', margin: '1rem', border: '1px solid lightblue', fontWeight: 'bold' }}>
                        <p style={{ flex: '2 1 0' }}>{firstPhilosopher}</p>
                        <p style={{ flex: '1 1 0' }}>+</p>
                        <p style={{ flex: '2 1 0' }}>{secondPhilosopher}</p>
                    </div>
                    </>
                }
            </aside>
        </div>
        </>
    );
}

export default Combine;
