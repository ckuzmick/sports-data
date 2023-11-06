#!/usr/bin/env node

const fs = require('fs');
const Papa = require('papaparse');
const _ = require('lodash');

function normalizeTeams(path, pathOutput) {
    const csv = fs.readFileSync(path, "utf8");
    const data = Papa.parse(csv, { header: true }).data;

    const normalizedData = _.mergeWith(data, (row) => {
        const data = 
        _.replace(data, 'Los Angeles Lakers', 'Los Angeles')
        _.replace(data, 'Los Angeles Clippers', 'Los Angeles')
        _.replace(data, 'Boston Celtics', 'Boston')
        _.replace(data, 'Minnesota Timberwolves', 'Minnesota')
        _.replace(data, 'New York Knicks', 'New York')
        _.replace(data, 'New York Nets', 'New York')
        _.replace(data, 'Golden State Warriors', 'San Francisco')
        _.replace(data, 'Miami Heat', 'Miami')
        _.replace(data, 'Boston Celtics', 'Boston')
        _.replace(data, 'Boston Celtics', 'Boston')
        _.replace(data, 'Boston Celtics', 'Boston')
        _.replace(data, 'Boston Celtics', 'Boston')
    });

    const normalizedCSV = Papa.unparse(normalizedData);
    fs.writeFileSync(pathOutput, normalizedCSV);
    console.log(`${path1} and ${path2} merged into ${pathOutput} based on column ${key}`);
}

if (process.argv.length !== 6) {
    console.log("Usage: node merge_csv.js key file1.csv file2.csv output.csv");
    process.exit(1);
}