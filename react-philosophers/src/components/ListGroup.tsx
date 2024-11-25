import { useEffect, useState } from "react";
import styles from "./ListGroup.module.css";

interface PhilosopherInfo {
    name: string,
    birth_year: number,
    death_year: number,
    period: string,
    book: string[]
}

function ListGroup() {
    // Список из всех философов с информацией
    let philosophers: PhilosopherInfo[] = [
        {
            name: "Платон",
            period: "Античность",
            book: ["Теэтет"],
            birth_year: -428,
            death_year: -348
        },
        {
            name: "Аристотель",
            period: "Античность",
            book: ["Метафизика"],
            birth_year: -384,
            death_year: -322
        },
        {
            name: "Бэкон",
            period: "Средние века",
            book: ["Новый Органон"],
            birth_year: 1561,
            death_year: 1626
        },
    ]

    // Хранение текущего (выбранного) философа
    const [ph, setPh] = useState<PhilosopherInfo>({
        name: "",
        period: "",
        book: [],
        birth_year: 0,
        death_year: 0
    });

    // Хранение отсортированного списка философов
    let [sortedPhilosophers, setSortedPhilosophers] = useState<PhilosopherInfo[]>([]);

    const sortPhilosophers = (type: string) => {
        if (type === "alphabet") {
            setSortedPhilosophers(philosophers.sort((a, b) => a.name.localeCompare(b.name)));
        } else if (type === "year") {
            setSortedPhilosophers(philosophers.sort((a, b) => a.birth_year - b.birth_year));
        }
    };

    return (
        <>
            <h1>Философы</h1>

            <div className={styles["grid-container"]}>
                <div className={styles["grid-item-wide-header"]}>Информация о философе</div>
                <div className={styles["grid-item-small-header"]}>Античность</div>
                <div className={styles["grid-item-small-header"]}>Средние века</div>
                <div className={styles["grid-item-small-header"]}>Современность</div>

                <div className={styles["grid-item-wide"]}>{
                    ph.name === ""
                    ? <p>Выберите философа, чтобы отобразить о нём информацию</p>
                    : <>
                        <p>Имя: {ph.name}</p>
                        <p>Годы жизни: {ph.birth_year < 0 ? (-ph.birth_year + " до н. э.") : ph.birth_year} - {ph.death_year < 0 ? (-ph.death_year + " до н. э.") : ph.death_year}</p>
                        <p>Период: {ph.period}</p>
                      </>
                }</div>
                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {sortedPhilosophers.filter((p) => (
                            p.period === "Античность"
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

                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {sortedPhilosophers.filter((p) => (
                            p.period === "Средние века"
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

                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {sortedPhilosophers.filter((p) => (
                            p.period === "Современность"
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

                <div className={styles["grid-item-small-header"]}>Термины</div>
                <div className={styles["grid-item-small-header"]}>Направления</div>
                <div className={styles["grid-item-small-header"]}>Книги</div>
                <div className={styles["grid-item-wide"]}>
                    Отсортировать философов в каждом периоде:
                    <br/>
                    <select onChange={
                        (e) => sortPhilosophers(e.target.value)
                    }>
                        <option value="alphabet" selected>По алфавиту</option>
                        <option value="year">По году рождения</option>
                    </select>
                </div>

                <div className={styles["grid-item-small"]}></div>
                <div className={styles["grid-item-small"]}></div>
                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {ph.book.map((b) => (
                            <li
                                className={styles["list-group-item"]}
                                key={b.toString()}>
                                    {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ListGroup;