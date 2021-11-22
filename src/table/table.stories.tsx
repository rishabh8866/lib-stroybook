import React, { useState } from "react";
import Code from "../Code/Code";
import Table from "./table";

export default {
    title: "Table"
};

const rows = [
    { id: "1", name: "Jon" },
    { id: "2", name: "Steve", className: "table-primary" },
]

const rows_1 = [
    { id: "1", name: "Jon" },
    { id: "2", name: "Steve" },
    { id: "3", name: "John" },
]

const cols = [
    { key: "id", headerValue: "Id", sort: true },
    { key: "name", headerValue: "IdName" },
]


export const Tables = () => {
    return (
        <div>
            <Code width="w-100" code={'<Table rowData={rows} colummns={cols}/>'}>
                <Table rowData={rows} colummns={cols} />
            </Code>
            <Code width="w-100" code={'<Table rowData={rows_1} colummns={cols} className="table-success"/>'}>
                <Table rowData={rows_1} colummns={cols} className="table-success" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-striped"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-striped" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-hover"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-hover" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-striped table-dark"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-striped table-dark" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-bordered border-primary"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-bordered border-primary" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-borderless"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-borderless" />
            </Code>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-dark table-sm"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-dark table-sm" />
            </Code>
            <Code width="w-100" code={`Trello-X | Commit Comment`}>
                <Table rowData={rows_1} colummns={cols} perPage={2} />
            </Code>

        </div>
    )
}

export const TableStriped = () => {
    return (
        <div>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} className="table-striped"/>`}>
                <Table rowData={rows_1} colummns={cols} className="table-striped" />
            </Code>
        </div>
    )
}

export const TablePagination = () => {
    return (
        <div>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} perPage={2} search={true}/>`}>
                <Table rowData={rows_1} colummns={cols} perPage={2} search={true} />
            </Code>

        </div>
    )
}


export const TableBorder = () => {
    return (
        <div>
            <Code width="w-100" code={`<Table rowData={rows_1} colummns={cols} perPage={2} search={true} className="table-bordered border-primary"/>`}>
                <Table rowData={rows_1} colummns={cols} perPage={2} search={true} className="table-bordered border-primary" />
            </Code>
        </div>

    )
}