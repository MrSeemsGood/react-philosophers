import { useState } from "react";
import styles from "./ListGroup.module.css";

interface PhilosopherInfo {
    name: string,
    period: string,
    book: string[]
}

function ListGroup() {
    let philosophers: PhilosopherInfo[] = [
        {name: "Платон", period: "Античность", book: ["Теэтет"]},
        {name: "Аристотель", period: "Античность", book: ["Метафизика"]},
        {name: "Бэкон", period: "Средние века", book: ["Новый Органон"]},
    ]
    const [philosopherName, setPhilosopherName] = useState("");

    return (
        <>
            <h1>Философы</h1>

            <div className={styles["grid-container"]}>
                <div className={styles["grid-item-wide-header"]}>Информация о философе</div>
                <div className={styles["grid-item-small-header"]}>Античность</div>
                <div className={styles["grid-item-small-header"]}>Средние века</div>
                <div className={styles["grid-item-small-header"]}>Современность</div>

                <div className={styles["grid-item-wide"]}>{
                    philosopherName === "" 
                    ? <p>Выберите философа, чтобы отобразить о нём информацию</p>
                    : <>
                        <p>Имя: {philosopherName}</p>
                        <p>Период: {philosophers.filter((p) => p.name === philosopherName)[0].period}</p>
                      </>
                }</div>
                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {philosophers.filter((p) => (
                            p.period === "Античность"
                        )).map((p) => (
                            <li
                                className={philosopherName === p.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                                onClick={() => setPhilosopherName(p.name)}
                                key={p.name.toString()}>
                                    {p.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {philosophers.filter((p) => (
                            p.period === "Средние века"
                        )).map((p) => (
                            <li
                                className={philosopherName === p.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                                onClick={() => setPhilosopherName(p.name)}
                                key={p.name.toString()}>
                                    {p.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {philosophers.filter((p) => (
                            p.period === "Современность"
                        )).map((p) => (
                            <li
                                className={philosopherName === p.name ? styles["list-group-item-active"] : styles["list-group-item"]}
                                onClick={() => setPhilosopherName(p.name)}
                                key={p.name.toString()}>
                                    {p.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles["grid-item-small-header"]}>Термины</div>
                <div className={styles["grid-item-small-header"]}>Направления</div>
                <div className={styles["grid-item-small-header"]}>Книги</div>
                <div className={styles["grid-item-wide"]}></div>

                <div className={styles["grid-item-small"]}></div>
                <div className={styles["grid-item-small"]}></div>
                <div className={styles["grid-item-small"]}>
                    <ul className={styles["list-group"]}>
                        {philosophers.filter((p) => (
                            p.name === philosopherName
                        )).map((p) => (
                            <li
                                className={styles["list-group-item"]}
                                key={p.book.toString()}>
                                    {p.book}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ListGroup;