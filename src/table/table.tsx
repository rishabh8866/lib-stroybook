import React, {useState, useEffect} from "react";
import classNames from "classnames";
import * as _ from "lodash"

import { ModalProps } from "./table.types";

import "./table.scss";
import TextBox from "../textbox";

const Table: React.FC<ModalProps> = ({ rowData, colummns, className, perPage, search }) => {
    const [rows, setRows] = useState([])
    const [sort, setSort] = useState({field: '', direction: ''})
    const [page, setPage] = useState(0)
    const [data, setData] = useState(rowData)
    const [perPageState, setPerPage] = useState(perPage)
    const derivedClasses = classNames("table", className)
    const numberOfPage = perPage ? Math.ceil(rowData.length/perPage) : 0;
    const arrayofNumberOfPage = Array.from(Array(numberOfPage).keys())

    useEffect(() => {
        if (sort.field) {
            let newRows = [...data];
            newRows = _.orderBy(newRows, [sort.field], [sort.direction === 'asc' ? 'desc' : 'asc'])
            setData(newRows);
            const tempData = [...newRows]
            var result = [];
            if (perPage || perPageState) {
                while (newRows.length) {
                    result.push(tempData.splice(0, perPage || perPageState))
                }
                setRows(result[0])
                setPage(0)
            } else {
                setRows(tempData)
            }
        }
    }, [sort.field, sort.direction])

    const perPageData = (pageNumber = undefined) => {
        var result = [];
        const tempData = [...data];
        while (tempData.length) {
            result.push(tempData.splice(0, perPage || perPageState))
        }
        setRows(result[pageNumber === undefined ? page : pageNumber])
        pageNumber === undefined ? null : setPage(pageNumber)
    }
    
    useEffect(() => {
        if (!numberOfPage) {
            setRows(rowData)
        } else {
            perPageData();
        }
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value;
        const tempData = [...data];
        let filterData = [];
        if (!value) {
            filterData = tempData
        } else {
            filterData = tempData.filter(obj => Object.values(obj).some(val => val.toString().toLowerCase().includes(value.toLowerCase())))    
        }
        setRows(filterData);
        setPage(0);
    }   
    return (
        <div >
            {search && <TextBox className="mb-2" textBoxsize="sm" placeholder="Search" icon="search" onChange={handleSearch}/>}
            <table className={derivedClasses}  data-testid={"table"}>
                <thead>
                    <tr>
                        {colummns && colummns.map(c => <th scope="col" className="table-header" onClick={() => {
                                c.sort && setSort({field: c.key, direction: sort.direction === 'asc' ? 'desc' : 'asc'})
                            }}>{c.headerValue}
                            {c.sort && <span className={`table-header-sort__${ sort.field === c.key ? sort.direction === 'asc' ? 'up' : 'down' : ''}`} ></span>}
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows && rows.map(r => <tr className={r.className}>
                        {colummns && colummns.map(c => {
                            return <td scope="col" >{r[c.key]}</td>
                        })}
                    </tr>)}
                </tbody>
            </table>
            {perPage && <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"  onClick={() => {page === 0 ? null : perPageData(page - 1)}}>
                        <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {arrayofNumberOfPage && arrayofNumberOfPage.map(n =>
                         <li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={() => {perPageData(n)}} > {n+1}</a></li>)}
                    <li className="page-item"  onClick={() => {page === (numberOfPage - 1) ? null : perPageData(page + 1)}}>
                        <a className="page-link" href="javascript:void(0)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>}
        </div>
    )
}

export default Table;
