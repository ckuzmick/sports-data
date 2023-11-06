#!/usr/bin/env node

const fs = require('fs');
const Papa = require('papaparse');
const _ = require('lodash');

const teams = [
    {
        "start": "Boston Celtics",
        "end": "Boston"
    }
]

function normalizeTeams(path, pathOutput) {
    const csv = fs.readFileSync(path, "utf8");
    const data = Papa.parse(csv, { header: true }).data;

    const normalizedData = _.map(data, (row) => {
        for (let i = 0; i < teams.length; i++) {
            _.replace(data, teams, 'stuff')
            return data
        };
        return data
    });

    const normalizedCSV = Papa.unparse(normalizedData);
    fs.writeFileSync(pathOutput, normalizedCSV);
    console.log(`${path1} and ${path2} merged into ${pathOutput} based on column ${key}`);
}

if (process.argv.length !== 6) {
    console.log("Usage: node merge_csv.js key file1.csv file2.csv output.csv");
    process.exit(1);
}