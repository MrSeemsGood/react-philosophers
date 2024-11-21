import { useState } from "react";
import "./ListGroup.module.css";

interface PhilosopherInfo {
    id: number;
    name: string,
    book: string
}

function ListGroup() {
    let philosophers: PhilosopherInfo[] = [
        {id: 0, name: "Платон", book: "Теэтет"},
        {id: 1, name: "Аристотель", book: "Метафизика"},
        {id: 2, name: "Бэкон", book: "Новый Органон"},
    ]
    const [phisolopherIndex, setPhisolopherIndex] = useState(-1);

    return (
        <>
            <h1>Философы</h1>
            <ul className="list-group">
                {philosophers.map((p) => (
                    <li
                        // todo Временное решение, стиль должен разрешаться через className и CSS
                        style={phisolopherIndex === p.id ? {color: "violet"} : {color: "lightblue"}}
                        className={phisolopherIndex === p.id ? "list-group-item-active" : "list-group-item"}
                        onClick={() => setPhisolopherIndex(p.id)}
                        key={p.name.toString()}>
                            {p.name}
                    </li>
                ))}
            </ul>

            <h2>Информация о философе</h2>
            <p>Книга: {phisolopherIndex === -1 ? "" : philosophers[phisolopherIndex].book}</p>
        </>
    );
}

export default ListGroup;