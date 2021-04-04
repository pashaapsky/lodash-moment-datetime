import React from "react";
import moment from "moment";
import "moment/locale/ru";
import lodash from "lodash";
import {dateToFromNowDaily} from "./helpers/dateToFromNowDaily";

function App() {
    const data = [
        {
            id: 5,
            name: "test5",
            date: moment("2021-04-01 14:35:00").format("YYYY-MM-DD HH:mm:ss")
        },
        {
            id: 4,
            name: "test4",
            date: moment("2021-04-03 14:34:00").format("YYYY-MM-DD HH:mm:ss")
        },
        {
            id: 1,
            name: "test1",
            date: moment("2021-04-04 14:31:00").format("YYYY-MM-DD HH:mm:ss")
        },
        {
            id: 3,
            name: "test3",
            date: moment("2021-04-04 14:33:00").format("YYYY-MM-DD HH:mm:ss")
        },
        {
            id: 2,
            name: "test2",
            date: moment("2021-04-05 14:32:00").format("YYYY-MM-DD HH:mm:ss")
        },
        {
            id: 7,
            name: "test7",
            date: moment("2020-04-05 14:32:00").format("YYYY-MM-DD HH:mm:ss")
        },
    ];

    if (process.env.NODE_ENV === "development") {
        console.log("data: ", data);
    }

    let dataSortedByDate = lodash.orderBy(data, ['date'], ['desc']);

    if (process.env.NODE_ENV === "development") {
        console.log("dataSortedByDate: ", dataSortedByDate);
    }

    const dataGroupByDate = lodash.groupBy(dataSortedByDate, (item) => {
        return moment(item.date).format("YYYY-MM-DD")
    });

    if (process.env.NODE_ENV === "development") {
        console.log("dataGroupByDate: ", dataGroupByDate);
    }

    return (
        <div>
            {Object.keys(dataGroupByDate).map((item, index) => (
                <div key={index}>
                    <h2>Дата: {dateToFromNowDaily(item)}</h2>

                    {dataGroupByDate[item].map(option => (
                        <div key={option.id}>
                            <div>{option.id}</div>
                            <div>{option.name}</div>
                            <div>{option.date}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
